import React, { useState } from 'react';
import "../css/KontaktForm.css";
import { IKontaktFormData, KontaktFormData } from '../utils/data';

export function KontaktForma() {
  const [formData, setFormData] = useState<IKontaktFormData>(new KontaktFormData('', '', '', '', ''));

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  return (
    <div className="kontaktForm">
      <p className="kontaktNaslov">Kontaktirajte nas</p>
      <div className="inputs">
        <input
          type="text"
          name="ime"
          value={formData.ime}
          onChange={handleInputChange}
          className="inputKontakt"
        />
        <p className="kontaktLabel">Ime</p>
        <input
          type="text"
          name="prezime"
          value={formData.prezime}
          onChange={handleInputChange}
          className="inputKontakt"
        />
        <p className="kontaktLabel">Prezime</p>
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          className="inputKontakt"
        />
        <p className="kontaktLabel">Email</p>
        <input
          type="text"
          name="brojTelefona"
          value={formData.brojTelefona}
          onChange={handleInputChange}
          className="inputKontakt"
        />
        <p className="kontaktLabel">Broj telefona</p>
      </div>
      <div className="postavitePitanje">
        <p>Postavite pitanje</p>
        <textarea
          name="pitanje"
          value={formData.pitanje}
          onChange={handleInputChange}
          className="pitanjeInput"
        ></textarea>
      </div>
      <button className="kontaktButton" >Posaljite poruku</button>
    </div>
  );
}
