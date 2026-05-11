import { products, categories } from "@/lib/products";
import HomeClient from "./home-client";

export default function HomePage() {
  return <HomeClient products={products} categories={categories} />;
}
