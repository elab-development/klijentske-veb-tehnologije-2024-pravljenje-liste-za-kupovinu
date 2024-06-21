import "../css/SviTelefoni.css";

export function FiltersBox() {
  return (
    <div className="filterBox">
      <p className="filteriTitl">Filteri</p>
      <p className="polaSirina1">Brend</p>
      <p className="partneri polaSirina1 sviBrendovi">Svi brendovi</p>
      <img
        src="/images/samsungLogo.webp"
        className="partneri polaSirina2"
        alt="Samsung"
      />
      <img
        src="/images/appleLogo.webp"
        className="partneri polaSirina1"
        alt="Apple"
      />
      <img
        src="/images/xiaomiLogo.webp"
        className="partneri polaSirina2"
        alt="Xiaomi"
      />
      <img
        src="/images/HonorLogo.webp"
        className="partneri polaSirina1"
        alt="Honor"
      />
      <img
        src="/images/motorolaLogo.png"
        className="partneri polaSirina2"
        alt="Motorola"
      />
      <p className="polaSirina1">Cena</p>
      <p className="partneri polaSirina1 sviBrendovi">Do 25.000 RSD</p>
      <p className="partneri polaSirina2 sviBrendovi">Do 50.000 RSD</p>
      <p className="partneri polaSirina1 sviBrendovi">Od 50.000 RSD</p>
      <p className="partneri polaSirina2 sviBrendovi">Od 75.000 RSD</p>
    </div>
  );
}
