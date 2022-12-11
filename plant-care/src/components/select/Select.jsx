import { IonSelect, IonSelectOption } from "@ionic/react";

const Select = ({data, defaultValue, handleClick}) => {
    const option = () => {
        return data.map((item) => {
            return (
                <IonSelectOption value={item}>{item}</IonSelectOption>
            );
        });
    }

    return (
        <IonSelect interface="popover" value={defaultValue} onIonChange={handleClick} >
            {option()}
        </IonSelect>
    );
}

export default Select;