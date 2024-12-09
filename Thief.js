const Character = require("./Character");


module.exports = class Thief extends Character {
  constructor(name, lifepoints, attackPts, defensePts) {
      super(name, lifepoints, attackPts, defensePts);
  }

  attack(targetCharacter) {
      targetCharacter.lifepoints -= (this.attackPts - targetCharacter.defensePts) * 2;
  }
};