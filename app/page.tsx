import Link from "next/link";
import { Imperial_Script, Rouge_Script, Tangerine } from "next/font/google";
import Image from "next/image";

const imperialScript = Imperial_Script({
  weight: "400",
  subsets: ["latin"],
});

const tangerine = Tangerine({
  weight: "400",
  subsets: ["latin"],
});

const rougeScript = Rouge_Script({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col bg-white px-4 py-24 dark:bg-gray-700">
      <div className="relative mx-auto w-full max-w-[800px]">
        {/* Background Image */}
        <Image
          src="/hero.svg"
          alt="Lady and a black swan"
          width={800}
          height={600}
          className="mx-auto w-full object-cover object-top opacity-50 dark:text-gray-400"
          priority
        />

        {/* Text */}

        {/* <div className="absolute inset-0 grid h-full grid-rows-[35px_2fr_1fr_10rem] items-center justify-center gap-2"> */}
        <div className="absolute inset-0 grid h-full grid-rows-[1fr_1.5fr_1fr_1fr] items-center justify-center">
          {/* Title */}
          <h3
            className={`${rougeScript.className} text-center text-2xl italic text-gray-800 dark:text-white lg:text-4xl`}
          >
            In the shadow and light of the Swan Eclipse, join us to celebrate
            our debutant&apos;s luminous emergence.
          </h3>

          {/* Name Center */}
          <div
            className={`${imperialScript.className} flex flex-col items-center justify-center py-8 dark:text-white`}
          >
            <p className="-ml-20 text-9xl font-light">Mae</p>
            <p className="text-4xl font-semibold">at</p>
            <p className="ml-20 text-8xl font-light">18</p>
          </div>

          {/* Date and Time */}
          <div className="flex flex-row items-center justify-center gap-4 font-semibold text-gray-900 dark:text-white md:text-lg lg:text-2xl">
            <p>April 20, 2025</p>
            <p>|</p>
            <p>5 PM</p>
          </div>

          {/* Location */}
          <div className="cursor-pointer py-8 text-center font-semibold text-gray-800  hover:text-gray-800 dark:text-gray-50 dark:hover:text-gray-300 md:text-lg lg:text-2xl">
            <Link
              href="https://www.google.com/maps/dir//Santa+Ana+rd,+Santo+Tomas,+Batangas/@14.0668232,121.1086801,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x33bd695dd883bd7f:0xca8ddd043881fa5e!2m2!1d121.1910819!2d14.0668372?entry=ttu&g_ep=EgoyMDI1MDMyNC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
            >
              <p className={`${tangerine.className} text-5xl font-semibold`}>
                Jhoenie&apos;s Island Resort
              </p>
              <p className="capitalize">Santa Ana Rd., Sto. Tomas, Batangas</p>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
