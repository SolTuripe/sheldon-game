const Gesture = require("./Gesture");

class Scissor extends Gesture {
  name = "tijera";

  fight(gesture) {
    if (gesture.getName() === "lagarto" || gesture.getName() === "papel") {
      return true;
    }

    return false;
  }
}

module.exports = Scissor;
