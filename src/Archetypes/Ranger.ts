import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Ranger extends Archetype {
  private static _rangers = 0;
  private _energyType = 'stamina' as EnergyType;

  get energyType() {
    return this._energyType;
  }

  static createdArchetypeInstances() {
    this._rangers += 1;
    return this._rangers;
  }
}
