import { FC } from "react";
import "../css/Telefon.css";
import React from "react";

interface props {
  name;
  image;
  price;
}

export const Telefon: FC<props> = ({ name, image, price }) => {
  return (
    <div className="prozorTelefon">
      <img src={image} className="prozorTelefonSlika" />
      <p className="prozorTelefonText">{name}</p>
      <button className="prozorTelefonCena">{price}</button>
    </div>
  );
};
