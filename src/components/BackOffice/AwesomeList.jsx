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
        title: 'Status',
        field: 'Status',
        lookup: { 1: 'A rapeller', 2: 'Video envoyée' },
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
        onRowAdd: (newData) => {
          return axios.post(`http://localhost:5000/form`, newData).then(() => {
            setState((prevState) => {
              const data = [...prevState.data];
              data.push(newData);
              return { ...prevState, data };
            });
          });
        },
        onRowUpdate: (newData, oldData) => {
          return axios
            .put(`http://localhost:5000/form/${oldData.id}`, newData)
            .then(() => {
              if (oldData) {
                setState((prevState) => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            });
        },
        onRowDelete: (oldData) => {
          return axios
            .delete(`http://localhost:5000/form/${oldData.id}`)
            .then(() => {
              setState((prevState) => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            });
        },
      }}
    />
  );
}
