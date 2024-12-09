const Character = require("./Character")

module.exports = class Warrior extends Character {
  constructor(name, lifepoints, attackPts, defensePts, shieldPts) {
    super(name, lifepoints, attackPts, defensePts)
    this.shieldPts = shieldPts
    this.stance = 'attacking'
  }

  attack(targetCharacter) {
    if (this.stance === 'attacking') {
      super.attack(targetCharacter)
    }
  }

  switchStance() {
    if (this.stance === "attacking") {
        // Se a postura atual for "attacking"
        this.stance = "defending"; // Muda para "defending"
        this.defensePts += this.shildPts; // Adiciona os pontos de escudo aos pontos de defesa
    } else {
        // Se a postura atual for "defending"
        this.stance = "attacking"; // Muda para "attacking"
        this.defensePts -= this.shildPts; // Subtrai os pontos de escudo dos pontos de defesa
    }
}
}