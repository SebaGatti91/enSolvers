import React,{useState} from 'react';
import TareaForm from './componentes/TareaForm';
import Tarea from './componentes/Tarea'
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import DataService from './service/service'
import { getAllByAltText } from '@testing-library/dom';

function App() {
const [listaTareas,setListaTareas] = useState([]) 
//en array

const nuevaTarea = (tarea) =>{
  setListaTareas([tarea, ...listaTareas]);
  DataService.create(
    { 
    "published": false,
    "title": tarea,
    }
  ) 

}

const borrar = (id) => {
  const listaFiltrada = listaTareas.filter((e, index) => index !== id);
  setListaTareas(listaFiltrada);
  DataService.delete(id);
} // obtengo array con todas las tareas menos la clickeada

const actualizarTarea = (id,tarea) => {
  const listaActualizada = listaTareas.map((e,index) => {
    if(index === id){
      e = tarea //busco la tarea editada y la cambio
    }
    return e
  })

  setListaTareas(listaActualizada);

}

  return (
    <div className="App">
    <TareaForm 
    nuevaTarea={nuevaTarea}
    />
    {
      listaTareas.map((e, index) => <Tarea 
                                  tarea={e}
                                  borrar={borrar}
                                  id={index}
                                  editar={actualizarTarea}
                                  />
      )
    }
    </div>
  );
}

export default App;
