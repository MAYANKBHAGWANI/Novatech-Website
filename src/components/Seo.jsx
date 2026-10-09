import { useEffect } from "react";

// Updates the browser tab title and meta description for each page (basic SEO).
export default function Seo({ title, description }) {
  useEffect(() => {
    document.title = `${title} | NovaTech Solutions`;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", description);
  }, [title, description]);

  return null; // This component shows nothing on screen
}
