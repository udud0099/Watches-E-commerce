import { Search } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav className="px-4 md:px-12 py-4 md:py-6 bg-white text-black">
        <div className="flex justify-between items-center">
          <Link href={"/"}>Zwatches</Link>
          <div className="relative max-w-[300px] md:w-[400px]">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              {/* search icon */}
              <Search className="w-4 h-4" />
            </div>
            <input
              type="text"
              placeholder="search"
              className="h-[36px] relative pl-10 border-[1px] border-black/70 text-sm rounded-2xl p-4 focus:outline-none bg-transparent"
            />
          </div>

          <Link href={"/add-product"}>
            <button className="bg-gray-800 text-white p-4 rounded-2xl cursor-pointer">
              Add Product
            </button>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
