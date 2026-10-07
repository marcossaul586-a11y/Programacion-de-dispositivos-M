import type { User, } from "./user.interface";
const URL = "https://jsonplaceholder.typicode.com/users";


const informacion= await fetch(URL);
const respuesta: User[]= await informacion.json();

const datosEspecificos = respuesta.map((User) =>{
return { Nombre:`${User.name}`, Usuario: `${User.username}`, Correo: `${User.email}`, Ciudad: `${User.address.city}` };
});
 console.log(datosEspecificos);