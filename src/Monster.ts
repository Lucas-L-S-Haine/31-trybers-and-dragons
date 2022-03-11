import { SimpleFighter } from './Fighter';

export default class Monster implements SimpleFighter {
  lifePoints: number;
  readonly strength: number;

  constructor() {
    this.lifePoints = 85;
    this.strength = 63;
  }

  attack() {
    return this;
  }

  receiveDamage(attackPoints: number) {
    const damage = Math.max(attackPoints, 0);
    this.lifePoints -= damage;
    return this.lifePoints > 0 ? this.lifePoints : -1;
  }
}
