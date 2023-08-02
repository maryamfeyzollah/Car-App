"use client";
import Image from "next/image";
import { CustomButton } from ".";

const Hero = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title justify-center text-right">
          پیدا کنید، رزرو کنید، یک ماشین را کرایه کنید
        </h1>
        <p className="hero__subtitle text-right ">
          با رزرو بدون زحمت ، تجربه کرایه اتومبیل خود را ساده کنید
        </p>
        <CustomButton
          title="جستجو ماشین"
          containerStyles="bg-primary-blue text-white rounded-full mt-10 float-right "
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image
            src="/car-banner.png"
            alt="hero"
            fill
            className="object-contain "
          />
        </div>
        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;
