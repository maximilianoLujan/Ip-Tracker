const d = document,
    $search = d.getElementById("search"),
    $miboton = d.getElementById("mi-boton");

export default  function mostrarInfo(){
     if (!($search.value == "")){
        console.log($miboton.textContent)
        if ($miboton.textContent === "See Info"){
            $miboton.textContent = "Close Info";
        } else{
            $miboton.textContent = "See Info"
        }
         document.querySelector(".contenedor").classList.toggle("activar-boton");
         document.querySelector(".info").classList.toggle("activar-boton");
    }
}