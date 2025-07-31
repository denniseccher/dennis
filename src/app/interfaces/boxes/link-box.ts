import { BoxInterface } from "./box";

export interface LinkBoxInterface extends BoxInterface{
    link?: string | null;
    colors?: string[];
    imgSrc: string;
}
