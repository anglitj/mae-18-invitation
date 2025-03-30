import React from "react";
import NameList from "../_components/NameList";

const names = {
  treasures: [
    "Missy Lambot",
    "Myth Aera Lambot",
    "Kristof Lambot",
    "Cristine Lambot",
    "Daniela Damian",
    "Irish De Rama",
    "Marcicon Anglit",
    "Evelyn Del Mundo",
    "Kathlyn Kate Hernandez",
    "Aaliyah Stephanie Sombilon",
    "Chierra Mae Concepcion",
    "Anne Bernadeth Mejino",
    "Rhianna Andrei Labio",
    "Francheska Pucyutan",
    "Alexandra Visperas",
    "Jazzmeen Mundin",
    "Margarette Laas",
    "Cyrine Manalo",
  ],
};

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col bg-white px-4 py-24 dark:bg-gray-700">
      <NameList names={names.treasures} title="18 Treasures" />
    </main>
  );
}
