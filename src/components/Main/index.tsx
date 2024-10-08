import React from "react";
import HomeSection from "./HomeSection";
import ContactSection from "./ContactSection";
import ProjectsSection from "./ProjectsSection";

function Main() {
  return (
    <main className="flex flex-col gap-12 sm:w-full">
      <HomeSection/>
      <ProjectsSection/>
      <ContactSection/>
    </main>
  )
}

export default Main;