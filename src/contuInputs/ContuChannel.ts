export interface ContuChannelData {
	id: string;
	name: string;
	subChannels: ContuChannel[];
	level: number;
}

export class ContuChannel {
	get id(): string {
		return this._id;
	}
	private readonly _id: string;
	public name: string;
	public subChannels: ContuChannel[];
	public readonly level: number;

	constructor(props: ContuChannelData) {
		this._id = props.id;
		this.name = props.name;
		this.subChannels = props.subChannels;
		this.level = props.level;
	}
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ContuChannelConverterBase {}

export interface ContuChannelConverter {
	new (): ContuChannelConverterBase;
	convertToChannel(props: any): ContuChannel;
}
