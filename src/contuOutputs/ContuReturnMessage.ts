export interface ContuReturnMessageCodeBlock {
	type: string;
	value: string;
}

export interface ContuReturnMessageEmbed {
	title: string;
	description: string;
	fields: [];
}

export enum ContuReturnMessageType {
	INFO,
	SUCCESS,
	WARNING,
	ERROR
}

export enum ContuReturnMessageChannelType {
	DIRECT,
	CHANNEL
}

export interface ContuReturnMessageData {
	type: ContuReturnMessageType;
	channelType: ContuReturnMessageChannelType;
	data: {
		content?: string;
		codeblock?: ContuReturnMessageCodeBlock[];
		embed?: ContuReturnMessageEmbed;
		reaction?: string;
	};
}

export class ContuReturnMessage {
	public type: ContuReturnMessageType;
	public channelType: ContuReturnMessageChannelType;
	public data: {
		content?: string;
		codeblock?: ContuReturnMessageCodeBlock[];
		embed?: ContuReturnMessageEmbed;
		reaction?: string;
	};

	constructor(props: ContuReturnMessageData) {
		this.type = props.type;
		this.channelType = props.channelType;
		this.data = props.data;
	}
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ContuReturnMessageConverterBase {}

export interface ContuReturnMessageConverter {
	new (): ContuReturnMessageConverterBase;
	convertToOutputMessage(props: ContuReturnMessage): any;
}
