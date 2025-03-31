import { Imperial_Script } from "next/font/google";
import { FaFeatherAlt } from "react-icons/fa";
import { GiFeather } from "react-icons/gi";
import { IoEllipse } from "react-icons/io5";

const imperialScript = Imperial_Script({
  weight: "400",
  subsets: ["latin"],
});

const faqs = [
  {
    question: "Where is the event venue?",
    answer:
      "The celebration will be held at Jhoenie's Island Resort, located at Santa Ana Rd., Sto. Tomas, Batangas. You can click on the venue name on the main page for directions.",
  },
  {
    question: "What is the dress code?",
    answer:
      "All guests are required to wear an ALL WHITE ATTIRE. You can check attire section for more details.",
  },
  {
    question: "What time should I arrive?",
    answer:
      "The event starts at 5:00 PM. We recommend arriving 15-30 minutes early to ensure you don't miss any part of the celebration.",
  },
  {
    question: "Is there parking available?",
    answer:
      "Yes, there is parking available at Jhoenie's Island Resort. The venue has a dedicated parking area for guests.",
  },
  {
    question: "Can I bring a plus one?",
    answer: "Only one companion/PLUS ONE is allowed.",
  },
  {
    question: "Will there be food and drinks?",
    answer:
      "Yes, there will be a buffet dinner and drinks served during the celebration.",
  },
  {
    question: "Is there a gift registry?",
    answer:
      "Your presence is the greatest gift. However, if you would like to give something, monetary gifts would be appreciated.",
  },
  {
    question: "How can I RSVP?",
    answer:
      "You can confirm your attendance through the RSVP page on this website. Please respond as soon as possible to help us with the preparations.",
  },
];

export default function FAQs() {
  return (
    <main className="min-h-screen bg-white px-4 py-16 dark:bg-gray-700">
      <div className="mx-auto max-w-4xl">
        <div className="relative mb-12">
          {/* <IoEllipse className="absolute -left-8 -top-8 size-16 text-gray-200 dark:text-gray-600" />
          <FaFeatherAlt className="absolute -left-12 -top-4 size-6 rotate-45 text-gray-300 dark:text-gray-500" /> */}
          <h1
            className={`${imperialScript.className} relative flex items-center justify-center gap-3 text-5xl text-gray-800 dark:text-white`}
          >
            <FaFeatherAlt className="size-8" />
            Frequently Asked Questions
            <FaFeatherAlt className="size-8" />
          </h1>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="relative rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-gray-600 dark:bg-gray-800"
            >
              <IoEllipse className="absolute -left-4 -top-4 size-8 text-gray-100 dark:text-gray-700" />
              <h2 className="mb-3 flex items-center gap-3 text-xl font-semibold text-gray-800 dark:text-white">
                <GiFeather className="size-6" />
                {faq.question}
              </h2>
              <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
              <IoEllipse className="absolute -bottom-4 -right-4 size-8 text-gray-100 dark:text-gray-700" />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="relative inline-block">
            <FaFeatherAlt className="absolute -left-6 -top-2 size-4 rotate-45 text-gray-300 dark:text-gray-500" />
            <p className="text-gray-600 dark:text-gray-300">
              Still have questions? Feel free to contact us for any additional
              information.
            </p>
            <FaFeatherAlt className="absolute -bottom-2 -right-6 size-4 -rotate-45 text-gray-300 dark:text-gray-500" />
          </div>
        </div>
      </div>
    </main>
  );
}
