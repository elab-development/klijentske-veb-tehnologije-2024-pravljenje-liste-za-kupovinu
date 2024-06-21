export function Footer() {
  return (
    <div className="footer">
      <ul className="meniPomocni">
        <li className="meniPomocniPrvi">
          <a href="/">TECH4U</a>
        </li>
        <li> </li>
        <li className="drustveneMreze">
          <img src="/images/facebook.png" alt="Facebook" />
          <img src="/images/linkedin.png" alt="LinkedIn" />
          <img src="/images/youtube2.png" alt="YouTube" />
          <img src="/images/instagram.png" alt="Instagram" />
        </li>
      </ul>
      <div className="footerSecond">
        <ul className="footerList">
          <li className="nazivListe">Brendovi</li>
          <li>Apple</li>
          <li>Samsung</li>
          <li>Xiaomi</li>
          <li>Honor</li>
          <li>Motorola</li>
        </ul>
        <ul className="footerList">
          <li className="nazivListe">
            <a href="/kontaktForm">Kontakt</a>
          </li>
          <li>Live chat podrška</li>
          <li>Kontakt telefon</li>
          <li>Pišite nam na mejl</li>
          <li>Kontakt preko forme</li>
        </ul>
        <ul className="footerList">
          <li className="nazivListe">Korisnički nalog</li>
          <li>
            <a href="/prijava">Prijava</a>
          </li>
          <li>
            <a href="/registracija">Registracija</a>
          </li>
          <li>Zaboravljena lozinka</li>
          <li></li>
        </ul>
      </div>
      <p className="copyRight">
        Copyright © 2024-2024TECH4U. Sva prava su zadržana. Developed by TECH4U
      </p>
    </div>
  );
}
