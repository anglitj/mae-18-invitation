import { Dancing_Script } from "next/font/google";
import { GiFeather } from "react-icons/gi";
import { IoEllipse } from "react-icons/io5";
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
      <ul className="grid grid-cols-1 gap-2 md:grid-cols-2">
        {names.map((name, index) => (
          <li
            key={index}
            className="mx-12 flex items-center justify-between rounded-lg bg-gray-800 p-2 px-4 text-center text-2xl text-gray-100 shadow-sm transition-shadow duration-100 hover:shadow-md sm:mx-0 sm:p-4 sm:text-3xl"
          >
            <IoEllipse className="size-6 text-gray-800 dark:text-gray-200" />
            {name}
            <GiFeather className="size-6 text-gray-200 dark:text-gray-800" />
          </li>
        ))}
      </ul>
    </div>
  );
}
