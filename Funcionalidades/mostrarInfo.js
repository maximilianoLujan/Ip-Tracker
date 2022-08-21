const d = document,
    $search = d.getElementById("search");

export default  function mostrarInfo(){
     if (!($search.value == "")){
         document.querySelector(".contenedor").classList.toggle("activar-boton");
         document.querySelector(".info").classList.toggle("activar-boton");
    }
}