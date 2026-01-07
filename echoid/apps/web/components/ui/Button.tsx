// components/Button.tsx
import { ReactNode } from "react";

interface ButtonProps {
    variant?: "primary" | "oauth" | "glass" | "ghost"; // Updated variants
    size?: "sm" | "md" | "lg";
    text: string;
    startIcon?: ReactNode;
    onClick?: () => void;
    fullWidth?: boolean;
    loading?: boolean;
    className?: string;
}

// Visual configurations
const variantStyles = {
    primary: "bg-black text-white hover:bg-gray-800 shadow-md", // Fallback
    oauth: "bg-white/80 hover:bg-white text-black border border-white/40 shadow-sm backdrop-blur-md", // For Google/Apple
    glass: "bg-white/20 hover:bg-white/30 text-black border border-white/20 shadow-lg backdrop-blur-xl", // For Sign In
    ghost: "bg-transparent hover:bg-white/10 text-black", // For plain text buttons
};

const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
};

// Enforce rounded-full for the pill look
const baseStyles = "rounded-full flex items-center justify-center gap-2 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed font-medium font-isidora";

export const Button = ({ 
    variant = "primary", 
    size = "md", 
    text, 
    startIcon, 
    onClick, 
    fullWidth, 
    loading,
    className = "" 
}: ButtonProps) => {
    return (
        <button 
            onClick={onClick} 
            disabled={loading}
            className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${fullWidth ? "w-full" : ""} ${className}`}
        >
            {startIcon && !loading && <span className="flex items-center justify-center">{startIcon}</span>}
            {loading ? "Loading..." : text}
        </button>
    );
};