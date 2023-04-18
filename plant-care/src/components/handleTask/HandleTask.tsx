import { IonButton, IonButtons, IonCheckbox, IonContent, IonDatetime, IonDatetimeButton, IonHeader, IonIcon, IonInput, IonLabel, IonModal, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState, useRef, useEffect } from 'react';
import './HandleTask.css';
import { close, create } from "ionicons/icons";
import moment from 'moment';
import PlantCareLogo from "../logo/PlantCareLogo";
import Select from '../../components/select/Select';
import { listFrequencyType } from '../../enum/FrequencyTypeEnum';
import { listMonth, convertMonthNameToAbbreviation, convertMonthAbbreviationToName } from '../../enum/MonthEnum';




const HandleTask = ({ data }: { data: any }) => {

  const [taskDate, setTaskDate] = useState(moment().format('Y-MM-D HH:mm:SS'));
  const [typeFrequency, setTypeFrequency] = useState('');
  const [isOpen, setIsOpen] = useState(true);
  const [showMonth, setShowMonth] = useState<boolean>(false);
  const [number, setNumber] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const [januarySelected, setJanuarySelected] = useState<boolean>(false);
  const [februarySelected, setFebruarySelected] = useState<boolean>(false);
  const [marchSelected, setMarchSelected] = useState<boolean>(false);
  const [aprilSelected, setAprilSelected] = useState<boolean>(false);
  const [maySelected, setMaySelected] = useState<boolean>(false);
  const [juneSelected, setJuneSelected] = useState<boolean>(false);
  const [julySelected, setJulySelected] = useState<boolean>(false);
  const [augustSelected, setAugustSelected] = useState<boolean>(false);
  const [septemberSelected, setSeptemberSelected] = useState<boolean>(false);
  const [octoberSelected, setOctoberSelected] = useState<boolean>(false);
  const [novemberSelected, setNovemberSelected] = useState<boolean>(false);
  const [decemberSelected, setDecemberSelected] = useState<boolean>(false);

  useEffect(() => {
    setTypeFrequency(data.frequencyType);
    setNumber(data.actionFrequency);
    setName(data.name);
    setTaskDate(convertDate());
    if(data.month != null){
      setShowMonth(true);
      setIsChecked(true);
      const timer = setTimeout(() => {
        preSelectMonth(data.month)
      }, 100);
      return () => clearTimeout(timer);
      
    }
  }, [])

  const preSelectMonth = (month: string) => {
    const months = (month.split(' - '))
    return months.map(e => {
      selectTheMonth(e);
      return document.getElementById(convertMonthNameToAbbreviation(e))?.classList.toggle('text-month-selected');
    })
  }

  const selectTheMonth = (month: string) => {
    switch (month) {
      case 'Janvier':
        setJanuarySelected(!januarySelected);
        break;
      case 'Février':
        setFebruarySelected(!februarySelected);
        break;
      case 'Mars':
        setMarchSelected(!marchSelected);
        break;
      case 'Avril':
        setAprilSelected(!aprilSelected);
        break;
      case 'Mai':
        setMaySelected(!maySelected);
        break;
      case 'Juin':
        setJuneSelected(!juneSelected);
        break;
      case 'Juillet':
        setJulySelected(!julySelected);
        break;
      case 'Août':
        setAugustSelected(!augustSelected);
        break;
      case 'Septembre':
        setSeptemberSelected(!septemberSelected);
        break;
      case 'Octobre':
        setOctoberSelected(!octoberSelected);
        break;
      case 'Novembre':
        setNovemberSelected(!novemberSelected);
        break;
      case 'Décembre':
        setDecemberSelected(!decemberSelected);
        break;
    }
  }


  const action = () => {
    if (data.type == 'edit') {
      return 'Modifier';
    }
    else {
      return 'Ajouter';
    }
  }

  const convertDate = () => {
    console.log(data.month)
    //const date = data.lastAction;
    return "2022-04-04"
  }
  const handleChange = () => {
    setIsOpen(false);
  }

  const arrayFrequency = () => {
    const array = listFrequencyType.map((frequencyType) => {
      return frequencyType.name;
    });

    return array;
  }

  const arrayMonth = () => {
    const array = listMonth.map((month) => {
      return month.abbreviation;
    });

    return array;
  }

  const showMonths = () => {
    return arrayMonth().map((monthAbbr) => {
      return <div className='child' key={monthAbbr}><IonButton id={monthAbbr} className='text-month' fill="clear" onClick={() => showMonthsSelected(monthAbbr)}>{monthAbbr}</IonButton></div>
    })
  }

  const showMonthsSelected = (monthAbbr: string) => {
    selectTheMonth(convertMonthAbbreviationToName(monthAbbr));
    document.getElementById(monthAbbr)?.classList.toggle('text-month-selected');
  }

  const getFinalListMonth = () => {
    if(isChecked) {
      const listMonthSelected = [];
      if (januarySelected) {
        listMonthSelected.push('Janvier');
      }
      if (februarySelected) {
        listMonthSelected.push('Février');
      }
      if (marchSelected) {
        listMonthSelected.push('Mars');
      }
      if (aprilSelected) {
        listMonthSelected.push('Avril');
      }
      if (maySelected) {
        listMonthSelected.push('Mai');
      }
      if (juneSelected) {
        listMonthSelected.push('Juin');
      }
      if (julySelected) {
        listMonthSelected.push('Juillet');
      }
      if (augustSelected) {
        listMonthSelected.push('Août');
      }
      if (septemberSelected) {
        listMonthSelected.push('Septembre');
      }
      if (octoberSelected) {
        listMonthSelected.push('Octobre');
      }
      if (novemberSelected) {
        listMonthSelected.push('Novembre');
      }
      if (decemberSelected) {
        listMonthSelected.push('Décembre');
      }
      return listMonthSelected.join(' - ');
    }
    return '';
    
  }

  const callTheApi = () => {
    console.log('hey :)')
    /* if (data.type == 'edit') {
      return editTask();
    }
    else {
      return addTask();
    } */
  }

  const addTask = () => { //QQ chose comme ça...
    const task = {
      name: name,
      actionFrequency: number,
      actionFrequencyType: typeFrequency,
      month: getFinalListMonth(),
      lastAction: convertDate(),
      plantId: data.plantId
    }
  }

  const editTask = () => { //QQ chose comme ça...
    const task = {
      id: data.id,
      name: name,
      actionFrequency: number,
      actionFrequencyType: typeFrequency,
      month: getFinalListMonth(),
      lastAction: convertDate(),
      taskId: data.plantId
    }
  }

  return (
    <IonModal isOpen={isOpen}>
      <div className="modal-container">
        <IonToolbar color="moutain">
          <IonButtons slot="start">
            <IonButton onClick={() => handleChange()}><IonIcon icon={close} color='mountain' size="large"></IonIcon></IonButton>
          </IonButtons>
          <div className="logo-end">
            {PlantCareLogo(40)}
          </div>
        </IonToolbar>
        <div className='handle-content'>

          <div className='overall-line'>
            <IonLabel>Nom de la tâche</IonLabel> {/*Il faut limiter le nombre de caractères à 100 max.*/}
            <IonInput value={name} className='line-input' onBlur={(e: any) => setName(e.target.value)}></IonInput>
          </div>

          <div className='overall-line'>
            <IonLabel>Fréquence</IonLabel>
            <div className='in-line'>
              Tou(te)s les
              <IonInput value={number} type="number" className='line-input input-number space' onBlur={(e: any) => setNumber(e.target.value)}></IonInput>
              <div className="month-select space">
                <Select data={arrayFrequency()} defaultValue={typeFrequency} handleClick={(e: { target: { value: any; }; }) => setTypeFrequency(e.target.value)} />
              </div>
            </div>
          </div>
          <div className='overall-line'>
            <IonLabel>Date de la prochaine action</IonLabel>
            <IonDatetimeButton datetime="datetime" className="space-top date-selection" ></IonDatetimeButton>
            <IonModal keepContentsMounted={true}>
              <IonDatetime id="datetime" presentation="date" value={taskDate} onBlur={(e: any) => setTaskDate(e.target.value)}></IonDatetime>
            </IonModal>
          </div>

          <div className='overall-line'>
            <div className='in-line'><IonLabel>Tâche saisonnière</IonLabel> <IonCheckbox slot="start" onClick={() => setShowMonth(!showMonth)} className='space' checked={isChecked}></IonCheckbox></div>
            <div className='parent'>{showMonth ? showMonths() : null}</div>
          </div>

          <div className='overall-line in-line'>
            <IonButton className='button-form font-large' expand='block' fill='clear' onClick={() => callTheApi()}>{action()}</IonButton>
            <IonButton className='button-form font-large space' expand='block' fill='clear' onClick={() => handleChange()}>Annuler</IonButton>
          </div>

        </div>
      </div>
    </IonModal>


  );
}

export default HandleTask;