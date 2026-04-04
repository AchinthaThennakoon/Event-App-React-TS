import { useState } from "react";

export function useForm<T>({ initialValues }: { initialValues: T }) {
  const [formData, setFormData] = useState<T>(initialValues);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    console.log("Form data updated:", formData);
  };

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Form submitted:", formData);
    // Reset form after submission
    setFormData(formData);
  };

  return { formData, handleChange, handleSubmit };
}
