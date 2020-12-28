export interface InputFormat {
    id: number;
    type: string;
    label?: string;
    placeHolder?: string;
    Validation?: boolean;
    name?: string;
    value?: string;
    values?: Array<Value>;
}

export interface Value { 
    label: string;
    value: string;
}