import "../css/PrijavaForm.css";

export function PrijavaForm() {
    return (
        <div className="PrijavaForm"> 
           <p>Vas TECH4U nalog</p>
           <p>Email Adresa</p>
           <input type="text"/> 
           <p>Lozinka</p>
           <input type="password"/><br/>
           <button>Prijavite se</button>
        </div>
    )
}

