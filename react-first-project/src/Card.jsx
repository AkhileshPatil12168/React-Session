import React from "react";
import { Abc } from "./Body";

const Card = ({ data, children }) => {
  return (
    <div className="group relative w-[280px]">
      {/* Animated Gradient Border */}
      <div className="absolute -inset-[2px] rounded-3xl bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 blur-md opacity-60 group-hover:opacity-100 transition duration-500 animate-pulse" />

      {/* Card Body */}
      <div className="relative rounded-3xl overflow-hidden bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
        {/* Shine Effect Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-700" />

        {/* Top Banner */}
        <div className="relative h-[130px] bg-gradient-to-br from-black/40 via-black/10 to-transparent">
          {/* Rarity Badge */}
          <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold tracking-wide bg-white/20 border border-white/30 text-white shadow-md">
            {data.rarity}
          </span>

          {/* HP */}
          <span className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold tracking-wide bg-emerald-500/20 border border-emerald-400/30 text-emerald-200 shadow-md">
            ⚡ HP {data.hp}
          </span>
        </div>

        {/* Image Section */}
        <div className="relative flex justify-center -mt-14">
          <div className="w-[150px] h-[150px] rounded-2xl bg-white/10 border border-white/20 shadow-xl overflow-hidden flex items-center justify-center">
            <img
              src={data.image}
              alt={data.name}
              className="w-full h-full object-contain group-hover:scale-110 transition duration-500"
            />
          </div>
        </div>

        {/* Content */}
        <div className="px-6 pt-5 pb-6 text-white">
          <h2 className="text-2xl font-bold tracking-wide text-center">
            {data.name}
          </h2>

          {/* Divider */}
          <div className="w-16 h-[2px] mx-auto mt-3 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-full" />

          {/* Stats */}
          <div className="mt-5 space-y-3 text-sm">
            <div className="flex justify-between items-center bg-white/10 rounded-xl px-4 py-2 border border-white/10">
              <span className="opacity-80">Attack</span>
              <span className="font-semibold text-pink-300">{data.attack}</span>
            </div>

            <div className="flex justify-between items-center bg-white/10 rounded-xl px-4 py-2 border border-white/10">
              <span className="opacity-80">Defense</span>
              <span className="font-semibold text-cyan-300">
                {data.defense}
              </span>
            </div>

            <div className="flex justify-between items-center bg-white/10 rounded-xl px-4 py-2 border border-white/10">
              <span className="opacity-80">Speed</span>
              <span className="font-semibold text-purple-300">
                {data.speed}
              </span>
            </div>
          </div>

          {/* Button */}
          <button className="mt-6 w-full py-3 rounded-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-white tracking-wide shadow-lg hover:shadow-cyan-500/30 transition duration-300 font-extrabold">
            View Details
          </button>
          {/* <div className="text-center text-black">{children}</div> */}
          <Abc/>
        </div>

        {/* Bottom Glow */}
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-purple-500/20 to-transparent pointer-events-none" />
      </div>

      {/* 3D Hover Tilt */}
      <style>
        {`
          .group:hover .relative {
            transform: perspective(1000px) rotateX(6deg) rotateY(-6deg);
          }
          .relative {
            transition: transform 0.5s ease;
          }
        `}
      </style>
    </div>
  );
};

export default Card;
