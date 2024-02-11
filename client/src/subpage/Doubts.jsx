import React, { useState } from "react";
import axios from 'axios';
function Doubts() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSolnModalOpen,setIsSolnModalOpen]=useState(false);
  const [questionImage, setQuestionImage] = useState(null);
  const [solnImage, setSolnImage] = useState(null);
  const[question,setQuestion]=useState('');
  const[solution,setSolution]=useState('');

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const openSolnModal=()=>{
    setIsSolnModalOpen(true);
  }
  const closeSolnModal=()=>{
    setIsSolnModalOpen(false);
  }
  
  const handleQuestionImageUpload = (e) => {
    const file = e.target.files[0];
    setQuestionImage(file);
  };

  const handleSolnImageUpload = (e) => {
    const file = e.target.files[0];
    setSolnImage(file);
  };
  
  const handleAddSolution = async() => {
    // Handle the logic for adding the solution here
    // This can include making an API call, updating state, etc.
    // For now, let's just close the modal
    const {data}=await axios.post("http://localhost:3000/api/addSoln",{SolnImg: solnImage, content: solution});
    console.log(data)
    closeSolnModal();
  };
  const handleAddQuestion = async() => {
    // Handle the logic for adding the solution here
    // This can include making an API call, updating state, etc.
    // For now, let's just close the modal
    console.log(questionImage);
    const formData = new FormData();
    formData.append('doubtImg', questionImage);
            formData.append('content', question);
            
    const {data}=await axios.post("http://localhost:3000/api/adddoubt",{doubtImg: questionImage, content: question});
    console.log(data)
    closeModal();
  };

  return (
    <div className="h-screen w-screen flex flex-col">
      <div className="h-5/6 w-screen bg-slate-400 flex">
        <div className="w-4/6 h-full overflow-y-auto m-2">
        <div className="bg-slate-100 w-5/6 inline-block max-w-5/6 rounded-lg m-2">
            <div className="text-lg font-bold p-2 tracking-wide">
                    Arnav
            </div>
            <div className="p-3 text-slate-700 font-semibold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, ad non commodi deleniti earum possimus voluptatibus eaque molestiae aspernatur aut dolor adipisci ipsum!
            </div>
            <div className="flex justify-end p-1 px-2">
                <button className=" p-2 rounded-lg bg-red-800 text-slate-200 font-semibold" onClick={openSolnModal}>Add Solution</button>
            </div>    
        </div>
        <div className="bg-slate-100 w-5/6 inline-block max-w-5/6 rounded-lg m-2">
            <div className="text-lg font-bold p-2 tracking-wide">
                Soham
            </div>
            <div className="p-3 text-slate-700 font-semibold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, ad non commodi deleniti earum possimus voluptatibus eaque molestiae aspernatur aut dolor adipisci ipsum!
            </div>
            <div className="flex justify-end p-1 px-2">
                <button className=" p-2 rounded-lg bg-red-800 text-slate-200 font-semibold" onClick={openSolnModal}>Add Solution</button>
            </div>    
        </div>

          {/* Add Solution Modal */}
          {isModalOpen && (
            <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
              <div className="bg-white p-4 rounded-lg">
                <h2 className="text-lg font-bold mb-4">Add Question</h2>
                {/* Add Question Form */}
                <textarea
                  className="w-full h-24 px-2 py-1 border rounded-md mb-4"
                  placeholder="Enter your question here"
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                ></textarea>
                {/* Image Upload for Question */}
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleQuestionImageUpload}
                />
                {/* Add Solution Button */}
                <button
                  className="bg-green-600 text-white p-2 rounded-lg"
                  onClick={handleAddQuestion}
                >
                  Add Question
                </button>
                {/* Close Modal Button */}
                <button
                  className="ml-2 text-gray-600"
                  onClick={closeModal}
                >
                  Close
                </button>
              </div>
            </div>
          )}
          {isSolnModalOpen && (
            <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
              <div className="bg-white p-4 rounded-lg">
                <h2 className="text-lg font-bold mb-4">Add Solution</h2>
                {/* Add Solution Form */}
                <textarea
                  className="w-full h-24 px-2 py-1 border rounded-md mb-4"
                  placeholder="Enter your question here"
                  value={solution}
                  onChange={(e) => setSolution(e.target.value)}
                ></textarea>
                {/* Image Upload for Solution */}
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleSolnImageUpload}
                />
                {/* Add Solution Button */}
                <button
                  className="bg-green-600 text-white p-2 rounded-lg"
                  onClick={handleAddSolution}
                >
                  Add Solution
                </button>
                {/* Close Modal Button */}
                <button
                  className="ml-2 text-gray-600"
                  onClick={closeSolnModal}
                >
                  Close
                </button>
              </div>
            </div>
          )}
          

        </div>
        <div className="w-2/6 h-full flex justify-center">
          <div className="h-4/6 w-5/6 bg-slate-100 my-3 rounded-lg flex justify-center items-center">
            <div className="h-2/6 w-3/6 rounded-lg bg-slate-400 flex justify-center items-center">
              {/* Open Modal Button */}
              <button
                className="bg-green-600 p-2 rounded-lg font-semibold tracking-wide text-slate-200"
                onClick={openModal}
              >
                Add Question
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Doubts;
