"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import ModalImage from "../_components/ModalImage";
import { imageList } from "./imageList";

export default function Page() {
  const [selectedImage, setSelectedImage] = useState<{
    src: StaticImageData;
    alt: string;
  } | null>(null);

  const handleImageClick = (src: StaticImageData, alt: string) => {
    setSelectedImage({ src, alt });
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <main className="flex min-h-screen flex-col bg-white px-4 py-24 dark:bg-gray-700">
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
              <span className="font-bold uppercase underline"> all white</span>{" "}
              outfit from head to toe.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Men's Samples */}
            <div>
              <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
                Men&apos;s Sample Outfits
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {imageList.allGuestMen.images.map((image) => (
                  <div
                    key={image.name}
                    className="relative h-96 w-full cursor-pointer transition-transform hover:scale-[1.02]"
                    onClick={() => handleImageClick(image.src, image.name)}
                  >
                    <Image
                      src={image.src}
                      alt={image.name}
                      fill
                      className="rounded-lg object-cover"
                      placeholder="blur"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Women's Samples */}
            <div>
              <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
                Women&apos;s Sample Outfits
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {imageList.allGuestWomen.images.map((image) => (
                  <div
                    key={image.name}
                    className="relative h-96 w-full cursor-pointer transition-transform hover:scale-[1.02]"
                    onClick={() => handleImageClick(image.src, image.name)}
                  >
                    <Image
                      src={image.src}
                      alt={image.name}
                      fill
                      className="rounded-lg object-cover"
                      placeholder="blur"
                    />
                  </div>
                ))}
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
            {imageList.rose.images.map((image) => (
              <div
                key={image.name}
                className="relative h-96 w-full cursor-pointer transition-transform hover:scale-[1.02]"
                onClick={() => handleImageClick(image.src, image.name)}
              >
                <Image
                  src={image.src}
                  alt={image.name}
                  placeholder="blur"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Modal */}
      {selectedImage && (
        <ModalImage
          isOpen={!!selectedImage}
          onClose={handleCloseModal}
          imageSrc={selectedImage.src}
          imageAlt={selectedImage.alt}
        />
      )}
    </main>
  );
}
