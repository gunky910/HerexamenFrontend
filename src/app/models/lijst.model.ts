export class Lijst {
    constructor(
        public lijstID: number,
        public gebruikerID: number,
        public naam: string,
        public beschrijving: string,
        public startDatum: Date,
        public eindDatum: Date,
    ) {}
}