import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="min-h-[70vh] lg:min-h-[90vh]  flex flex-col md:flex-row justify-center items-center bg-white px-4 md:px-12 text-black">
      <div className="max-w-2xl">
        <h1>Timeless Elegance on Your Wrist</h1>
        <p>
          Discover our curated collection of perminu watches, crafted for those
          who appreciate shopistication and percision.
        </p>

        <Link href={"#product"}>
          <button>Shop the Collection</button>
        </Link>
      </div>
      <div>
        <Image
          src="/Watch-PNG-Background-Image.webp"
          width={100}
          height={100}
          alt="img"
        />
      </div>
    </div>
  );
};

export default Hero;
