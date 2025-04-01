import React from "react";
import NameList from "../_components/NameList";
import PageTitle from "../_components/PageTitle";

const names = {
  blueBills: [
    "Mila Lambot - Moreno",
    "Gener Lambot",
    "Amado Lambot",
    "Thess Lambot - Domingo",
    "Glo Potencio - Lizano",
    "Randy Lizano",
    "Cristy Lizano - Empleo",
    "Eric John Lavina",
    "Denia Pizarra",
    "Doc. Alexander Lim",
    "Doc Aireen Boguiro",
    "PMSg Jess Hinog",
    "Gudufredo Calanuga",
    "Ninong Imelda Sarmiento",
    "Ninong Mabel Reyes",
    "Ninong Buboy Fumera",
    "Ninong Mawe Gabitanan",
    "Ninong Greg De Guzman",
  ],
};

const message =
  "As the Swan Eclipse reveals its hidden wealth, eighteen blue bills, a gift of abundance for her journey.";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col bg-white px-4 py-24 dark:bg-gray-700">
      <div className="mx-auto w-full max-w-4xl">
        <PageTitle title="18 Blue Bills" message={message} />
        <NameList names={names.blueBills} />
      </div>
    </main>
  );
}
