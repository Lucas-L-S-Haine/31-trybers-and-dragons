import Fighter, { SimpleFighter } from './Fighter';

export default class Monster implements SimpleFighter {
  readonly lifePoints: number;
  readonly strength: number;
  cumulativeDamage: number;

  constructor() {
    this.lifePoints = 85;
    this.strength = 63;
    this.cumulativeDamage = 0;
  }

  attack(enemy: Fighter) {
    enemy.receiveDamage(this.strength);
  }

  receiveDamage(attackPoints: number) {
    const damage = Math.max(attackPoints, 0);
    this.cumulativeDamage += damage;
    return this.cumulativeDamage < this.lifePoints
      ? this.lifePoints - this.cumulativeDamage
      : -1;
  }
}
