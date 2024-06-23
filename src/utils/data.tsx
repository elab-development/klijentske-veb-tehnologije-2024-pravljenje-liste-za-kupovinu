import React, { useState, createContext, useContext, ReactNode } from "react";

export const sviTelefoniniz = [
  { name: "iPhone 14 ", price: "169999", image: "/images/iphone14.jpg" },
  {
    name: "Samsung A54",
    price: "59999",
    image: "/images/samsungA54.webp",
  },
  {
    name: "Samsung A72",
    price: "49999",
    image: "/images/samsungA72.png",
  },
  {
    name: "Xiaomi 13 Pro",
    price: "34999",
    image: "/images/redmi13.png",
  },
  {
    name: "iPhone 13",
    price: "29999",
    image: "/images/iphone13Mini.jpg",
  },
  { name: "Honor 200 Pro", price: "149999", image: "/images/honor200pro.webp" },
  {
    name: "Motorola 50",
    price: "69999",
    image: "/images/MotorolaEdge50Pro.jpg",
  },
];

export interface TelefonData {
  name: string;
  image: string;
  price: string;
}

// Creating a context to share the state across components
const KorpaContext = createContext<{
  korpaTelefoni: TelefonData[];
  setKorpaTelefoni: React.Dispatch<React.SetStateAction<TelefonData[]>>;
  elementsInCart: number;
  setElementsInCart: React.Dispatch<React.SetStateAction<number>>;
} | null>(null);

interface KorpaProviderProps {
  children: ReactNode;  // Explicitly declaring that this component expects children
}

// This component provides the cart state to its children
export const KorpaProvider: React.FC<KorpaProviderProps> = ({ children }) => {
  const [korpaTelefoni, setKorpaTelefoni] = useState<TelefonData[]>([]);
  const [elementsInCart, setElementsInCart] = useState(0);

  return (
    <KorpaContext.Provider value={{ korpaTelefoni, setKorpaTelefoni, elementsInCart, setElementsInCart }}>
      {children}
    </KorpaContext.Provider>
  );
};

export const useKorpa = () => {
  const context = useContext(KorpaContext);
  if (!context) {
    throw new Error('useKorpa mora biti koriscena u KorpaProvider');
  }
  return context;
};
