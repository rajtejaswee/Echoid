// app/signup/page.tsx
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button"; 
import { Input } from "@/components/ui/Input";   
import { GoogleIcon, AppleIcon, GithubIcon, LinkedinIcon, XIcon } from "@/icons/Icons"; 

export default function SignUpPage() {
  return (
    // Ensured text-white is used for base color to match the components
    <main className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden font-isidora text-white">
      
      {/* 1. Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image 
          src="/landing-bg.jpg" 
          alt="Background" 
          fill 
          className="object-cover object-center"
          priority
        />
      </div>

      {/* 2. Top Navigation Bar */}
      <nav className="absolute top-0 w-full px-6 py-6 flex justify-between items-center md:px-8 md:py-5">
        
        {/* Logo - Mobile: w-20/mt-0 | Desktop: w-28/mt-[-50px] */}
        <div className="w-20 mt-0 md:w-28 md:mt-[-50px]">
           <Image 
             src="/echoid-orange.png" 
             alt="Echoid Logo" 
             width={150} 
             height={50} 
             className="object-contain"
           />
        </div>
        
        {/* Top Right Button: Hidden on Mobile (hidden md:block) */}
        <Link href="/signin" className="hidden md:block">
            <Button 
                text="Sign In" 
                variant="glass" 
                size="sm"
                className="!rounded-full px-6 !bg-white/30 hover:!bg-white/50 mt-0 md:mt-[-60px]"
            />
        </Link>
      </nav>

      {/* 3. Main Glass Card */}
      <div className="w-full max-w-[350px] md:max-w-[380px] p-6 md:p-8 rounded-3xl bg-white/25 backdrop-blur-xl border border-white/40 shadow-2xl flex flex-col gap-4 mx-4 mb-4 z-10">
        
        <h1 className="text-2xl md:text-3xl text-center text-white/80 font-normal mb-1">
          Create an Account
        </h1>

        {/* OAuth Buttons */}
        <div className="flex flex-col gap-3">
          <Button 
            text="Continue with Google" 
            variant="oauth" 
            size="md"
            startIcon={<GoogleIcon className="w-5 h-5" />} 
            fullWidth
          />
          <Button 
            text="Continue with Apple" 
            variant="oauth" 
            size="md"
            startIcon={<AppleIcon className="w-5 h-5" />} 
            fullWidth
          />
        </div>

        {/* OR Divider */}
        <div className="flex items-center gap-3 my-0">
          <div className="h-[1px] flex-1 bg-white/10"></div>
          <span className="text-white/40 text-xs uppercase tracking-wider">OR</span>
          <div className="h-[1px] flex-1 bg-white/10"></div>
        </div>

        {/* Manual Form */}
        <form className="flex flex-col gap-3">
          <Input 
            type="email" 
            placeholder="Email" 
            className="bg-white/40 border-white/50 h-11 text-sm placeholder:text-white/60"
          />
          
          <Input 
            type="password" 
            placeholder="Password"
            className="bg-white/40 border-white/50 h-11 text-sm placeholder:text-white/60"
          />

          <Input 
            type="password" 
            placeholder="Confirm Password"
            className="bg-white/40 border-white/50 h-11 text-sm placeholder:text-white/60"
          />

          <Button 
            text="Sign Up" 
            variant="glass" 
            fullWidth 
            className="mt-2 !bg-white/40 hover:!bg-white/60 !border-white/50 text-md shadow-xl py-2.5"
          />
        </form>

        {/* Card Footer: Split Links */}
        <div className="flex justify-between items-center mt-1 text-[11px] md:text-xs text-white/70">
            <Link href="/privacy" className="hover:text-white hover:underline">
                View our Privacy Policy
            </Link>
            <Link href="/signin" className="hover:text-white hover:underline">
                Have an Account? Sign In
            </Link>
        </div>
      </div>

      {/* 4. Bottom Footer (Credits) */}
      <footer className="absolute bottom-4 md:bottom-6 flex flex-col items-center gap-3 text-center w-full px-4 z-0">
        <p className="text-white/70 font-isidora text-xs md:text-base">
          Built by a developer who got tired of losing links.🔗
        </p>
        
        {/* Social Icons */}
        <div className="flex items-center gap-4 text-white">
          <Link href="https://github.com" target="_blank" className="hover:opacity-70 transition-opacity">
            <GithubIcon className="w-5 h-5 md:w-6 md:h-6" />
          </Link>
          <Link href="https://linkedin.com" target="_blank" className="hover:opacity-70 transition-opacity">
            <LinkedinIcon className="w-5 h-5 md:w-6 md:h-6" />
          </Link>
          <Link href="https://x.com" target="_blank" className="hover:opacity-70 transition-opacity">
            <XIcon className="w-4 h-4 md:w-5 md:h-5" />
          </Link>
        </div>
      </footer>

    </main>
  );
}