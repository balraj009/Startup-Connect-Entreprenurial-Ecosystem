import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket, Users, BarChart2, MessageSquare, DollarSign, Info } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Rocket className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">StartupConnect</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link to="/community" className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50">
              <Users className="h-5 w-5 mr-1" />
              Community
            </Link>
            <Link to="/feed" className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50">
            <MessageSquare className="h-5 w-5 mr-1" />
              Feed
            </Link>
            <Link to="/tss-score" className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50">
              <BarChart2 className="h-5 w-5 mr-1" />
              TSS Score
            </Link>
            <Link to="/funding-bash" className="flex items-center px-3 py-2 rounded-md text-gray-700 hover:text-indigo-600">
              <DollarSign className="h-5 w-5 mr-1" />
              <span>Funding Bash</span>
            </Link>
            <Link to="/about" className="flex items-center px-3 py-2 rounded-md text-gray-700 hover:text-indigo-600">
              <Info className="h-5 w-5 mr-1" />
              <span>About</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;