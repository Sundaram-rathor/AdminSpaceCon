import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="h-screen bg-gradient-to-br from-black via-purple-800 to-gray-900">
      <Navbar />
      <div>
        <div className="mt-10 text-white flex flex-col justify-center items-center">
        {/* Generated with AI */}
          <div>
            <h1 className="text-4xl font-bold mb-6">Nakshatra X TDS</h1>
            <p className="text-3xl text-center mb-4">Presents</p>
          </div>
          <h1 className="text-5xl font-bold mb-4 text-center">
            🚀 Space Hackathon 2024
          </h1>
          <p className="text-lg mb-6 text-center">
            Join us in exploring the final frontier with innovation and
            technology!
          </p>
          <a
            href="#register"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white transition"
          >
            Register Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
