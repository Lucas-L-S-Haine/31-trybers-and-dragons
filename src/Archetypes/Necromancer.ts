import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Necromancer extends Archetype {
  private static _necromancers = 0;
  private _energyType = 'mana' as EnergyType;

  get energyType() {
    return this._energyType;
  }

  static createdArchetypeInstances() {
    this._necromancers += 1;
    return this._necromancers;
  }
}
