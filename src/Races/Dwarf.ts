import Race from './Race';

export default class Dwarf extends Race {
  private _maxLifePoints = 80;
  private static _races = 0;

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances() {
    this._races += 1;
    return this._races;
  }
}
