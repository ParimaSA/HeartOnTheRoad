"use client";

export default function ConclusionBox({setTrip}) {

  return (
    <div className="overflow-y-auto w-full h-full rounded-[20px] bg-[#FF96B2] flex flex-col gap-y-4 justify-center lg:p-12 p-4">
      {/* Title at the top left */}
      <h1 className="text-md font-extrabold md:text-2xl pt-3 lg:p-0 lg:m-0 lg:self-start">
        Conclusion
      </h1>
      {/* You can add more content below */}
      <p className="text-sm">The analysis shows that traffic congestion is related to higher driver stress. When traffic slows down, drivers’ heart rates tend to increase, suggesting more stress. This pattern shows that heavy traffic can directly affect drivers’ mental and physical well-being. Recognizing this link can help create ways to reduce stress during busy traffic times.</p>

    </div>
  );
}
