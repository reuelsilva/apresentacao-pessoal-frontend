import { useEffect } from "react";

function useSlowScroll(){
    useEffect(() => {
        const links = document.querySelectorAll("a[href^='#']");
        links.forEach((a) => {
          a.addEventListener("click", (event) => {
            event.preventDefault();
    
            const element = event.target;
            const id = element.getAttribute("href");
            const section = document.querySelector(id);
            const distanceFromTop = section.offsetTop;
            window.scroll({
              top: distanceFromTop - 60,
              behavior: "smooth",
            })
          })
        })
      }, [])
}

export default useSlowScroll