"use client";
import { useState } from "react";
import Link from "next/link";
import { Sidebar } from "@/components/Sidebar";
import { ContentCard } from "@/components/ContentCard";
import { Button } from "@/components/ui/Button";
import {
  SearchIcon,
  ShareIcon,
  PlusIcon,
  NightMode,
  LightMode,
  GithubIcon,
  LinkedinIcon,
  XIcon,
} from "@/icons/Icons";

export default function DashboardPage() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className={`min-h-screen w-full flex ${isDark ? "dark" : ""}`}>
      <Sidebar />

      <main className="ml-64 flex-1 min-h-screen bg-[#FAFBFC] dark:bg-[#171719] transition-colors duration-300 p-10 flex flex-col font-isidora relative">
        {/* Header */}

        <header className="flex justify-between items-center mb-16">
          <div className="relative w-[400px]">
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-12 pr-6 py-3.5 rounded-2xl bg-white dark:bg-[#0F0F10] border border-transparent focus:border-gray-200 dark:focus:border-white/20 text-gray-700 dark:text-white focus:outline-none transition-all shadow-sm text-lg font-light placeholder:text-gray-400"
            />

            <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" />
          </div>

          <div className="flex items-center gap-5">
            <Button
              text="Share"
              variant="glass"
              startIcon={<ShareIcon className="w-5 h-5" />}
              className="!bg-[#E1E4EA] dark:!bg-[#2C2C2E] !text-gray-600 dark:!text-white border-none !rounded-2xl !px-8 !py-3 shadow-sm hover:opacity-90 font-normal"
            />

            <Button
              text="Add Content"
              variant="primary"
              startIcon={<PlusIcon className="w-5 h-5" />}
              className="!bg-[#2C2C2E] dark:!bg-[#151515] dark:border dark:border-[#FF7936] !text-white dark:!text-[#FF7936] !rounded-2xl !px-6 !py-3 shadow-sm hover:opacity-90 font-normal"
            />

            {/* 2. Theme Toggle with Icon Switch */}

            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 hover:opacity-70 transition-opacity"
            >
              {isDark ? (
                <LightMode className="w-8 h-8 text-white" />
              ) : (
                <NightMode className="w-8 h-8 text-black" />
              )}
            </button>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 items-start">
          <ContentCard
            type="document"
            title="Future Projects"
            description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
            tags={["productivity", "Ideas"]}
            date="10/02/2024"
          />

          <ContentCard
            type="video"
            title="How to Build a Second Brain App"
            description="Looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters."
            tags={["learning", "Ideas"]}
            date="11/02/2024"
          />
        </div>

        {/* 3. Footer with Adaptive Colors */}

        <footer className="mt-auto pt-20 flex flex-col items-center gap-4 text-center">
          <p className="text-black/60 dark:text-white/60 font-isidora text-sm flex items-center gap-1">
            Built by a developer who got tired of losing links.{" "}
            <span className="text-lg">🔗</span>
          </p>

          {/* Fixed Icons: text-black in light mode, text-white in dark mode */}

          <div className="flex items-center gap-6 text-black dark:text-white transition-colors">
            <Link href="#" className="hover:scale-110 transition-transform">
              <GithubIcon className="w-6 h-6" />
            </Link>

            <Link href="#" className="hover:scale-110 transition-transform">
              <LinkedinIcon className="w-6 h-6" />
            </Link>

            <Link href="#" className="hover:scale-110 transition-transform">
              <XIcon className="w-5 h-5" />
            </Link>
          </div>
        </footer>
      </main>
    </div>
  );
}
