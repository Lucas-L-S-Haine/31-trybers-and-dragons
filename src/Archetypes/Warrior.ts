import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Warrior extends Archetype {
  private static _warriors = 0;
  private _energyType = 'stamina' as EnergyType;

  get energyType() {
    return this._energyType;
  }

  static createdArchetypeInstances() {
    this._warriors += 1;
    return this._warriors;
  }
}
