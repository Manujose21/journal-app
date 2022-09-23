import Swal from "sweetalert2"

export const alertSucces = (title, text = "") =>{
  
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: title,
    text: text,
    showConfirmButton: false,
    showCancelButton: false,
    timer: 2000
  })

}

export const alertError = (title, text ="") =>{
  Swal.fire({
    position: 'center', 
    icon: 'error',
    title: title,
    text: text,
    showConfirmButton: false,
    showCancelButton: false,
    timer: 2000
  })
} 

export const alertAction = (title, text = "", confirmed, fun) => {
   return Swal.fire({
    position: 'center',
    icon: 'info',
    title: title,
    text: text,
    showConfirmButton: true,
    showCancelButton: true,
    confirmButtonText: 'Aceptar'
  }).then( res =>{
    if(res.isConfirmed) {
      const res = fun()
      Swal.fire({
        icon: "success",
        title: confirmed,
        text: `${confirmed} Correctamente`
      })
      return [res, true]
    }
  })
}


