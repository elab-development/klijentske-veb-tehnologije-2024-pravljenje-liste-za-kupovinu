import { Footer } from "../components/Footer";
import { Meni } from "../components/Meni";
import { Meni2 } from "../components/Meni2";
import { Telefon } from "../components/Telefon";
import "../css/KorpaPhones.css";

export function Korpa() {
  return (
    <div>
      <Meni />
      <Meni2 />
      <p>Proizvodi u vasoj korpi:</p>
      <div className="korpaPhones sviTelefoni">
        <Telefon/>
      <Telefon/>
      <Telefon/>
      <Telefon/>
        </div>
      <Footer />
    </div>
  );
}
