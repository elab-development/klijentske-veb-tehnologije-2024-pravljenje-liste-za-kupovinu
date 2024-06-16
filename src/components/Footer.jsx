import facebook from "../images/facebook.png";
import linkedin from "../images/linkedin.png";
import instagram from "../images/instagram.png";
import youtube from "../images/youtube2.png";

export function Footer() {
  return (
    <div className="footer">
      <ul className="meniPomocni">
        <li className="meniPomocniPrvi">TECH4U</li>
        <li> </li>
        <li className="drustveneMreze">
          <img src={facebook} />
          <img src={linkedin} />
          <img src={youtube} />
          <img src={instagram} />
        </li>
      </ul>
      <div className="footerSecond">
        <ul>
          <li className="nazivListe">Brendovi</li>
          <li>Apple</li>
          <li>Samsung</li>
          <li>Xiaomi</li>
          <li>Honor</li>
          <li>Motorola</li>
        </ul>
        <ul>
          <li className="nazivListe">Kontakt</li>
          <li>Live chat podrska</li>
          <li>Kontakt telefon</li>
          <li>Pisite nam na mejl</li>
          <li>Kontakt preko forme</li>
        </ul>
        <ul>
          <li className="nazivListe">Korsnicki nalog</li>
          <li>Prijava</li>
          <li>Registracija</li>
          <li>Zaboravljena lozinka</li>
          <li></li>
        </ul>
      </div>
    </div>
  );
}
