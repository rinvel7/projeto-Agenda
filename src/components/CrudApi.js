//Quando você se conectar ao terminal, o db.json entrará em vigor
import React, { useEffect, useState } from "react";
import { helpHttp } from "../helpers/helpHttp";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";


const CrudApi = () => {
    const[db,setDb] = useState(null);
    const[dataEdit, setDataEdit] = useState(null);

    let api = helpHttp();
    let url = "http://localhost:5000/contactos";

    useEffect(() => {
        api.get(url).then((res) =>{
        //console.log(res);
        if(!res.err){
         setDb(res);
        }else{
         setDb(null);
        }
        });
    }, []);

    
    const createData = (data) => {
        data.id = Date.now();
        //console.log(data);
    
        let options = {
          body: data,
          headers: { "content-type": "application/json" },
        };
    
        api.post(url, options).then((res) => {
          //console.log(res);
          if (!res.err) {
            setDb([...db, res]);
          } else {
            //setError(res);
          }
        });
      };
    
      const updateData = (data) => {
        let endpoint = `${url}/${data.id}`;
        //console.log(endpoint);
    
        let options = {
          body: data,
          headers: { "content-type": "application/json" },
        };
    
        api.put(endpoint, options).then((res) => {
          //console.log(res);
          if (!res.err) {
            let newData = db.map((el) => (el.id === data.id ? data : el));
            setDb(newData);
          } else {
            //setError(res);
          }
        });
      };
    

      const deleteData = (id) => {
        let isDelete = window.confirm(
          `¿Estás seguro de eliminar el registro con el id '${id}'?`
        );
    
        if (isDelete) {
          let endpoint = `${url}/${id}`;
          let options = {
            headers: { "content-type": "application/json" },
          };
    
          api.del(endpoint, options).then((res) => {
            //console.log(res);
            if (!res.err) {
              let newData = db.filter((el) => el.id !== id);
              setDb(newData);
            } else {
              //setError(res);
            }
          });
        } else {
          return;
        }
      };
    
    return (
        <div>
            <h1>AGENDA DA CONTACTOS</h1>
         
            <CrudForm 
            createData={createData} 
            updateData={updateData} 
            dataEdit={dataEdit} 
            setDataEdit= {setDataEdit}
             />
            {db && <CrudTable 
            data={db} 
            setDataEdit= {setDataEdit} 
            deleteData={deleteData} 
            />}
        </div>
    );
};

export default CrudApi;