"use client"

import { useEffect, useState } from "react";
import { columns, Orders } from "./columns"
import { DataTable } from "./data-table"
import { Input } from "@/components/ui/input";
import { CustomersOrder } from "../../data/order";

async function getData(): Promise<Orders[]> {
  // Fetch data from your API here.
 return CustomersOrder
}

export default function DemoPage() {
const [data, setData] = useState<Orders[]>([]); // State to hold data
const [filter, setFilter] = useState<string>('');

  useEffect(() => {
    async function fetchData() {
      const result = await getData();
      setData(result);
    }
    fetchData();
  }, []);

  // Handle filter input change
  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };

  return (
    <div className="w-full bg-[var(--bg-surfaceLv2)] md:p-8 p-6">
    <div className="w-full flex justify-between">
      <h2 className="text-2xl font-medium text-[var(--text-primary)]">Order</h2>
      <div>
    <Input
            placeholder="Search..."
            value={filter}
            onChange={handleFilterChange}
            className="max-w-sm h-12 border-2 border-[var(--border-color)]"
          />
      </div>
    </div>
      <div className="w-full mx-auto py-4 px-2 ">
      <DataTable columns={columns} tableData={data} heading="All Order List" filter ={filter}/>
      </div>
    </div>
  )
}