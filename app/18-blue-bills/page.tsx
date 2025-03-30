import React from "react";
import NameList from "../_components/NameList";

const names = {
  blueBills: [
    "Rowena Lambot",
    "Marru Lambot - Anglit",
    "Jem Mar Anglit",
    "Ronalie Lambot",
    "Mila Lambot - Moreno",
    "Gener Lambot",
    "Amado Lambot",
    "Thess Lambot - Domingo",
    "Glo Potencio - Lizano",
    "Randy Lizano",
    "Cristy Lizano - Empleo",
    "Connie Anglit",
    "Ninong Buboy Fumera",
    "Ninong Mawe Gabitanan",
    "Ninong Greg De Guzman",
    "Ninang Imelda Sarmiento",
    "Doc. Alexander Lim",
    "Doc Aireen Boguiro",
  ],
};

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col bg-white px-4 py-24 dark:bg-gray-700">
      <NameList names={names.blueBills} title="18 Blue Bills" />
    </main>
  );
}
