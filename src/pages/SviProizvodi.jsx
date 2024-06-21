import { useState } from "react";
import { FiltersBox } from "../components/FiltersBox";
import { Footer } from "../components/Footer";
import { Meni } from "../components/Meni";
import { Meni2 } from "../components/Meni2";
import { SviTelefoni } from "../components/SviTelefoni";
import { sviTelefoniniz } from "../utils/data";

export function SviProizvodi() {
  const [prikazaniTelefoni,setPrikazaniTelefoni]=useState(sviTelefoniniz);
  return (
    <div>
      <Meni />
      <Meni2 />
      <p className="smallTitleText">Mobilni telefoni</p>
      <div className="phonesAndFilter">
        <FiltersBox  setPrikazaniTelefoni={setPrikazaniTelefoni}/>
        <SviTelefoni prikazaniTelefoni={prikazaniTelefoni} />
      </div>
      <img
        src="/images/odlicnaPonuda.webp"
        className="ponudaImg"
        alt="Odlična Ponuda"
      />
      <Footer />
    </div>
  );
}
