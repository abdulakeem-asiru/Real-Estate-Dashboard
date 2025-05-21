import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"

interface SelectComponentProp {
  button?: React.ReactElement; 
}

export function SelectComponent({button} : SelectComponentProp) {
  return (
    <Select>
      <SelectTrigger className="border-[var(--border-color)] border-2
      font-medium text-[14px] text-[var(--text-secondary)]">
        {button}
         <SelectValue placeholder="Last Month"/>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
         <SelectLabel>Time Period</SelectLabel>
          <SelectItem value="last-month">Last month</SelectItem>
          <SelectItem value="last-7-days">Last 7 Days</SelectItem>
          <SelectItem value="last-day">Last Day</SelectItem>
          <SelectItem value="last-3-months">Last 3 Months</SelectItem>
          <SelectItem value="year-to-date">Year to Date</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
