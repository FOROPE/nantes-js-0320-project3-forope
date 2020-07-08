import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ClientList() {
  const [List, setList] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    const getList = async () => {
      try {
        const list = await axios.get(`http://localhost:5000/form`);
        setList(list.data);
      } catch (err) {
        setError(err);
      }
    };
    getList();
  }, []);

  return (
    <div>
      {error
        ? 'Il y a une erreur'
        : List.map((client) => {
            return (
              <div key={client.id}>
                <p>{client.Name}</p>
              </div>
            );
          })}
    </div>
  );
}

export default ClientList;
