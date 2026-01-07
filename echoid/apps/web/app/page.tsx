import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button"; 
import { GithubIcon, LinkedinIcon, XIcon, NightMode, Hand } from "@/icons/Icons";

export default function LandingPage() {
  return (
    <main className="relative min-h-screen w-full flex flex-col overflow-hidden font-isidora text-black">
      
      {/* 1. Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image 
          src="/auth-bg.webp" 
          alt="Background" 
          fill 
          className="object-cover object-center"
          priority
        />
      </div>

      {/* 2. Top Navigation */}
      <nav className="w-full px-6 py-6 md:px-12 md:py-8 flex justify-between items-center z-50">
        
        {/* Left: Navigation Pills */}
        <div className="flex items-center gap-3 md:gap-4">
            <Button text="Docs" variant="glass" size="sm" className="!rounded-full px-5 py-2 md:px-6 !bg-white/20 hover:!bg-white/40 shadow-sm text-xs md:text-sm" />
            <Button text="Use-case" variant="glass" size="sm" className="!rounded-full px-5 py-2 md:px-6 !bg-white/20 hover:!bg-white/40 shadow-sm text-xs md:text-sm" />
            <Button text="FAQ" variant="glass" size="sm" className="!rounded-full px-5 py-2 md:px-6 !bg-white/20 hover:!bg-white/40 shadow-sm text-xs md:text-sm" />
        </div>

        {/* Right: Theme Toggle & Sign In */}
        <div className="flex items-center gap-4 md:gap-6">
            <button className="p-2 hover:opacity-60 transition-opacity">
                <NightMode className="w-6 h-6 md:w-7 md:h-7 text-black" />
            </button>
            <Link href="/signin">
                <Button 
                    text="Sign In" 
                    variant="glass" 
                    size="sm"
                    className="!rounded-full px-6 py-2 md:px-8 md:py-2.5 !bg-white/30 hover:!bg-white/50 shadow-sm text-sm"
                />
            </Link>
        </div>
      </nav>

      {/* 3. HERO COMPOSITION (Pure CSS) */}
      <div className="flex-grow relative w-full max-w-7xl mx-auto z-10 h-[700px] mt-8 md:mt-0">
        
        {/* THE "E" - Ashley Font */}
        {/* Huge scale, rotated slightly to match the sweep */}
        <div className="absolute left-[-20px] top-[-50px] md:left-[5%] md:top-[-40px] z-10 pointer-events-none select-none">
            <span className="font-ashley text-[380px] md:text-[650px] leading-none text-black rotate-[-2deg] block">
                E
            </span>
        </div>

        {/* THE "choid" - Flake Font */}
        {/* Positioned to nest inside the E's upper curve */}
        <div className="absolute left-[160px] top-[80px] md:left-[350px] md:top-[160px] z-20 pointer-events-none select-none">
            <span className="font-flake text-[120px] md:text-[220px] leading-none text-white drop-shadow-md tracking-tighter">
                choid
            </span>
            
            {/* The HAND Icon - Acts as the dot for the 'i' */}
            {/* Absolute relative to 'choid' text */}
            <div className="absolute top-[20px] right-[38px] md:top-[35px] md:right-[68px]">
                <Hand className="w-12 h-12 md:w-24 md:h-24 text-black -rotate-12" />
            </div>
        </div>

        {/* THE TAGLINE - Autography Font */}
        {/* Tucked under 'choid' and over the 'E' tail */}
        <div className="absolute left-[200px] top-[200px] md:left-[450px] md:top-[360px] z-30 font-autography text-xl md:text-4xl text-black rotate-[-3deg] whitespace-nowrap">
             remember everything you save.
        </div>

        {/* DESCRIPTION BLOCK */}
        {/* Right aligned, below the main visual cluster */}
        <div className="absolute top-[300px] right-4 md:top-[420px] md:right-[15%] z-30 flex flex-col items-end gap-6 md:gap-10">
            
            {/* Text */}
            <div className="text-right text-black/80 font-isidora text-sm md:text-lg leading-loose md:leading-[2.2rem]">
                <p>Not notes.</p>
                <p>Not bookmarks.</p>
                <p>Just signal, no noise.</p>
                <p>Echoid helps you store, search,</p>
                <p>and recall important links – intelligently.</p>
            </div>

            {/* CTA Button - Centered relative to text block */}
            <Link href="/signup" className="self-center mr-2 md:mr-6">
                <Button 
                    text="Get Started" 
                    variant="glass" 
                    size="lg"
                    className="!rounded-full px-10 py-3 md:px-14 md:py-4 !bg-white/40 hover:!bg-white/60 text-base md:text-xl shadow-md backdrop-blur-md"
                />
            </Link>
        </div>

      </div>

      {/* 4. Footer */}
      <footer className="w-full py-6 flex flex-col items-center gap-3 text-center z-10">
        <p className="text-black/60 font-isidora text-xs md:text-sm">
          Built by a developer who got tired of losing links.🔗
        </p>
        
        <div className="flex items-center gap-4">
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