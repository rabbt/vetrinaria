import React from 'react';
import Cita from './Cita';


const ListaCitas = ({citas, eliminarCita}) =>{

//imprimir mensaje en base a si jay citas o no 
const mensaje = Object.keys(citas).length === 0 ? 'no hay Jugadores' : 'administra los jugadores aqui';

    return (
    <div className='card mt-2 py-5'>
    <div className="card-body">
        <h2 className="card-title text-center">{mensaje}</h2>


       <div className="listas-citas">
           {citas.map(cita => (
               <Cita
                    key ={cita.id}
                   cita={cita}
                   eliminarCita={eliminarCita}
               />
           ))}
       </div>
    </div>
</div>
)
}
 
export default ListaCitas;
