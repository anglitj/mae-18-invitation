import Link from "next/link";

export default function Page() {
  return (
    <main className="relative flex min-h-screen flex-col bg-white px-4 py-24 dark:bg-gray-700">
      <div className="relative mx-auto w-full max-w-[800px]">
        <h1 className="mb-4 text-3xl font-bold dark:text-white">RSVP</h1>
        <p className="mb-6 dark:text-white">
          Please fill out the form below to RSVP for the event. This will
          confirm your attendance.
        </p>
        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLSczaX5I4F6u1lDkNvtDNbht9255HTTi8gsNz_97cy1FD8HK_Q/viewform"
          target="_blank"
          className="inline-block rounded bg-gray-900 px-4 py-2 font-semibold text-white transition hover:bg-gray-800"
        >
          RSVP Link
        </Link>
      </div>
    </main>
  );
}
