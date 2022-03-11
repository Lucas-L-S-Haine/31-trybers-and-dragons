import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Mage extends Archetype {
  private static _mages = 0;
  private _energyType = 'mana' as EnergyType;

  get energyType() {
    return this._energyType;
  }

  static createdArchetypeInstances() {
    this._mages += 1;
    return this._mages;
  }
}
