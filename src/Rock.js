const Gesture = require("./Gesture");
const Scissor = require("./Scissor");
const Lizard = require("./Lizard");

//mi clase hereda gesture
class Rock extends Gesture {
  name = "piedra";

  fight(gesture) {
    //el nombre del gesto que me está llegando
    if (gesture instanceof Scissor || gesture instanceof Lizard) {
      //puedo hacer el instaceof y así me elimino la clase Gesture con el name
      //pregunto si gesture se creó a partir de scissor o si se creó a partir de lizard
      return true;
    }

    return false;
  }
}

module.exports = Rock;
