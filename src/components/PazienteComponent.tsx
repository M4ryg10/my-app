import React from 'react';

interface Paziente {
  nome: string;
  cognome: string;
  eta: number;
  cf: string;
}

/*definizione delle proprietà che la componente accetta */
interface Props {
  pazienti: Paziente[];
} // \n

/* Definizione della componente PazienteComponent */
const PazienteComponent: React.FC<Props> = ({ pazienti }) => (
  /*è un arrow function che permette di ridurre la sintassi della funzione*/
  <ul>{/* Mappatura degli elementi pazienti nell'array*/}</ul>
);
