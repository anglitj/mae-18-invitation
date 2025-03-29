import { Spinner } from "flowbite-react";
import React from "react";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center gap-3 px-4 py-24">
      <Spinner className="mx-auto" size="lg" />
      <p className="text-gray-700 dark:text-white">Loading...</p>
    </div>
  );
}
