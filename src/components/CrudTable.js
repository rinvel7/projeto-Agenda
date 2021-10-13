//Quando você se conectar ao terminal, o db.json entrará em vigor
import React from "react";
import CrudTableRow from "./CrudTableRow";

const CrudTable = ({ data, setDataEdit, deleteData }) => {
  return (
    <div>
      <h2>Tabla de Datos</h2>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Telefone</th>
            <th>Email</th>
            <th>Opções</th>
          </tr>
        </thead>
        <tbody>
            {data.length > 0 ? (
             data.map((el) => (
            <CrudTableRow 
            key={el.id} 
            el={el} 
            setDataEdit= {setDataEdit} 
            deleteData={deleteData} 
             />
            ))
           ) : (
             <tr>
             <td colSpan="3">Sim dados</td>
           </tr>
           )} 
        </tbody>
      </table>
    </div>
  );
};

export default CrudTable;