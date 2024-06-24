import { useNavigate } from 'react-router-dom';
import "../css/PrijavaForm.css";

export function PrijavaForm() {
  const navigate = useNavigate(); // Hook to get the navigate function

  return (
    <div className="PrijavaForm">
      <p className="naslovPrijava">Vas TECH4U nalog</p>
      <p>
        Nemate TECH4U nalog?{" "}
        <span
          className="registrujteSe"
          onClick={() => navigate('/Registracija')}
          style={{ cursor: 'pointer', textDecoration: 'underline' }}
        >
          Registrujte se brzo i lako!
        </span>
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
