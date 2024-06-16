export function RegistracijaForm() {
  return (
    <div className="PrijavaForm">
      <p className="naslovPrijava">Vas TECH4U nalog</p>
      <p>
        Vec imate TECH4U nalog?{" "}
        <a href="/Prijava" className="registrujteSe">
          Prijavite se!
        </a>
      </p>
      <p>Email Adresa</p>
      <input type="text" />
      <p>Lozinka</p>
      <input type="password" />
      <label className="agree">
        <input type="checkbox" className="checkbox" />
        <p>
          Zelim da me obavestavate o najnovijim akcijama,popustima i
          promocijama.
        </p>
      </label><br/>
      <label className="agree">
        <input type="checkbox" className="checkbox" />
        <p>Prihvatam uslove koriscenja</p>
      </label>
      <br />
      <button>Prijavite se</button>
    </div>
  );
}
