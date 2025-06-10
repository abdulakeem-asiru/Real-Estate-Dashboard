"use client"

import { ColumnDef } from "@tanstack/react-table"
import { MoreVertical, ArrowUpDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Checkbox } from "@/components/ui/checkbox"

export type Orders = {
  id: string
  customer: {
    name: string;
    imageUrl: string;
  };
  purchaseDate: string
  contact: string
  propertiesType: string
  purchaseProperties: string
  amount: number
  status: "paid" | "unpaid"
  email: string
}
interface CustomerCellProp{
  name : string,
  imageUrl : string
}

const CustomerCell = ({ name, imageUrl } : CustomerCellProp) => (
  <div className="flex items-center space-x-2 min-w-[200px]">
    <Image src={imageUrl} alt={name} width={40} height={40} className="rounded-full" />
    <span>{name}</span>
  </div>
);

export const columns: ColumnDef<Orders>[] = [
    {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
    {
    accessorKey: "customer.name",
    header: "Customer Name",
    cell: ({ row }) => (
      <CustomerCell
        name={row.original.customer.name}
        imageUrl={row.original.customer.imageUrl ?? "/logo.png"} // Fallback image if none
      />
    ),
    enableGlobalFilter : true
  },
  {
    accessorKey: "purchaseDate",
    header: "Purchase Date",
  },
  //   {
  //   accessorKey: "contact",
  //   header: "Contact",
  // },
  {
    accessorKey: "propertiesType",
    header: "Properties Type",
    enableGlobalFilter : true
  },
   {
    accessorKey: "purchaseProperties",
    header: "Purchase Properties",
    enableGlobalFilter : true
  },
  {
    accessorKey: "email",
    header: "Email",
    enableGlobalFilter : true
  },
  {
    accessorKey: "amount",
   header: ({column}) => <div><Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Amount
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button></div>,

      cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"))
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "NGN",
      }).format(amount) 
      return <div>{formatted}</div>
    },
    enableGlobalFilter : true
  },

  {
    accessorKey: "status",
      header: () => <div className="text-center">Status</div>,
    cell: ({ row }) => {
      const status: string = row.getValue("status");
      const statusStyle = status === "paid" ? 
      "text-[var(--text-success)] bg-[var(--success)] text-center p-1 rounded-md capitalize border-1 border-[var(--text-success)]" : 
      "text-[var(--text-warning)] bg-[var(--warning)] capitalize text-center p-1 rounded-md border-1 border-[var(--text-warning)]"
 
      return <div className={statusStyle}>{status}</div>
    },
    enableGlobalFilter : true
  },
   {
    id: "actions",
    cell: ({ row }) => {
      const order = row.original
 
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreVertical className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(order.id)}
            >
              Copy order ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View order details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },

  },
]