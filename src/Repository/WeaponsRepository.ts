import { Weapon } from "../Models/Weapon";
import _find from 'lodash/find';
import data from '../Data/Weapons'
export class WeaponsRepository {
    static getWeaponById(id?: string): Weapon{
        const dummyWeapon: Weapon = {color: undefined};
        let foundWeapon = dummyWeapon;
        for (let index = 0; index < data.length; index++) {
          const element = data[index];
          if(element.id === id) foundWeapon = element;
        }
        return foundWeapon ? foundWeapon : dummyWeapon;
    }
}