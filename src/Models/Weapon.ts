import { SemanticCOLORS } from "semantic-ui-react";

export interface Weapon{
    name?: string;
    manufacturer?: string;
    attachments?: string[];
    color?: string;
    magType?: string;
    image?: string;
    id?: string;
}