

//=================================================
//=================================================
let template=document.getElementById("template");
let compras=document.getElementById("compras");

let fragment=document.createDocumentFragment();
let carrito=document.getElementById("carrito");
let template2=document.getElementById("template2");
let carritoDeCompras=[];

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
    cantidad:1
  },
  {
    id:"0A3",
    img:"./img/tennis-03.jpg",
    nombre:"Adidas",
    precio:1400,
    cantidad:1
  },
  {
    id:"0A4",
    img:"./img/tennis-04.jpg",
    nombre:"Charly",
    precio:1800,
    cantidad:1
  },
  {
    id:"0A5",
    img:"./img/tennis-05.jpg",
    nombre:"Skechers",
    precio:1100,
    cantidad:1
  },
  {
    id:"0A6",
    img:"./img/tennis-06.jpg",
    nombre:"Pumas",
    precio:2400,
    cantidad:1
  }

];
  //===============================================================0

    tennis.forEach((item) => {

  let clone=template.content.cloneNode(true);
      clone.querySelector(".img").src=item.img;
      clone.querySelector(".nombre").textContent=item.nombre;
      clone.querySelector(".codigo").textContent=item.id;
      clone.querySelector(".precio").textContent=item.precio;
      clone.querySelector(".agregar").dataset.id=item.id;

      fragment.appendChild(clone)
      });
      compras.appendChild(fragment);


      
    document.addEventListener("click",(e)=>{
 
      if(e.target.matches(".agregar")){
      agregarAlCarrito(e);
      }else if(e.target.matches(".quitar")){
        quitar(e)
      }
  
  });


      let botones=document.querySelectorAll(".agregar")

      let coprasDelCarrito=[];
   
      let agregarAlCarrito=(e)=>{

   
     
      let posicion=tennis.findIndex((item)=>item.id === e.target.dataset.id);

      // if(posicion !== -1){
       
        let indice=coprasDelCarrito.findIndex((elem)=>elem.id === e.target.dataset.id )
         
  

            if(indice === -1){
              coprasDelCarrito.push(tennis[posicion])
              console
       
          }else{
            coprasDelCarrito[indice].cantidad++
              
           }
          
            localStorage.setItem("productos",JSON.stringify(coprasDelCarrito));
    // }
    
      pintarCarrito(e);

      }
     
   
      let pintarCarrito=(e)=>{
        
        
            carritoDeCompras=JSON.parse(localStorage.getItem("productos"))
          console.log(carritoDeCompras)
         

            carritoDeCompras.forEach((ite)=>{
            const clone=template2.content.cloneNode(true);
            clone.querySelector(".title").textContent=ite.nombre;
            clone.querySelector(".cant").textContent=ite.cantidad;
            clone.querySelector(".total").textContent=ite.precio*ite.cantidad;
            clone.querySelector(".quitar").dataset.id=ite.id;
            clone.querySelector(".agregar").dataset.id=ite.id;
    
            fragment.appendChild(clone);
    
        });
        carrito.appendChild(fragment);  
    


      }

      const quitar=(e)=>{
        coprasDelCarrito=coprasDelCarrito.filter(it=>{
            if(it.id===e.target.dataset.id){
                if(it.cantidad>0){
                    it.cantidad--;
                    if(it.cantidad===0)return;
                        return it;
                    
                }
            }else{return it}
        });
    pintarCarrito();
    };