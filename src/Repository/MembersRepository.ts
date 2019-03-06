import { Member } from "../Models/Member";
import { Weapon } from "../Models/Weapon";
import WeaponData from '../Data/Weapons';
import { WeaponsRepository } from "./WeaponsRepository";
import MembersData from '../Data/Members';
export class MembersRepository {
  private list: Member[] = MembersData;
  getWeaponList(): Weapon[]{
      let weaponList = [];
      for (let index = 0; index < this.list.length; index++) {
          const member = this.list[index];
          for (let weaponIndex = 0; weaponIndex < member.weapons.length; weaponIndex++) {
              weaponList.push(member.weapons[weaponIndex]);
              
          }
      }
      return weaponList;
  }

  getAllMembers(): Member[]{
    return this.list;
  }

  constructor() {
      for (let index = 0; index < this.list.length; index++) {
        //for each member  
        const element = this.list[index];

        element.weapons = element.weaponIds.map(WeaponsRepository.getWeaponById)
      }
  }
}
