import { useEffect } from "react";

type Seo = { title: string; description: string };

const SUFFIX = " | Dr. Ashish Pathak & Associates";

/** Per-page metadata, applied on route change. */
export default function useSeo({ title, description }: Seo) {
  useEffect(() => {
    document.title = `${title}${SUFFIX}`;
    let tag = document.querySelector('meta[name="description"]');
    if (!tag) {
      tag = document.createElement("meta");
      tag.setAttribute("name", "description");
      document.head.appendChild(tag);
    }
    tag.setAttribute("content", description);

    let og = document.querySelector('meta[property="og:title"]');
    og?.setAttribute("content", `${title}${SUFFIX}`);
    let ogd = document.querySelector('meta[property="og:description"]');
    ogd?.setAttribute("content", description);
  }, [title, description]);
}
