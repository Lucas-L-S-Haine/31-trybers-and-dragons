import { SimpleFighter } from './Fighter';

export default class Monster implements SimpleFighter {
  lifePoints: number;
  strength: number;

  constructor() {
    this.lifePoints = 85;
    this.strength = 63;
  }

  attack() {
    return this;
  }

  receiveDamage() {
    return this;
  }
}
