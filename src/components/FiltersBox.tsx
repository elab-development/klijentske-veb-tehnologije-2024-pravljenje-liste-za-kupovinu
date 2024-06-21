import React from 'react';
import "../css/SviTelefoni.css";
import { sviTelefoniniz } from '../utils/data';

interface Telefon {
  name: string;
  price: string;
  image: string;
}

interface FiltersBoxProps {
  setPrikazaniTelefoni: (telefoni: Telefon[]) => void;  
}

export function FiltersBox({ setPrikazaniTelefoni }: FiltersBoxProps) {
  const handlePrikazivanjeTelefonaPoBrendu = (brend: string) => {
    const filtriraniTelefoni = sviTelefoniniz.filter(phone => phone.name.includes(brend));
    setPrikazaniTelefoni(filtriraniTelefoni);
  };

  return (
    <div className="filterBox">
      <p className="filteriTitl">Filteri</p>
      <p className="polaSirina1">Brend</p>
      <p onClick={() => handlePrikazivanjeTelefonaPoBrendu('')} className="partneri partneriSviTelefoni polaSirina1 sviBrendovi">Svi brendovi</p>
      <img
        src="/images/samsungLogo.webp"
        onClick={() => handlePrikazivanjeTelefonaPoBrendu('Samsung')}
        className="partneri partneriSviTelefoni polaSirina2"
        alt="Samsung"
      />
      <img
        src="/images/appleLogo.webp"
        onClick={() => handlePrikazivanjeTelefonaPoBrendu('iPhone')}
        className="partneri partneriSviTelefoni polaSirina1"
        alt="Apple"
      />
      <img
        src="/images/xiaomiLogo.webp"
        onClick={() => handlePrikazivanjeTelefonaPoBrendu('Xiaomi')}
        className="partneri partneriSviTelefoni polaSirina2"
        alt="Xiaomi"
      />
      <img
        src="/images/HonorLogo.webp"
        onClick={() => handlePrikazivanjeTelefonaPoBrendu('Honor')}
        className="partneri partneriSviTelefoni polaSirina1"
        alt="Honor"
      />
      <img
        src="/images/motorolaLogo.png"
        onClick={() => handlePrikazivanjeTelefonaPoBrendu('Motorola')}
        className="partneri partneriSviTelefoni polaSirina2"
        alt="Motorola"
      />
      <p className="polaSirina1">Cena</p>
      <p className="partneri partneriSviTelefoni polaSirina1 sviBrendovi">Do 25.000 RSD</p>
      <p className="partneri partneriSviTelefoni polaSirina2 sviBrendovi">Do 50.000 RSD</p>
      <p className="partneri partneriSviTelefoni polaSirina1 sviBrendovi">Od 50.000 RSD</p>
      <p className="partneri partneriSviTelefoni polaSirina2 sviBrendovi">Od 75.000 RSD</p>
    </div>
  );
}
