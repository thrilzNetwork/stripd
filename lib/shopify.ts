const SHOPIFY_DOMAIN = process.env.NEXT_PUBLIC_SHOPIFY_DOMAIN || "0gn1c6-1b.myshopify.com";
const STOREFRONT_TOKEN = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN || "";

const API_URL = `https://${SHOPIFY_DOMAIN}/api/2025-01/graphql.json`;

async function fetchShopify(query: string, variables?: Record<string, unknown>) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": STOREFRONT_TOKEN,
    },
    body: JSON.stringify({ query, variables }),
    next: { revalidate: 60 },
  });
  if (!res.ok) throw new Error(`Shopify error ${res.status}`);
  const json = await res.json();
  if (json.errors) throw new Error(json.errors[0].message);
  return json.data;
}

export interface ShopifyImage {
  url: string;
  altText?: string;
}

export interface ShopifyProduct {
  id: string;
  handle: string;
  title: string;
  description: string;
  tags: string[];
  variants: {
    nodes: {
      id: string;
      price: { amount: string; currencyCode: string };
      sku?: string;
    }[];
  };
  images: {
    nodes: ShopifyImage[];
  };
}

export interface ShopifyCart {
  id: string;
  checkoutUrl: string;
  lines: {
    nodes: {
      id: string;
      quantity: number;
      merchandise: {
        id: string;
        title: string;
        product: {
          title: string;
          handle: string;
        };
      };
      cost: {
        totalAmount: { amount: string; currencyCode: string };
      };
    }[];
  };
  cost: {
    subtotalAmount: { amount: string; currencyCode: string };
    totalAmount: { amount: string; currencyCode: string };
  };
}

/** Get all products translated to our app's Product shape. */
export async function getShopifyProducts(): Promise<ShopifyProduct[]> {
  const data = await fetchShopify(`
    query {
      products(first: 50) {
        nodes {
          id
          handle
          title
          description
          tags
          variants(first: 1) {
            nodes {
              id
              price { amount currencyCode }
              sku
            }
          }
          images(first: 1) {
            nodes { url altText }
          }
        }
      }
    }
  `);
  return (data?.products?.nodes || []) as ShopifyProduct[];
}

/** Get a single product by its Shopify handle. */
export async function getShopifyProductByHandle(handle: string): Promise<ShopifyProduct | null> {
  const data = await fetchShopify(`
    query GetProductByHandle($handle: String!) {
      product(handle: $handle) {
        id
        handle
        title
        description
        tags
        variants(first: 1) {
          nodes {
            id
            price { amount currencyCode }
            sku
          }
        }
        images(first: 1) {
          nodes { url altText }
        }
      }
    }
  `, { handle });
  return (data?.product || null) as ShopifyProduct | null;
}

/** Create a new Shopify cart. Returns cart ID + checkout URL. */
export async function cartCreate(lines?: Array<{ merchandiseId: string; quantity: number }>): Promise<ShopifyCart> {
  const data = await fetchShopify(`
    mutation cartCreate($input: CartInput!) {
      cartCreate(input: $input) {
        cart {
          id
          checkoutUrl
          lines(first: 50) {
            nodes {
              id
              quantity
              merchandise { id title product { title handle } }
              cost { totalAmount { amount currencyCode } }
            }
          }
          cost {
            subtotalAmount { amount currencyCode }
            totalAmount { amount currencyCode }
          }
        }
      }
    }
  `, {
    input: { lines: lines || [] }
  });
  return data.cartCreate.cart as ShopifyCart;
}

/** Fetch cart by ID. */
export async function getCart(cartId: string): Promise<ShopifyCart | null> {
  const data = await fetchShopify(`
    query GetCart($id: ID!) {
      cart(id: $id) {
        id
        checkoutUrl
        lines(first: 50) {
          nodes {
            id
            quantity
            merchandise { id title product { title handle } }
            cost { totalAmount { amount currencyCode } }
          }
        }
        cost {
          subtotalAmount { amount currencyCode }
          totalAmount { amount currencyCode }
        }
      }
    }
  `, { id: cartId });
  return (data?.cart || null) as ShopifyCart | null;
}

/** Add lines to existing cart. */
export async function cartLinesAdd(cartId: string, lines: Array<{ merchandiseId: string; quantity: number }>): Promise<ShopifyCart> {
  const data = await fetchShopify(`
    mutation cartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {
      cartLinesAdd(cartId: $cartId, lines: $lines) {
        cart {
          id
          checkoutUrl
          lines(first: 50) {
            nodes {
              id
              quantity
              merchandise { id title product { title handle } }
              cost { totalAmount { amount currencyCode } }
            }
          }
          cost {
            subtotalAmount { amount currencyCode }
            totalAmount { amount currencyCode }
          }
        }
      }
    }
  `, { cartId, lines });
  return data.cartLinesAdd.cart as ShopifyCart;
}

/** Remove lines from cart. */
export async function cartLinesRemove(cartId: string, lineIds: string[]): Promise<ShopifyCart> {
  const data = await fetchShopify(`
    mutation cartLinesRemove($cartId: ID!, $lineIds: [ID!]!) {
      cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
        cart {
          id
          checkoutUrl
          lines(first: 50) {
            nodes {
              id
              quantity
              merchandise { id title product { title handle } }
              cost { totalAmount { amount currencyCode } }
            }
          }
          cost {
            subtotalAmount { amount currencyCode }
            totalAmount { amount currencyCode }
          }
        }
      }
    }
  `, { cartId, lineIds });
  return data.cartLinesRemove.cart as ShopifyCart;
}

/** Update line quantities. */
export async function cartLinesUpdate(cartId: string, lines: Array<{ id: string; quantity: number }>): Promise<ShopifyCart> {
  const data = await fetchShopify(`
    mutation cartLinesUpdate($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
      cartLinesUpdate(cartId: $cartId, lines: $lines) {
        cart {
          id
          checkoutUrl
          lines(first: 50) {
            nodes {
              id
              quantity
              merchandise { id title product { title handle } }
              cost { totalAmount { amount currencyCode } }
            }
          }
          cost {
            subtotalAmount { amount currencyCode }
            totalAmount { amount currencyCode }
          }
        }
      }
    }
  `, {
    cartId,
    lines: lines.map((l) => ({ id: l.id, quantity: l.quantity })),
  });
  return data.cartLinesUpdate.cart as ShopifyCart;
}
