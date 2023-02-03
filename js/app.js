

//=================================================
//=================================================
let template=document.getElementById("template");
let compras=document.getElementById("compras");

let fragment=document.createDocumentFragment();
let carrito=document.getElementById("carrito");
let template2=document.getElementById("template2");

let tennis=[

  {
    id:"0A1",
    img:"./img/tennis-01.jpg",
    nombre:"Nike",
    precio:1200,
    cantidad:0
  },
  {
    id:"0A2",
    img:"./img/tennis-02.jpg",
    nombre:"Convers",
    precio:1800,
    cantidad:0
  },
  {
    id:"0A3",
    img:"./img/tennis-03.jpg",
    nombre:"Adidas",
    precio:1400,
    cantidad:0
  },
  {
    id:"0A4",
    img:"./img/tennis-04.jpg",
    nombre:"Charly",
    precio:1800,
    cantidad:0
  },
  {
    id:"0A5",
    img:"./img/tennis-05.jpg",
    nombre:"Skechers",
    precio:1100,
    cantidad:0
  },
  {
    id:"0A6",
    img:"./img/tennis-06.jpg",
    nombre:"Pumas",
    precio:2400,
    cantidad:0
  }

];



  //===============================================================0

localStorage.setItem("productos",JSON.stringify(tennis));

let tennisObjetos=[];
    tennisObjetos=JSON.parse(localStorage.getItem("productos"));


    tennisObjetos.forEach((item) => {

  let clone=template.content.cloneNode(true);
      clone.querySelector(".img").src=item.img;
      clone.querySelector(".nombre").textContent=item.nombre;
      clone.querySelector(".codigo").textContent=item.id;
      clone.querySelector(".precio").textContent=item.precio;
      clone.querySelector(".agregar").dataset.id=item.id;

      fragment.appendChild(clone)
      });
      compras.appendChild(fragment);
   
    // OBTENEMOS TODOS LOS BOTOBNES AGREGAR

    document.addEventListener("click",(e)=>{
 
      if(e.target.matches(".agregar")){
      agregarAlCarrito(e);
      }else if(e.target.matches(".quitar")){
        quitar(e)
      }
  
  });
  //===========================================


    let agregarAlCarrito=(e)=>{   

      const indice= tennisObjetos.findIndex((item)=>item.id === e.target.dataset.id);
      if(indice !== -1){
        tennisObjetos[indice].cantidad+=1
   
      const indiceE=tennisObjetos.findIndex((em)=>em.id === e.target.dataset.id);
      const clone=template2.content.cloneNode(true);
      clone.querySelector(".title").textContent= tennisObjetos[indiceE].nombre;
      clone.querySelector(".cant").textContent= tennisObjetos[indiceE].cantidad;
      clone.querySelector(".total").textContent= tennisObjetos[indiceE].precio*tennisObjetos[indiceE].cantidad;
      clone.querySelector(".quitar").dataset.id= tennisObjetos[indiceE].id;
      clone.querySelector(".agregar").dataset.id= tennisObjetos[indiceE].id;

      fragment.appendChild(clone);
      carrito.appendChild(fragment);  

       }

      }


    const quitar=(e)=>{
        // tennisObjetos=tennisObjetos.filter(ite=>{
        //     if(ite.id===e.target.dataset.id){
        //         if(ite.cantidad>0){
        //             ite.cantidad--;
        //             if(ite.cantidad===0)return;
        //                 return ite;
                    
        //         }
        //     }else{return ite}
        // });
        console.log("quitar")
       
    };


