import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <main className="mt-4 space-y-6 px-4 py-32 text-center ">
      <h1 className="text-xl font-semibold dark:text-gray-100 sm:text-3xl">
        This page could not be found :(
      </h1>
      <Link
        href="/"
        className="inline-block rounded-md bg-gray-700 px-6 py-3 text-sm text-gray-100"
      >
        Go back home
      </Link>
    </main>
  );
}
