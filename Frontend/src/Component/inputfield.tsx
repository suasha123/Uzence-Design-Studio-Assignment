
interface InputFieldProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  helperText?: string;
  errorMessage?: string;
  disabled?: boolean;
  invalid?: boolean;
  variant?: "filled" | "outlined" | "ghost";
  size?: "sm" | "md" | "lg";
  loading?: boolean; 
}

function InputField(props: InputFieldProps) {
  const {
    value,
    onChange,
    label,
    placeholder,
    helperText,
    errorMessage,
    disabled,
    invalid,
    variant = "outlined",
    size = "md",
    loading = false, 
  } = props;

  const sizeClasses =
    size === "sm"
      ? "px-2 py-1 text-sm"
      : size === "lg"
      ? "px-4 py-3 text-lg"
      : "px-3 py-2 text-base";

  const variantClasses = invalid
    ? "border border-red-500 bg-red-50 focus:ring-red-400"
    : variant === "filled"
    ? "bg-gray-100 border border-gray-300 focus:ring-2 focus:ring-blue-400"
    : variant === "outlined"
    ? "bg-transparent border border-gray-400 focus:ring-2 focus:ring-blue-400"
    : "bg-transparent border-b border-gray-400 focus:ring-0"; // ghost

  return (
    <div className="flex flex-col gap-1 w-full max-w-sm relative">
      {label && (
        <label
          htmlFor="input"
          className="text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          {label}
        </label>
      )}

      <div className="relative w-full">
        <input
          id="input"
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled || loading}
          className={`rounded-md outline-none transition-all duration-200 w-full ${sizeClasses} ${variantClasses} ${
            disabled || loading ? "bg-gray-200 cursor-not-allowed" : ""
          }`}
        />

        {loading && (
          <div className="absolute inset-y-0 right-3 flex items-center">
            <div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
      </div>

      {invalid && errorMessage ? (
        <p className="text-red-500 text-sm font-medium mt-1">{errorMessage}</p>
      ) : helperText ? (
        <p className="text-gray-500 text-sm mt-1">{helperText}</p>
      ) : null}
    </div>
  );
}

export default InputField;
