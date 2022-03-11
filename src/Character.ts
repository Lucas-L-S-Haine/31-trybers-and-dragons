import Fighter from './Fighter';
import Race, { Elf } from './Races';
import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import getRandomInt from './utils';

export default class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;

  constructor(name: string) {
    this._race = new Elf(name, 10);
    this._archetype = new Mage(name);
    this._maxLifePoints = 49;
    this._lifePoints = 49;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._dexterity = 10;
    this._energy = {
      type_: 'mana',
      amount: getRandomInt(1, 10),
    };
  }

  get race(): Race {
    return this._race;
  }

  get archetype(): Archetype {
    return this._archetype;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  get defense(): number {
    return this._defense;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  get energy(): Energy {
    return { ...this._energy };
  }

  attack(enemy: Fighter): void {
    const damage = enemy.receiveDamage(this.strength);
    console.log(`Inflicted \x1b[01;31m${damage}\x1b[00m points of damage!`);
  }

  special(enemy: Fighter): void {
    console.log(`Building up ${this.energy.type_}...`);
    setTimeout(() => console.log(`Attacked enemy ${enemy}`), 1);
  }

  receiveDamage(attackPoints: number): number {
    const damage = Math.max(attackPoints - this.defense, 0);
    this._lifePoints -= damage;
    if (this._lifePoints <= 0) {
      this._lifePoints = -1;
    }
    console.log(`Received \x1b[01;31m${damage}\x1b[00m points of damage!`);
    return this._lifePoints;
  }

  levelUp(): void {
    const raceLife = this._race.maxLifePoints;
    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._energy.amount = 10;
    this._maxLifePoints = Math
      .min(this._maxLifePoints + getRandomInt(1, 10), raceLife);
    this._lifePoints = this._maxLifePoints;
  }
}
