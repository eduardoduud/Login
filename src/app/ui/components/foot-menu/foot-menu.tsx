import React, { FC } from 'react';


interface FootProps {}

const Foot: FC<FootProps> = () => (
  <div className='bg-black border-t-3 border-t-indigo-500 h-10 w-full'>
    <div className='flex flex-wrap font-mono font-bold text-white justify-center items-center pt-2'>
      Criação e desenvolvimento: Eduardo Domingues & Victor Viana © 2023
    </div>
  </div>
);

export default Foot;