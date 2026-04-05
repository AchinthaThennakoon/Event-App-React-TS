import { useEffect, useState } from "react";

export function useForm<T>({
  initialValues,
  validate,
}: {
  initialValues: T;
  validate?: (formData: T) => Partial<T>;
}) {
  const [formData, setFormData] = useState<T>(initialValues);
  const [errors, setErrors] = useState<Partial<T>>({});

  useEffect(() => {
    setFormData(initialValues);
  }, [initialValues]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Handle login logic here
    if (validate) {
      const newErrors = validate(formData);
      setErrors(newErrors);

      if (Object.keys(newErrors).length) {
        return;
      }

      console.log("Validation passed, submitting form with data:", formData);
    }
    console.log("Form submitted:", formData);
    // Reset form after submission
    setFormData(formData);
  };

  return { formData, handleChange, handleSubmit };
}
