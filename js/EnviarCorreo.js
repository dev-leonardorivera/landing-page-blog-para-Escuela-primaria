enviar (nombre,email,mensaje) {
        
        
        
    if(this.nombre==='' || this.email==='' || this.mensaje==='' || !this.email.includes('@')){
        alert("algunos de los campos estan vacios o no cumplen con lo requerido")
        /*this.status=1;*/

    }else{

     
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        axios.post('https://formsubmit.co/ajax/ca187890125ae3d83efed645ab8ad493', {
            Nombre: this.nombre,
            Email: this.email,
            Asunto: this.subject,
            message: this.mensaje
        }).then(function(response){
               
                if(response.status==200){                        
                    if(response.data.success === "true"){
                        alert(" Exelente!,el correo se ha enviado con exito gracias por enviarme un mensaje.");

                    }
                    
                }
            }).catch(function(error){ 
                alert("Ah Ocurrindo un error al enviar el correo: " +error );
                console.log(error)});
        
            
                    
    }
}
