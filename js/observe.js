window.addEventListener("load",(event)=>{

  
    createObserver();


},false)


function createObserver() {
    let observer;
  
    let options = {
      root: null,
      rootMargin: "0px",
      threshold:1.0
    };

    observerInicio = new IntersectionObserver((event)=>{
        let btnInicio =document.getElementById("btnInicio");
        let btnNosotros =document.getElementById("btnNosotros");
        let btnBlog = document.getElementById("btnBlog");
        let btnContacto = document.getElementById("btnContacto");

        btnInicio.classList.add("activeNav");
        btnNosotros.classList.remove("activeNav")
        btnBlog.classList.remove("activeNav");
        btnContacto.classList.remove("activeNav")
        
    }, options);
    observerInicio.observe(document.querySelector("#myCarousel"));




  
    observer = new IntersectionObserver((event)=>{
        let btnInicio =document.getElementById("btnInicio");
        let btnNosotros =document.getElementById("btnNosotros");
        let btnBlog = document.getElementById("btnBlog");
        let btnContacto = document.getElementById("btnContacto");

        btnInicio.classList.remove("activeNav");
        btnNosotros.classList.remove("activeNav")
        btnBlog.classList.add("activeNav");
        btnContacto.classList.remove("activeNav")
        
    }, options);
    observer.observe(document.querySelector("#Blog"));

    observerNosotros = new IntersectionObserver((event)=>{
        let btnInicio =document.getElementById("btnInicio");
        let btnNosotros =document.getElementById("btnNosotros");
        let btnBlog = document.getElementById("btnBlog");
        let btnContacto = document.getElementById("btnContacto");

        btnInicio.classList.remove("activeNav");
        btnNosotros.classList.add("activeNav")
        btnBlog.classList.remove("activeNav");
        btnContacto.classList.remove("activeNav")
    }, options);
    observerNosotros.observe(document.querySelector("#Nosotros"));

 





    observerContacto = new IntersectionObserver((event)=>{
        let btnInicio =document.getElementById("btnInicio");
        let btnNosotros =document.getElementById("btnNosotros");
        let btnBlog = document.getElementById("btnBlog");
        let btnContacto = document.getElementById("btnContacto");

        btnInicio.classList.remove("activeNav");
        btnNosotros.classList.remove("activeNav")
        btnBlog.classList.remove("activeNav");
        btnContacto.classList.add("activeNav")
    }, options);
    observerContacto.observe(document.querySelector("#Contacto"));




    observerContactoDos = new IntersectionObserver((event)=>{
        let btnInicio =document.getElementById("btnInicio");
        let btnNosotros =document.getElementById("btnNosotros");
        let btnBlog = document.getElementById("btnBlog");
        let btnContacto = document.getElementById("btnContacto");

        btnInicio.classList.remove("activeNav");
        btnNosotros.classList.remove("activeNav")
        btnBlog.classList.remove("activeNav");
        btnContacto.classList.add("activeNav")
    }, options);
    observerContactoDos.observe(document.querySelector("#ContactoDos"));
  }