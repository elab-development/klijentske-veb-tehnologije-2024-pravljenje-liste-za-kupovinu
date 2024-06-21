import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "../src/css/App.css";
import Pocetna from "./pages/Pocetna";
import { Prijava } from "./pages/Prijava";
import { Registracija } from "./pages/Registracija";
import { Karijera } from "./pages/Karijera";
import { KontaktForm } from "./pages/KontaktForm";
import { SviProizvodi } from "./pages/SviProizvodi";
import { Korpa } from "./pages/Korpa";

const router = createBrowserRouter([
  { path: "/", element: <Pocetna /> },
  { path: "/prijava", element: <Prijava /> },
  { path: "/registracija", element: <Registracija /> },
  { path: "/karijera", element: <Karijera /> },
  { path: "/kontaktform", element: <KontaktForm /> },
  //NAPRAVI KORP
  { path: "/sviProizvodi", element: <SviProizvodi/> },
  // napravi sve pojedinacne telefone
  // { path: "/pojedinacni proizvodi", element: <KontaktForm /> },
  { path: "/korpa", element: <Korpa/> },
]);

function App() {
  
  return <RouterProvider router={router} />;
}

export default App;
