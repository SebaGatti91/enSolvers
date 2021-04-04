import React, {useState} from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';
import { AiFillEdit } from 'react-icons/ai';
import Checkbox from './Checkbox'



const Tarea = (props) => {
    const[modoEdit, setModoEdit] = useState(false);
    const[editText, setEditText] = useState ("");


    const editar = () => {
        setModoEdit(true);
    }

    const manejarEdit = (event) => {
        setEditText(event.target.value)
    }

    const submitEdit = (event) =>{
        event.preventDefault();  
        props.editar(props.id, editText)
        setEditText("");
        setModoEdit(false);
    }

    const cheked = () =>{
       
    }

    const cancelEdit = () =>{
        setModoEdit(false);    
    }

    const borrarTarea = () =>{
        props.borrar(props.id);
    }

    return (
        <div>
            {
                !modoEdit ? //si no estoy en modo edit renderizo tarea

            
            <div className="tarea">
                <span>{props.tarea}</span>
                
                <div className ="icons">
                <Checkbox 
                className = 'checkbox'
                />

                <AiFillEdit
                onClick = {editar}
                className='edit-icon'
                                    />
                                    
                <RiCloseCircleLine
                onClick={borrarTarea}
                className='delete-icon'
                                    />
                                    </div>
            </div>
            :
            //si estoy en modo edit
            <form className = "formEdit" >
                <input className ='edit'
                value={editText} 
                onChange={manejarEdit}
                /> 
                <button className ="Save"onClick={submitEdit}>
                    Save</button>
                <button className ="Cancel"onClick={cancelEdit}>
                    Cancel</button>
            </form>
            }

        </div>
    )
}
export default Tarea;