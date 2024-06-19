import "../css/KontaktForm.css";

export function KontaktForma() {
  return (
    <div className="kontaktForm">
      <p className="kontaktNaslov">Kontaktirajte nas</p>
      <div className="inputs">
        <input type="text" className="inputKontakt" />
        <p className="kontaktLabel">Ime</p>
        <input type="text" className="inputKontakt"/>
        <p className="kontaktLabel">Prezime</p>
        <input type="text" className="inputKontakt"/>
        <p className="kontaktLabel">Email</p>
        <input type="text" className="inputKontakt"/>
        <p className="kontaktLabel">Broj telefona</p>
      </div>
      <div className="postavitePitanje">
        <p>Postavite pitanje</p>
        <textarea className="pitanjeInput"></textarea>
      </div>
      <button className="kontaktButton">Posaljite poruku</button>
    </div>
  );
}
