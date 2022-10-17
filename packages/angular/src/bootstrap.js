
 import { Component } from '@angular/core';
//EL COMPONENTE DE MONTAJE PARA INICIAR LA APP
const mount=(el)=>{ // el es el elemento html que esté presente en el container

    console.log('hola mundo angular')
};

//SI SE QUIERE PROBAR EN DESARROLLO POR SEPARADO
if (process.env.NODE_ENV === 'development'){
    const devRoot= document.querySelector('#_angular') //devRoot es igual a el 
    if (devRoot){
        mount(devRoot);
    }
}


//SI SE QUIERE CORRER USANDO EL CONTAINER
export {mount}