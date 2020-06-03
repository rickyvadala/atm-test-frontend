export class AtmDto {
    constructor(
        public distance?: number,
        public type?: string,
        public street?: string,
        public housenumber?: string,
        public postalcode?: string,
        public city?: string,
        public lat?: string,
        public lng?: string
    ) {}
}
