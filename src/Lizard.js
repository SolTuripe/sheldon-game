const Gesture = require("./Gesture");

class Lizard extends Gesture {
  name = "lagarto";

  fight(gesture) {
    if (gesture.getName() === "papel" || gesture.getName() === "spock") {
      return true;
    }
    return false;
  }
}

module.exports = Lizard;
