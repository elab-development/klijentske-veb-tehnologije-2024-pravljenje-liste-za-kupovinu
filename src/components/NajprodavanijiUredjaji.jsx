import { NajprodavanijiUredjaj } from "./NajprodavanijiUredjaj";
import iphone14 from "../images/iphone14.jpg";
import samsungA54 from "../images/samsungA54.webp";
import samsungA72 from "../images/samsungA72.png";
import redmi13 from "../images/redmi13.png";
import iphone13Mini from "../images/iphone13Mini.jpg";

export function NajprodavanijiUredjaji() {
    return (
        <div className="section4">
            <NajprodavanijiUredjaj slika={iphone14} ime="iPhone 14 Pro Max" cena="169.999,00 RSD"/>
            <NajprodavanijiUredjaj slika={samsungA54} ime="Samsung Galaxy A54" cena="59.999,00 RSD"/>
            <NajprodavanijiUredjaj slika={samsungA72} ime="Samsung Galaxy A72" cena="49.999,00 RSD"/>
            <NajprodavanijiUredjaj slika={redmi13} ime="Xiaomi Redmi Note 13 Pro" cena="34.999,00 RSD"/>
            <NajprodavanijiUredjaj slika={iphone13Mini} ime="iPhone 13 Mini" cena="29.999,00 RSD"/>
        </div>
    )
}
