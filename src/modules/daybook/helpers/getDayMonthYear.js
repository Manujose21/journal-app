
 const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio','Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
 const days   = ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado']

const getDayMonthYear = ({ date }) =>{

  const newDate = new Date( date )
  const dateParse = `${newDate.getDate()} ${months[ newDate.getMonth()]} ${newDate.getFullYear()}, ${days[newDate.getDay()]} `
   
  return dateParse

}

export default getDayMonthYear