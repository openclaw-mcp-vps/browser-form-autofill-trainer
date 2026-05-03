import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Form Autofill Trainer – Train Custom Autofill for Any Website Form",
  description: "Record form-filling patterns once, then auto-fill similar forms across any website with custom data sets. Built for QA engineers and developers.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="a5f04711-580a-490f-9cde-f355a8e8a1f9"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
