import { BoxInterface } from "./box";

export interface LinkBoxInterface extends BoxInterface{
    link?: string | undefined;
    colors?: string[];
    imgSrc: string;
    title?: string | undefined;
}
