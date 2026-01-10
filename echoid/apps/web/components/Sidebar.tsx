import Image from "next/image";
import { TweetIcon, VideoIcon, DocumentIcon, LinkIcon, TagIcon } from "@/icons/Icons";


interface SidebarProps {
    onClose?: () => void;
}


export const Sidebar = () => {
  return (
    <aside className="w-64 h-screen bg-white dark:bg-[#0F0F10] border-r border-gray-200 dark:border-white/10 flex flex-col pt-10 pl-8 transition-colors duration-300 fixed left-0 top-0 z-20">
      
      {/* 1. Logo Area - Increased Size & Dual Mode Logic */}
      <div className="mb-14 relative w-52 h-20"> 
         
         {/* Light Mode Logo (Visible by default, hidden in dark mode) */}
         <div className="block dark:hidden relative w-[250px] h-[250px] mt-[-80px]">
             <Image 
                 src="/echoid-allblack.png" // Replace with your Light Mode logo path
                 alt="Echoid Light" 
                 fill
                 className="object-contain object-left"
             />
         </div>

         {/* Dark Mode Logo (Hidden by default, visible in dark mode) */}
         <div className="hidden dark:block relative w-[250px] h-[250px] mt-[-80px]">
             <Image 
                 src="/echoid-orange.png" // Replace with your Dark Mode logo path
                 alt="Echoid Dark" 
                 fill
                 className="object-contain object-left"
             />
         </div>
      </div>

      {/* Menu Items */}
      <nav className="flex flex-col gap-9">
        <SidebarItem icon={<TweetIcon className="w-6 h-6" />} text="Tweet" />
        <SidebarItem icon={<VideoIcon className="w-6 h-6" />} text="Videos" />
        <SidebarItem icon={<DocumentIcon className="w-6 h-6" />} text="Documents" />
        <SidebarItem icon={<LinkIcon className="w-6 h-6" />} text="Links" />
        <SidebarItem icon={<TagIcon className="w-6 h-6" />} text="Tags" />
      </nav>
    </aside>
  );
};

const SidebarItem = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
  <div className="flex items-center gap-4 text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white cursor-pointer transition-colors group">
    <span className="group-hover:scale-105 transition-transform dark:text-[#FF7936] text-gray-700">{icon}</span>
    <span className="font-isidora text-xl font-light">{text}</span>
  </div>
);

