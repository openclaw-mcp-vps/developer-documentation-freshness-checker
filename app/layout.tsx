import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DocFresh – Keep Docs in Sync with Code Changes",
  description: "Monitors code repositories for changes, flags outdated documentation, and suggests updates based on code diffs."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="d4ba6c12-7deb-47ca-a680-9b8157943016"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
