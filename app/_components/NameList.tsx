import React from "react";

interface NameListProps {
  names: string[];
  title: string;
}

export default function NameList({ names, title }: NameListProps) {
  return (
    <div className="mx-auto w-full max-w-2xl">
      <h2 className="mb-6 text-center text-2xl font-semibold text-gray-800 dark:text-white">
        {title}
      </h2>
      <ul className="grid grid-cols-1 gap-2 md:grid-cols-2">
        {names.map((name, index) => (
          <li
            key={index}
            className="mx-24 rounded-lg bg-gray-100 p-2 text-center text-sm text-gray-800 shadow-sm transition-shadow duration-100 hover:shadow-md dark:bg-gray-800 dark:text-gray-100 sm:mx-0 sm:p-4 sm:text-lg"
          >
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
}
