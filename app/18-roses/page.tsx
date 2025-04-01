import NameList from "../_components/NameList";
import PageTitle from "../_components/PageTitle";

const names = {
  roses: [
    "Marlon Lambot",
    "Romar Lambot",
    "Aljur Lambot",
    "Arby Lambot",
    "Zaid Mohammed",
    "Ian Damian",
    "Kim Chester Moreno",
    "Liehn Empleo",
    "Jeff Bonaobra",
    "Kenn Russel Castillo",
    "Leander Bulatao",
    "John Mig Papa",
    "Nathaniel Amber Nones",
    "Kristoff Janrick Janda",
    "Shane Lloyd Bejo",
    "Axel Aaron Bruzo",
    "Dustin Reyes",
    "Kendrick Vargas",
  ],
};

const message =
  "Like the swan emerging from shadow, each rose marks a step towards radiant womanhood.";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col bg-white px-4 py-24 dark:bg-gray-700">
      <div className="mx-auto w-full max-w-4xl">
        <PageTitle title="18 Roses" message={message} />
        <NameList names={names.roses} />
      </div>
    </main>
  );
}
