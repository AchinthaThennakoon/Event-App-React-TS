import { useForm } from "../hooks/useForm";

interface LoginFormData {
  email: string;
  password: string;
}

const initialValues: LoginFormData = {
  email: '',
  password: '',
};


export function Loginpage() {

  const validate = (values: LoginFormData) => {
    const errors: Partial<LoginFormData> = {};
    if (!values.email) errors.email = "Email is required";
    if (!values.password) errors.password = "Password is required";
    return errors;
  };

  const { formData, handleChange, handleSubmit } = useForm({ initialValues, validate });

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-gray-100 p-8 rounded-md">
        <h1 className="block text-2xl font-bold">Login</h1>
        <form className="flex flex-col gap-4 mt-4" onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            placeholder="Email"
            className="bg-white border border-gray-300 py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.email}
            name="email"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="password"
            placeholder="Password"
            className="bg-white border border-gray-300 py-2 px-4 focus:outline-none rounded-md focus:ring-2 focus:ring-blue-500"
            value={formData.password}
            name="password"
            onChange={(e) => handleChange(e)}
          />
          <div className="flex flex-row justify-between gap-4">
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