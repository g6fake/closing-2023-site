import { Location } from "./types";

// For program page
export interface IPlace{
    name: string;
    shortName?: string;
    dgisLink: string;
    yandexLink: string;
    yandexLocation: Location;
}

export interface IProgram{
    id: 'evening' | 'night-velo' | 'bar' | 'excursion' | 'night' | 'activity' | 'kebabs';
    name: string;
    date: string;
    leader?: string;
    shortDescription: string;
    description: string;
    temp?: string;
    start: IPlace;
    finish?: IPlace;
    interPoints?: IPlace[];
    route?: [x: number, y: number][];
}

export interface IPlaces{
    [name: string]: IPlace;
}

export interface IPrograms{
    [programName: string]: IProgram;
}

export interface IProgramShortInfoProps{
    title: string;
    date: string;
    gather?: string;
    startTime: string;
    startPlace: string;
    description: string;
    navTo: string;
}