"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";

interface CarouselImage {
  src: string;
  alt: string;
  caption?: string;
}

interface ImageCarouselProps {
  images: CarouselImage[];
  aspectRatio?: string;
  className?: string;
}

export function ImageCarousel({
  images,
  aspectRatio = "aspect-[16/10]",
  className = "",
}: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  if (!images || images.length === 0) return null;

  const prevSlide = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const currentImage = images[currentIndex];

  return (
    <>
      <div
        className={`relative group rounded-2xl sm:rounded-3xl overflow-hidden border border-black/5 dark:border-white/10 bg-slate-100 dark:bg-slate-900 shadow-md ${aspectRatio} ${className}`}
      >
        {/* Main Image */}
        <div
          onClick={() => setLightboxOpen(true)}
          className="relative w-full h-full cursor-zoom-in overflow-hidden"
        >
          <Image
            src={currentImage.src}
            alt={currentImage.alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            priority={currentIndex === 0}
          />

          {/* Subtle gradient vignette for contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10 pointer-events-none" />

          {/* Caption Overlay */}
          {currentImage.caption && (
            <div className="absolute bottom-3 left-3 right-12 z-10">
              <span className="inline-block px-3 py-1 rounded-xl bg-black/60 backdrop-blur-md text-white text-xs font-semibold tracking-wide">
                {currentImage.caption}
              </span>
            </div>
          )}

          {/* Zoom Indicator Icon */}
          <div className="absolute top-3 right-3 z-10 p-1.5 rounded-full bg-black/50 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity">
            <Maximize2 className="w-3.5 h-3.5" />
          </div>

          {/* Counter Badge */}
          {images.length > 1 && (
            <div className="absolute top-3 left-3 z-10 px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-white text-[11px] font-extrabold tracking-wider">
              {currentIndex + 1} / {images.length}
            </div>
          )}
        </div>

        {/* Carousel Navigation Buttons */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevSlide}
              aria-label="Imagem anterior"
              className="absolute left-2.5 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/80 dark:bg-slate-900/80 hover:bg-white dark:hover:bg-slate-800 text-slate-800 dark:text-white backdrop-blur-md border border-black/10 dark:border-white/15 shadow-lg opacity-80 sm:opacity-0 group-hover:opacity-100 transition-all active:scale-90"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Próxima imagem"
              className="absolute right-2.5 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/80 dark:bg-slate-900/80 hover:bg-white dark:hover:bg-slate-800 text-slate-800 dark:text-white backdrop-blur-md border border-black/10 dark:border-white/15 shadow-lg opacity-80 sm:opacity-0 group-hover:opacity-100 transition-all active:scale-90"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

            {/* Indicator Dots */}
            <div className="absolute bottom-3 right-3 z-20 flex items-center space-x-1 p-1 rounded-full bg-black/40 backdrop-blur-md">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentIndex(idx);
                  }}
                  aria-label={`Ir para a foto ${idx + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    idx === currentIndex
                      ? "w-4 bg-white shadow-sm"
                      : "w-1.5 bg-white/40 hover:bg-white/70"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Lightbox Modal for Full View */}
      {lightboxOpen && (
        <div
          onClick={() => setLightboxOpen(false)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
        >
          <button
            onClick={() => setLightboxOpen(false)}
            aria-label="Fechar ampliação"
            className="absolute top-4 right-4 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 transition-all"
          >
            <X className="w-6 h-6" />
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl w-full max-h-[85vh] h-full flex flex-col items-center justify-center"
          >
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={currentImage.src}
                alt={currentImage.alt}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>

            {currentImage.caption && (
              <p className="mt-3 text-sm text-slate-200 text-center font-medium">
                {currentImage.caption}
              </p>
            )}

            {images.length > 1 && (
              <div className="mt-3 flex items-center space-x-4">
                <button
                  onClick={prevSlide}
                  className="p-2.5 rounded-full bg-white/15 hover:bg-white/25 text-white backdrop-blur-md transition-all active:scale-95"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <span className="text-xs font-bold text-slate-300">
                  {currentIndex + 1} / {images.length}
                </span>
                <button
                  onClick={nextSlide}
                  className="p-2.5 rounded-full bg-white/15 hover:bg-white/25 text-white backdrop-blur-md transition-all active:scale-95"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
