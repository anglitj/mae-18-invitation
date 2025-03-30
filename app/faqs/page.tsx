import { Imperial_Script } from "next/font/google";

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
      "The dress code is casual attire all white (from head to toe). You can check attire section for more details.",
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
    answer:
      "Please check your invitation for the number of guests allowed. If you have any questions, feel free to contact us.",
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
        <h1
          className={`${imperialScript.className} mb-12 text-center text-5xl text-gray-800 dark:text-white`}
        >
          Frequently Asked Questions
        </h1>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-gray-600 dark:bg-gray-800"
            >
              <h2 className="mb-3 text-xl font-semibold text-gray-800 dark:text-white">
                {faq.question}
              </h2>
              <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-300">
            Still have questions? Feel free to contact us for any additional
            information.
          </p>
        </div>
      </div>
    </main>
  );
}
