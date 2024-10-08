import React from "react";
import { PROJECTS } from "../../../constants/PROJECTS";
import ProjectComponent from "./ProjectComponent";

function ProjectsSection(): JSX.Element{
    return(
        <section id="projects">
        <h2 className="text-white text-center font-poppins-500 text-2xl">Projetos</h2>
        <div className="grid grid-cols-[repeat(1,minmax(0,430px))] justify-center gap-3 mt-6 md:grid-cols-[repeat(2,342px)]">
          {
            PROJECTS.map((item, id) => {
              return(
                <ProjectComponent key={id} projeto={item}/>
              )
            })
          }
        </div>
      </section>
    )
}

export default ProjectsSection;