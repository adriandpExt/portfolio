interface TextFieldProps {
  label: string;
  type: string;
  name: string;
}

export const TextField = ({ label, type = "text", name }: TextFieldProps) => {
  return (
    <div className="flex flex-col mt-4">
      <label htmlFor="email" className="mb-1">
        {label}
      </label>
      <input
        id={name}
        type={type}
        placeholder="Please input..."
        className="block w-full h-12 text-black px-4 py-2 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:border-blue-500"
      />
    </div>
  );
};

export default TextField;
