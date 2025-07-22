import FadeInSection from "./FadeInSection";
import { SectionHeader } from "./ui/SectionHeader";
import ProjectCard from "./ui/projectCard";

export default function Projects() {
  return (
    <div
      id="projects"
      className="flex flex-col min-h-screen max-w-5xl px-6 pt-[150px] mx-auto snap-start justify-center items-start">
      <FadeInSection>
        <SectionHeader title="Projects" />
      </FadeInSection>

      <div className="flex w-full gap-6 flex-col mb-10">
        <ProjectCard
          link="https://testimonials-delta-ten.vercel.app"
          github="https://github.com/kshitij-y/testimonials"
          name="Testimonials"
          learning="Google Oauth, NextJS and TypeScript, middleware"
          desc="A website to get and showcase testimonials from customers"
          techStack={[
            "nextjs.svg",
            "postgresql.svg",
            "prisma.svg",
            "tailwindcss.svg",
            "typescript.svg",
          ]}
        />
        <ProjectCard
          link="https://payment-app-me18.onrender.com"
          github="https://github.com/kshitij-y/payment-app"
          name="Wallet"
          learning="I learned about reactJS and JWT and Prisma and CRUD operations"
          desc="A simple website to make payments through wallets"
          techStack={[
            "reactjs.svg",
            "mongo.svg",
            "prisma.svg",
            "tailwindcss.svg",
          ]}
        />
        <div className="text-2xl text-white font-medium">In development..</div>
        <ProjectCard
          link="http://ec2-13-61-14-231.eu-north-1.compute.amazonaws.com:3001/auth/signin"
          github="https://github.com/kshitij-y/_sellmate"
          name="SellMate: Buy Sell and Auction"
          learning="I learned about Redux, TanStack, Better-Auth"
          desc="A website for buying and selling products and can also host Auctions"
          techStack={[
            "nextjs.svg",
            "postgresql.svg",
            "prisma.svg",
            "tailwindcss.svg",
            "typescript.svg",
          ]}
        />
      </div>
    </div>
  );
}
