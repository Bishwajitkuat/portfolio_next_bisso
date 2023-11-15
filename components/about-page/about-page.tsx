import Image from "next/image";
import React from "react";

export default function AboutPage() {
  return (
    <div className="w-full  px-8 flex py-12 md:py-24">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 items-center gap-8">
        <div className="md:col-span-2">
          <h3 className=" uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </h3>
          {/* <h3 className="py-4 text-gray-600">Who I AM</h3> */}
          <p className="py-2 text-gray-600">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim a
            harum aut maiores voluptatem aperiam inventore esse possimus nostrum
            fuga perferendis quaerat totam nobis ab dolores corrupti rem error
            vitae quod, reiciendis voluptatibus tempora quidem aliquam porro!
            Commodi quis atque optio nobis libero incidunt eaque, officiis
            quaerat deleniti error cum esse asperiores aperiam labore illo
            architecto, nisi doloribus, obcaecati iure soluta magni doloremque.
            Ipsa facilis in asperiores! Aliquam voluptatem consectetur pariatur
            recusandae sapiente necessitatibus, blanditiis, omnis perferendis,
            reprehenderit quos facilis! Illo, sit quis, pariatur maiores ipsa
            fugiat ipsum voluptatum cupiditate quo reiciendis quisquam! Vel a at
            eligendi quas placeat excepturi.
          </p>
        </div>

        <Image
          className="w-full h-auto rounded-lg shadow-xl shadow-gray-400 hover:scale-105 ease-in duration-500"
          src="/profile_img.jpg"
          width="0"
          height="0"
          sizes="100vw"
          alt="profile picture"
          priority={true}
        />
      </div>
    </div>
  );
}
