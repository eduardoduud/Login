import React, { FC } from 'react';
import Image from "../../../../assets/login.jpg";

interface TopMenuProps {}

const TopMenu: FC<TopMenuProps> = () => (
  <div className="top-menu border-b-4 border-b-indigo-500 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 fixed py-1 top-0 left-0 w-full z-10">
    <div className="flex justify-between items-center px-4 lg:px-8">
      <div>
        <button className="border border-white text-white font-bold py px-3 rounded">
          Home
        </button>
      </div>
      <div>
        <p className="text-lg text-white font-bold">Testando com Vitinhu</p>
      </div>
      <div>
        <button>
          <img src={Image.src}
          width={60} height={50}
          alt="Image Alt"
          />
        </button>
      </div>
    </div>
  </div>
);

export default TopMenu;
