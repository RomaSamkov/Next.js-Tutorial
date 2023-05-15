import Link from "next/link";
import React from "react";

export default function About() {
  return (
    <>
      <h1>About</h1>
      <Link href="/" className="hover:bg-green-700 rounded-md">
        Link to Home Page
      </Link>
    </>
  );
}
