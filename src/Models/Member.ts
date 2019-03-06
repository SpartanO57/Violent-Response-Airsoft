import { Weapon } from "./Weapon";

export interface Member
 {
    firstName: string;
    middleName?: string;
    lastName: string;
    callSign: string;
    weaponIds: string[];
    weapons: Weapon[];
    id: string;
    rank: string;

};