import Image from "next/image";
import Link from "next/link";
import React from "react";

const Productlist = () => {
  const products = ["", "", ""];
  return (
    <>
      <h1 className="text-4xl font-bold text-center w-full">All Product</h1>
      <div
        id="product"
        className="px-4 md:px-12 py-5 md:py-10 justify-center items-center gap-5"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((item, index) => (
            <Link href="#" key={index}>
              <Image
                src="/dumy.webp"
                alt="img"
                width={1000}
                height={1000}
                className="max-w-[17rem] h-72 object-cover object-center rounded-2xl"
              />
              <div className="mt-4">
                <h1 className="font-semibold  text-2xl">wathc</h1>
                <p className="font-medium text-sm mt-1">$122</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Productlist;
