
export enum weekday {
    Monday = 0 ,
    Tuesday = 1,
    Wednesday = 2,
    Thursday = 3,
    Friday = 4 ,
    Saturday = 5,
    Sunday = 6,
}

export interface IDirection {
    name: string;
    description: string;
    weekdays: weekday[];
    durationMinutes: number;
    imageUrl: string;
}