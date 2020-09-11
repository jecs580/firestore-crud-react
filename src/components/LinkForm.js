import React,{useState, useEffect} from 'react'
import { db } from '../firebase';
import {toast} from 'react-toastify'
function LinkForm({addOrEdit,currentId,links}) {
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
    const validURL = (str) => {
        var pattern = new RegExp(
          "^(https?:\\/\\/)?" + // protocol
          "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
          "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
          "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
          "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
            "(\\#[-a-z\\d_]*)?$",
          "i"
        ); // fragment locator
        return !!pattern.test(str);
      };
    const handleSubmit =e =>{
        e.preventDefault();
        // values, devuelve un objeto vacio de los campos del form
        if (!validURL(values.url)) {
            return toast.warning("¡URL Invalida!", {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: true
            });
        }
        addOrEdit(values)
        setValues({...initialstateValue})
    }
    const getLinkById= async (id)=>{
        const doc = await db.collection('links').doc(id).get();
        setValues({...doc.data()})
    }
    useEffect(()=>{
        if(currentId === ''){
            setValues({...initialstateValue});
        }else{
            getLinkById(currentId);
        }
    },[currentId]);
    return (
        <form className="card card-body" onSubmit={handleSubmit}>
            <h5 className="card-title">Formularion de Links</h5>
            <div className="form-group input-group">
                <div className="input-group-text bg-light">
                    <i className="material-icons">insert_link</i>
                </div>
                <input type="text" className="form-control" placeholder='URL' name="url" onChange={handleInputChange} value={values['url']}/>
            </div>
            <div className="form-group input-group">
                <div className="input-group-text bg-light">
                <i className="material-icons">create</i>
                </div>
                <input type="text" className='form-control'name='name' placeholder='Nombre del sitio Web'  onChange={handleInputChange} value={values['name']}/>
            </div>
            <div className="form-group">
    <textarea className='form-control' placeholder='Descripcion' onChange={handleInputChange} name="description" rows="3" value={values['description']}></textarea>
            </div>
            <button className='btn btn-primary btn-block'>{currentId? 'Actualizar':'Guardar'}</button>
        </form>
    )
}

export default LinkForm
