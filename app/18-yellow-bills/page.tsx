import React from "react";
import NameList from "../_components/NameList";
import PageTitle from "../_components/PageTitle";

const names = {
  yellowBills: [
    "Mary Jane Lambot",
    "Kamille Moreno",
    "Lorena Lambot",
    "Melaica Constantino",
    "Michelle Domingo",
    "Jun Damian",
    "Demilyn Caorpin - Constantino",
    "Frysthine Anglit - Sarmiento",
    "Lovely Torres - Ochoa",
    "John Michael Rodas",
    "Maria T. Mazo",
    "Racquel Clanuga",
    "Monique Repil",
    "PCpl Yhonor Hinog",
    "Marife Baylon",
    "Jericho Agapito",
    "Rodel Clemente",
    "Joel Abrenica",
  ],
};

const message =
  "Like golden rays breaking through the Swan Eclipse, these eighteen yellow bills illuminate her path to prosperity.";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col bg-white px-4 py-24 dark:bg-gray-700">
      <div className="mx-auto w-full max-w-4xl">
        <PageTitle title="18 Yellow Bills" message={message} />
        <NameList names={names.yellowBills} />
      </div>
    </main>
  );
}
