import { useEffect } from 'react'

function Efecto() {
   useEffect(() => {
        console.log("cargando...")
        setTimeout(() => {
            console.log("listo")
        },3000)
    },[])
}

export default Efecto;