import { NajprodavanijiUredjaj } from "./NajprodavanijiUredjaj";

export function NajprodavanijiUredjaji() {
  return (
    <div className="section4">
      <NajprodavanijiUredjaj
        slika="/images/iphone14.jpg"
        ime="iPhone 14 Pro Max"
        cena="169.999,00 RSD"
      />
      <NajprodavanijiUredjaj
        slika="/images/samsungA54.webp"
        ime="Samsung Galaxy A54"
        cena="59.999,00 RSD"
      />
      <NajprodavanijiUredjaj
        slika="/images/samsungA72.png"
        ime="Samsung Galaxy A72"
        cena="49.999,00 RSD"
      />
      <NajprodavanijiUredjaj
        slika="/images/redmi13.png"
        ime="Xiaomi Redmi Note 13 Pro"
        cena="34.999,00 RSD"
      />
      <NajprodavanijiUredjaj
        slika="/images/iphone13Mini.jpg"
        ime="iPhone 13 Mini"
        cena="29.999,00 RSD"
      />
    </div>
  );
}
