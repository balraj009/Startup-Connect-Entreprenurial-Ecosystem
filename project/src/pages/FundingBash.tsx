import React, { useState } from 'react';
import { Upload, FileText, Video, Send, CheckCircle } from 'lucide-react';

const FundingBash = () => {
  const [pptFile, setPptFile] = useState<File | null>(null);
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle file submission here
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Getting Funds And Mentors is now Easier With Us
        </h1>
        <p className="text-xl text-gray-600">
          Upload your pitch deck and video to connect with potential investors and mentors
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-xl p-8">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* PPT Upload */}
          <div className="relative">
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 hover:border-indigo-500 transition-colors">
              <input
                type="file"
                accept=".ppt,.pptx"
                onChange={(e) => setPptFile(e.target.files?.[0] || null)}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              <div className="text-center">
                <FileText className="mx-auto h-12 w-12 text-gray-400" />
                <p className="mt-4 text-lg font-medium text-gray-900">Upload Pitch Deck</p>
                <p className="mt-2 text-sm text-gray-500">
                  Drop your PPT file here or click to browse
                </p>
                {pptFile && (
                  <p className="mt-2 text-sm text-indigo-600">{pptFile.name}</p>
                )}
              </div>
            </div>
          </div>

          {/* Video Upload */}
          <div className="relative">
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 hover:border-indigo-500 transition-colors">
              <input
                type="file"
                accept="video/*"
                onChange={(e) => setVideoFile(e.target.files?.[0] || null)}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              <div className="text-center">
                <Video className="mx-auto h-12 w-12 text-gray-400" />
                <p className="mt-4 text-lg font-medium text-gray-900">Upload Pitch Video</p>
                <p className="mt-2 text-sm text-gray-500">
                  Drop your video file here or click to browse
                </p>
                {videoFile && (
                  <p className="mt-2 text-sm text-indigo-600">{videoFile.name}</p>
                )}
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className={`w-full py-4 px-6 rounded-lg text-white font-semibold text-lg flex items-center justify-center space-x-2 transition-all transform hover:scale-105 ${
              submitted
                ? 'bg-green-500'
                : 'bg-gradient-to-r from-indigo-600 to-purple-600'
            }`}
          >
            {submitted ? (
              <>
                <CheckCircle className="h-6 w-6" />
                <span>Submitted Successfully!</span>
              </>
            ) : (
              <>
                <Send className="h-6 w-6" />
                <span>Submit Pitch</span>
              </>
            )}
          </button>
        </form>

        {/* Guidelines */}
        <div className="mt-12 p-6 bg-gray-50 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Submission Guidelines</h3>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-center">
              <Upload className="h-5 w-5 mr-2 text-indigo-600" />
              Pitch deck should be in PPT or PPTX format
            </li>
            <li className="flex items-center">
              <Upload className="h-5 w-5 mr-2 text-indigo-600" />
              Video should be maximum 5 minutes long
            </li>
            <li className="flex items-center">
              <Upload className="h-5 w-5 mr-2 text-indigo-600" />
              Include your unique value proposition
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FundingBash;