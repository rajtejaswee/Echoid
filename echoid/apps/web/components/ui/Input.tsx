// components/Input.tsx
import { InputHTMLAttributes, forwardRef } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string; 
}

const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, placeholder, ...props }, ref) => {
        return (
            <input
                ref={ref}
                type={type}
                className={`
                    flex h-12 w-full rounded-2xl border border-white/30 bg-white/20 px-6 py-2 text-base shadow-sm transition-all
                    file:border-0 file:bg-transparent file:text-sm file:font-medium 
                    text-black placeholder:text-gray-600 
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50
                    disabled:cursor-not-allowed disabled:opacity-50
                    font-isidora
                    ${className}
                `}
                placeholder={placeholder}
                {...props}
            />
        );
    }
);
Input.displayName = "Input";

export { Input };