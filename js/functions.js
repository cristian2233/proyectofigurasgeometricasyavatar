function circulo(){
    
    var figura =document.getElementById("figura");
    figura.classList="";
    //invoca lista de clases de un elemento//
    figura.classList.toggle("circulo");

}

function rombo(){
    
    var figura =document.getElementById("figura");
    figura.classList="";
    //invoca lista de clases de un elemento//
    figura.classList.toggle("rombo");

}

function rectangulo(){
    
    var figura =document.getElementById("figura");
    figura.classList="";
    //invoca lista de clases de un elemento//
    figura.classList.toggle("rectangulo");
}

function triangulo(){
    
    var figura =document.getElementById("figura");
    //invoca lista de clases de un elemento//
    figura.classList.toggle("triangulo");
}

function rectangulov(){
    
    var figura =document.getElementById("figura");
    figura.classList="";
    //invoca lista de clases de un elemento//
    figura.classList.toggle("rectangulov");
}

function arriba(){
    
    var figura =document.getElementById("figura");
    figura.classList="";
    //invoca lista de clases de un elemento//
    figura.classList.toggle("arriba");
}

function abajo(){
    
    var figura =document.getElementById("figura");
    figura.classList="";
    //invoca lista de clases de un elemento//
    figura.classList.toggle("abajo");
}

function derecha(){
    
    var figura =document.getElementById("figura");
    figura.classList="";
    //invoca lista de clases de un elemento//
    figura.classList.toggle("derecha");
}

function izquierda(){
    
    var figura =document.getElementById("figura");
    figura.classList="";
    //invoca lista de clases de un elemento//
    figura.classList.toggle("izquierda");
}

function diagonal(){
    
    var figura =document.getElementById("figura");
    
    //invoca lista de clases de un elemento//
    figura.classList.toggle("diagonal");
}

function imagen(){
    
    var figura =document.getElementById("figura");
    
    //invoca lista de clases de un elemento//
    figura.classList.toggle("imagen");
}

/*hoy*/
function trapecio(){
    
    var figura =document.getElementById("figura");
    
    //invoca lista de clases de un elemento//
    figura.classList.toggle("trapecio");
}

function ovalo(){
    
    var figura =document.getElementById("figura");
    
    //invoca lista de clases de un elemento//
    figura.classList.toggle("ovalo");
}

function medioCirculo(){
    
    var figura =document.getElementById("figura");
    
    //invoca lista de clases de un elemento//
    figura.classList.toggle("medioCirculo");
}

function tipoHoja(){
    
    var figura =document.getElementById("figura");
    
    //invoca lista de clases de un elemento//
    figura.classList.toggle("tipoHoja");
}








function capturarDatos(){
    //Captura del valor de cada campo del formulario
    var nombres = document.getElementById("nombres").value;
    var edad = document.getElementById("edad").value;
    var fechaNacimiento = document.getElementById("fecha").value;
    var genero = document.getElementById("genero").value;
    var email = document.getElementById("email").value;
    var descripcion = document.getElementById("descripcion").value;
    var color = document.getElementById("color").value;

    //Captura de elementos a los cuales le asignamos los elementos
    
    var imagen = document.getElementById("imagen");
    var mnombres = document.getElementById("mnombres");
    var medad = document.getElementById("medad");
    var mfecha = document.getElementById("mfecha");
    var mgenero = document.getElementById("mgenero");
    var memail = document.getElementById("memail");
    var mdescripcion = document.getElementById("mdescripcion");

    var contAvatar = document.getElementById("contAvatar");

    mnombres.textContent = nombres;
    medad.textContent = edad;
    mfecha.textContent = fechaNacimiento;
    mgenero.textContent = genero;
    memail.textContent = email;
    mdescripcion.textContent = descripcion;
    
    if (genero =="Masculino"){
        imagen.src="img/man.png"
    }else if (genero =="Femenino"){
        imagen.src="img/woman.png"
    }else {
        imagen.src="img/queer.png"
    }


switch (color){
    case "Cafe":
        var contenedor = document.getElementById("contAvatar");
        contenedor.classList.add("Cafe");
        break;



    case "Amarillo":
        var contenedor = document.getElementById("contAvatar");
        contenedor.classList.add("Amarillo");
        break;

    

   
        case "Azul":
            var contenedor = document.getElementById("contAvatar");
            contenedor.classList.add("Azul");
            break;
    
        
            case "Verde":
                var contenedor = document.getElementById("contAvatar");
                contenedor.classList.add("Verde");
                break;
        
            

            
                case "Gris":
                    var contenedor = document.getElementById("contAvatar");
                    contenedor.classList.add("Gris");
                    break;
            
}
}


            
            

    


