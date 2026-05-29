"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import BlogList from "./blog-client";
import BlogPostDetail from "./post-client";

export default function BlogRouter() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // Avoid SSR mismatch
  if (!mounted) {
    return <div className="min-h-dvh bg-black" />;
  }

  if (id) {
    return <BlogPostDetail postId={id} />;
  }

  return <BlogList />;
}
