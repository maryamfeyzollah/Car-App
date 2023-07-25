import Image from "next/image";
import Link from "next/link";

import { CustomButton } from ".";
const NavBar = () => {
  return (
    <header className=" w-full  absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/car-logo-hero.svg"
            alt="car app logo"
            width={118}
            height={18}
            className="object-contain"
          />
        </Link>
        <div className="flex gap-3 ">
          <CustomButton
            title="Log In"
            btnType="button"
            containerStyles="text-white text-xs xl:text-base md:text-base font-semibold rounded-xl bg-primary-blue md:min-w-[90px]"
          />
          <CustomButton
            title="Sign In"
            btnType="button"
            containerStyles="text-primary-blue text-xs xl:text-base md:text-base font-semibold rounded-xl bg-white md:min-w-[90px]"
          />
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
