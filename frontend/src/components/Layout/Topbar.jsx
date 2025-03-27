import { TbBrandMeta } from "react-icons/tb";
import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";
const Topbar = () => {
  return (
    <div className="bg-ecomm-purple text-white ">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <div className="hidden md:flex items-center space-x-4">
          <a href="#" className="hover:text-gray-300">
            <TbBrandMeta className="h-5 w-5" />
          </a>

          <a href="#" className="hover:text-gray-300">
            <IoLogoInstagram className="h-5 w-5" />
          </a>

          <a href="#" className="hover:text-gray-300">
            <RiTwitterXLine className="h-5 w-5" />
          </a>
        </div>
        <div className="flex-grow text-sm text-center">
            <span>
          We ship our products world-wide- Very Fast and Reliable Shopping
          </span>
        </div>
        <div className="hidden md:block text-sm">
            <a href="tel:0451366054" className="hover:text-grey-300">0451366054</a>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
