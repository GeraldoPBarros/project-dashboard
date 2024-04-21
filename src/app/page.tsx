// DEVELOP PROJECT STRUCTURE
// CARDS
// GRAPHICS
import "tailwindcss/tailwind.css";

import { Header } from "@/components/header";
import { Cards } from "../components/cards";

export default function Home() {
  return (
    <div className="flex w-full flex-col">
      <Header />
      <Cards />
      <label>Hellow World!</label>
    </div>
  );
}
