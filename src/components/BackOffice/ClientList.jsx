import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function ClientList() {
  const [List, setList] = useState([]);
  // const [error, setError] = useState();

  useEffect(() => {
    const getList = async () => {
      try {
        const list = await axios.get(`http://localhost:5000/form`);
        setList(list.data);
      } catch (err) {
        // setError(err);
      }
    };
    getList();
  }, []);

  const classes = useStyles();

  const FixedHeight = styled.div`
    height: 500px;
    overflow: scroll;
  `;

  return (
    <FixedHeight>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nom</TableCell>
              <TableCell align="right">Entreprise</TableCell>
              <TableCell align="right">Rôle</TableCell>
              <TableCell align="right">Adresse Mail</TableCell>
              <TableCell align="right">Téléphone</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {List.map((client) => (
              <TableRow key={client.Name}>
                <TableCell component="th" scope="row">
                  {client.Name}
                </TableCell>
                <TableCell align="right">{client.Entreprise}</TableCell>
                <TableCell align="right">{client.Rôle}</TableCell>
                <TableCell align="right">{client.Adresse_mail}</TableCell>
                <TableCell align="right">{client.Téléphone}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </FixedHeight>
  );
}
