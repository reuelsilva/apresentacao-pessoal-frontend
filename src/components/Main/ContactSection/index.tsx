import React from "react";
import SocialButton from "./SocialButton";

function ContactSection(): JSX.Element{
    return (
        <section id="contact">
            <div className="flex flex-col gap-12 items-center">
                <div className="max-w-[420px]">
                    <h2 className="text-white font-poppins-500 text-2xl text-center">Contato</h2>
                    <h3 className="text-white text-center font-poppins-600 sm:text-xl">Gostou do meu trabalho?</h3>
                    <p className="text-color-03 text-center font-poppins-400">Entre em contato ou acompanhe as minhas redes sociais!</p>
                </div>
                <div className="w-full max-w-[400px] flex flex-col gap-4">
                    <SocialButton 
                        rede={"LinkedIn"}
                        logo={"images/social-logos/logo-linkedin.png"}
                        url={"https://www.linkedin.com/in/reuelsilva"}
                    />
                    <SocialButton 
                        rede={"GitHub"}
                        logo={"images/social-logos/logo-github.png"}
                        url={"https://www.github.com/reuelsilva"}
                    />
                    <SocialButton
                        rede={"Instagram"}
                        logo={"images/social-logos/logo-instagram.png"}
                        url={"https://www.instagram.com/reueldev"}
                    />
                    <SocialButton
                        rede={"Email"}
                        logo={"images/social-logos/logo-email.png"}
                        url={"mailto:reuelsilva19@gmail.com"}
                    />
                    <SocialButton
                        rede={"WhatsApp"}
                        logo={"images/social-logos/logo-whatsapp.png"}
                        url={"https://wa.me/+5521996230995"}
                    />
                </div>
            </div>
        </section>
    )
}

export default ContactSection;