import React, { useState } from 'react';
import { Trophy, CheckCircle2, ArrowRight } from 'lucide-react';

const tasks = [
  {
    id: 1,
    title: "Market Research",
    description: "Conduct thorough market research to understand your target audience and competitors.",
    points: 100,
    tips: [
      "Identify your target market demographics",
      "Analyze competitor strengths and weaknesses",
      "Survey potential customers",
    ]
  },
  {
    id: 2,
    title: "Business Model Optimization",
    description: "Refine your business model to improve revenue streams and reduce costs.",
    points: 150,
    tips: [
      "Review pricing strategy",
      "Identify new revenue streams",
      "Optimize operational costs",
    ]
  },
  {
    id: 3,
    title: "Financial Planning",
    description: "Create a detailed financial plan and projections.",
    points: 200,
    tips: [
      "Develop revenue projections",
      "Create cost estimates",
      "Plan for contingencies",
    ]
  }
];

const GameMode = () => {
  const [currentTask, setCurrentTask] = useState(0);
  const [completedTasks, setCompletedTasks] = useState<number[]>([]);
  const [points, setPoints] = useState(0);

  const completeTask = () => {
    if (currentTask < tasks.length) {
      setCompletedTasks([...completedTasks, tasks[currentTask].id]);
      setPoints(points + tasks[currentTask].points);
      setCurrentTask(currentTask + 1);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Business Improvement Journey</h2>
          <div className="flex items-center bg-amber-100 px-4 py-2 rounded-lg">
            <Trophy className="h-6 w-6 text-amber-600 mr-2" />
            <span className="font-semibold text-amber-800">{points} Points</span>
          </div>
        </div>

        {currentTask < tasks.length ? (
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Task {currentTask + 1}: {tasks[currentTask].title}
              </h3>
              <p className="text-gray-600 mb-4">{tasks[currentTask].description}</p>
              
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-gray-700 mb-2">Tips to complete this task:</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  {tasks[currentTask].tips.map((tip, index) => (
                    <li key={index}>{tip}</li>
                  ))}
                </ul>
              </div>
            </div>

            <button
              onClick={completeTask}
              className="w-full bg-indigo-600 text-white py-3 px-6 rounded-md hover:bg-indigo-700 transition-colors flex items-center justify-center"
            >
              <span>Complete Task</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        ) : (
          <div className="text-center py-8">
            <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Congratulations!</h3>
            <p className="text-gray-600 mb-6">
              You've completed all improvement tasks. Your business is now better positioned for success!
            </p>
            <button
              onClick={() => window.location.href = '/tss-score'}
              className="bg-green-600 text-white py-3 px-6 rounded-md hover:bg-green-700 transition-colors"
            >
              Retake TSS Score Test
            </button>
          </div>
        )}

        <div className="mt-8">
          <h4 className="font-semibold text-gray-700 mb-4">Progress</h4>
          <div className="flex gap-2">
            {tasks.map((task, index) => (
              <div
                key={task.id}
                className={`flex-1 h-2 rounded-full ${
                  completedTasks.includes(task.id)
                    ? 'bg-green-500'
                    : index === currentTask
                    ? 'bg-amber-500'
                    : 'bg-gray-200'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameMode;