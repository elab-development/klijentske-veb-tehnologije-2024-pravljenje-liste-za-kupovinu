import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "../src/css/App.css";
import Pocetna from "./pages/Pocetna";
import { Prijava } from "./pages/Prijava";
import { Registracija } from "./pages/Registracija";
import { Karijera } from "./pages/Karijera";
import { KontaktForm } from "./pages/KontaktForm";
import { SviProizvodi } from "./pages/SviProizvodi";
import { Korpa } from "./pages/Korpa";
import { useState } from "react";
import React from "react";
import { TelefonData } from "./utils/data";

const router = createBrowserRouter([
  { path: "/", element: <Pocetna /> },
  { path: "/prijava", element: <Prijava /> },
  { path: "/registracija", element: <Registracija /> },
  { path: "/karijera", element: <Karijera /> },
  { path: "/kontaktform", element: <KontaktForm /> },
  { path: "/sviProizvodi", element: <SviProizvodi/> },
  { path: "/korpa", element: <Korpa /> },
]);

function App() {
 
 const [korpaTelefoni, setKorpaTelefoni] = useState<TelefonData[]>([]);
 const[elementsInCart,setElementsInCart]=useState(0);
 const addToCart= () => {
  setElementsInCart(elementsInCart + 1);
};

return <RouterProvider router={router} />;
}


export default App;
