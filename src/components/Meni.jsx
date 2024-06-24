import { useNavigate } from 'react-router-dom';

export function Meni() {
  const navigate = useNavigate();  // Hook to get the navigate function

  return (
    <ul className="menu" id="header">
      <li>Pozovite nas: 011 411 3256</li>
      <li>Podrska: podrska@tech4u.rs</li>
      <li className='pointer'><span onClick={() => navigate('/karijera')}>Karijera</span></li>
      <li className='pointer'><span onClick={() => navigate('/kontaktform')}>Kontakt</span></li>
      <li className='pointer'><span onClick={() => navigate('/korpa')}>Korpa</span></li>
      <li className='pointer'><span onClick={() => navigate('/prijava')}>Prijava</span></li>
    </ul>
  );
}
