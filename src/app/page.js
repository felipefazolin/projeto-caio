"use client";

import Link from "next/link";
import DivComponent from "../components/DivComponent";

// Aqui você monta a página Home
export default function Home() {
  return (
    // Aqui você monta o conteúdo, pode ser com componentes ou puro html
    <>
      <div>teste pode ser html que funciona</div>
      <DivComponent />
      <DivComponent />
      <DivComponent />
    
    </>
  );
}
