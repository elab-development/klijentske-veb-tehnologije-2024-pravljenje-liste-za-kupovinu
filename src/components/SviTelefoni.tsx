import React, { useState } from 'react';
import { Telefon } from "./Telefon";
import { TelefonData } from '../utils/data';

interface SviTelefoniProps {
  prikazaniTelefoni: TelefonData[];
}

export function SviTelefoni({ prikazaniTelefoni }: SviTelefoniProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const totalPages = Math.ceil(prikazaniTelefoni.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = prikazaniTelefoni.slice(startIndex, endIndex);

  const nextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <div>
      <div className="sviTelefoni">
        {currentItems.map((el) => (
          <Telefon
            key={el.name}
            name={el.name}
            image={el.image}
            price={el.price}
          />
        ))}
      </div>
      <div className="pagination">
        <button className='bigButton' onClick={prevPage} disabled={currentPage === 1}>
          Prethodna
        </button>
        <span> Strana {currentPage} od {totalPages} </span>
        <button className='bigButton' onClick={nextPage} disabled={currentPage === totalPages}>
          Sledeca
        </button>
      </div>
    </div>
  );
}
