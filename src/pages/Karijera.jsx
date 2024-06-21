import { Footer } from "../components/Footer";
import { Meni } from "../components/Meni";
import { Meni2 } from "../components/Meni2";

export function Karijera() {
  return (
    <div>
      <Meni />
      <Meni2 />
      <div className="karticaKarijera">
        <p className="karijeraNaslov">Važno je gde radite!</p>
        <div className="grid2">
          <p className="karticaText">
            TECH4U veliku pažnju posvećuje zaposlenima i omogućava rad u
            savremenom i modernom radnom okruženju, pružajući priliku za
            karijerno usavršavanje. Fokusirani smo na profesionalni razvoj i
            timsku angažovanost pojedinca. Podržavamo različitosti i pružamo
            priliku za uspeh. Negujemo dinamičnu i bezbednu radnu atmosferu,
            timski rad, podstičemo individualnost i kreiramo duh zajedništva,
            prepoznajući i vrednujući rad zaposlenih. Želimo da vam rad u TECH4U
            bude zadovoljstvo, jer VAŽNO JE GDE RADITE!
          </p>
          <img
            src="/images/karijera.png"
            width="500px"
            className="karticaSlika"
            alt="Karijera"
          />
        </div>
      </div>
      <div className="karticaKarijera">
        <p className="karijeraNaslov">Naši zaposleni</p>
        <div className="grid2">
          <p className="karticaText">
            <strong>Vlatko Jovanović</strong> - Pametni telefoni su specijalnost
            našeg Vlatka Jovanovića. Od tipova ekrana, preko tipova senzora,
            kamera i procesora, pa sve do brojnih drugih tehnologija, Vlatku
            ništa nije nepoznato.
          </p>
          <img
            src="/images/vlatko.jpg"
            width="500px"
            className="karticaSlika"
            alt="Vlatko Jovanović"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
