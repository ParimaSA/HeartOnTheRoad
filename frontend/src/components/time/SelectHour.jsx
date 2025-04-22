"use client";
import { useEffect, useState } from "react";
import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function SelectHour({ setHour }) {
  const allHour = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];
  const [selectedHour, setSelectedHour] = useState(8);

  useEffect(() => {
    setHour(8);
  }, []);

  return (
    <div>
      <Select
        value={selectedHour}
        onValueChange={(val) => {
          setSelectedHour(val);
          setHour(val);
        }}
      >
        <SelectTrigger className="w-[140px] bg-[#FF5C5F] text-white border-[3px]">
          <SelectValue placeholder="Select Hour" />
        </SelectTrigger>
        <SelectContent className="max-h-[20vh] overflow-y-auto">
          <SelectGroup>
            <SelectLabel>Select Time</SelectLabel>
            {allHour.map((hour) => (
              <SelectItem key={hour} value={hour}>
                {hour}.00
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
