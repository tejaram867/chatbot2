import React from 'react';
import { GraduationCap, Brain, Target } from 'lucide-react';

const teamMembers = [
  {
    name: "Dr. Alex Thompson",
    role: "Founder & CEO",
    description: "Former professor with 15+ years in EdTech",
    icon: GraduationCap
  },
  {
    name: "Lisa Wang",
    role: "Head of AI",
    description: "AI researcher specializing in NLP",
    icon: Brain
  },
  {
    name: "Marcus Foster",
    role: "Lead Developer",
    description: "Full-stack developer & UX specialist",
    icon: Target
  }
];

interface AboutUsProps {
  theme: 'light' | 'dark';
}

export function AboutUs({ theme }: AboutUsProps) {
  return (
    <div className="py-16 px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          About Us
        </h2>
        <div className="text-center mb-12">
          <p className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            We're a team of educators, AI researchers, and developers passionate about revolutionizing how students learn.
            Our mission is to make studying more efficient, engaging, and accessible for everyone.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl transition-all duration-300 transform hover:scale-105 ${
                theme === 'dark' ? 'bg-gray-800/40' : 'bg-white/40'
              } backdrop-blur-sm shadow-lg hover:shadow-xl`}
            >
              <div className="w-12 h-12 mx-auto rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center mb-4">
                <member.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className={`text-lg font-semibold mb-1 ${
                theme === 'dark' ? 'text-gray-200' : 'text-gray-800'
              }`}>
                {member.name}
              </h3>
              <div className={`text-sm font-medium mb-2 ${
                theme === 'dark' ? 'text-purple-400' : 'text-purple-600'
              }`}>
                {member.role}
              </div>
              <p className={`text-sm ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}