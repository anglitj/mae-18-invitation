import Link from "next/link";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white px-4 py-24 dark:bg-gray-900">
      <div className="flex h-full flex-col items-center justify-center gap-20">
        <h3 className="text-center text-lg font-semibold uppercase text-gray-800 dark:text-gray-300 lg:text-2xl">
          Join us to celebrate
        </h3>
        <div className="flex flex-col items-center justify-center dark:text-gray-300">
          <h1 className="text-4xl font-bold">Mae</h1>
          <h3 className="text-4xl font-bold">at</h3>
          <h1 className="text-4xl font-bold">18</h1>
        </div>
        <div className="flex flex-row items-center justify-center gap-4 font-semibold text-gray-800 dark:text-gray-300 md:text-lg lg:text-2xl">
          <p>March 27, 2025</p>
          <p>|</p>
          <p>5 PM</p>
        </div>
        <div className="cursor-pointer text-center font-semibold uppercase text-gray-800 underline hover:text-cyan-800 dark:text-gray-100 dark:hover:text-cyan-400 md:text-lg lg:text-2xl">
          <Link
            href="https://www.google.com/maps/dir//Santa+Ana+rd,+Santo+Tomas,+Batangas/@14.0668232,121.1086801,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x33bd695dd883bd7f:0xca8ddd043881fa5e!2m2!1d121.1910819!2d14.0668372?entry=ttu&g_ep=EgoyMDI1MDMyNC4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
          >
            <p>Jhoenie&apos;s Island Resort</p>
            <p>Santa Ana Rd., Sto. Tomas, Batangas</p>
          </Link>
        </div>
      </div>
    </main>
  );
}
