import Image from "next/image";

export default function Home() {
  return (

    <section className="flex flex-col items-center ">
      {/* TOP SECTION  */}
      <div className="bg-[#6B46C1] h-[394px] text-gray-50 pt-[88px] lg:text-center pl-6 w-full">
        <h3 className="text-3xl lg:text-5xl leading-10 font-extrabold mb-5">
          Simple pricing for your business
        </h3>
        <p className="text-xl font-medium opacity[84]">
          Plans that are carefully crafted to suit your business.
        </p>
      </div>

      {/* MIDDLE SECTION */}

      <div className="absolute top-[254px] mx-6 lg:mx-auto max-w-5xl  ">
        {/* First Section */}
        <div className="flex flex-col lg:flex-row lg:justify-center mx-auto shadow-xl">
        <div className="pt-9 px-12 bg-[#F0EAFB] min-w-[382px] text-center rounded-t-lg lg:rounded-l-lg lg:rounded-tr-none ">
          <p className="text-2xl font-extrabold text-gray-900">Premium PRO</p>
          <span className="block mt-4 mb-3 text-5xl font-extrabold">$329</span>
          <p className="mb-8 text-gray-900 text-lg font-medium">
            billed just once
          </p>
          <button className="bg-[#805AD5] text-gray-50 px-[75px] py-3 rounded-lg mb-7">
            Get Started
          </button>
        </div>

        {/* Second Section */}
        <div className="px-4 bg-white shadow-lg lg:rounded-r-lg rounded-b-lg ">
          <p className="mb-6 mt-10">
            Access these features when you get this pricing package for your
            business.
          </p>

          <div className="flex justify-start  gap-x-3 gap-y-4 ">
            <Image
              src={"/Group 172.svg"}
              width={22}
              height={22}
              alt="price-image"
            />
            <span className="text-lg text-gray-700">
              International calling and messaging API
            </span>
          </div>

          <div className="flex justify-start  gap-x-3 gap-y-4 ">
            <Image
              src={"/Group 172.svg"}
              width={22}
              height={22}
              alt="price-image"
            />
            <span className="text-lg text-gray-700">
              International calling and messaging API
            </span>
          </div>

          <div className="flex justify-start  gap-x-3 gap-y-4 ">
            <Image
              src={"/Group 172.svg"}
              width={22}
              height={22}
              alt="price-image"
            />
            <span className="text-lg text-gray-700">
              International calling and messaging API
            </span>
          </div>

          <div className="flex justify-start  gap-x-3 gap-y-4 mb-10">
            <Image
              src={"/Group 172.svg"}
              width={22}
              height={22}
              alt="price-image"
            />
            <span className="text-lg text-gray-700">
              International calling and messaging API
            </span>
          </div>
        </div>
        </div>

        {/* Bottom Section */}

        <div className="pl-2 lg:flex lg:justify-center lg:gap-x-6">
          <div className="mt-8 flex justify-start  gap-x-2 gap-y-10">
            <Image
              src={"/Group 178.svg"}
              width={33}
              height={33}
              alt="price-image"
            />
            <p>30 days money back Guarantree</p>
          </div>
          <div className="mt-8 flex justify-start  gap-x-2 gap-y-10">
            <Image
              src={"/Group 178.svg"}
              width={33}
              height={33}
              alt="price-image"
            />
            <p>30 days money back Guarantree</p>
          </div>
          <div className="mt-8 flex justify-start  gap-x-2 gap-y-10">
            <Image
              src={"/Group 178.svg"}
              width={33}
              height={33}
              alt="price-image"
            />
            <p>30 days money back Guarantree</p>
          </div>
        </div>
      </div>
    </section>
  );
}
