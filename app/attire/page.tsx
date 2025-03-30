import React from "react";
import Image from "next/image";

import menRosesSample1 from "@/public/attire/18-roses-men-1.jpg";
import menRosesSample2 from "@/public/attire/18-roses-men-2.jpg";
import allGuestMenSample1 from "@/public/attire/all-guest-men-1.jpg";
import allGuestMenSample2 from "@/public/attire/all-guest-men-2.jpg";
import allGuestMenSample3 from "@/public/attire/all-guest-men-3.jpg";
import allGuestWomenSample1 from "@/public/attire/all-guest-women-1.jpg";
import allGuestWomenSample2 from "@/public/attire/all-guest-women-2.jpg";
import allGuestWomenSample3 from "@/public/attire/all-guest-women-3.jpg";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col bg-white px-4 py-24 dark:bg-gray-900">
      <div className="container mx-auto">
        <h1 className="mb-12 text-center text-3xl font-bold text-gray-900 dark:text-white">
          Attire Requirements
        </h1>

        {/* All Guests Section */}
        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
            All Guests
          </h2>
          <div className="mb-8 rounded-lg bg-yellow-50 p-6 dark:bg-gray-800">
            <p className="text-lg text-gray-800 dark:text-gray-200">
              Required to wear an{" "}
              <span className="font-bold underline"> all white</span> outfit
              from head to toe.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Men's Samples */}
            <div>
              <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
                Men&apos;s Sample Outfits
              </h3>
              <div className="grid grid-cols-1 gap-4">
                <div className="relative h-96 w-full">
                  <Image
                    src={allGuestMenSample1}
                    alt="Men's white outfit sample 1"
                    fill
                    className="rounded-lg object-cover"
                    placeholder="blur"
                  />
                </div>
                <div className="relative h-96 w-full">
                  <Image
                    src={allGuestMenSample2}
                    alt="Men's white outfit sample 2"
                    fill
                    className="rounded-lg object-cover"
                    placeholder="blur"
                  />
                </div>
                <div className="relative h-96 w-full">
                  <Image
                    src={allGuestMenSample3}
                    alt="Men's white outfit sample 3"
                    fill
                    className="rounded-lg object-cover"
                    placeholder="blur"
                  />
                </div>
              </div>
            </div>

            {/* Women's Samples */}
            <div>
              <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
                Women&apos;s Sample Outfits
              </h3>
              <div className="grid grid-cols-1 gap-4">
                <div className="relative h-64 w-full">
                  <Image
                    src={allGuestWomenSample1}
                    alt="Women's white outfit sample 1"
                    fill
                    className="rounded-lg object-cover"
                    placeholder="blur"
                  />
                </div>
                <div className="relative h-64 w-full">
                  <Image
                    src={allGuestWomenSample2}
                    alt="Women's white outfit sample 2"
                    fill
                    className="rounded-lg object-cover"
                    placeholder="blur"
                  />
                </div>
                <div className="relative h-64 w-full">
                  <Image
                    src={allGuestWomenSample3}
                    alt="Women's white outfit sample 3"
                    fill
                    className="rounded-lg object-cover"
                    placeholder="blur"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 18 Roses Section */}
        <section>
          <h2 className="mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
            18 Roses
          </h2>
          <div className="mb-8 rounded-lg bg-yellow-50 p-6 dark:bg-gray-800">
            <p className=" text-lg text-gray-800 dark:text-gray-200">
              White long sleeves is required.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="relative h-96 w-full">
              <Image
                src={menRosesSample1}
                alt="18 Roses outfit sample 1"
                placeholder="blur"
                fill
                className="rounded-lg object-cover"
              />
            </div>
            <div className="relative h-96 w-full">
              <Image
                src={menRosesSample2}
                alt="18 Roses outfit sample 2"
                placeholder="blur"
                fill
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
