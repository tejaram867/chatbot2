import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Graduate Student",
    content: "Splan has revolutionized my study routine. The flashcard feature is incredibly effective for memorization.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/1.jpg"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Medical Student",
    content: "The quiz generation tool helps me prepare for exams efficiently. It's like having a personal tutor.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/2.jpg"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Undergraduate",
    content: "The summary feature saves me so much time when reviewing lengthy research papers.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/3.jpg"
  }
];

interface ReviewsProps {
  theme: 'light' | 'dark';
}

export function Reviews({ theme }: ReviewsProps) {
  return (
    <div className="py-16 px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          What Our Users Say
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className={`p-6 rounded-xl transition-all duration-300 transform hover:scale-105 ${
                theme === 'dark' ? 'bg-gray-800/40' : 'bg-white/40'
              } backdrop-blur-sm shadow-lg hover:shadow-xl`}
            >
              <div className="flex items-center mb-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className={`font-semibold ${
                    theme === 'dark' ? 'text-gray-200' : 'text-gray-800'
                  }`}>
                    {review.name}
                  </h3>
                  <p className={`text-sm ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {review.role}
                  </p>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className={`text-sm ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                "{review.content}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}