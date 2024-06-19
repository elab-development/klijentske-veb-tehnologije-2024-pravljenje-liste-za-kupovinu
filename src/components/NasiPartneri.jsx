import samsungLogo from "../images/samsungLogo.webp";
import appleLogo from "../images/appleLogo.webp";
import xiaomiLogo from "../images/xiaomiLogo.webp";
import honorLogo from "../images/HonorLogo.webp";
import motorolaLogo from "../images/motorolaLogo.png";


export function NasiPartneri() {
  return (
    <div className="section6">
      <p className="smallTitleText">Nasi partneri</p>
      <div className="nasiPartneri">
        <img src={samsungLogo} className="partneri"/>
        <img src={appleLogo} className="partneri"/>
        <img src={xiaomiLogo} className="partneri"/>
        <img src={honorLogo} className="partneri"/>
        <img src={motorolaLogo} className="partneri"/>
      </div>
    </div>
  );
}
