import { Readings } from "./Readings";

export type Daily = {
    yesterday:   Date;
    date_pretty: string;
    tomorrow:    Date;
    readings:    Readings;
    day:         string;
    week:        string;
    date:        Date;
    lectionary:  string;
}