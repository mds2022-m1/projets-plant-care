import React, { useState, useEffect } from 'react';
import { create, get, getbyid, getPlantNet } from '../../axios/Route';
import './Plant.css';
const Plants = () => {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await get('plants','');
      setPlants(data);
    };
    fetchData();
  }, []);

  const linkToPlant = (id: uuid) => {
    return '/plant?id=' + id;
  }

  return (
    <ul>
    {plants.map((plant, index) => (
        <div className="container-plant-list" key={plant.uuid}>
            <div>
              <div className="plant-info">
                <div className="contain-picture">
                  <img alt={plant.name} src={plant.picture} className="picture"></img>  
                </div>
                <div className="column">
                    <div className="plant-name-list">
                        {plant.name}
                    </div>
                    <div className="plant-zone-list">                        
                        {plant.zone}
                    </div>
                </div>
              </div>
            </div>
            <a className='zone-link' href={linkToPlant(plant.uuid)}>Afficher</a>
        </div>
    ))}
  </ul>
);
};

export default Plants;



                