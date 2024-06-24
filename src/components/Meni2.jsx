import { useNavigate } from 'react-router-dom';
import { Sat } from './Sat';

export function Meni2() {
  const navigate = useNavigate(); 

  return (
    <ul className="meniPomocni">
      <li className="meniPomocniPrvi">
        <span className="decorationNone pointer" onClick={() => navigate('/')}>TECH4U</span>
      </li>
      <li><Sat/> </li>
      <li className="sve-kategorije">
        <span className='pointer sveKat' onClick={() => navigate('/sviproizvodi')}>Sve kategorije</span>
      </li>
    </ul>
  );
}
