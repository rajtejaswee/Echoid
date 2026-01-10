import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button"; 
import { GithubIcon, LinkedinIcon, XIcon, Hand } from "@/icons/Icons";

export default function LandingPage() {
  return (
    <main className="relative h-screen w-full flex flex-col overflow-hidden font-isidora text-black">
      
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

      {/* 2. Top Navigation */}
      <nav className="w-full px-4 py-4 md:px-12 md:py-8 flex justify-between items-center z-50">
        
        {/* Left: Navigation Pills - Scaled down for mobile */}
        {/* Mobile: scale-75 to fit, hidden on very small screens if needed, or scrollable */}
        <div className="flex items-center gap-1.5 md:gap-4 scale-90 md:scale-100 origin-left">
            <Button text="Docs" variant="glass" size="sm" className="!rounded-full text-white px-3 py-1 md:px-5 md:py-1.5 !bg-white/20 hover:!bg-white/40 shadow-sm text-xs md:text-lg font-light" />
            <Button text="Use-case" variant="glass" size="sm" className="!rounded-full text-white px-3 py-1 md:px-5 md:py-1.5 !bg-white/20 hover:!bg-white/40 shadow-sm text-xs md:text-lg font-light" />
            <Button text="FAQ" variant="glass" size="sm" className="!rounded-full text-white px-3 py-1 md:px-5 md:py-1.5 !bg-white/20 hover:!bg-white/40 shadow-sm text-xs md:text-lg font-light" />
        </div>

        {/* Right: Sign In */}
        <div className="flex items-center gap-4 md:gap-6 scale-90 md:scale-100 origin-right"> 
            <Link href="/signin">
                <Button 
                    text="Sign In" 
                    variant="glass" 
                    size="sm"
                    className="!rounded-full text-white px-4 py-1 md:px-6 md:py-2 !bg-white/30 hover:!bg-white/50 shadow-sm text-xs md:text-lg font-light"
                />
            </Link>
        </div>
      </nav>

      {/* 3. HERO COMPOSITION - Responsive Scaling */}
      <div className="flex-grow relative w-full max-w-7xl mx-auto z-10 h-[700px] mt-0 md:mt-0">
        
        {/* THE "E" */}
        {/* Mobile: Smaller text, less margin | Desktop: Your original values */}
        <div className="absolute left-[-10px] top-[-20px] md:left-[5%] md:top-[-40px] z-10 pointer-events-none select-none">
            <span className="font-ashley text-[180px] ml-[40px] mt-[100px] md:text-[420px] md:ml-[180px] md:mt-[130px] leading-none text-white block drop-shadow-md">
                E
            </span>
        </div>

        {/* THE "choid" */}
        {/* Mobile: Smaller text, adjusted positioning to sit next to the small E */}
        <div className="absolute left-[50px] top-[100px] md:left-[160px] md:top-[80px] md:top-[120px] z-20 pointer-events-none select-none">
            <span className="font-flake text-[70px] ml-[110px] mt-[120px] md:text-[180px] md:ml-[340px] md:mt-[200px] leading-none text-white drop-shadow-md tracking-tighter">
                choid
            </span>
            
            {/* Hand Icon - Scaled for mobile */}
            <div className="absolute top-[-7px] right-[22px] md:top-[-29px] md:right-[48px]">
                <Hand className="w-6 h-6 md:w-20 md:h-20 text-[#FF7936]" />
            </div>
        </div>

        {/* THE TAGLINE */}
        {/* Mobile: Smaller font, positioned under the smaller logo */}
        <div className="absolute left-[200px] top-[150px] md:left-[640px] md:top-[260px] z-30 font-autography text-lg md:text-4xl text-white whitespace-nowrap drop-shadow-md">
             remember everything you save.
        </div>

        {/* DESCRIPTION BLOCK */}
        {/* Mobile: Adjusted top/right to fit screen, smaller text */}
        <div className="absolute top-[180px] right-[50px] md:top-[290px] md:right-[22.5%] z-30 flex flex-col items-end gap-4 md:gap-10">
            
            {/* Text */}
            <div className="text-right text-[#FF7936] font-isidora text-xs md:text-lg leading-[1.25rem] md:tracking-[-0.8px] md:leading-[1.25rem] md:tracking-[-0.8px] drop-shadow-md">
                <p>Not notes.</p>
                <p>Not bookmarks.</p>
                <p>Just signal, no noise.</p>
                <p>Echoid helps you store, search,</p>
                <p>and recall important links – intelligently.</p>
            </div>

            {/* CTA Button */}
            {/* Mobile: Adjusted negative margins to center it relative to text */}
            <Link href="/signup" className="self-center mr-0 md:mr-[-90px] mt-[-10px] md:mt-[-30px]">
                <Button 
                    text="Get Started" 
                    variant="glass" 
                    size="lg"
                    className="!rounded-full px-6 py-2 text-white md:px-8 md:py-2.5 !bg-white/40 hover:!bg-white/60 text-sm md:text-xl font-light shadow-md backdrop-blur-md"
                />
            </Link>
        </div>

      </div>

      {/* 4. Footer */}
      <footer className="absolute bottom-6 w-full flex flex-col items-center gap-2 md:gap-3 text-center z-50">
        <p className="text-white/60 font-isidora text-[10px] md:text-sm">
          Built by a developer who got tired of losing links.🔗
        </p>
        
        <div className="flex items-center gap-4">
          <Link href="https://github.com" target="_blank" className="hover:opacity-70 transition-opacity">
            <GithubIcon className="w-4 h-4 md:w-6 md:h-6" />
          </Link>
          <Link href="https://linkedin.com" target="_blank" className="hover:opacity-70 transition-opacity">
            <LinkedinIcon className="w-4 h-4 md:w-6 md:h-6" />
          </Link>
          <Link href="https://x.com" target="_blank" className="hover:opacity-70 transition-opacity">
            <XIcon className="w-3 h-3 md:w-5 md:h-5" />
          </Link>
        </div>
      </footer>

    </main>
  );
}