import React from "react";
import { ListedProperties } from "@/app/admin/data/Listing";
import Image from "next/image";
import { BedSingle, Grid2x2, MapPinHouse, Star, Toilet } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// Define the type for a single property (you can adjust this based on actual structure)
interface Property {
  title: string;
  address: string;
  rating: number;
  reviewsCount: number;
  facilities: {
    beds: number;
    baths: number;
    area: string;
  };
  priceRange: {
    min: number;
    max: number;
  };
  imageUrl: string;
  mapUrl: string;
}

export default function CardWrapper() {
  return (
    <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-8 items-center">
      {ListedProperties.map((property: Property, key: number) => (
        <Card key={key} property={property} />
      ))}
    </div>
  );
}

interface CardProps {
  property: Property;
}

export function Card({ property }: CardProps) {
  return (
    <div className="w-full min-w-[250px] border-2 border-[var(--border-color)] p-4 rounded-2xl col-span-1">
      <Image
        src={property.imageUrl}
        alt="Property Image"
        width={400}
        height={200}
        className="object-cover rounded-xl h-[140px] w-full"
      />
      <div className="flex flex-1  flex-wrap justify-between mt-3 border-b-1 pb-4 border-[var(--border-color)] w-full">
        <div className="flex flex-col gap-1">
          <h2 className="text-lg text-[var(--text-primary)] font-medium">
            {property.title}
          </h2>
          <span className="text-[var(--text-secondary)] text-[14px] flex gap-2 items-center">
            <MapPinHouse size={20} />
            <span className="truncate max-w-[200px]">{property.address}</span>
          </span>
        </div>
        <div>
          <span className="flex gap-2 items-center w-full">
            <Star
              size={20}
              fill="var(--primary-color)"
              className="text-[var(--primary-color)]"
            />
            <p className="text-[var(--text-secondary)] text-[16px]">
              {property.rating}
            </p>
            <p className="text-[var(--text-secondary)] text-[16px]">
              ({property.reviewsCount})
            </p>
          </span>
        </div>
      </div>
      <div className="mt-3">
        <h3 className="text-[14px] font-medium text-[var(--text-secondary)] mb-3">
          Facilities
        </h3>
        <div className="flex gap-1 items-center flex-wrap w-full">
          <span className="facilities">
            <BedSingle />
            <p className="text-[16px] text-[var(--text-secondary)]">
              {property.facilities.beds}Beds
            </p>
          </span>
          <span className="facilities">
            <Toilet />
            <p className="text-[16px] text-[var(--text-secondary)]">
              {property.facilities.baths}Baths
            </p>
          </span>
          <span className="facilities">
            <Grid2x2  fontWeight={400}/>
            <p className="text-[16px] text-[var(--text-secondary)]">
              {property.facilities.area} ft
            </p>
          </span>
        </div>
      </div>
      <div className="mt-5">
        <h3 className="text-[14px] font-medium text-[var(--text-secondary)]">
          Price Range
        </h3>
        <div className="flex gap-1 items-center justify-between flex-wrap w-full">
          <p className="text-lg text-[var(--text-primary)] font-medium">
            ₦{property.priceRange.min.toLocaleString()} - ₦
            {property.priceRange.max.toLocaleString()}
          </p>
          <Button className="border-2 border-[var(--border-color)] bg-transparent py-5 cursor-pointer hover:bg-transparent text-[var(--primary-color)]">
            <Link href={property.mapUrl}>Open Map</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
