
export interface ContuReturnMessageCodeBlock {
    type: string,
    value: string
}

export interface ContuReturnMessageEmbed {
    title: string,
    description: string
    fields: []
}

export enum ContuReturnMessageType {
    Info,
    Success,
    Warning,
    Error
}

export enum ContuReturnMessageChannelType {
    Direct,
    Channel
}

export interface ContuReturnMessageData {
    type: ContuReturnMessageType
    channel_type: ContuReturnMessageChannelType,
    data: { content?: string; codeblock?: ContuReturnMessageCodeBlock, embed?: ContuReturnMessageEmbed; reaction?: string }
}

export class ContuReturnMessage {
    public type: ContuReturnMessageType;
    public channel_type: ContuReturnMessageChannelType;
    public data: { content?: string; codeblock?: ContuReturnMessageCodeBlock, embed?: ContuReturnMessageEmbed; reaction?: string };

    constructor(props: ContuReturnMessageData) {
        this.type = props.type;
        this.channel_type = props.channel_type;
        this.data = props.data;
    }

}

export interface ContuReturnMessageConverterBase {

}

export interface ContuReturnMessageConverter {
    new():ContuReturnMessageConverterBase
    convertToOutputMessage(props: ContuReturnMessage): any
}