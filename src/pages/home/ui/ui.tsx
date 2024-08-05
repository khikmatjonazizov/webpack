import React from "react";
import png from '@/shared/assets/img/Carma_Logo_Orange.png';
import jpeg from '@/shared/assets/img/Carma_Logo_Orange.jpeg';
import Svg from '@/shared/assets/icons/Carma_Logo_Orange.svg';

export const HomePageComponent: React.FC = () => {
  return (
    <div>
      <h1>Home</h1>
      <img src={png} />
      <img src={jpeg} />
      <Svg width={30} height={30} />
    </div>
  )
}