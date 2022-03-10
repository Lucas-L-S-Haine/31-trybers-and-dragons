import Race from './Race';

export default class Elf extends Race {
  private _maxLifePoints = 99;
  private static _races = 0;

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances() {
    this._races += 1;
    return this._races;
  }
}
