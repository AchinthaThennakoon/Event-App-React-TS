export function Loginpage() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-gray-100 p-8 rounded-md">
        <h1 className="block text-2xl font-bold">Login</h1>
        <form className="flex flex-col gap-4 mt-0.5" action="">
          <input
            type="text"
            placeholder="Username"
            className="bg-white border border-gray-300 py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="bg-white border border-gray-300 py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="flex flex-row gap-4">
            <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Login
          </button>
          <button type="button" className="bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Register
          </button>
          </div>
        </form>
      </div>
    </div>
  );
}