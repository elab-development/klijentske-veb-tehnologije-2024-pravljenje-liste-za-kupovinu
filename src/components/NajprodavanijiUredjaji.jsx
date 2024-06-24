import { Telefon } from "./Telefon";

export function NajprodavanijiUredjaji() {
  return (
    <div className="section4">
      <Telefon
        name="iPhone 14"
        image="/images/iphone14.jpg"
        price="169999"
      />
      <Telefon
        name="Samsung A54"
        image="/images/samsungA54.webp"
        price="59999"
      />
      <Telefon
        name="Samsung A72"
        image="/images/samsungA72.png"
        price="49999"
      />
      <Telefon
        name="Xiaomi 13 Pro"
        image="/images/redmi13.png"
        price="34999"
      />
      <Telefon
        name="iPhone 13"
        image="/images/iphone13Mini.jpg"
        price="29999"
      />
    </div>
  );
}
