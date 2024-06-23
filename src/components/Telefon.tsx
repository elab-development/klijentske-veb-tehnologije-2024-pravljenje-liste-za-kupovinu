import { FC } from "react";
import "../css/Telefon.css";
import React from "react";
import { useKorpa } from "../utils/data";

interface props {
  name: string;
  image: string;
  price: string;
  
}

export const Telefon: FC<props> = ({ name, image, price }) => {
  const { setKorpaTelefoni, korpaTelefoni } = useKorpa(); // Get state management functions and state

  return (
    <div className="prozorTelefon">
      <img src={image} className="prozorTelefonSlika" />
      <p className="prozorTelefonText">{name}</p>
      <button onClick={() => setKorpaTelefoni([...korpaTelefoni, { name, image, price }])} className="prozorTelefonCena onHoverClick">{price}</button>
    </div>
  );
};
