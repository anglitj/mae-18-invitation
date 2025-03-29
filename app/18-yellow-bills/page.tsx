import React from "react";
import NameList from "../_components/NameList";

const names = {
  yellowBills: [
    "Mary Jane Lambot",
    "Kamille Moreno",
    "Melaica Constantino",
    "Maryknoll Lizano",
    "Michelle Domingo",
    "Zyreeh Empleo",
    "Gilbert Lizano",
    "Jun Damian",
    "Frysthine Anglit - Sarmiento",
    "Lovely Torres - Ochoa",
    "Ester Torres",
    "Shanea Hudieras",
    "Marife Baylon",
    "Jericho Agapito",
    "Kuya Rodel",
    "Sir Pulis",
  ],
};

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col bg-white px-4 py-24 dark:bg-gray-900">
      <NameList names={names.yellowBills} title="18 Yellow Bills" />
    </main>
  );
}
