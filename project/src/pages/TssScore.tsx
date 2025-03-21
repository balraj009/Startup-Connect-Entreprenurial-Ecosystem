import React, { useState } from 'react';
import { CheckCircle, AlertCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const TSSScore = () => {
  const [equity, setEquity] = useState('');
  const [monthlySales, setMonthlySales] = useState('');
  const [investmentProposition, setInvestmentProposition] = useState('');
  const [score, setScore] = useState<number | null>(null);
  const navigate = useNavigate();

  const calculateScore = () => {
    let totalScore = 0;
    
    // Founder's equity check
    if (parseFloat(equity) >= 51) {
      totalScore += 33.33;
    }
    
    // Monthly sales check
    if (parseFloat(monthlySales) >= 500000) {
      totalScore += 33.33;
    }
    
    // Investment proposition check (simplified scoring)
    if (investmentProposition.length > 50) {
      totalScore += 33.34;
    }
    
    setScore(totalScore);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">TSS Score Evaluation</h2>
        
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Founder's Equity (%)
            </label>
            <input
              type="number"
              value={equity}
              onChange={(e) => setEquity(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter founder's equity percentage"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Monthly Sales (₹)
            </label>
            <input
              type="number"
              value={monthlySales}
              onChange={(e) => setMonthlySales(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter monthly sales amount"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Investment Proposition
            </label>
            <textarea
              value={investmentProposition}
              onChange={(e) => setInvestmentProposition(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              rows={4}
              placeholder="Describe your investment proposition"
            />
          </div>

          <button
            onClick={calculateScore}
            className="w-full bg-indigo-600 text-white py-3 px-6 rounded-md hover:bg-indigo-700 transition-colors"
          >
            Calculate TSS Score
          </button>

          {score !== null && (
            <div className="mt-6 p-4 rounded-lg border">
              <h3 className="text-xl font-semibold mb-2">Your TSS Score: {score.toFixed(2)}%</h3>
              
              {score >= 80 ? (
                <div className="flex items-center text-green-600">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  <span>Congratulations! Your startup is ready for investment.</span>
                </div>
              ) : (
                <div>
                  <div className="flex items-center text-amber-600 mb-4">
                    <AlertCircle className="h-5 w-5 mr-2" />
                    <span>Your startup needs improvement to attract investors.</span>
                  </div>
                  {score < 50 && (
                    <button
                      onClick={() => navigate('/GameMode')}
                      className="w-full bg-amber-500 text-white py-2 px-4 rounded-md hover:bg-amber-600 transition-colors"
                    >
                      Start Improvement Journey
                    </button>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TSSScore