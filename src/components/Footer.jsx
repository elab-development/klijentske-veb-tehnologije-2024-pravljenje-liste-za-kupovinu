import { useNavigate } from 'react-router-dom';

export function Footer() {
  const navigate = useNavigate();

  function handleClick(e) {
    e.preventDefault();
    window.scrollTo({
      top: 0, 
      behavior: "smooth" 
    });
  }

  return (
    <div className="footer">
      <ul className="meniPomocni">
        <li className="meniPomocniPrvi">
          <span className='pointer' onClick={() => navigate('/')}>TECH4U</span>
        </li>
        <li onClick={handleClick} className="vratiNaPocetak">
          Vratite se na početak stranice  
        </li>
        <li className="drustveneMreze">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="/images/facebook.png" alt="Facebook" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src="/images/linkedin.png" alt="LinkedIn" />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <img src="/images/youtube2.png" alt="YouTube" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="/images/instagram.png" alt="Instagram" />
          </a>
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
          <li className="nazivListe pointer" onClick={() => navigate('/kontaktForm')}>Kontakt</li>
          <li>Live chat podrška</li>
          <li>Kontakt telefon</li>
          <li>Pišite nam na mejl</li>
          <li>Kontakt preko forme</li>
        </ul>
        <ul className="footerList">
          <li className="nazivListe">Korisnički nalog</li>
          <li className='pointer' onClick={() => navigate('/prijava')}>Prijava</li>
          <li className='pointer' onClick={() => navigate('/registracija')}>Registracija</li>
          <li>Zaboravljena lozinka</li>
        </ul>
      </div>
      <p className="copyRight">
        Copyright © 2024-2024TECH4U. Sva prava su zadržana. Developed by TECH4U
      </p>
    </div>
  );
}
