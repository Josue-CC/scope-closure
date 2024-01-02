function fruits(){
    //var es para todos lo que queremos
    //let y const es solo para dntro de una variable ahora lo veremos  
    //vamos a ver como funciona
    if (true) {
        var fruit1 = 'Apple';  // function scope
        let fruit2 = 'Kiwi'; // block scope
        const fruit3 = 'Banana'; // block scope
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}

fruits();
// ojo dentro del if si se podra utilizar el let y el const 
// ojo de loca no se equivoca heeee
