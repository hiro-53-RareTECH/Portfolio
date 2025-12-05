import Image from "next/image";
import Link from "next/link";
import React from "react";

type CardProps = {
  img: string;
  title: string;
  url: string;
  term: string;
  description: string;
};

const Card = ({ img, title, url, term, description }: CardProps) => {
  return (
    <Link
      href={url}
      target="_blank"
      className="bg-gray-800 rounded-xl p-4 text-left border border-gray-600 w-full transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:opacity-90"
    >
      <Image
        src={img}
        alt={title}
        width={200}
        height={200}
        className="rounded-md object-contain w-full h-40"
      />
      <h3 className="text-xl font-bold mt-2">{title}</h3>
      <div>
        <p className="text-sm font-bold mt-1">制作期間</p>
        <p className="text-gray-400 text-sm mt-1">{term}</p>
      </div>
      <div>
        <p className="text-sm font-bold mt-1">概要</p>
        <p className="text-gray-400 text-sm mt-1">{description}</p>
      </div>
    </Link>
  );
};

export default Card;
