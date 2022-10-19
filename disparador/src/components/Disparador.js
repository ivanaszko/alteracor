const Disparador = () => {

    const handleSubmit = async () =>{
          console.log("chegou aqui");  
          fetch("http://192.168.1.249:8080/api/messages/send", {
          method:"POST",
          body: {"number": "5551996495083", "body": "Enviado via api"},
          headers:{
            "Content-Type": "application/json",
            "Authorization": "Bearer e5d88584-7042-421e-8285-70d5f3266869",
          }
        });

      }


    return(
        <button onClick={(e) => handleSubmit()}>Clica ai</button>    
    )
}

export default Disparador;