import React, { FC } from 'react';


interface TopMenuProps {}

const TopMenu: FC<TopMenuProps> = () => (
  <div className="top-menu bg-cyan-600 fixed top-0 left-0 w-full z-10">
  <div className="flex justify-between items-center px-4 lg:px-8">
    <div>
      <button className="border border-white text-white font-bold py px-3 rounded">
        Home
      </button>
    </div>
    <div>
      <p className="text-lg text-white font-bold">Testando com Vitinho</p>
    </div>
    <div>
      <button className="border border-white text-white font-bold py px-3 rounded">
        Login
      </button>
    </div>
  </div>
  <div className="border"></div>
</div>
);

export default TopMenu;
