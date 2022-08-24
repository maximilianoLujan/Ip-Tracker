const d = document,
    $search = d.getElementById("search");

export default  function mostrarInfo(){
     if (!($search.value == "")){
         document.querySelector(".contenedor").classList.toggle("activar-boton");
         document.querySelector(".mi-boton2").classList.toggle("activar-boton2");
         document.querySelector(".info").classList.toggle("activar-boton");
    }
}