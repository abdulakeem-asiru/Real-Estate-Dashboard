import clsx from 'clsx';
import {
  ArrowRight,
    Building,
 Building2,
 TrendingDown,
 TrendingUp,
 Wallet  
} from 'lucide-react';
const iconMap = {
    totalProperties: Building2,
    totalIncome: Wallet,
    sold: Building,
    rent: Building,
  
};

interface CardProp{
 title: string;
  value: number | string;
  type: 'totalIncome' | 'totalProperties' | 'sold' | 'rent';
  stat : number;
}
const propertyData = {
    total_income : "127812.12",
    total_properties : 15780,
    sold : 893,
    rent : 500
}
const weeklyStat ={
  incomeStat : 12,
    propertiesStat : 8,
    soldStat : 20,
    rentStat : 4
}
const {incomeStat, propertiesStat, soldStat, rentStat} = weeklyStat
const {total_income, total_properties, sold, rent} = propertyData
const amount = parseFloat(total_income)
const formattedTotalIncome = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "NGN",
      }).format(amount)

export default function CardWrapper() {
  return (
    <div className="flex flex-wrap gap-3 w-full justify-between">
      <Card title="Total Income" value={formattedTotalIncome} type="totalIncome" stat={incomeStat} />
      <Card title="Total Properties" value={total_properties} type="totalProperties" stat={propertiesStat}/>
      <Card title="Unit Sold" value={sold} type="sold" stat={soldStat}/>
      <Card title="Unit Rent" value={rent} type="rent" stat={rentStat}/>
    </div>
  );
}


export function Card({title, value, type, stat}: CardProp) {
  const Icon = iconMap[type];

  return (
    <div className="flex-1 min-w-[250px] w-full border border-[var(--border-color)] rounded-lg flex flex-col gap-6">
      <div className="flex justify-between items-start px-4 pt-3 pb-1">
        <div className='flex flex-col gap-2'>
          <h3 className='capitalize text-[var(--text-secondary)]'>{title}</h3>
          <p className='text-[22px] text-[var(--text-primary)] font-medium'>{value}</p>
        </div>
        <div>
          {Icon ? (
            <Icon className="h-10 w-10 text-[var(--icon-color)] p-2 rounded-lg border border-[var(--border-color)]" />
          ) : null}
        </div>
      </div>
      <div className='border-t-2 border-t-[var(--border-color)] bg-[var(--bg-surfaceLv2)] rounded-lg'>
          <div className="flex gap-2 justify-around items-center  p-2">
            <div className='flex gap-2 items-center'>
            <span className='flex gap-1'>{stat >= 10 ? <TrendingUp  className='text-[var(--text-success)] ' size={20}/> : <TrendingDown  className='text-[var(--text-warning)]' size={20}/>}     
              <p className={clsx( "text-[14px] text-[var(--text-success)]",
                           {"text-[var(--text-warning)]": stat < 10,},
                      )}>{stat}%</p>
            </span>
            <span className="text-[var(--text-primary)] text-[14px]">Last Week</span>
            </div>
            <span className=" flex gap-1 items-center"><p className='text-[var(--text-primary)] text-[14px]'>Show more</p><ArrowRight className='text-[var(--text-primary)]' size={20}/></span>
          </div>
      </div>
    </div>
  );
}
