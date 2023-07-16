import { Service } from "./Service";

export type RedLetter = {
    type:        string;
    date_pretty: string;
    services:    Service[];
    prevSunday:  Date;
    date:        Date;
    nextSunday:  Date;
    year:        string;
    day:         string;
    lectionary:  string;
}