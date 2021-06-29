import { ContuChannel } from './ContuChannel';
import { ContuAuthor } from './ContuAuthor';

export interface ContuMessageData {
	id: string;
	channel: ContuChannel;
	author: ContuAuthor;
	content: string;
}

export class ContuMessage {
	get id(): string {
		return this._id;
	}

	private readonly _id: string;
	public channel: ContuChannel;
	public author: ContuAuthor;
	public content: string;

	constructor(props: ContuMessageData) {
		this._id = props.id;
		this.content = props.content;
		this.channel = props.channel;
		this.author = props.author;
	}
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ContuMessageConverterBase {}

export interface ContuMessageConverter {
	new (): ContuMessageConverterBase;
	convertToMessage(props: any): ContuMessage;
}
