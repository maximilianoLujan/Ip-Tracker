import geokey from "../helpers/keyGeoipify.js";


const d = document,
    $info = d.querySelector(".info");
export default function cargarCoordenadas(valor,map){
    fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${geokey.key}&ipAddress=${valor}`)
    .then(res => res.json())
    .then(json => {
        console.log(json)
        if (!json.code){
            const info = json.location,ciudad = info.city,pais = info.country,lat = info.lat,lng = info.lng;
            $info.innerHTML = `
                <div class="contenedor">
                    <div>
                        <p>Ip Address</p>
                        <h3>${valor}</h3>
                    </div>
                    <hr></hr>
                    <div>
                        <p>Location</p>
                        <h3>${ciudad}, ${pais}</h3>
                    </div>
                    <hr></hr>
                    <div>
                        <p>TimeZone</p>
                        <h3>UTC ${info.timezone}</h3>
                    </div>
                    <hr></hr>
                    <div>
                    <p>ISP</p>
                    <h3>${json.isp}</h3>
                    </div>
                </div>
            
            `
            $info.classList.add("ver-info");
            map.setView([lat,lng],18)
            let marker = L.marker([lat,lng]).addTo(map);
        } else {
            $info.innerHTML = `
            <h2>La direccion ingresada es invalida</h2>
            <h3>${json.code}: ${json.messages ?json.messages :"Ha ocurrido un error"}</h3>
            `
            $info.classList.add("ver-info");
        }
    })
    .catch(err=>{
        console.log(err)
    })
}

