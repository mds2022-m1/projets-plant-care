import { IonContent, IonPage } from '@ionic/react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Fab from '../../components/fab/Fab';
import './Dashboard.css';
import Select from '../../components/select/Select';
import TaskSticker from '../../components/taskSticker/taskSticker';
import { useEffect, useState } from 'react';
import TaskStickerToDelete from '../../components/taskStickerToDelete/TaskStickerToDelete';
import moment from 'moment';

const Dashboard: React.FC = () => {

  const [taskToDo, setTaskToDo] = useState<Task[]>([]);
  const [taskDone, setTaskDone] = useState<Task[]>([]);
  const [selectedButton, setSelectedButton] = useState<string>("Aujourd'hui");

   type Task = {
    id: number;
    name: string;
    picture: string;
    zone: string;
    task: string;
    date: string;
    done: boolean;
  }

  useEffect(() => {
    const plant = getTask();
    const today = moment();
    const filterTaskToDo = plant.filter((plant) => plant.done === false && moment(plant.date, 'YYYY-MM-DD').isBefore(today));
    const filterTaskDone = plant.filter((plant) => plant.done === true);

    //sort by date
    filterTaskToDo.sort((a, b) => {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    });

    filterTaskDone.sort((a, b) => {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    });

    setTaskToDo(filterTaskToDo);
    setTaskDone(filterTaskDone);
  }, []);


  const getTask = () => {
    return [
      {
        id: 1,
        name: "Tulipe",
        picture: "path/to/image",
        zone: "Chambre",
        task: "Arroser",
        date: "2022-12-31",
        done: false
      },
      {
        id: 2,
        name: "Herbe",
        picture: "path/to/image",
        zone: "Jardin",
        task: "Tondre la pelouse",
        date: "2022-12-11",
        done: false
      },
      {
        id: 3,
        name: "Aloe Vera",
        picture: "path/to/image",
        zone: "Salle de bain",
        task: "Arroser",
        date: "2022-11-11",
        done: true
      },
      {
        id: 4,
        name: "Dracaena",
        picture: "path/to/image",
        zone: "Bureau",
        task: "Arroser",
        date: "2023-01-03",
        done: false
      },
      {
        id: 1,
        name: "Lavande",
        picture: "path/to/image",
        zone: "Chambre",
        task: "Tailler",
        date: "2023-01-23",
        done: false
      }
    ]
  }

  const transformTaskToDone = (task: Task) => {
      //filter the task to do
      const taskToDoFiltered = taskToDo.filter((tasks) => tasks.id !== task.id);
      setTaskToDo(taskToDoFiltered);
      //add the task to the task done
      const taskDoneFiltered = taskDone.concat(task);
      setTaskDone(taskDoneFiltered);

      //update the task in the database
      //updateTask(task);
  }

  const deleteTask = async (task: Task) => {
    //filter the task to do
    const taskDoneFiltered = taskDone.filter((tasks) => tasks.id !== task.id);
    setTaskDone(taskDoneFiltered);

    await deleted('plants', "02af40c7-03c0-4da9-a19e-5cd3639c66ad");
    //delete the task in the database
    //deleteTask(task);
  }

  const showTaskAccordingDateSelected = (value: string) => {
    const plant = getTask();
    const today = moment();

    if( value === "Aujourd'hui") {
      const filterTaskToDo = plant.filter((task) => moment(task.date, 'YYYY-MM-DD').isBefore(today) && task.done === false);
      filterTaskToDo.sort((a, b) => {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      });  
      setTaskToDo(filterTaskToDo);
      setSelectedButton(value);

    } else if (value === "Cette semaine") {
      const thisWeek = moment().add(7, 'days');
      const filterTaskToDo = plant.filter((task) => moment(task.date, 'YYYY-MM-DD').isBefore(thisWeek) && task.done === false);
      filterTaskToDo.sort((a, b) => {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      });  
      setTaskToDo(filterTaskToDo);
      setSelectedButton(value);

    } else if (value === "Ce mois-ci") {
      const thisMonth = moment().add(1, 'months');
      const filterTaskToDo = plant.filter((task) => moment(task.date, 'YYYY-MM-DD').isBefore(thisMonth) && task.done === false);
      filterTaskToDo.sort((a, b) => {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      }); 
      setTaskToDo(filterTaskToDo);
      setSelectedButton(value);
    }
  }


  return (
    <IonPage>
      <Header />
      <IonContent>
        <Fab link="/personalized-task"/>
        <div className='date-line'>
          <div className="ion-select">
      <Select data={["Aujourd'hui", "Cette semaine", "Ce mois-ci"]} defaultValue={selectedButton} handleClick={(e: { target: { value: any; }; }) => showTaskAccordingDateSelected(e.target.value)}/>
      </div>
      </div>      

      {taskToDo.map((task) => {
        return (
          <TaskSticker task={task.task} date={task.date} plantName={task.name} zone={task.zone} picture={task.picture} onClick={()=>transformTaskToDone(task)} />
        )
      }
      )}

      <div className='container-line'>
        <div className="line"></div>
        <span className='task-done'>Tâche(s) effectuée(s)</span></div>

        {taskDone.map((task) => {
        return (
          <TaskStickerToDelete task={task.task} date={task.date} plantName={task.name} zone={task.zone} picture={task.picture} onClick={()=>deleteTask(task)} />
        )
        })
      }
      </IonContent>
      <Footer />
    </IonPage>
  );
};

export default Dashboard;
