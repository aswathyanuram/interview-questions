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

const jeeva = new Person("Jeeva", "Developer");

console.log(jeeva);

jeeva.wakeup();
jeeva.work();
jeeva.sleep();
