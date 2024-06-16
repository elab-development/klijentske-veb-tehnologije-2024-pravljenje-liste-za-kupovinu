import { Footer } from "../components/Footer";
import { Meni } from "../components/Meni";
import { Meni2 } from "../components/Meni2";
import { RegistracijaForm } from "../components/RegistracijaForm";
import "../css/PrijavaForm.css";

export function Registracija() {
    return (
        <div>
            <Meni/>
            <Meni2/>
            <RegistracijaForm/>
            <Footer/>
        </div>
    )
}

