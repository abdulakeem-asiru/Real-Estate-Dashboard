'use client';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { AreaChart, BathIcon, Bed, Calendar, Car, Dumbbell, Heart, Home, MessageCircle, MoreVerticalIcon, Phone, Plus, Share2, SproutIcon } from 'lucide-react';
import * as React from 'react';
import useFetchProperties from './hooks/useFetchProperties';
import Image from 'next/image';
import DashboardSkeleton from '@/app/features/shared/loadingui';

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function ProjectDetailPage({ params }: PageProps) {
  const resolvedParams = React.use(params); // Unwrap the params Promise
  const { id } = resolvedParams; // Destructure id from resolved params
  const { property, loading, error } = useFetchProperties(id);

  if (loading) return <div><DashboardSkeleton /> </div>;
  if (error || !property) return notFound();

  return (
    <div className="p-2">
      <div className="m-auto w-full mb-4">
        <div className="md:flex items-end justify-between hidden">
          <div className="w-full">
            <h2 className="text-[24px] font-medium text-[var(--text-primary)] mb-1 capitalize">
              Project / <span className="text-[var(--text-secondary)]">Project Details</span>
            </h2>
          </div>
          
          <Button className="bg-[var(--primary-color)] cursor-pointer py-5 px-6 text-white hover:bg-[var(--primary-color)]">
            <Plus className="mr-2" />
            <span className="hidden md:block">Add Property</span>
          </Button>
        </div>
      </div>
  <div className='grid grid-cols-4 gap-4'>
    <div className='lg:col-span-3 col-span-full rounded-lg p-4 border border-[var(--border-color)]'>
 <div className='md:grid-cols-5 grid-cols-2 grid w-full gap-4'>
        <div className='col-span-3 row-span-1 '><Image src={property.images[0]} alt='propert Image' width={400} height={300} className='object-fill w-full h-full rounded-lg'/></div>
        <div className='md:col-span-2 col-span-3 flex flex-col gap-4' >
          <div className='md:h-[200px] h-full'><Image src={property.images[1]} alt='property image' width={200} height={200} className='object-fill w-full h-full rounded-lg'/></div>
          <div className='md:h-[200px] h-full'><Image src={property.images[2]} alt='property image' width={200} height={200} className='object-fill w-full h-full rounded-lg'/></div>
        </div>
      </div>
      <div className='flex justify-between md:items-center md:flex-row flex-col items-start mb-4'>
      <h1 className="text-2xl my-5 lg:max-w-[550px]
       w-full leading-normal text-[var(--text-primary)] font-medium">{property.title}</h1>
      <div className='flex gap-4'>
        <Share2 className='border border-[var(--border-color)] text-[var(--text-primary)] w-8 h-8 p-1 cursor-pointer rounded-lg'/>
        <Heart className='border border-[var(--border-color)] w-8 h-8 p-1 cursor-pointer rounded-lg text-[#335cff]' fill='#335CFF'/>
        <MoreVerticalIcon className='border border-[var(--border-color)] text-[var(--text-primary)] w-8 h-8 p-1 cursor-pointer rounded-lg'/> 
        </div>
      </div>
      <h3 className='text-lg font-medium text-[var(--text-primary)] leading-normal'>Description</h3>
      <p className="my-2 text-sm leading-snug font-normal text-[var(--text-primary)]">{property.description}</p>
      
      <div className="rounded-lg border border-[var(--border-color)] bg-[var(--bg-surfaceLv2)] p-3 mt-4">
<h3 className='text-lg font-medium text-[var(--text-primary)] leading-normal'>Property Facilities</h3>
<div className='flex gap-10 gap-y-4 mt-2 p-4 flex-wrap'>
      <p className="my-2 text-sm leading-snug font-normal text-[var(--text-primary)] flex gap-2 items-center"><Bed /><span>{property.facilities.bathrooms} Bedroom</span></p>
      <p className="my-2 text-sm leading-snug font-normal text-[var(--text-primary)] flex gap-2 items-center"><BathIcon /><span>{property.facilities.bathrooms} Bathroom</span></p>
      {property.facilities.bathrooms ? <p className="my-2 text-sm leading-snug font-normal text-[var(--text-primary)] flex gap-2 items-center"><Home /><span> SmartHome </span></p>: null }
      {property.facilities.gym ? <p className="my-2 text-sm leading-snug font-normal text-[var(--text-primary)] flex gap-2 items-center"><Dumbbell /><span> Gym </span></p>: null }
      <p className="my-2 text-sm leading-snug font-normal text-[var(--text-primary)] flex gap-2 items-center"><Car /><span>{property.facilities.parking} Parking</span></p>
      <p className="my-2 text-sm leading-snug font-normal text-[var(--text-primary)] flex gap-2 items-center"><AreaChart /><span>{property.facilities.area}</span></p>
      {property.facilities.pool ? <p className="my-2 text-sm leading-snug font-normal text-[var(--text-primary)] flex gap-2 items-center"><SproutIcon /><span> Pool </span></p>: null }
</div>
      </div>
    </div>


    <aside className='rounded-lg p-2 border border-[var(--border-color)] lg:col-span-1 col-span-4'>
        <div className=' bg-[var(--bg-surfaceLv1)] p-2 rounded-lg border border-[var(--border-color)]'>
      <h3 className='text-lg font-medium text-[var(--text-primary)] leading-normal'>Property Pricing</h3>
<div className='p-2'>
      <h3 className='mt-2 text-sm font-medium text-[var(--text-primary)] leading-normal'>Annual Payment</h3>
      <p className=' mt-2 p-2 rounded-lg bg-[var(--background)] text-[var(--text-secondary)]  border-1 border-[var(--border-color)] '>NGN {property.pricing.annualPayment}</p>
        <h3 className='mt-3 text-sm font-medium text-[var(--text-primary)] leading-normal'>Minimum Rental Duration</h3>
      <p className=' mt-2 p-2 rounded-lg bg-[var(--background)] text-[var(--text-secondary)]  border-1 border-[var(--border-color)] '>{property.pricing.minRentalDuration}</p>

</div>
    </div>
           <div className='mt-5 bg-[var(--bg-surfaceLv1)] p-2 rounded-lg border border-[var(--border-color)]'>
      <h3 className='text-lg font-medium text-[var(--text-primary)] leading-normal'>Agent Details</h3>
    <div className='flex gap-2 mt-4'>
      <div className='rounded-full w-15 h-15 overflow-hidden items-center flex'>
              <Image src={property.agent.image} alt='profilepic' width={50} height={50} 
               className='object-cover'/>
            </div>
      <div>
        <h3 className='text-lg font-medium text-[var(--text-primary)]'>
{property.agent.name}
        </h3>
        <p className='text-sm font-normal text-[var(--text-secondary)]'>{property.agent.role}</p>
      </div>
    </div>
    <div className='flex my-4 gap-2 justify-between items-center'>
        <Button className=' cursor-pointer w-[120px] py-6 bg-[var(--primary-color)]'><Phone /> Call Us</Button>
        <Button className='cursor-pointer w-[120px] py-6 bg-[var(--bg-sufaceLv2)] hover:bg-[var(--bg-sufaceLv2)] border border-[var(--border-color)] text-[var(--text-primary)] '><MessageCircle /> Message</Button>
      </div>
    </div>

            <div className='mt-5 bg-[var(--bg-surfaceLv1)] p-2 rounded-lg border border-[var(--border-color)]'>
      <h3 className='text-lg font-medium text-[var(--text-primary)] leading-normal'>Inspection Times</h3>
    <div className='flex gap-2 mt-2'>
      <div>
        <h3 className='text-sm font-medium text-[var(--text-primary)]'>
{property.inspection.note}
        </h3>
        <p className='text-sm font-normal text-[var(--text-secondary)]'>{property.inspection.time}</p>
      </div>
    </div>
    <div className='flex my-4 gap-2 justify-between items-center'>
        <Button className=' cursor-pointer w-full py-6 bg-[var(--primary-color)]'><Calendar />Add To Calendar</Button>
      </div>
    </div>
     </aside>
    </div>
    </div>
  );
}