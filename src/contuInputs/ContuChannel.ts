
export interface ContuChannelData {
    id: string,
    name: string,
    sub_channels: ContuChannel[],
    level: number
}

export class ContuChannel {
    get id(): string {
        return this._id;
    }
    private readonly _id: string
    public name: string
    public sub_channels: ContuChannel[]
    public readonly level: number

    constructor(props: ContuChannelData) {
        this._id = props.id;
        this.name = props.name;
        this.sub_channels = props.sub_channels;
        this.level = props.level;
    }

}

export interface ContuChannelConverterBase {

}

export interface ContuChannelConverter {
    new():ContuChannelConverterBase
    convertToChannel(props: any): ContuChannel
}