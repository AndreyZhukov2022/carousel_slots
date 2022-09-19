import { RadioButtonInstance } from "./RadiioButton/RadioButtonTypes";

export interface RadioButtonGroupProps {
    data: RadioButtonInstance[];
    onChange: (value: string) => void;
    checkedButton: string;
    className?: string;
}
