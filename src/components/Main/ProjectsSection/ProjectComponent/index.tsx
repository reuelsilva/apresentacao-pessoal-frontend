import React from "react";
import BookmarksIcon from "./BookmarksIcon";
import LinkIcon from "./LinkIcon";

type Project = {
    id: number,
    nome: string,
    descricao: string,
    tecnologias: string[],
    link_repositorio: string,
    link_deploy?: string
}

type ProjectProps = {
    projeto: Project
}

function ProjectComponent({ projeto }: ProjectProps): JSX.Element{
    return (
        <div className="flex flex-col gap-3 bg-white p-3 rounded-lg">
            <div className="flex justify-between">
                <div className="flex gap-2">
                    <BookmarksIcon/>
                    <span className="text-base font-poppins-500">{projeto.nome}</span>
                </div>
                <LinkIcon/>
            </div>
            <p className="font-poppins-400 text-sm">{projeto.descricao}</p>
            <div className="flex flex-wrap gap-2 sm:mt-auto">
                {
                    projeto.tecnologias.map((tecnologia, id) => {
                        return(
                            <span key={id} className="bg-color-04 p-2 rounded-lg text-white font-poppins-500 text-xs sm:text-sm">{tecnologia}</span>
                        )
                    })
                }
            </div>
            <div className="flex gap-4">
                <a className="bg-color-01 p-2 rounded-lg text-white font-poppins-400 text-sm text-center" href={projeto.link_repositorio} target="_blank" title="Abrir">Abrir repositório</a>
                {
                    projeto.link_deploy && (<a className="bg-color-01 p-2 rounded-lg text-white font-poppins-400 text-sm text-center" href={projeto.link_deploy} target="_blank" title="Abrir">Abrir deploy</a>)
                }
            </div>
        </div>
    )
}

export default ProjectComponent;