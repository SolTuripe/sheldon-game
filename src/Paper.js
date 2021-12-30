const Gesture = require("./Gesture");

class Paper extends Gesture {
  name = "papel";

  fight(gesture) {
    if (gesture.getName() === "piedra" || gesture.getName() === "spock") {
      return true;
    }
    return false;
  }
}

module.exports = Paper;
