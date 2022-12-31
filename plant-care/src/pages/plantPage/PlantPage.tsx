import { IonContent, IonPage } from '@ionic/react';
import { useEffect, useState } from 'react';
import FabAddPlant from '../../components/fabAddPlant/FabAddPlant';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import Select from '../../components/select/Select';
import './PlantPage.css';

const PlantPage: React.FC = () => {
  const [selectedButton, setSelectedButton] = useState<string>("Par zone");
  const [plants, setPlants] = useState<Plant[]>([]);

  type Plant = {
    id: number;
    name: string;
    picture: string;
    zone: string;
  }

  useEffect(() => {
    const plant = getPlant();
    setPlants(plant);
  }, []);

  const getPlant = () => {
    return [
      {
        id: 1,
        name: "Tulipe",
        picture: "path/to/image",
        zone: "Chambre",
      },
      {
        id: 2,
        name: "Herbe",
        picture: "path/to/image",
        zone: "Jardin",
      },
      {
        id: 3,
        name: "Aloe Vera",
        picture: "path/to/image",
        zone: "Salle de bain",
      },
      {
        id: 4,
        name: "Dracaena",
        picture: "path/to/image",
        zone: "Bureau",
      },
      {
        id: 1,
        name: "Lavande",
        picture: "path/to/image",
        zone: "Chambre",
      }
    ]
  }

  const getEachZone = () => {
    const uniqueZones = plants.map(item => item.zone)
    .filter((value, index, self) => self.indexOf(value) === index);

    //sort by name
    uniqueZones.sort((a, b) => {
      return a.localeCompare(b);
    });

    return uniqueZones;
  }

  const content = () => {
    return (
    selectedButton === "Par zone" ? (
      <div className="zone-container">
        {getEachZone().map((zone) => {
          return (
            <div>
            <div className="zone-title">{zone}</div>
            <div className="plant-container">
              {plants.filter((plantFilter) => plantFilter.zone === zone).map((plant) => {
                return (
                  <div className="plant">
                    <div className="plant-name">{plant.name}</div>
                    <div className="plant-picture">{plant.picture}</div>
                  </div>
                )
              })}
              </div>
            </div>
          )
        })
        }
      </div>
    ) : (
      <div className="name-container">
        <div className="name-title">Tulipe</div>
        <div className="name-title">Herbe</div>
        <div className="name-title">Aloe Vera</div>
        <div className="name-title">Dracaena</div>
        <div className="name-title">Lavande</div>
      </div>
    )
    )
  }

  return (
    <IonPage>
      <Header />
      <IonContent>
        <div className='title-page'>Mes plantes</div>
      <div className='date-line'>
          <div className="ion-select">
      <Select data={["Par zone", "Par nom"]} defaultValue={selectedButton} handleClick={(e: { target: { value: any; }; }) => setSelectedButton(e.target.value)}/>
      </div>
      </div>
      <div>
      {content()}
      </div>
      <FabAddPlant link="/add-zone"/>
      </IonContent>
      <Footer />
    </IonPage>
  );
};

export default PlantPage;
