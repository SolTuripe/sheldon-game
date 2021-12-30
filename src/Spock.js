const Gesture = require("./Gesture");

class Spock extends Gesture {
  name = "spock";

  fight(gesture) {
    if (gesture.getName() === "tijera" || gesture.getName() === "piedra") {
      return true;
    }
    return false;
  }
}

module.exports = Spock;
