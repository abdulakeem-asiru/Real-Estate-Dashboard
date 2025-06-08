"use client"

import { useEffect, useState } from "react";
import { columns, Orders } from "./columns"
import { DataTable } from "./data-table"
import { Input } from "@/components/ui/input";

async function getData(): Promise<Orders[]> {
  // Fetch data from your API here.
  return [{
  id: "cst001",
  customer: { name: "Chukwudi Okonkwo", imageUrl: "/avatar.png" },
  purchaseDate: "2025-05-21",
  contact: "+2347012345678",
  propertiesType: "Land",
  purchaseProperties: "Orchid Estate Phase 2",
  status: "paid",
  email: "kunle@example.com",
  amount: 30000,
},
{
  id: "cst002",
  customer: { name: "Chiamaka Eze", imageUrl: "/avatar.png" },
  purchaseDate: "2025-05-19",
  contact: "+2348123456789",
  propertiesType: "House",
  purchaseProperties: "Lekki Palm View",
  status: "unpaid",
  email: "amaka@example.com",
  amount: 85000,
},
{
  id: "cst003",
  customer: { name: "Adebayo Adeyemi", imageUrl: "/avatar.png" },
  purchaseDate: "2025-04-15",
  contact: "+2348034567890",
  propertiesType: "Apartment",
  purchaseProperties: "Sunset Residences",
  status: "paid",
  email: "tunde@example.com",
  amount: 45000,
},
{
  id: "cst002",
  customer: { name: "Adebayo Adeyemi", imageUrl: "/avatar.png" },
  purchaseDate: "2025-04-15",
  contact: "+2348034567890",
  propertiesType: "Apartment",
  purchaseProperties: "Sunset Residences",
  status: "paid",
  email: "tunde@example.com",
  amount: 45000,
},
{
  id: "cst004",
  customer: { name: "Fatima Yusuf", imageUrl: "/avatar.png" },
  purchaseDate: "2025-03-29",
  contact: "+2349012345678",
  propertiesType: "Land",
  purchaseProperties: "Harmony Gardens",
  status: "unpaid",
  email: "zainab@example.com",
  amount: 30000,
},
{
  id: "cst005",
  customer: { name: "Emeka Nwosu", imageUrl: "/avatar.png" },
  purchaseDate: "2025-05-01",
  contact: "+2348065432198",
  propertiesType: "Duplex",
  purchaseProperties: "Eden Court",
  status: "paid",
  email: "john.okoro@example.com",
  amount: 150000,
},
{
  id: "cst006",
  customer: { name: "Ifeoma Okeke", imageUrl: "/avatar.png" },
  purchaseDate: "2025-04-11",
  contact: "+2347056789012",
  propertiesType: "Flat",
  purchaseProperties: "Cedar Heights",
  status: "unpaid",
  email: "ngozi@example.com",
  amount: 60000,
},
{
  id: "cst007",
  customer: { name: "Olusegun Adegoke", imageUrl: "/avatar.png" },
  purchaseDate: "2025-06-01",
  contact: "+2348109876543",
  propertiesType: "Land",
  purchaseProperties: "Palm Island Estate",
  status: "paid",
  email: "david@example.com",
  amount: 35000,
},
{
  id: "cst008",
  customer: { name: "Uchechi Nnaji", imageUrl: "/avatar.png" },
  purchaseDate: "2025-05-26",
  contact: "+2349098765432",
  propertiesType: "House",
  purchaseProperties: "Royal Crest",
  status: "unpaid",
  email: "blessing@example.com",
  amount: 92000,
},
{
  id: "cst009",
  customer: { name: "Oluwatobi Ojo", imageUrl: "/avatar.png" },
  purchaseDate: "2025-05-14",
  contact: "+2347011223344",
  propertiesType: "Bungalow",
  purchaseProperties: "Greenfields",
  status: "paid",
  email: "samuel@example.com",
  amount: 70000,
},
{
  id: "cst010",
  customer: { name: "Aminatu Mohammed", imageUrl: "/avatar.png" },
  purchaseDate: "2025-06-06",
  contact: "+2348033344556",
  propertiesType: "Apartment",
  purchaseProperties: "Ocean View Homes",
  status: "unpaid",
  email: "aisha@example.com",
  amount: 56000,
}]
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