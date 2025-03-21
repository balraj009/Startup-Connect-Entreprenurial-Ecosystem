import React from 'react';
import { Users, MessageSquare, Calendar } from 'lucide-react';

const Community = () => {
  const entrepreneurs = [
    {
      name: "Sarah Johnson",
      company: "EcoTech Solutions",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
      description: "Building sustainable technology solutions for a greener future."
    },
    {
      name: "Michael Chen",
      company: "FinFlow",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
      description: "Revolutionizing financial technology with AI-driven solutions."
    },
    {
      name: "Priya Patel",
      company: "HealthTech Innovation",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
      description: "Creating accessible healthcare solutions through technology."
    }
  ];

  const upcomingEvents = [
    {
      title: "Startup Pitch Night",
      date: "March 25, 2024",
      time: "6:00 PM IST"
    },
    {
      title: "Investor Networking Session",
      date: "March 28, 2024",
      time: "4:30 PM IST"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          Community of Entrepreneurship
        </h1>
        <p className="mt-4 text-xl text-gray-600">
          Connect with fellow entrepreneurs and investors in our thriving community
        </p>
      </div>

      {/* Featured Entrepreneurs */}
      <section className="mb-16">
        <div className="flex items-center mb-8">
          <Users className="h-6 w-6 text-indigo-600 mr-2" />
          <h2 className="text-2xl font-bold text-gray-900">Featured Entrepreneurs</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {entrepreneurs.map((entrepreneur, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <img
                  src={entrepreneur.image}
                  alt={entrepreneur.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-900 text-center">{entrepreneur.name}</h3>
                <p className="text-indigo-600 text-center mb-2">{entrepreneur.company}</p>
                <p className="text-gray-600 text-center">{entrepreneur.description}</p>
                <button className="mt-4 w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
                  Connect
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Community Activities */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Discussion Forums */}
        <section className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center mb-6">
            <MessageSquare className="h-6 w-6 text-indigo-600 mr-2" />
            <h2 className="text-xl font-bold text-gray-900">Discussion Forums</h2>
          </div>
          <div className="space-y-4">
            <div className="border-b pb-4">
              <h3 className="font-medium text-gray-900">Startup Funding Strategies</h3>
              <p className="text-gray-600 text-sm">32 discussions • Last active 2h ago</p>
            </div>
            <div className="border-b pb-4">
              <h3 className="font-medium text-gray-900">Tech Innovation</h3>
              <p className="text-gray-600 text-sm">48 discussions • Last active 1h ago</p>
            </div>
            <div>
              <h3 className="font-medium text-gray-900">Market Expansion</h3>
              <p className="text-gray-600 text-sm">27 discussions • Last active 4h ago</p>
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center mb-6">
            <Calendar className="h-6 w-6 text-indigo-600 mr-2" />
            <h2 className="text-xl font-bold text-gray-900">Upcoming Events</h2>
          </div>
          <div className="space-y-4">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="border-b pb-4 last:border-b-0">
                <h3 className="font-medium text-gray-900">{event.title}</h3>
                <p className="text-gray-600">{event.date} at {event.time}</p>
                <button className="mt-2 text-indigo-600 hover:text-indigo-700 text-sm font-medium">
                  Register Now →
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Community;