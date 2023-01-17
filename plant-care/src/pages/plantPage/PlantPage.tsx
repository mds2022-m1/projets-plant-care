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
  const [query, setQuery] = useState('')

  const handleChange = (e: any) => {
    setQuery(e.target.value)
  }

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
        picture: "assets/image/tulipe.png",
        zone: "Chambre",
      },
      {
        id: 6,
        name: "Cerisier",
        picture: "assets/image/tulipe.png",
        zone: "Chambre",
      },
      {
        id: 7,
        name: "Lavandula",
        picture: "assets/image/tulipe.png",
        zone: "Chambre",
      },
      {
        id: 8,
        name: "Cactus",
        picture: "assets/image/tulipe.png",
        zone: "Chambre",
      },
      {
        id: 9,
        name: "Rose",
        picture: "assets/image/tulipe.png",
        zone: "Chambre",
      },
      {
        id: 2,
        name: "Herbe",
        picture: "assets/image/tulipe.png",
        zone: "Jardin",
      },
      {
        id: 3,
        name: "Aloe Vera",
        picture: "assets/image/tulipe.png",
        zone: "Salle de bain",
      },
      {
        id: 4,
        name: "Dracaena",
        picture: "assets/image/tulipe.png",
        zone: "Bureau",
      },
      {
        id: 5,
        name: "Lavande",
        picture: "assets/image/tulipe.png",
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

  const countPlantByZone = (zone: string) => {
    return plants.filter((plant) => plant.zone === zone).length;
  }

  const linkToPlant = (id: number) => {
    return '/plant?id=' + id;
  }


  const byName = () => {
    return (
      <div className='zone-container'>
        <input type="search" value={query} onChange={handleChange} placeholder="Rechercher..." className="search-input"></input>
        <div className="plant-list">
          {query === '' ?
          getPlant().map((plant) => {
            return (
              <div className="container-plant-list">
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
                <a className='zone-link' href={linkToPlant(plant.id)}>Afficher</a>
              </div>
            )
          }
          ) : plants.filter((plantFilter) => plantFilter.name.toLowerCase().includes(query.toLowerCase())).map((plant) => {
            return (
              <div className="container-plant-list">
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
                <a className='zone-link' href={linkToPlant(plant.id)}>Afficher</a>
              </div>
            )
          }
          )}
        </div>
      </div>
    )
  }
  
  const linkToZone = (zone: string) => {
    return `/zone/plants?zone=${zone}`
  }

  const byZone = () => {
    return (
      <div className="zone-container">
        {getEachZone().map((zone) => {
          return (
            <div>
              <div className="zone-title">
                <div>{zone}</div><a className='zone-link' href={linkToZone(zone)}>Tout afficher</a>{/** TO CHANGE*/}
              </div>
              <div className="plant-container">
                {countPlantByZone(zone) > 4
                  ? (plants.filter((plantFilter) => plantFilter.zone === zone).slice(0, 3).map((plant) => {
                    return (
                      <div className="plant">
                        <img alt={plant.name} src={plant.picture} className="plant-picture"></img>
                      </div>
                    )
                  })
                  )
                  : plants.filter((plantFilter) => plantFilter.zone === zone).map((plant) => {
                    return (
                      <div className="plant">
                        <img alt={plant.name} src={plant.picture} className="plant-picture"></img>
                      </div>
                    )
                  })}
                {countPlantByZone(zone) > 4 ? <div className="plant-number">+ {countPlantByZone(zone) - 3}</div> : null}

              </div>
            </div>
          )
        })
        }
      </div>
    )
  }

  const content = () => {
    return (
      selectedButton === "Par zone" ? byZone() : byName()
    )
  }

  return (
    <IonPage>
      <Header />
      <IonContent>
        <div className='title-page'>Mes plantes</div>
        <div className='date-line'>
          <div className="ion-select">
            <Select data={["Par zone", "Par nom"]} defaultValue={selectedButton} handleClick={(e: { target: { value: any; }; }) => setSelectedButton(e.target.value)} />
          </div>
        </div>
        <div>
          {content()}
        </div>
        <FabAddPlant link="/add-zone" />
      </IonContent>
      <Footer />
    </IonPage>
  );
};

export default PlantPage;
