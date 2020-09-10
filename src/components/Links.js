import React, {useEffect, useState} from 'react'
import LinkForm from './LinkForm';
import {toast} from 'react-toastify'
import {db} from '../firebase';

function Links() {
    const [links,setLinks]=useState([])
    const addOrEdit=async (linkObject)=>{
        await db.collection('links').doc().set(linkObject);
        // console.log("Tarea Guardada");
        toast.success("Nuevo Enlace Agregado",{
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: true
        });
    }
    const getLinks= ()=>{
        db.collection('links').onSnapshot((querySnapshot) => {
            // Usamos onSnapshot para que se cree un evento q controle los cambios de los datos que se extraigan
            const docs=[];
            querySnapshot.forEach(doc =>{
                docs.push({...doc.data(),id:doc.id})
            })
            console.log(docs);
            setLinks(docs);
        })
    };
    const onDeleteLink = async id =>{
        if(window.confirm('¿Estas seguro de eliminar este Enlace?')){
            await db.collection('links').doc(id).delete();
            // console.log('Enlace Eliminado Exitosamente');
            toast.error('Enlace Eliminado Exitosamente',{
                position:'top-center',
                autoClose: 3000,
                hideProgressBar: true,
            });
        }
    }
    useEffect(()=>{
        getLinks();
        console.log('obteniendo datos');
    },[])
    return (
        <>
        <div className="col-md-4 p-2">
        <LinkForm addOrEdit={addOrEdit}/>
        </div>
        <div className="col-md-8 p-2">
            {links.map(link=>(
                <div className="card mb-1" key={link.id}>
                    <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center">
                        <h4>{link.name}</h4>
                        <i className="material-icons text-danger" onClick={()=>onDeleteLink(link.id)}>close</i>
                    </div>
                    <p>{link.description}</p>
                    <a href={link.url} target='_blank' rel="noopener noreferrer">Ir al sitio web</a>
                    </div>
                </div>
                ))}
        </div>
        </>
    )
}

export default Links
