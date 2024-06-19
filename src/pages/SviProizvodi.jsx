import { FiltersBox } from "../components/FiltersBox";
import { Footer } from "../components/Footer";
import { Meni } from "../components/Meni";
import { Meni2 } from "../components/Meni2";
import { SviTelefoni } from "../components/SviTelefoni";
import motorolaLogo from "../images/motorolaLogo.png";

export function SviProizvodi() {
    return (
        <div>
          <Meni/> 
          <Meni2/>
          <p className="smallTitleText">Mobilni telefoni</p>
          <div className="phonesAndFilter">
            <FiltersBox/>
            <SviTelefoni/>
            <img src=""/>
          </div>
          <Footer/> 
        </div>
    )
}

