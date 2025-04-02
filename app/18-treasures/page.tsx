import React from "react";
import NameList from "../_components/NameList";
import PageTitle from "../_components/PageTitle";

const names = {
  treasures: [
    "Missy Lambot",
    "Myth Aera Lambot",
    "Kristof Lambot",
    "Daniela Damian",
    "Irish De Rama",
    "Euna Marie Vidad",
    "Maricon Anglit",
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

const message =
  "These treasures, like stars in the eclipsed sky, are gifts of wisdom, love, and cherished memories.";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col bg-white px-4 py-24 dark:bg-gray-700">
      <div className="mx-auto w-full max-w-4xl">
        <PageTitle title="18 Treasures" message={message} />
        <NameList names={names.treasures} />
      </div>
    </main>
  );
}
