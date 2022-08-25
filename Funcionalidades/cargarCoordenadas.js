import geokey from "../helpers/keyGeoipify.js";


const d = document,
    $info = d.querySelector(".info");
let marker = L.marker([0,0]);
export default function cargarCoordenadas(valor,map){
    map.removeLayer(marker)
    fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${geokey.key}&ipAddress=${valor}&domain=${valor}`)
    .then(res => res.json())
    .then(json => {
        if (!json.code){
            const info = json.location,ciudad = info.city,pais = info.country,lat = info.lat,lng = info.lng;
            $info.innerHTML = `
                <div data-dark class="contenedor">
                    <div>
                        <p>Ip Address</p>
                        <h5>${valor}</h5>
                    </div>
                    <hr></hr>
                    <div>
                        <p>Location</p>
                        <h5>${ciudad}, ${pais}</h5>
                    </div>
                    <hr></hr>
                    <div>
                        <p>TimeZone</p>
                        <h5>UTC ${info.timezone}</h5>
                    </div>
                    <hr></hr>
                    <div>
                    <p>ISP</p>
                    <h5>${json.isp}</h5>
                    </div>
                </div>
            
            `
            $info.classList.add("ver-info");
            map.setView([lat,lng],18)
            marker = L.marker([lat,lng]).addTo(map);
        } else {
            $info.innerHTML = 
            `<div class="contenedor">
                <div>
                <p>La direccion ingresada es invalida</p>
                </div>
                <hr></hr>
                    <h5>${json.code}: ${json.messages ?json.messages :"Ha ocurrido un error"}</h5>
                </div>
                
                
            `
            $info.classList.add("ver-info");
            
        }
    })
    .catch(err=>{
        console.log(err)
    })
}

