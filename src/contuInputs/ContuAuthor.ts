
export interface ContuAuthorData {
    id: string,
    name: string,
    bot: boolean
}

export class ContuAuthor {
    get id(): string {
        return this._id;
    }
    private readonly _id: string;
    public name: string;
    public bot: boolean;

    constructor(props: ContuAuthorData) {
        this._id = props.id;
        this.name = props.name;
        this.bot = props.bot;
    }
}

export interface ContuAuthorConverterBase {

}

export interface ContuAuthorConverter {
    new():ContuAuthorConverterBase
    convertToAuthor(props: any): ContuAuthor
}