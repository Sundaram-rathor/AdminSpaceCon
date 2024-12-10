import { useState } from "react";
import CreateEvent from "../components/CreateEvent";
import Navbar from "../components/Navbar";

const Admin = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="bg-gray-900 h-screen w-screen">
      <Navbar />
      <button
        onClick={openModal}
        className="px-4 py-2 my-5 bg-blue-500 text-white border-none rounded cursor-pointer"
      >
        Create Event
      </button>
      {isModalOpen && (
        <div className="modal fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="modal-content bg-gray-800 p-5 rounded-lg w-[60vh] relative">
            <span
              className="close text-white absolute top-4 right-4 cursor-pointer text-2xl"
              onClick={closeModal}
            >
              &times;
            </span>
            <CreateEvent isOpen={isModalOpen} onClose={closeModal} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;
