import Image from "next/image";

 export default function Navbar(){
    return(
        <div className="px-[120px] bg-white flex justify-between items-center py-6">
            <div>
                <Image
                width={118}
                height={50}
                alt="logo"
                src='/Labfry Logo-02 (1) 1.png'
                />    
            </div>
            <div>
               <button className="rounded-[8px] py-2.5 px-[26px] text-white font-bold text-[16px] bg-[#EE3638] shadow-[0_4px_4px_0_rgba(238,54,56,0.25),0_4px_4px_0_rgba(238,54,56,0.25),0_8px_16px_0_rgba(238,54,56,0)]">
                Get Started
                </button> 
            </div>
        </div>
    )
 }