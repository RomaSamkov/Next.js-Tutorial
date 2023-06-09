import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello World !!!</h1>
      <Link href="/about" className="hover:bg-yellow-700 rounded-md">
        Go to About Page
      </Link>
      <Link href="/users" className="hover:bg-yellow-700 rounded-md">
        Go to Users
      </Link>
    </main>
  );
}
