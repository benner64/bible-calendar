import { Celebration } from "./Celebration";

export type LiturgicalDay = {
    date:         Date;
    season:       string;
    season_week:  number;
    celebrations: Celebration[];
    weekday:      string;
}