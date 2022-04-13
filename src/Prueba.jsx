import React from "react";

const Prueba = () => {
    let jugador = {
        nombre: "Messi",
        esposa: {
            antonella: {
                edad: 31,
                hijos: "Fede"
            },
            delfina: {
                edad: 24,
                hijos: null
                
            }

        },
        edad: 35,
        hijos: ["Mateo","Thiago","Ciro"]
    }

    const { edad, hijos, esposa:{antonella, delfina} } = jugador
    console.log(hijos)

    return (
        <div>Prueba</div>
    )
}

export default Prueba