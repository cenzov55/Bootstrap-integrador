window.onload=(function(){
    window.location.hash = 'home'
    //window.location.hash = '#formulario'
    //CAMBIAR FONDO
    
    const imagenes = ["img/ba1.jpg" , "img/ba2.jpg", "img/ba3.jpg"];
    i=0;
    setInterval(
        
        function(){
            
        i == 2 ? i=0:i++;
        try{
            document.getElementById("fondo").style.backgroundImage = `url('${imagenes[i]}')`;}
            catch{return false}
            
        }, 3000);

        l=console.log

});


window.addEventListener('hashchange', function (e) {

    if(window.location.hash != '#formulario'){return false};

    const cargarTicketForm =   async ()=> {
        await  fetch('ticket.html').then(res => res.text()).then(data => {
              document.getElementById("contenido").innerHTML = data;
              
           }).then(function(){
      
                   document.getElementById("btnBorrar").addEventListener('click' , () => {

                      document.getElementById('ticketForm').reset();
                      document.getElementById('totalPagarText').innerHTML = "Total a pagar: $"

                  })
                  
                  document.getElementById("btnResumen").addEventListener('click' , () => {
                    const valorTicket = 200;
                    const descuentos = {'Categoria': 0.8, 'Trainee': 0.5, 'Junior': 0.15}   
                    const totalText = document.getElementById('totalPagarText')
                    totalText.innerHTML = "Total a pagar: $"
                    //Extrae inputs
                    let inputValues=[]
                    inputs = Array.from(ticketForm.elements);
                    inputs.map(x => inputValues.push(x.value))
                    let [nombre,apellido,correo,cantidad,Categoria] =  [...inputValues]
                    let total = valorTicket*cantidad
                    //Maths
                    if(Categoria == "Estudiante"){total -= total * descuentos.Categoria }
                    if(Categoria == "Trainee"){total -= total * descuentos.Trainee }
                    if(Categoria == "Junior"){total -= total* descuentos.Junior}
                    //Muestra resultado
                    totalText.innerHTML += total;

                   })
                  })
                }
                cargarTicketForm()
                })
 





