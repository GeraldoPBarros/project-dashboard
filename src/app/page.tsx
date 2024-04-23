// DEVELOP PROJECT STRUCTURE
// CARDS
// GRAPHICS
import "tailwindcss/tailwind.css";

import { Component } from "../components/components";

export default function Home() {
  return (
    <div className="flex w-full flex-col">
      <Component.Header />
      <Component.Cards />
      <div className="flex w-full justify-between px-5">
        <Component.StatusGraphic />
        <label>Employees</label>
      </div>
      <label>Hellow World!</label>
    </div>
  );
}
