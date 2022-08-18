import cargarCoordenadas from "./Funcionalidades/cargarCoordenadas.js";
const d = document,
    $input = d.getElementById("search");

let map = L.map('map').setView([51.505, -0.09], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

d.addEventListener("click",e => {
    if (e.target.matches("#button-search")){
        cargarCoordenadas($input.value,map)
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