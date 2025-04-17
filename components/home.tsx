"use client";

import { Download, Code } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import FadeInSection from "./FadeInSection";
import { motion } from "framer-motion";

export default function HomeSection() {
  return (
    <div className="flex justify-between w-full">
      <div className="flex flex-col text-white ">
        <h1 className="flex flex-wrap text-4xl md:text-6xl font-bold mb-4 text-start">
          Hello, I'm&nbsp;
          <FadeInSection>
            <span className="inline-block mx-2 text-orange-500">Kshitij</span>
          </FadeInSection>
          👋
        </h1>

        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-start">
          Full Stack Developer
        </h1>
        <p className="text-lg md:text-xl max-w-xl text-zinc-400 mb-6 text-start">
          I build fast, responsive, and scalable web applications with clean,
          maintainable code.
        </p>
        <p className="text-lg md:text-xl max-w-xl text-zinc-400 mb-6 text-start">
          I focus on crafting intuitive user experiences and solving real-world
          problems through modern technologies.
        </p>

        <div className="flex flex-wrap gap-4 justify-start">
          <Link
            href="/projects"
            className="px-6 py-2 rounded-full font-semibold text-white bg-[#f76c00] hover:opacity-90 transition">
            View Projects
          </Link>
          <Link
            href="/projects"
            className="px-6 py-2 rounded-full font-semibold text-white bg-[#f76c00] hover:opacity-90 transition">
            Lets connect
          </Link>
          <Link
            href="/resume.pdf"
            download
            className="flex items-center gap-2 px-6 py-2 rounded-full font-semibold border border-[#f76c00] text-[#f76c00] hover:bg-[#f76c00] hover:text-white transition">
            <Download size={18} />
            Resume
          </Link>
        </div>

        <div className="flex flex-wrap gap-4 justify-start py-4">
          <a
            href="https://www.linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 rounded-full hover:bg-[#004182] transition">
            <Image src="/linkedin.svg" alt="LinkedIn" width={24} height={24} />
          </a>

          <a
            href="https://github.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 rounded-full ] hover:bg-[#181d22] transition">
            <Image src="/github.svg" alt="github" width={24} height={24} />
          </a>

          <a
            href="https://leetcode.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 rounded-full hover:bg-[#c67d16] transition">
            <Image src="/leetcode.png" alt="github" width={24} height={24} />
          </a>

          <a
            href="https://instagram.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 rounded-full hover:bg-[#c13584] transition">
            <Image src="/instagram.svg" alt="github" width={24} height={24} />
          </a>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative p-1 rounded-[20px] bg-gradient-to-br from-[#f76c00] via-orange-500 to-yellow-400 shadow-xl">
        <div className="rounded-[18px] overflow-hidden bg-black">
          <Image
            src="/photo.jpg"
            alt="Kshitij Profile"
            width={300}
            height={500}
            className="object-cover rounded-[18px]"
          />
        </div>
      </motion.div>
    </div>
  );
}
