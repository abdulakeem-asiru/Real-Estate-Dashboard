import Columns from '@/assets/cardImage/Columns.png';
import line from '@/assets/cardImage/line.png';
import revenue from '@/assets/cardImage/revenue.png';
import Image, { StaticImageData } from 'next/image';
import {
 Building2,
 PencilRuler,
 Wallet  
} from 'lucide-react';
const iconMap = {
  properties: Building2,
  agents: PencilRuler,
  revenue: Wallet,
  
};

export default async function CardWrapper() {

  return (
    <div className='flex flex-wrap gap-4 w-full justify-between'>
    <Card title="No Of Properties" value={"2,400"} type="properties" image={Columns} />
      <Card title="Registered Agents" value={"1,800"} type="agents" image={line} />
      <Card title="Revenue" value={"$28,000"} type="revenue" image={revenue} />
      
    </div>
  );
}

export function Card({
 image,
  title,
  value,
  type,
}: {
  title: string;
  image : StaticImageData;
  value: number | string;
  type: 'properties' | 'agents' | 'revenue' ;
}) {
  const Icon = iconMap[type];

  return (
    <div className=" flex-1 min-w-[250px]  border-2 border-[var(--border-color)] p-4 rounded-lg flex flex-col gap-6">
     <div className='flex justify-between items-center'>
    {Icon ? <Icon className="h-10 w-10 text-[var(--icon-color)] p-2 rounded-lg border-2 border-[var(--border-color)]" /> : null}
    <Image src={image} alt="Card Image" width={100} height={100}/>
     </div>
     <div>
    <p className='text-[14px] text-[var(--text-secondary)]'>{title}</p>
    <div className='flex gap-2 items-center justify-start'>
    <h2 className='text-[24px] font-medium text-[var(--text-primary)]'>{value}</h2>
    <span className='bg-[#21cf72] text-[12px] text-white py-1 px-2 rounded-3xl'>+7.0%</span>
    </div>
     </div>
    </div>
  );
}
