import './App.css'
import { HangImage } from './components/HangImage';
import { letras } from './helpers/letras'
import {useEffect, useState} from 'react'
import { obtenerpalabrasrandom } from './helpers/obtenerpalabras';

function App() {
  const [ palabras, setPalabras ] = useState(obtenerpalabrasrandom())
  const [ ocultarPalabra, setOcultarPalabra] = useState("_ ".repeat(palabras.length))
  const [ intentos, setIntentos ] = useState(0);
  const [ gano, setGano] = useState(false)
  const [ perdio, setPerdio] = useState(false)

  //la persona perdio
  useEffect(() => {
    if (intentos === 9){
      setPerdio(true);
    }
  }, [intentos]);

  //la persona gano
  useEffect(() => {
    const currentOcultarPalabra = ocultarPalabra.split(" ").join("");
    if(currentOcultarPalabra === palabras){
      setGano(true);
    }
  }, [ocultarPalabra]);


  //validacion de palabras
  const validarPalabras = (letra: string) => {
    if(gano) return;
    if (perdio) return;
    if(!palabras.includes(letra)){
      setIntentos(Math.min( intentos + 1, 9 ))
      return;
    }

    const ocultarPalabraArray = ocultarPalabra.split(" ")


    for (let i = 0; i < palabras.length; i++){
      if(palabras[i] === letra){
        ocultarPalabraArray[i] = letra
      }
    }
    setOcultarPalabra(ocultarPalabraArray.join(" "))
  };

  const reiniciarJuego = () => {
    const nuevaPalabra = obtenerpalabrasrandom();

    setPalabras(nuevaPalabra);
    setOcultarPalabra("_ ".repeat(nuevaPalabra.length));
    setIntentos(0);
    setGano(false);
    setPerdio(false);
  }

  return (
    <div className="text-center">
     {/* Header */}
     <div>
     {/* <h3 className="font-bold text-3xl my-4 text-red-600"> Ahorcados </h3> */}
     <h2 className=" text-2xl my-4 text-orange-600"> Usted cuenta con 9 vidas  </h2>
     </div>

     {/* Imágenes */}
     <div>
      < HangImage imagenNumero={intentos}/>
     </div>

     {/* Palabra Oculta */}
     <h3 className="font-bold text-4xl my-4 text-blue-600">{ocultarPalabra}</h3>


     {/* Contador Intentos */}
     <h3 className="font-bold text-2xl my-4 text-blue-600">Intento: {intentos} </h3>

     {/* Mensaje si perdió */}
     {perdio ? (
      <h3 className="font-bold text-2xl my-4 text-red-600">Perdió 😢 La palabra es: {palabras} </h3>
     ) : (
      " "
     )}
     

     {/* Mensaje si ganó */}
     {gano ? (
     <h3 className="font-bold text-2xl my-4 text-green-600">Felicidades, usted ganó!🎉</h3>
     ) : (
      " "
     )}

     {/* Teclado */}
     {letras.map((letra) => (
      <button onClick= { () =>validarPalabras(letra)} className="bg-white p-4 rounded-full shadow-md m-2"
      key={letra}>{letra}</button>
     ))}

     {/* Botón de nuevo juego */}
     <h1/>
     <button onClick={reiniciarJuego} className="bg-blue-700 py-4 px-6 rounded-full text-white font-bold text-xl">¿Desea seguir jugando?</button>

    </div>
  );
}

export default App
