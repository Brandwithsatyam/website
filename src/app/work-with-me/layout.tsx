import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work With Me",
  description: "Explore video editing packages, Reels editing rates, long-form content pricing, and monthly strategy retainers from Brand with Satyam.",
};

export default function WorkWithMeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
