import { Imperial_Script } from "next/font/google";
import { FaFeatherAlt } from "react-icons/fa";
import { IoEllipse } from "react-icons/io5";

const imperialScript = Imperial_Script({
  weight: "400",
  subsets: ["latin"],
});

interface PageTitleProps {
  title: string;
  showEclipse?: boolean;
}

export default function PageTitle({
  title,
  showEclipse = true,
}: PageTitleProps) {
  return (
    <div className="relative mb-12">
      {showEclipse && (
        <>
          <IoEllipse className="absolute -left-8 -top-8 size-12 text-gray-200 dark:text-gray-600" />
          <FaFeatherAlt className="absolute -left-12 -top-4 size-6 rotate-45 text-gray-300 dark:text-gray-500" />
        </>
      )}
      <h1
        className={`${imperialScript.className} relative flex items-center justify-center gap-3 text-5xl text-gray-800 dark:text-white`}
      >
        <FaFeatherAlt className="size-8" />
        {title}
        <FaFeatherAlt className="size-8" />
      </h1>
      {showEclipse && (
        <>
          <IoEllipse className="absolute -bottom-8 -right-8 size-12 text-gray-200 dark:text-gray-600" />
          <FaFeatherAlt className="absolute -bottom-4 -right-12 size-6 -rotate-45 text-gray-300 dark:text-gray-500" />
        </>
      )}
    </div>
  );
}
