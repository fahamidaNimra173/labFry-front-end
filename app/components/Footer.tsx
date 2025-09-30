import Image from "next/image";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
    return (
        <section className="mb-5">
            <div className="px-[120px] border-b-1 border-[#ee363833] ">
                <div className="flex pt-[100px] pb-[79px] gap-[132px] items-center">
                    <Image
                        alt="logo"
                        width={158}
                        height={50}
                        className="px-8 py-6"

                        src='/Labfry Logo-02 (1) 1.png'
                    />
                    <p className="font-medium text-[16px] w-[404px] text-gray-500">Your all-in-one platform for job scheduling, employee management, and client service built to keep your business running smoothly from anywhere.</p>
                </div>
                <div className="pb-[50px] flex items-center gap-8">
                    <FaYoutube   className="w-6 h-6 text-[#EE3638]"></FaYoutube>
                    <FaXTwitter  className="w-6 h-6 text-[#EE3638]"></FaXTwitter>
                    <FaFacebook  className="w-6 h-6 text-[#EE3638]"></FaFacebook>
                    <FaInstagram className="w-6 h-6 text-[#EE3638]"></FaInstagram>
                </div>

            </div>
            
            <p className="text-[14px] font-normal  py-5 text-gray-600 text-center">© 2021-2025, Labfry. All Rights Reserved.</p>

        </section>
    )
}