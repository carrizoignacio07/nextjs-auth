import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Learn more about our company",
};
export default async function Dashboard() {
  return (
    <>
      <h1 className="m-5 text-center text-3xl font-bold">
        Welcome to the Dashboard Page
      </h1>
    </>
  );
}
