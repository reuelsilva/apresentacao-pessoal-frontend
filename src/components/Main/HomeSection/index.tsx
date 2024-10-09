import React from "react"
import { STACK_ICONS } from "../../../constants/STACK_ICONS"
import ArrowDownIcon from "./ArrowDownIcon"

function HomeSection(): JSX.Element{
    return (
        <section className="bg-home bg-cover bg-center bg-no-repeat sm:h-screen sm:pt-[72px]" id="home">
            <div className="flex flex-col gap-6">
                <div className="flex flex-col items-center gap-2">
                    <img height={130} width={130} className="rounded-full" src="https://avatars.githubusercontent.com/u/109824495?v=4" alt="" />
                    <h2 className="text-white font-poppins-600 text-2xl text-center">Olá, sou o dev Reuel! <span className="sm:absolute sm:animate-handWave">👋</span></h2>
                    <p className="max-w-[420px] text-color-03 font-poppins-500 text-center">Olá! Meu nome é Reuel Silva, tenho 25 anos e sou desenvolvedor Front-end em nível Júnior. Atualmente dedico meu tempo a criar projetos pessoais que me ajudam a aprimorar mminhas habilidades e expandir meu conhecimento na área.</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <h3 className="text-white text-lg font-poppins-500">Experiência com:</h3>
                    <div className="w-full max-w-[320px] grid grid-cols-[repeat(auto-fill,38px)] gap-2 justify-center">
                        {
                            STACK_ICONS.map((item, id) => {
                                return(
                                    <img key={id} height={50} width={50} src={item.icon} alt="Tecnologia" />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <a href="#projects" className="hidden sm:inline-block sm:absolute sm:bottom-4 sm:left-1/2 sm:animate-arrowFloat">
                <ArrowDownIcon/>
            </a>
        </section>
    )
}
export default HomeSection