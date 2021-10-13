import React from "react";

const CrudTableRow = ({el, setDataEdit, deleteData }) => {
    let { name, telefone, email, id } = el;

    return(
        <tr>
            <td>{name}</td>
            <td>{telefone}</td>
            <td>{email}</td>
            <td> 
            <button onClick={() => setDataEdit(el)}>Editar</button>
        <button type="Eliminar" onClick={() => deleteData(id)}>Eliminar</button>
            </td>
        </tr>
    );
};

export default CrudTableRow;