import React from 'react'

function LinkForm() {
    return (
        <form className="card card-body">
            <h5 className="card-title">Formularion de Links</h5>
            <div className="form-group input-group">
                <div className="input-group-text bg-light">
                    <i className="material-icons">insert_link</i>
                </div>
                <input type="text" className="form-control" placeholder='URL' name="url"/>
            </div>
            <div className="form-group input-group">
                <div className="input-group-text bg-light">
                <i className="material-icons">create</i>
                </div>
                <input type="text" className='form-control'name='name' placeholder='Nombre del sitio Web'/>
            </div>
            <div className="form-group">
                <textarea className='form-control' placeholder='Descripcion' name="description"rows="3"></textarea>
            </div>
            <button className='btn btn-primary btn-block'>Guardar</button>
        </form>
    )
}

export default LinkForm
