"use client";

export default function ConclusionBox({setTrip}) {

  return (
    <div className="overflow-y-auto w-full h-full rounded-[20px] bg-[#FF96B2] flex flex-col gap-y-4 justify-center lg:p-12 p-4">
      {/* Title at the top left */}
      <h1 className="text-md font-extrabold md:text-2xl pt-3 lg:p-0 lg:m-0 lg:self-start">
        Conclusion
      </h1>
      {/* You can add more content below */}
      <p className="text-md">The analysis shows that we cannot find a meaningful insight regarding how traffic congestion impacts the driver's heart rate, as the average heart rates during traffic jams and normal traffic are almost the same.
However, we found that speed has an impact on the driver's heart rate.
The correlation between speed and heart rate is 0.427, indicating a moderate positive relationship.
Additionally, the line graph shows that speed and heart rate follow a similar pattern throughout the day, supporting this relationship.</p>

    </div>
  );
}
