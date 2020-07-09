import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MaterialTable from 'material-table';

export default function AwesomeList() {
  const [state, setState] = useState({
    columns: [
      { title: 'Name', field: 'Name' },
      { title: 'Entreprise', field: 'Entreprise' },
      { title: 'Rôle', field: 'Rôle' },
      { title: 'E-Mail', field: 'Adresse_mail' },
      {
        title: 'État',
        field: 'Etat',
        lookup: { 1: 'À rapeller', 2: 'Video envoyée' },
      },
    ],
    data: [],
  });

  // const [List, setList] = useState([]);
  // const [error, setError] = useState();

  useEffect(() => {
    const getList = async () => {
      try {
        const list = await axios.get(`http://localhost:5000/form`);
        setState({ ...state, data: list.data });
      } catch (err) {
        // setError(err);
      }
    };
    getList();
  }, []);

  return (
    <MaterialTable
      title="Demandes de contact"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState((prevState) => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    />
  );
}
