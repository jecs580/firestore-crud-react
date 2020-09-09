import React, {useEffect, useState} from 'react'
import LinkForm from './LinkForm';

import {db} from '../firebase';

function Links() {
    const [links,setLinks]=useState([])
    const addOrEdit=async (linkObject)=>{
        await db.collection('links').doc().set(linkObject);
        console.log("Tarea Guardada");
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
                    <h4>{link.name}</h4>
                    <p>{link.description}</p>
                    <a href={link.url} target='_blank'>Ir al sitio web</a>
                    </div>
                </div>
                ))}
        </div>
        </>
    )
}

export default Links
