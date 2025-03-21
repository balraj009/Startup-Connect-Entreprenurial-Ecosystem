import React from 'react';
import { Users, Award, MessageSquare, DollarSign, Target, Rocket } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Users className="h-8 w-8 text-indigo-600" />,
      title: "Vibrant Community",
      description: "Connect with fellow entrepreneurs, mentors, and investors in our active community platform."
    },
    {
      icon: <Award className="h-8 w-8 text-indigo-600" />,
      title: "TSS Score",
      description: "Get your startup evaluated with our comprehensive Testing Startup Score system."
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-indigo-600" />,
      title: "Idea Feed",
      description: "Share your startup ideas and get valuable feedback from the community."
    },
    {
      icon: <DollarSign className="h-8 w-8 text-indigo-600" />,
      title: "Funding Bash",
      description: "Submit your pitch deck and video to connect with potential investors."
    },
    {
      icon: <Target className="h-8 w-8 text-indigo-600" />,
      title: "Improvement Journey",
      description: "Follow our gamified improvement path to enhance your startup's potential."
    },
    {
      icon: <Rocket className="h-8 w-8 text-indigo-600" />,
      title: "Mentor Matching",
      description: "Get matched with experienced mentors who can guide your startup journey."
    }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
        
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 transform transition-all duration-300 hover:scale-105"
            >
              <div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;