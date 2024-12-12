import CreateEvent from "../components/CreateEvent";
import Navbar from "../components/Navbar";

const CreateEventPage = () => {
  return (
    <div className="min-h-screen w-full bg-gray-800 flex flex-col">
      <Navbar />
      <div className="flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-10">
        <div className="py-2 px-4 bg-gray-700 rounded-lg w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl">
          <CreateEvent />
        </div>
      </div>
    </div>
  );
};

export default CreateEventPage;
