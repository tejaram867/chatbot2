import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How does the summarization tool work?",
    answer: "The summarization tool analyzes your text and creates concise summaries based on your selected length preference (short, medium, or long). It identifies key points and main ideas to generate a comprehensive overview."
  },
  {
    question: "Can I customize the flashcards?",
    answer: "Yes! You can adjust the number of flashcards generated and the system will automatically create question-answer pairs from your content. The flashcards focus on key concepts and important terms."
  },
  {
    question: "What types of quizzes are available?",
    answer: "You can generate multiple-choice, true-false, or fill-in-the-blank questions. You can also adjust the difficulty level and number of questions to match your study needs."
  },
  {
    question: "Can I save or export my study materials?",
    answer: "Yes! All generated content can be downloaded as markdown files, making it easy to save and review later. Look for the download button next to the generate button."
  },
  {
    question: "What file formats are supported for upload?",
    answer: "The system supports text files (.txt), PDFs (.pdf), and images (.png, .jpg, .jpeg). For images, we use OCR technology to extract text content."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { theme } = useTheme();

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-16 px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className={`text-3xl font-bold mb-12 text-center ${
          theme === 'dark' ? 'text-gray-200' : 'text-gray-800'
        }`}>
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`rounded-xl overflow-hidden transition-all duration-300 transform ${
                theme === 'dark' ? 'bg-gray-800' : 'bg-white'
              } shadow-md hover:shadow-lg ${openIndex === index ? 'scale-102' : 'hover:scale-101'}`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className={`w-full px-6 py-4 flex items-center justify-between text-left group ${
                  theme === 'dark' ? 'text-gray-200' : 'text-gray-800'
                }`}
              >
                <span className={`font-medium transition-all duration-300 ${
                  openIndex === index 
                    ? 'text-xl' 
                    : 'group-hover:text-lg'
                }`}>
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`} />
                ) : (
                  <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform duration-300 group-hover:scale-110`} />
                )}
              </button>
              <div
                className={`px-6 transition-all duration-300 overflow-hidden ${
                  openIndex === index ? 'py-4 opacity-100' : 'py-0 h-0 opacity-0'
                } ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}