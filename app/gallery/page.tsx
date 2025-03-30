"use client";

import Image from "next/image";
import { useState, useCallback, useEffect } from "react";
import { HiOutlineRefresh } from "react-icons/hi";
import { HiArrowUp } from "react-icons/hi";
import { imageList } from "./imageList";

const IMAGES_PER_BATCH = 5;

const getBatchImages = (batchIndex: number) => {
  const startIndex = batchIndex * IMAGES_PER_BATCH;
  return imageList.slice(startIndex, startIndex + IMAGES_PER_BATCH);
};

export default function Page() {
  const [currentBatch, setCurrentBatch] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const totalBatches = Math.ceil(imageList.length / IMAGES_PER_BATCH);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNextBatch = useCallback(() => {
    setCurrentBatch((prev) => (prev + 1) % totalBatches);
  }, [totalBatches]);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const currentImages = getBatchImages(currentBatch);

  return (
    <main className="flex min-h-screen flex-col bg-white px-4 py-24 dark:bg-gray-900">
      <div className="container mx-auto">
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
              Gallery
            </h1>
          </div>
          <button
            onClick={handleNextBatch}
            className="flex items-center justify-center rounded-lg bg-gray-500 px-4 py-2 text-white transition-colors hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
          >
            <HiOutlineRefresh className="size-5" />
          </button>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {currentImages.map((image) => (
            <div
              key={image.name}
              className="group relative aspect-square overflow-hidden rounded-lg bg-gray-200 transition-all hover:opacity-90"
            >
              <Image
                src={image.src}
                alt={`Photo ${image.name}`}
                fill
                placeholder="blur"
                quality={50}
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
            </div>
          ))}
        </div>
      </div>
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 flex items-center justify-center rounded-full bg-gray-500 p-3 text-white shadow-lg transition-all hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
        >
          <HiArrowUp className="size-6" />
        </button>
      )}
    </main>
  );
}
