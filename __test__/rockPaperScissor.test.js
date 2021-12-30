const Rock = require("../src/Rock");
const Paper = require("../src/Paper");
const Scissor = require("../src/Scissor");
const Lizard = require("../src/lizard");
const Spock = require("../src/Spock");

describe("piedra", () => {
  test("debería ganarle a tijera", () => {
    const rock = new Rock();
    const scissor = new Scissor();

    expect(rock.fight(scissor)).toBe(true);
  });

  test("debería ganarle a lagarto", () => {
    const rock = new Rock();
    const lizard = new Lizard();

    expect(rock.fight(lizard)).toBe(true);
  });

  test("debería perder contra papel", () => {
    const rock = new Rock();
    const paper = new Paper();

    expect(rock.fight(paper)).toBe(false);
  });

  test("debería perder contra spock", () => {
    const rock = new Rock();
    const spock = new Spock();

    expect(rock.fight(spock)).toBe(false);
  });
});

describe("tijera", () => {
  test("debería ganarle a papel", () => {
    const scissor = new Scissor();
    const paper = new Paper();

    expect(scissor.fight(paper)).toBe(true);
  });

  test("debería ganarle a lagarto", () => {
    const scissor = new Scissor();
    const lizard = new Lizard();

    expect(scissor.fight(lizard)).toBe(true);
  });

  test("debería perder contra piedra", () => {
    const scissor = new Scissor();
    const rock = new Rock();

    expect(scissor.fight(rock)).toBe(false);
  });

  test("debería perder contra spock", () => {
    const scissor = new Scissor();
    const spock = new Spock();

    expect(scissor.fight(spock)).toBe(false);
  });
});

describe("papel", () => {
  test("debería ganarle a roca", () => {
    const paper = new Paper();
    const rock = new Rock();

    expect(paper.fight(rock)).toBe(true);
  });

  test("debería ganarle a spock", () => {
    const paper = new Paper();
    const spock = new Spock();

    expect(paper.fight(spock)).toBe(true);
  });

  test("debería perder contra tijera", () => {
    const paper = new Paper();
    const scissor = new Scissor();

    expect(paper.fight(scissor)).toBe(false);
  });

  test("debería perder contra lagarto", () => {
    const paper = new Paper();
    const lizard = new Lizard();

    expect(paper.fight(lizard)).toBe(false);
  });
});

describe("lagarto", () => {
  test("debería ganarle a papel", () => {
    const lizard = new Lizard();
    const paper = new Paper();

    expect(lizard.fight(paper)).toBe(true);
  });

  test("debería ganarle a spock", () => {
    const lizard = new Lizard();
    const spock = new Spock();

    expect(lizard.fight(spock)).toBe(true);
  });

  test("debería perder contra roca", () => {
    const lizard = new Lizard();
    const rock = new Rock();

    expect(lizard.fight(rock)).toBe(false);
  });

  test("debería perder contra tijera", () => {
    const lizard = new Lizard();
    const scissor = new Scissor();

    expect(lizard.fight(scissor)).toBe(false);
  });
});

describe("spock", () => {
  test("debería ganarle a tijera", () => {
    const spock = new Spock();
    const scissor = new Scissor();

    expect(spock.fight(scissor)).toBe(true);
  });

  test("debería ganarle a piedra", () => {
    const spock = new Spock();
    const rock = new Rock();

    expect(spock.fight(rock)).toBe(true);
  });

  test("debería perder contra lagarto", () => {
    const spock = new Spock();
    const lizard = new Lizard();

    expect(spock.fight(lizard)).toBe(false);
  });

  test("debería perder contra papel", () => {
    const spock = new Spock();
    const paper = new Paper();

    expect(spock.fight(paper)).toBe(false);
  });
});
