import React from "react";

type BannerProps = {
  title: string;
  imageUrl?: string; 
};

const Banner: React.FC<BannerProps> = ({ title, imageUrl = "/img/banner.jpg" }) => {
  return (
    <div className="relative h-64 w-full flex items-center justify-center bg-gray-900">
      <img
        src={imageUrl}
        alt="Banner"
        className="object-cover w-full h-full absolute inset-0 opacity-50"
      />
      <h1 className="relative z-10 text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg">
        {title}
      </h1>
    </div>
  );
};

export default Banner;
