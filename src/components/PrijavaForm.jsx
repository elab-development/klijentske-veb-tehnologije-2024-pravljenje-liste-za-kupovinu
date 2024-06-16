import "../css/PrijavaForm.css";

export function PrijavaForm() {
  return (
    <div className="PrijavaForm">
      <p className="naslovPrijava">Vas TECH4U nalog</p>
      <p>
        Nemate TECH4U nalog?{" "}
        <a href="/Registracija" className="registrujteSe">
          Registrujte se brzo i lako!
        </a>
      </p>
      <p>Email Adresa</p>
      <input type="text" />
      <p>Lozinka</p>
      <input type="password" />
      <br />
      <button>Prijavite se</button>
    </div>
  );
}
