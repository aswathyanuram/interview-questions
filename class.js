class Person {
  constructor(name, role) {
    this.name = name;
    this.role = role;
  }

  wakeup() {
    console.log(`${this.name} is waking up...`);
  }

  work() {
    console.log(`${this.name} is working...`);
  }

  sleep() {
    console.log(`${this.name} is sleeping...`);
  }
}

class ScrumMaster extends Person {
  constructor(name, role, noOfProjects) {
    super(name, role);
    this.noOfProjects = noOfProjects;
  }

  setupCalls() {
    console.log(`${this.name} is setting calls...`);
  }
}

class Developer extends Person {
  constructor(name, role, language) {
    super(name, role);
    this.language = language;
  }

  coding() {
    console.log(`${this.name} is coding...`);
  }
}

const jeeva = new Developer("Jeeva", "Developer", "Javascript");
const aswathy = new ScrumMaster("Aswathy", "Scrum Master", 5);

jeeva.wakeup();
jeeva.work();
jeeva.coding();
jeeva.sleep();

aswathy.wakeup();
aswathy.work();
aswathy.setupCalls();
aswathy.sleep();
