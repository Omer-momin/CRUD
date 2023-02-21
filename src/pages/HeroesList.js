import { Button, Card, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import Styles from './Herolist.module.css'
import React from 'react';


const HeroesList = (props) => {
  const handleDeleteClick = (index) => {
    console.log('Delete Clicked', index);
    props.deleteFromList(index);
  };

  const handleEditClick = (index) => {
    props.handleIndexVal(index)

  };
  return (
    <>
    <Card className={Styles.input}>
      <h2> Heroes List</h2>

      {(props.heroList && props.heroList.length>0) ? (

         
        <Table className={Styles.table} >
          <TableHead>
            <TableRow>
              <TableCell>Sr. No.</TableCell>
              <TableCell>Hero Name</TableCell>
              <TableCell>Hero Real Name</TableCell>
              <TableCell>Edit</TableCell>
              <TableCell>Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.heroList.map((hero, index) => (
              <TableRow key={index}>
                <TableCell align="center">{index + 1}</TableCell>
                <TableCell>{hero.heronm}</TableCell>
                <TableCell>{hero.realnm}</TableCell>
                <TableCell>
                  <Button variant="outlined" size="small" onClick={() => handleEditClick(index)}>Edit</Button>
                </TableCell>
                <TableCell>
                  <Button variant="outlined" size="small" onClick={() => handleDeleteClick(index)}>Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

      ) : (
        <h4>No data available</h4>
      ) }
      </Card>
    </>
  );
};

export default HeroesList;
