import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contacto.class';

const ContactComponent = ({ contact }) => {
    return (
        <div>
           <h2>
                Nombre: { contact.nombre }
           </h2> 
           <h3>
                Apellido: { contact.apellido }
           </h3>
           <h4>
                Email: { contact.email }
           </h4>
           <h5>
                Este contacto esta: { contact.conectado ? 'CONECTADO EN LINEA':'NO CONECTADO'}
           </h5>
        </div>
    );
};


ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact)
};


export default ContactComponent;