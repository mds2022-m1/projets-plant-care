export const listMonth = [
    { id: 1, name: 'Janvier', abbreviation: 'Jan' },
    { id: 2, name: 'Février', abbreviation: 'Fév' },
    { id: 3, name: 'Mars', abbreviation: 'Mars' },
    { id: 4, name: 'Avril', abbreviation: 'Avr' },
    { id: 5, name: 'Mai', abbreviation: 'Mai' },
    { id: 6, name: 'Juin', abbreviation: 'Juin' },
    { id: 7, name: 'Juillet', abbreviation: 'Juil' },
    { id: 8, name: 'Août', abbreviation: 'Août' },
    { id: 9, name: 'Septembre', abbreviation: 'Sept' },
    { id: 10, name: 'Octobre', abbreviation: 'Oct' },
    { id: 11, name: 'Novembre', abbreviation: 'Nov' },
    { id: 12, name: 'Décembre', abbreviation: 'Déc' },
];

export const convertMonthNameToAbbreviation = (monthName) => {
    const month = listMonth.find((month) => month.name === monthName);
    return month ? month.abbreviation : '';
}

export const convertMonthAbbreviationToName = (monthAbbreviation) => {
    const month = listMonth.find((month) => month.abbreviation === monthAbbreviation);
    return month ? month.name : '';
}