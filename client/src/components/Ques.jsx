import React, { useState } from 'react';

const Ques = ({ data, func }) => {
  const [isSolutionModalOpen, setIsSolutionModalOpen] = useState(false);

  const openSolutionModal = () => {
    setIsSolutionModalOpen(true);
  };

  const closeSolutionModal = () => {
    setIsSolutionModalOpen(false);
  };

  // Define the SolutionModal component within the Ques component
  const SolutionModal = ({ data, closeModal }) => {
    return (
      <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-4 rounded-lg">
          <h2 className="text-lg font-bold mb-4">Solutions</h2>
          {/* Render the list of solutions */}
          <ul>
            {data.map((solution) => (
              <li key={solution._id}>
                {/* Display solution content or any other relevant information */}
                {solution.content}
              </li>
            ))}
          </ul>
          {/* Close Modal Button */}
          <button
            className="ml-2 text-gray-600"
            onClick={closeModal}
          >
            Close
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-slate-100 w-5/6 inline-block max-w-5/6 rounded-lg m-2">
      <div className="text-lg font-bold p-2 tracking-wide">
        {data.owner?.username}
      </div>
      <div className="p-3 text-slate-700 font-semibold">
        {data.content}
      </div>
      <div className="flex justify-end p-1 px-2">
        <button
          className="p-2 rounded-lg bg-red-800 text-slate-200 font-semibold"
          onClick={func}
        >
          Add Solution
        </button>
        <button
          className="ml-2 p-2 rounded-lg bg-blue-500 text-white font-semibold"
          onClick={openSolutionModal}
        >
          Show Solutions
        </button>
      </div>
      {/* Solution Modal */}
      {isSolutionModalOpen && (
        <SolutionModal
          data={data.solutions} // Pass the solutions data to the modal
          closeModal={closeSolutionModal}
        />
      )}
    </div>
  );
};

export default Ques;
