import React from 'react';
import { Telefon } from "./Telefon";
import { TelefonData } from '../utils/data';



interface SviTelefoniProps {
  prikazaniTelefoni: TelefonData[];
}

export function SviTelefoni({ prikazaniTelefoni }: SviTelefoniProps) {
  return (
    <div className="sviTelefoni">
      {prikazaniTelefoni.map((el) => (
        <Telefon
          key={el.name}
          name={el.name}
          image={el.image}
          price={el.price}
        />
      ))}
    </div>
  );
}
