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
    "Auntie Mareng",
    "Racquel Clanuga",
    "Monique Repil",
    "PCpl Yhonor Hinog",
    "Marife Baylon",
    "Jericho Agapito",
    "Rodel Clemente",
    "Joel Abrenica",
  ],
};

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col bg-white px-4 py-24 dark:bg-gray-700">
      <div className="mx-auto w-full max-w-4xl">
        <PageTitle title="18 Yellow Bills" />
        <NameList names={names.yellowBills} title="18 Yellow Bills" />
      </div>
    </main>
  );
}
