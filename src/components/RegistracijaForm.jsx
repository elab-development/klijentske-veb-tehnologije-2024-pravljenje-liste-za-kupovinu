import { useNavigate } from 'react-router-dom';

export function RegistracijaForm() {
  const navigate = useNavigate(); 

  return (
    <div className="PrijavaForm">
      <p className="naslovPrijava">Vas TECH4U nalog</p>
      <p>
        Vec imate TECH4U nalog?{" "}
        <span 
          className="registrujteSe"
          onClick={() => navigate('/Prijava')}
          style={{ cursor: 'pointer', textDecoration: 'underline' }}
        >
          Prijavite se!
        </span>
      </p>
      <p>Email Adresa</p>
      <input type="text" />
      <p>Lozinka</p>
      <input type="password" />
      <label className="agree">
        <input type="checkbox" className="checkbox" />
        <p>
          Zelim da me obavestavate o najnovijim akcijama, popustima i
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
