    import { Footer } from "../components/Footer";
    import { Meni } from "../components/Meni";
    import { Meni2 } from "../components/Meni2";
    import karijera from "../images/karijera.png";
    import vlatko from "../images/vlatko.jpg";


    export function Karijera() {
    return (
        <div>
        <Meni />
        <Meni2 />
        <div className="karticaKarijera">
            <p className="karijeraNaslov">Vazno je gde radite!</p>
            <div className="grid2">
            <p className="karticaText">
                TECH4U veliku paznju posvecuje zaposlenima i omoguéava rad u
                savremenom imodernom radnom okruzenju, pruzajuéi priliku za
                karijerno usavravanje. Fokusirani smo na profesionalni razvojitimsku
                angazovanost pojedinca.Podrzavamo razl¡icitostii pruzamo priliku za
                uspeh. Negujemo dinamicnui bezbednu radnu atmosferu,timski rad,
                podsticemo individualnost i kreiramo duh zajednistva, prepoznajuéci
                ivrednujuéi rad zaposlenih.Zelimo da vam rad u TECH4U bude
                zadovoljstvo, jer VAZNO JE GDE RADITE!
            </p>
            <img src={karijera} width="500px" className="karticaSlika"/>
            </div>
        </div>
        <div className="karticaKarijera">
            <p className="karijeraNaslov">Nasi zaposleni</p>
            <div className="grid2">
            <p className="karticaText">
                <p className="vlatko">Vlatko Jovanovic</p>
                Pametni telefoni su specijalnost naseg Vlatka Jovanovica. Od tipova ekrana, preko tipova senzora,kamera i procesora, pa sve do brojinih drugih tehnologija, Vlatku nista nije 
                nepoznato.
            </p>
            <img src={vlatko} width="500px" className="karticaSlika"/>
            </div>
        </div>
        <Footer />
        </div>
    );
    }
