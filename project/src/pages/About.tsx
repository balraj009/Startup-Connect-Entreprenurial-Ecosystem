import React from 'react';
import { Users, Rocket, Target, Brain } from 'lucide-react';

const About = () => {
  const team = [
    { name: 'Balraj Chaure', role: 'Team Lead' },
    { name: 'Kavya Tiwari', role: 'Frontend Developer' },
    { name: 'Gaurav Soni', role: 'Backend Developer' },
    { name: 'Shivam Tiwari', role: 'UI/UX Designer' }
  ];

  return (
    <>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Team Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Meet Team Tech Titan</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We're a passionate team dedicated to revolutionizing the startup ecosystem
          through innovative solutions and meaningful connections.
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-8 mb-16">
        {team.map((member, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg p-6 transform transition-all hover:scale-105">
            <div className="w-24 h-24 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-12 w-12 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 text-center mb-2">{member.name}</h3>
            <p className="text-gray-600 text-center">{member.role}</p>
          </div>
        ))}
      </div>

      {/* Mission & Vision */}
      <div className="grid md:grid-cols-2 gap-12">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center mb-6">
            <Target className="h-10 w-10 text-indigo-600" />
            <h2 className="text-2xl font-bold text-gray-900 ml-4">Our Mission</h2>
          </div>
          <p className="text-gray-600 text-lg">
            To empower entrepreneurs by providing a comprehensive platform that connects them
            with mentors, investors, and resources needed to transform their innovative ideas
            into successful businesses.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center mb-6">
            <Rocket className="h-10 w-10 text-indigo-600" />
            <h2 className="text-2xl font-bold text-gray-900 ml-4">Future Scope</h2>
          </div>
          <p className="text-gray-600 text-lg">
            We envision expanding our platform to include AI-driven matching algorithms,
            virtual incubation programs, and a global network of startup resources to
            facilitate seamless growth and success for entrepreneurs worldwide.
          </p>
        </div>
      </div>

      {/* Business Impact */}
      <div className="mt-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl shadow-xl p-8 text-white">
        <div className="flex items-center mb-6">
          <Brain className="h-10 w-10" />
          <h2 className="text-2xl font-bold ml-4">Business Impact</h2>
        </div>
        <p className="text-lg opacity-90">
          Our platform aims to revolutionize how startups grow and scale. By providing
          structured evaluation through TSS Score, mentorship opportunities, and a vibrant
          community, we're creating a sustainable ecosystem that nurtures innovation and
          drives economic growth.
        </p>
      </div>
    </div>
    </>
  );
};

export default About;