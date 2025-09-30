import Image from "next/image";

export default function Banner() {
    return (
        <section className="flex items-center justify-center px-[120px] mt-[37px] p-2">

            <div className="flex flex-col gap-4">
                <h1 className="font-bold flex-1 leading-24 text-[84px] text-gray-800">
                    One App for All Your Jobs
                </h1>
                <p className="font-normal text-[16px] text-gray-600">From booking to tracking and managing, handle everything without switching apps.</p>
                {/* <Image
                alt="UnderLine"
                src=''
                /> */}
            </div>
            <div className="w-[970px] h-[574px] overflow-hidden rounded-tl-2xl rounded-br-2xl rounded-tr-[80px] rounded-bl-[80px]">
                <Image
                    src="/image 1.png"
                    alt="Banner Image"
                    width={670}
                    height={547}
                    className="w-full h-full object-cover"
                />
            </div>


        </section>
    )
}