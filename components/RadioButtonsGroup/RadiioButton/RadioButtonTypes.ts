export type RadioButtonInstance = {
    label: string;
    value: string;
    id: string;
}

export interface RadioButtonProps {
    button: RadioButtonInstance;
    isChecked: boolean;
    onChange: (value: string) => void;
}
