import { Button, Card } from "@mui/material";
import { useEffect, useState } from "react";
import Styles from './AddHero.module.css'

const AddHero = (props) => {

  const [formData, setFormData] = useState({
    heronm: "",
    realnm: "",
  });

  useEffect(() => {
    // console.log("Selected Hero in Add Hero Form", props.selectedHero);
    if (props.selectedHero) {
      setFormData(props.selectedHero);
    }
  }, [props.selectedHero]);

  const formHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const addClick = () => {
    doValidate()
  }
    const doValidate = () => {
      if( formData.heronm.trim() == ""){
        alert("Enter Hero Name")
        return
       }
       else if (formData.realnm.trim()==""){
        alert ("Enter hero real name ")
        return
       }
    // console.log('Function Call in Child - Add Hero', formData);
    props.handleHeroList(formData);
    setFormData({
      heronm: "",
      realnm: "",
    });
  };

  const updateClick = () => {
    props.handleUpdateHero(formData);

    //Form Clean up
    setFormData({
      heronm: "",
      realnm: "",
    });
  };

  return (
    <>
    <Card className={Styles.input}>
      <h2>Add Hero </h2>
      <label>Hero Name: </label>
      <input
        placeholder=" Hero Name"
        name="heronm"
        value={formData.heronm}
        onChange={formHandler}
        
      />
      <br />
      <br />
      <label>Hero Real Name: </label>
      <input
        placeholder=" Hero's Real Name"
        name="realnm"
        value={formData.realnm}
        onChange={formHandler}
        
      />
      <br />
      <br />
      {!props.selectedHero ? (
        <Button variant="outlined" onClick={addClick}> Add Hero </Button>
      ) : (
        <Button variant="outlined" onClick={updateClick}> Update Hero </Button>
      )}
      </Card>
    </>
  );
};

export default AddHero;
