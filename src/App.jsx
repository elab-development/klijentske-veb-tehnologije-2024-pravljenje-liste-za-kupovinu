import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "../src/css/App.css";
import Pocetna from "./pages/Pocetna";
import { Prijava } from "./pages/Prijava";
import { Registracija } from "./pages/Registracija";

const router = createBrowserRouter([
  { path: "/", element: <Pocetna /> },
  { path: "/prijava", element: <Prijava /> },
  { path: "/registracija", element: <Registracija /> }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
