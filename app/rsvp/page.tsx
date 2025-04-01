import Link from "next/link";
import PageTitle from "../_components/PageTitle";
import { Delius_Swash_Caps } from "next/font/google";

const deliusSwashCaps = Delius_Swash_Caps({
  weight: "400",
  subsets: ["latin"],
});

export default function Page() {
  return (
    <main className="relative flex min-h-screen flex-col bg-white px-4 py-24 dark:bg-gray-700">
      <div className="relative mx-auto w-full max-w-4xl">
        <PageTitle title="RSVP" />
        <p
          className={`${deliusSwashCaps.className} mb-6 text-center text-lg text-gray-600 dark:text-gray-300`}
        >
          Please fill out the form below to RSVP for the event. This will
          confirm your attendance.
        </p>
        <div className="flex justify-center">
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSczaX5I4F6u1lDkNvtDNbht9255HTTi8gsNz_97cy1FD8HK_Q/viewform"
            target="_blank"
            className="inline-block rounded bg-gray-900 px-6 py-3 font-semibold text-white transition hover:bg-gray-800"
          >
            RSVP Link
          </Link>
        </div>
      </div>
    </main>
  );
}
