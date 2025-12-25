"use client"

// React hooks for component state management
import React, { useState, useEffect } from "react"
import Link from "next/link"
// UI Components from shadcn/ui library
import { Button } from "./ui/button"
import { Label } from "./ui/label"
import { Input } from "./ui/input"
// Lucide React - modern icon library
import { Calendar as CalendarIcon } from "lucide-react"
// Radix UI Popover - accessible popover component
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"
// date-fns - utility library for date formatting
import { format } from "date-fns"
import { Calendar } from "./ui/calendar"
// Utility function for merging Tailwind classes
import { cn } from "@/lib/utils"
// Radix UI Select - accessible select/dropdown component
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


// ReservationForm Component - Table booking form
// Features: Date picker, person selector, and form inputs
// Note: This is a UI-only form (no backend submission logic)
const ReservationForm = () => {

  // State to store selected date
  // useState returns [value, setter function]
  const [date, setDate] = useState()

  return (
    // Form Container with vertical spacing
    <form className=" flex flex-col gap-y-10">
      <div className="grid gap-[30px]">
        {/* Name Inputs Row */}
        {/* Responsive grid: 1 column on mobile, 2 columns on desktop */}
        <div className="grid gird-cols-1 xl:grid-cols-2 gap-[30px]">
          <div>
            <Label htmlFor="firstname">first name</Label>
            <Input id="firstname" type="text" />
          </div>
          <div>
            <Label htmlFor="lastname">last name</Label>
            <Input id="lastname" type="text" />
          </div>
        </div>

        {/* Date and Person Selector Row */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-[30px]">
          {/* Date Picker with Popover */}
          {/* Popover: Clicking button opens calendar in a popover overlay */}
          <div>
            <Label>date</Label>
            <Popover>
              {/* Trigger Button - displays selected date or placeholder */}
              <PopoverTrigger asChild>
                <Button
                  variant={"input"}
                  className={cn(
                    "w-full justify-start text-left font-normal"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {/* Conditional rendering: Show formatted date if selected, else placeholder */}
                  {/* format(date, "PPP"): Formats date as "January 1, 2024" */}
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              {/* Calendar Popover Content */}
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"  // Single date selection mode
                  selected={date}  // Currently selected date
                  onSelect={setDate}  // Callback when date is selected
                  initialFocus  // Focuses calendar on open for keyboard navigation
                />
              </PopoverContent>
            </Popover>
          </div>
          {/* Person Count Selector */}
          {/* Radix UI Select component for dropdown */}
          <div>
            <Label>person</Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="How many people ?" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>People</SelectLabel>
                  {/* Select options for party size */}
                  <SelectItem value="1">1</SelectItem>
                  <SelectItem value="2">2</SelectItem>
                  <SelectItem value="3">3</SelectItem>
                  <SelectItem value="4">4</SelectItem>
                  <SelectItem value="5">5</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Button className="uppercase w-full xl:w-auto xl:self-end">
          Book a table
        </Button>

      </div>
    </form>
  )
}

export default ReservationForm