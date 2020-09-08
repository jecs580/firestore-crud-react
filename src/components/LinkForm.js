import React,{useState} from 'react'

function LinkForm() {
    const initialstateValue={
        url:'',
        name:'',
        description:''
    }
    const [values,setValues]=useState(initialstateValue);
    const handleInputChange= e=>{
        const {name,value}=e.target;  // e.target, devuelve el nombre y el valor del input
        setValues({...values, [name]:value})  // Copiamos los valores que trae el estado inicialmente y cambia los valores de los que lleno en el form.
    }
    const handleSubmit =e =>{
        e.preventDefault();
        console.log(values); // values, devuelve un objeto vacio de los campos del form
    }
    return (
        <form className="card card-body" onSubmit={handleSubmit}>
            <h5 className="card-title">Formularion de Links</h5>
            <div className="form-group input-group">
                <div className="input-group-text bg-light">
                    <i className="material-icons">insert_link</i>
                </div>
                <input type="text" className="form-control" placeholder='URL' name="url" onChange={handleInputChange}/>
            </div>
            <div className="form-group input-group">
                <div className="input-group-text bg-light">
                <i className="material-icons">create</i>
                </div>
                <input type="text" className='form-control'name='name' placeholder='Nombre del sitio Web'  onChange={handleInputChange} />
            </div>
            <div className="form-group">
                <textarea className='form-control' placeholder='Descripcion' onChange={handleInputChange} name="description" rows="3"></textarea>
            </div>
            <button className='btn btn-primary btn-block'>Guardar</button>
        </form>
    )
}

export default LinkForm
