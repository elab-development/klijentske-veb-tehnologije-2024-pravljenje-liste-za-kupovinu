import { FC } from "react";
import "../css/Telefon.css";
import React from "react";
import { formatPrice, useKorpa } from "../utils/data";

interface props {
  name: string;
  image: string;
  price: string;
  
}

export const Telefon: FC<props> = ({ name, image, price }) => {
  const { setKorpaTelefoni, korpaTelefoni } = useKorpa();  

  return (
    <div className="prozorTelefon">
      <img src={image} className="prozorTelefonSlika" />
      <p className="prozorTelefonText">{name}</p>
      <button onClick={() => setKorpaTelefoni([...korpaTelefoni, { name, image, price }])} className="prozorTelefonCena onHoverClick">{formatPrice(price)}</button>
    </div>
  );
};
