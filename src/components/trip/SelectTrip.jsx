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


export default function SelectTrip({ setTrip }) {
  const [tripCount, setTripCount] = useState(4);
  const [selectedTrip, setSelectedTrip] = useState(tripCount-1);

  // If you're fetching from API, you can update selectedTrip once tripCount is known
  useEffect(() => {
    fetch('http://127.0.0.1:8080/heart/v1/api/trip')
      .then((res) => res.json())
      .then((data) => {
        const tripNum = data["number_of_trip"];
        setTripCount(tripNum);
        setSelectedTrip(tripNum-1);
        setTrip(tripNum-1)
      })
      .catch((err) => {
        console.error("Failed to fetch:", err);  // Catch and log any errors
      });
  }, []);
  

  return (
    <Select
      value={selectedTrip}
      onValueChange={(val) => {
          setSelectedTrip(val);
          setTrip(val);
        }
      }
    >
      <SelectTrigger className="w-[140px] bg-[#FF5C5F] text-white border-[3px]">
        <SelectValue />
      </SelectTrigger>
      <SelectContent className="max-h-[20vh] overflow-y-auto">
        <SelectGroup>
          <SelectLabel>Select Trip</SelectLabel>
          {tripCount !== null &&
            Array.from({ length: tripCount }, (_, i) => (
              <SelectItem key={i} value={i}>
                Trip #{i + 1}
              </SelectItem>
            ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
