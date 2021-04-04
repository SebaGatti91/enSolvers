import React, {useState} from 'react';


const TareaForm = (props) => {
    //comillas por ser caden de texto
    const [inputText, setInputText] = useState(""); 
    //aqui valido la entrada 
    const [validacion, setValidacion] = useState(true);

    const manejarFormulario = (event) =>(
        setInputText(event.target.value)
    )
    
    const submit = (event) =>{
        event.preventDefault(); //si capturo no actualizo
        if(inputText.trim() !== ""){ //compruebo que halla 
            //algo en el input text al hacer submit
            props.nuevaTarea(inputText);
            setInputText("") //al borrar el contenido borro los datos
            setValidacion(true);
        }else{
            setValidacion(false);
        }
    }

    return(
        <div>
            <form className = "form" onSubmit={submit}>
                
                <h1 className = "title"> To-Do </h1>
                    <input className = "input"
                    value={inputText} 
                    placeholder='New Task'
                    onChange = {manejarFormulario}/> 
                    <button className= "Button">Add</button>
                    
            </form>
            {
                !validacion &&
                <div className = "validacion">Please add a new task</div>
            }
        </div>
    )
}

export default TareaForm;