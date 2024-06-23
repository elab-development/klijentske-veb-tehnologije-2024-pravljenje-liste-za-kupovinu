import { Footer } from "../components/Footer";
import { Meni } from "../components/Meni";
import { Meni2 } from "../components/Meni2";
import { Telefon } from "../components/Telefon";
import { sviTelefoniniz, useKorpa } from "../utils/data"; // Import the custom hook
import "../css/KorpaPhones.css";

export function Korpa() {
  const { setKorpaTelefoni, korpaTelefoni } = useKorpa(); // Use the custom hook to get the current state of the cart

  return (
    <div>
      <Meni />
      <Meni2 />
      <div className="korpaIzbor">
        <div className="telefoniIzbor">
      {sviTelefoniniz.map((el) => (
        <Telefon
          key={el.name}
          name={el.name}
          image={el.image}
          price={el.price}
        />
      ))}</div>
      <div>
<div className="titlIKanta">
      <p className="proizvodiUKorpi">Proizvodi u vašoj korpi:</p>
<p className="kanta" onClick={() => setKorpaTelefoni([])}>&#x1F5D1;</p>
</div>
      <div className="korpaPhones sviTelefoni">
        {korpaTelefoni.map((el) => (
          <Telefon
          key={el.name}
          name={el.name}
          image={el.image}
          price={el.price}
          />
        ))}
        </div>
      </div>
        </div>
      <Footer />
    </div>
  );
}
