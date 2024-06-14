import { Footer } from "../components/Footer";
import { Meni } from "../components/Meni";
import { Meni2 } from "../components/Meni2";
import { NajprodavanijiUredjaji } from "../components/NajprodavanijiUredjaji";
import { NasiPartneri } from "../components/NasiPartneri";
import { PocetnaZadnjaSekcija } from "../components/PocetnaZadnjaSekcija";
import "../css/Pocetna.css";
import "../css/App.css";
import section2Pocetna from "../images/section2Pocetna.png";
import kamion from "../images/free-delivery.png";
import brend from "../images/brand-image (1).png";
import sat from "../images/24-hours.png";
import promocija from "../images/promotion.png";
export default function Pocetna() {
  return (
    <div className="desktop-1">
      <Meni />
      <Meni2 />
      <ul className="section2">
        <li className="s21">Predji na iPhone 15</li>
        <li className="s22">Zameni svoj iPhone i ostvari dodatni popust!</li>
        <li className="s23">
          <button className="whiteButton">KUPI</button>
        </li>
        <li className="s24">
          <img src={section2Pocetna} alt="nema" />
        </li>
      </ul>
      <ul className="section3">
        <li className="section3Ch">
          <center>
            <img src={kamion} className="icon" alt="nema" />
          </center>
          <br />
          Besplatna dostava
        </li>
        <li className="section3Ch">
          <center>
            <img src={brend} className="icon" alt="nema" />
          </center>
          Poznati
          <br />
          brendovi
        </li>
        <li className="section3Ch">
          <center>
            <img src={sat} className="icon" alt="nema" />
          </center>
          Online
          <br />
          podrska
          <br />
          24/7
        </li>
        <li className="section3Ch">
          <center>
            <img src={promocija} className="icon" alt="nema" />
          </center>
          Sansa za
          <br />
          karijeru
        </li>
      </ul>
      <span className="section4">
        <b>Najbolje prodavani uredjaji</b>
      </span>
      <NajprodavanijiUredjaji />
      <div className="section5" >
       <p> Svi Apple uredjaji na jednom mestu</p>
      </div>
      <NasiPartneri />
      <PocetnaZadnjaSekcija />
      <Footer />
    </div>
  );
}
