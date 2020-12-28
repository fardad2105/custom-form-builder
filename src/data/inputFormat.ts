export interface InputFormat {
    id: number;
    type: string;
    label?: string;
    placeHolder?: string;
    Validation?: Boolean;
    name?: string;
    value?: string;
    values?: Array<Value>;
}

export interface Value { 
    label: string;
    value: string;
}