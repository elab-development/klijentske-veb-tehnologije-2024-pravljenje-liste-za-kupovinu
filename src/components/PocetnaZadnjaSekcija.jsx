import slusalice from "../images/slusalice.png";

export function PocetnaZadnjaSekcija() {
    return (
        <div className="section7">
          <div className="slusalice">
          <img src={slusalice} className="slusaliceSlika"></img>
          </div>
          <div className="textSlusalice">
          <p className="naslov">Bezicne slusalice u ponudi</p>
           <p className="slusaliceText"> Slusalice koje cete lako upariti sa telefonom i uzivati u omiljenoj
            muzici ili video sadrzaju</p>
          </div>
      </div>
    )
}


