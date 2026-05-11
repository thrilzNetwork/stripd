import { Suspense } from "react";
import BlogPostClient from "./post-client";

export default function BlogPostPage() {
  return (
    <Suspense fallback={<div className="min-h-dvh bg-black" />}>
      <BlogPostClient />
    </Suspense>
  );
}
