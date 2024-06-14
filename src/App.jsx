import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "../src/css/App.css";
import Pocetna from "./pages/Pocetna";

const router = createBrowserRouter([{ path: "/", element: <Pocetna /> }]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
