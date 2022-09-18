import cambiarStyles from "./Funcionalidades/cambiarStyle.js";
import cargarCoordenadas from "./Funcionalidades/cargarCoordenadas.js";
import cargarModo from "./Funcionalidades/cargarModo.js";
import mostrarInfo from "./Funcionalidades/mostrarInfo.js";
const d = document,
    $input = d.getElementById("search"),
    $menu = d.querySelector(".menu")

let map = L.map('map').setView([51.505, -0.09], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);
d.addEventListener("DOMContentLoaded", e =>{
    cargarModo();
    d.addEventListener("click",e => {
        if (e.target.matches("#button-search")){
            cargarCoordenadas($input.value,map)
        }
        if (e.target.matches(".boton-menu")){
            $menu.classList.toggle("activar-menu")
        }
        if (e.target.matches(".menu a")){
            e.preventDefault();
            $menu.classList.remove("activar-menu")
            cambiarStyles(e.target,map)
        }
        if (e.target.matches("#mi-boton")){
            mostrarInfo();
        }
    })
    d.addEventListener("keyup", e =>{
        if (e.target.matches("#search")){
            if (!(e.key==="Enter")){
                return;
            } else{
                cargarCoordenadas($input.value,map)
            }
        }
    })

})
