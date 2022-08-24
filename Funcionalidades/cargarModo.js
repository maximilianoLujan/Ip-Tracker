const d = document,
    l =localStorage,
    $header = d.querySelector("header"),
    $menu = d.querySelector(".boton-menu"),
    $mode = d.querySelector(".boton-mode");
export default function cargarModo(){
    console.log(localStorage)
    const $selectores = d.querySelectorAll("[data-dark]");
    if (l.getItem("tema") == "claro"){
        l.setItem("tema","oscuro")
        $selectores.forEach(el => {
            el.classList.add("dark")
        })
        $header.style.backgroundImage = `url("assets/fondonegro.png")`;
        $menu.style.backgroundImage = `url("assets/menu-blanco.png")`;
        $mode.style.backgroundImage = `url("assets/lampara-blanca.png")`;
        $menu.style.border = `1px solid grey`;
        $mode.style.border = `1px solid grey`;
    } else{
        l.setItem("tema","claro");
        $selectores.forEach(el => {
            el.classList.remove("dark")
        })
        $header.style.backgroundImage = `url("assets/pattern-bg.png")`;
        $menu.style.backgroundImage = `url("assets/menum.png")`;
        $mode.style.backgroundImage = `url("assets/lampara.png")`;
        $menu.style.border = `1px solid #191919`;
        $mode.style.border = `1px solid #191919`;
    }


    d.addEventListener("click", e => {
        if (e.target.matches(".boton-mode")){
            console.log(localStorage)

            if (l.getItem("tema") == "claro"){
                l.setItem("tema","oscuro")
                $selectores.forEach(el => {
                    el.classList.add("dark")
                })
                $header.style.backgroundImage = `url("assets/fondonegro.png")`;
                $menu.style.backgroundImage = `url("assets/menu-blanco.png")`;
                $mode.style.backgroundImage = `url("assets/lampara-blanca.png")`;
                $menu.style.border = `1px solid #191919`;
                $mode.style.border = `1px solid #191919`;
            } else{
                l.setItem("tema","claro");
                $selectores.forEach(el => {
                    el.classList.remove("dark")
                })
                $header.style.backgroundImage = `url("assets/pattern-bg.png")`;
                $menu.style.backgroundImage = `url("assets/menum.png")`;
                $mode.style.backgroundImage = `url("assets/lampara.png")`;
                $menu.style.border = `1px solid black`;
                $mode.style.border = `1px solid black`;
            }
        }
        
    })
}