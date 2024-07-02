import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType?: "standard" | "other"; // Custom types for styling distinctions
  href: string; // URL to link to
  className?: string; // Tailwind CSS classes to apply to the button
  icon?: JSX.Element; // Optional icon for 'icon' button type
  children?: React.ReactNode; // Children elements to be rendered inside the button
}

export function Button({
  href,
  children,
  className = "",
  buttonType = "standard",
  icon,
  ...props // Collecting other props
}: ButtonProps) {
  const baseClass =
    "px-8 py-3 rounded-full font-poppins font-medium transition duration-150 ease-in-out";
  let buttonClass = baseClass;

  return (
    <Link href={href} passHref>
      <button
        className={`${buttonClass} ${className} hover:opacity-80`}
        {...props} // Spreading other props
      >
        {children}
      </button>
    </Link>
  );
}
