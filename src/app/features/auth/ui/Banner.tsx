"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { type CarouselApi } from "@/components/ui/carousel";
import banner1 from "@/assets/authImages/banner1.png";
import banner2 from "@/assets/authImages/banner2.png"; // 
import banner3 from "@/assets/authImages/banner3.png";


const images = [banner1, banner2, banner3]; 
function Banner() {
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [totalItems, setTotalItems] = useState(0);


  useEffect(() => {
    if (!carouselApi) return;

    const updateCarouselState = () => {
      setCurrentIndex(carouselApi.selectedScrollSnap());
      setTotalItems(carouselApi.scrollSnapList().length);
    };

    updateCarouselState();
    carouselApi.on("select", updateCarouselState);

    return () => {
      carouselApi.off("select", updateCarouselState); // Clean up on unmount
    };
  }, [carouselApi]);

  const scrollToIndex = (index: number) => {
    carouselApi?.scrollTo(index);
  };

  return (
    <div className="flex flex-col gap-14">
      <div className="flex flex-col gap-6">
        <h1 className="text-[48px] text-[var(--text-primary)] font-medium leading-[46px]">
          Let&apos;s begin <br />your Journey together
        </h1>
        <p className="text-[18px] text-[var(--text-secondary)]">
          Discover the world&apos;s best community of property managers <br />
          and real estate professionals.
        </p>
      </div>
      <div className="w-full relative">
        <Carousel setApi={setCarouselApi} opts={{ loop: true }} className="w-full">
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index}>
                <div className="w-full relative">
                  <Image
                    src={image}
                    alt={`banner ${index + 1}`}
                    className="object-contain w-full h-auto"
                    sizes="(max-width: 1440px) 100vw, 50vw"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        {/* Navigation Dots */}
        <div className=" mt-15 flex justify-center space-x-2">
          {Array.from({ length: totalItems }).map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentIndex === index
                  ? "bg-[var(--primary-color)]"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Banner;