import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { useState } from "react"
 
export function TrafficSwitch({setTraffic}) {
  const [selectedTraffic, setSelectedTraffic] = useState(false);

  const handleToggle = () => {
    const newTraffic = !selectedTraffic;
    setSelectedTraffic(newTraffic);
    setTraffic(newTraffic);
    console.log("switch traffic: ", newTraffic);
  };  

  return (
    <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-[12px]">
      <Switch onCheckedChange={handleToggle} className="hover:cursor-pointer"/>
      <Label htmlFor="airplane-mode">Traffic Jam</Label>
    </div>
  )
}