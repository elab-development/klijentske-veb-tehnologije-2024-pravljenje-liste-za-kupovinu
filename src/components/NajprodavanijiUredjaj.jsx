export function NajprodavanijiUredjaj({slika,ime,cena}) {
    return (
        <div className="telefonMali">
            <img src={slika} height="200px"></img>
            <span>{ime}</span>
            <span>{cena}</span>
            <button>Dodaj u korpu</button>
        </div>
    )
}

