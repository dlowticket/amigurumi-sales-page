import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <div key={index} className="border border-gray-200 rounded-lg">
          <button
            type="button"
            className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
            onClick={() => toggleFAQ(index)}
            aria-expanded={openIndex === index}
          >
            <span className="font-semibold text-gray-900">{item.question}</span>
            <i 
              className={`fas fa-chevron-down text-gray-500 transition-transform ${
                openIndex === index ? 'rotate-180' : ''
              }`}
            />
          </button>
          {openIndex === index && (
            <div className="px-6 pb-4">
              <p className="text-gray-700">{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
