"use client";

export default function ConclusionBox({setTrip}) {

  return (
    <div className="w-full h-full rounded-[20px] bg-[#FF96B2] flex flex-col gap-y-4 justify-center p-12 overflow-hidden">
      {/* Title at the top left */}
      <h1 className="text-md font-extrabold md:text-2xl p-0 m-0 self-start">
        Conclusion
      </h1>
      {/* You can add more content below */}
      <p className="text-sm">The analysis shows a clear link between increased traffic congestion and higher driver stress, as reflected by elevated heart rates. As traffic conditions worsen (traffic ratio below 1), heart rates tend to rise, indicating higher stress levels. This pattern suggests that heavy traffic directly contributes to stress and anxiety for drivers. Understanding this connection can help in developing strategies to reduce stress and improve well-being during high-traffic conditions.</p>

    </div>
  );
}
