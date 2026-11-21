import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="p-4 flex items-center justify-between gap-5">
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/auth/login">LoginPage</Link>
      <Link href="/auth/register">RegisterPage</Link>
    </nav>
  );
}
