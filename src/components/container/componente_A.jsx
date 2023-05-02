import React from 'react';
// import { LEVELS } from '../../models/levels.enum.js';
import { Contact } from '../../models/contacto.class.js'
import ContactComponent from '../pure/contact.jsx';

const ContactListComponent = () => {

    const defaultcontact = new Contact('Example', 'hernandez', 'aaa@mail', false)
    const changestate = (id) => {
        console.log('TODO: Cambiar estado del contacto')
    }
    return (
        <div>
            <div>
                <h1>your contact:</h1> 
            </div>
            <ContactComponent contact={defaultcontact}></ContactComponent>
        </div>
    );
};




export default ContactListComponent;