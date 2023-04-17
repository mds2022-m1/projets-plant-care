import React, { useState, useEffect } from 'react';
import { create, get, getbyid, getPlantNet } from '../../axios/Route';
import SeeYourPlantPage from '../../pages/seeYourPlantPage/SeeYourPlantPage';
import './SeeYourPlant.css';

const getId = () => {
    const url = window.location.search;
    const idParam = 'id=';
    const idIndex = url.indexOf(idParam) + idParam.length;
    console.log(url.substr(idIndex))
    return url.substr(idIndex);
  };

const getMyPlants = () => {
    const plant = getbyid('plants', getId());
    return plant;
  };

const Plant = ({ plant }) => {
  return (
    <div>
        <div className="contain-picture-your-plant">
            <img alt={plant.name} src={plant.picture} className="picture"></img>
        </div>
        <div className='title-your-plant'>{plant.name}</div>
    </div>
  );
};

const SeeYourPlant = () => {
  const [myPlant, setMyPlant] = useState({});

  useEffect(() => {
    const fetchMyPlant = async () => {
      const plant = await getMyPlants();
      setMyPlant(plant);
    };
    fetchMyPlant();
  }, []);

  return (
    <div>
      {myPlant ? <Plant plant={myPlant} /> : <p>Loading...</p>}
    </div>
  );
};

export default SeeYourPlant;
