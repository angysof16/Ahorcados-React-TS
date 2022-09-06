import imagen0 from '../assets/0.png';
import imagen1 from '../assets/1.png';
import imagen2 from '../assets/2.png';
import imagen3 from '../assets/3.png';
import imagen4 from '../assets/4.png';
import imagen5 from '../assets/5.png';
import imagen6 from '../assets/6.png';
import imagen7 from '../assets/7.png';
import imagen8 from '../assets/8.png';
import imagen9 from '../assets/9.png';

const imagenes: string[] = [
    imagen0,
    imagen1,
    imagen2,
    imagen3,
    imagen4,
    imagen5,
    imagen6,
    imagen7,
    imagen8,
    imagen9,
];

interface Props {
    imagenNumero: number;
}


export const HangImage = ({ imagenNumero }: Props) => {

if(imagenNumero >= 9){
    imagenNumero = 9;
}

  return (
    <img src={imagenes[imagenNumero]} className="w-56" />
  )
}
