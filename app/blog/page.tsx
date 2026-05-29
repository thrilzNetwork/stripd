import { Suspense } from "react";
import BlogRouter from "./blog-router";

export default function BlogPage() {
  return (
    <Suspense fallback={<div className="min-h-dvh bg-black" />}>
      <BlogRouter />
    </Suspense>
  );
}
