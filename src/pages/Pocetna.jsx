import { Footer } from "../components/Footer";
import { Meni } from "../components/Meni";
import { Meni2 } from "../components/Meni2";
import { NajprodavanijiUredjaji } from "../components/NajprodavanijiUredjaji";
import { NasiPartneri } from "../components/NasiPartneri";
import { PocetnaZadnjaSekcija } from "../components/PocetnaZadnjaSekcija";
import "../css/Pocetna.css";
import "../css/App.css";

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
          <img src="/images/section2Pocetna.png" alt="nema" />
        </li>
      </ul>
      <ul className="section3">
        <li className="section3Ch">
          <center>
            <img
              src="/images/free-delivery.png"
              className="icon"
              alt="Besplatna dostava"
            />
          </center>
          <br />
          Besplatna dostava
        </li>
        <li className="section3Ch">
          <center>
            <img
              src="/images/brand-image (1).png"
              className="icon"
              alt="Poznati brendovi"
            />
          </center>
          Poznati
          <br />
          brendovi
        </li>
        <li className="section3Ch">
          <center>
            <img
              src="/images/24-hours.png"
              className="icon"
              alt="24/7 podrška"
            />
          </center>
          Online
          <br />
          podrska
          <br />
          24/7
        </li>
        <li className="section3Ch">
          <center>
            <img
              src="/images/promotion.png"
              className="icon"
              alt="Šansa za karijeru"
            />
          </center>
          Sansa za
          <br />
          karijeru
        </li>
      </ul>
      <b className="smallTitleText">Najbolje prodavani uredjaji</b>
      <span className="section4"></span>
      <NajprodavanijiUredjaji />
      <div className="section5">
        <p> Svi Apple uredjaji na jednom mestu</p>
      </div>
      <NasiPartneri />
      <PocetnaZadnjaSekcija />
      <Footer />
    </div>
  );
}
