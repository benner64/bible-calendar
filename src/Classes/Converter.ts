import { BibleVerses } from "@/Types/BiBleVerses";

export class Convert {
    public static toBibleVerses(json: string): BibleVerses {
        return JSON.parse(json);
    }

    public static bibleVersesToJson(value: BibleVerses): string {
        return JSON.stringify(value);
    }
}