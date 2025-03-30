import { Dancing_Script } from "next/font/google";
const dancingScript = Dancing_Script({
  weight: "400",
  subsets: ["latin"],
});

interface NameListProps {
  names: string[];
  title: string;
}

export default function NameList({ names, title }: NameListProps) {
  return (
    <div className={`${dancingScript.className} mx-auto w-full max-w-2xl`}>
      <h2 className="mb-6 text-center text-5xl font-semibold text-gray-800 dark:text-white">
        {title}
      </h2>
      <ul className="grid grid-cols-1 gap-2 md:grid-cols-2">
        {names.map((name, index) => (
          <li
            key={index}
            className="mx-16 rounded-lg bg-gray-800 p-2 text-center text-2xl text-gray-100 shadow-sm transition-shadow duration-100 hover:shadow-md sm:mx-0 sm:p-4 sm:text-3xl"
          >
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
}
