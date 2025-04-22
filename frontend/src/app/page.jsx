"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();

  return (
    <div className="w-full h-[calc(100vh-72px)] flex flex-col md:flex-row">

      <div className="w-full h-[40%] flex items-center justify-center md:w-[60%] md:h-full">
        <Image src="/logo.png" alt="Logo" width={800} height={800} className="h-full w-auto md:w-full md:h-auto px-12"/>      
      </div>

      <div className="relative w-full h-full flex flex-col justify-center items-center">
        {/* Background Layer */}
        <div
          className="absolute inset-0 bg-cover bg-repeat opacity-50"
          style={{
            backgroundImage: "url('/pinkpattern.png')",
            backgroundRepeat: "repeat",
            backgroundSize: "600px 600px",
          }}
        ></div>

        <div className="relative flex justify-center items-center">
          <Image src="/title.png" alt="Title" width={1000} height={200} className="w-[80%] h-auto opacity-80"/>
        </div>

        <div className="relative w-[80%] h-[60px] m-[4vh] bg-gray-500 border-t-8 border-b-8 border-solid border-white flex items-center">
          <hr className="border-t-8 border-dashed border-white w-full" />
        </div>

        <p className="relative m-[4vh] text-2xl text-center font-semibold">The impact of traffic congestion on driver stress.</p>

        <button onClick={()=>router.replace("/trip")} className="relative text-white text-3xl font-bold bg-[#FF5C5F] px-8 py-2 rounded-[12px] hover:cursor-pointer hover:bg-[#E45154]">Dive Deeper</button>
      </div>

      
    </div>
  )
}