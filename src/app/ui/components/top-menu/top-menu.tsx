import React, { FC } from 'react';
import Image from "../../../../assets/login.jpg";
import { Link } from 'react-router-dom';

interface TopMenuProps {}

const TopMenu: FC<TopMenuProps> = () => (
  <div className="top-menu flex-grow items-center h-12 bg-gradient-topMenu fixed py-1 top-0 left-0 w-full">
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
          width={70} height={50}
          alt="Image Alt"
          className='pt-1'
          />
        </button>
      </div>
    </div>
  </div>
);

export default TopMenu;
