import "../css/SviTelefoni.css";
import samsungLogo from "../images/samsungLogo.webp";
import appleLogo from "../images/appleLogo.webp";
import xiaomiLogo from "../images/xiaomiLogo.webp";
import honorLogo from "../images/HonorLogo.webp";
import motorolaLogo from "../images/motorolaLogo.png";

export function FiltersBox() {
    return (
        <div className="filterBox">
            <p className="filteriTitl">Filteri</p>
            <p className="polaSirina1">Brend</p>
            <p className="partneri polaSirina1 sviBrendovi">Svi brendovi</p>
            <img src={samsungLogo} className="partneri polaSirina2"/>
        <img src={appleLogo} className="partneri polaSirina1"/>
        <img src={xiaomiLogo} className="partneri polaSirina2"/>
        <img src={honorLogo} className="partneri polaSirina1"/>
        <img src={motorolaLogo} className="partneri polaSirina2"/>
        <p className="polaSirina1">Cena</p>
            <p className="partneri polaSirina1 sviBrendovi">Do 25.000 RSD</p>
            <p className="partneri polaSirina2 sviBrendovi">Do 50.000 RSD</p>
            <p className="partneri polaSirina1 sviBrendovi">Od 50.000 RSD</p>
            <p className="partneri polaSirina2 sviBrendovi">Od 75.000 RSD</p>

        </div>
    )
}

