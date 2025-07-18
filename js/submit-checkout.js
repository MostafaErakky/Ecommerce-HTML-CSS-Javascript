const scriptURL = "https://script.google.com/macros/s/AKfycbw7mqMfRF8Hb6xOFf63q41QGEHPoJKDgFNxJM_eyZZaEwYWucZVgWL4en1bXZOwCvuJ/exec"
let form =document.getElementById("form-contact");

form.addEventListener("submit",(event) => {
    event.preventDefault()
    fetch(scriptURL,{
        method:"POST",
        body: new FormData(form),

    }).then((response) =>{
        setTimeout(()=>{
            localStorage.removeItem("cart")
            window.location.reload()
        },3000)
    })
    .catch((error)=>console.error("error",error.message));
    
})