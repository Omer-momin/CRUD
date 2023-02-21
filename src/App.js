import { useState } from "react";
import AddHero from "./pages/AddHero";
import HeroesList from "./pages/HeroesList";
// import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  const [heroList, setHeroList] = useState([]);
  const [index, setIndex] = useState(-1);
  const [selectedHero, setSelectedHero] = useState();

  const handleHeroList = (formData) => {
    // console.log('Function Call in Parent - App', formData);
    setHeroList([...heroList, formData]);
  };

  const deleteFromList = (index) => {
    let tmpList = JSON.parse(JSON.stringify(heroList)); // This creates a separate deep copy of heroList into tmpList
    tmpList.splice(index, 1);
    setHeroList(tmpList);
  };

  const handleIndexVal = (indx) => {
    // console.log("Index in Parent", indx, heroList[indx])
    setIndex(indx);
    setSelectedHero(heroList[indx]);
  };

  const handleUpdateHero = (formData) => {
    console.log("Form Data In APP", formData, index);
    let tmpHeroList = JSON.parse(JSON.stringify(heroList));
    tmpHeroList[index] = formData;
    setHeroList(tmpHeroList);

    // Clean up code
    setIndex(-1);
    setSelectedHero(null);
  };

  return (
    <>
      <h1>CRUD OPERATORS</h1>

      <div style={{ width: "100%" }}>
        <div
          style={{
            width: "45%",
            float: "left",
            padding: 10,
            // border: "1px solid black",
            marginLeft: 10,
          }}
        >
          <AddHero
            handleHeroList={handleHeroList}
            selectedHero={selectedHero}
            handleUpdateHero={handleUpdateHero}
          />
        </div>
        <div
          style={{
            width: "45%",
            float: "left",
            padding: 10,
            // border: "1px solid black",
            marginLeft: 10,
          }}
        >
          <HeroesList
            heroList={heroList}
            deleteFromList={deleteFromList}
            handleIndexVal={handleIndexVal}
          />
        </div>
      </div>
    </>
  );
};

export default App;
