import React, { useState, useEffect } from "react";

const initailForm = {
  name: "",
  telefone: "",
  email:"",
  id: null,
};

const CrudForm = ({ createData, updateData, dataEdit, setDataEdit }) => {
  const [form, setForm] = useState(initailForm);

  useEffect(() => {
    if(dataEdit) {
      setForm(dataEdit);
    }else{ 
      setForm(initailForm);
    }
    }, [dataEdit]);
  
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.telefone || !form.email ) {
      alert("Datos incompletos");
      return;
    }

    if (form.id === null) {
      createData(form);
    } else {
      updateData(form);
    }

    handleReset();
  };

  const handleReset = (e) => {
    setForm(initailForm);
    setDataEdit(null);
  };

  return (
    <div>
      <h3>{dataEdit ? "Editar" : "Inserir"}</h3>
      <form onSubmit={handleSubmit}>
        
        <input
          type="text"
          name="name"
          placeholder="Nome"
          onChange={handleChange}
          value={form.name}
        />
        <input
          type="text"
          name="telefone"
          placeholder="Telefone"
          onChange={handleChange}
          value={form.telefone}
        />
          <input
          type="text"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          value={form.email}
        />
        <input type="submit" value="Guardar" />
        <input type="reset" value="Limpar" onClick={handleReset} />
      </form>
    </div>
  );
};

export default CrudForm;
