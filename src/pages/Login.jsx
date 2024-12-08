import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      username,
      password,
    };
    console.log({ userData });
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover text-xl"
      style={{
        backgroundImage:
          "url(https://img.freepik.com/free-photo/ultra-detailed-nebula-abstract-wallpaper-4_1562-749.jpg?t=st=1733640350~exp=1733643950~hmac=f6448d53e276dc75829119413e7692eb6335e09f39b1edec7efd45bbbfab13a6&w=900",
      }}
    >
      <div className="p-8 rounded-xl w-full max-w-md bg-opacity-40 bg-white">
        <h1 className="text-3xl mb-6 text-center text-white">Login</h1>
        <form>
          <div className="mb-4">
            <label htmlFor="username" className="block mb-2">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-3 rounded outline-none border border-gray-700 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 rounded outline-none border border-gray-700"
            />
          </div>
          <button
            type="submit"
            className="w-full p-3 border rounded-2xl outline-none"
            onClick={handleSubmit}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
