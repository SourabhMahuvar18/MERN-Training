// singleton pattern

/*
    Singleton Pattern ensures that only ONE instance of a class exists throughout 
    the application and provides a global point of access to it.
*/

// only one instance for comnnection is created and stored as static 
class Database {
  static instance;

  constructor() {
    if (Database.instance) {
      return Database.instance;
    }

    this.connection = "Connected";
    Database.instance = this;
  }
}

const db1 = new Database();
const db2 = new Database();

console.log(db1 === db2); // true


// what happens here ?? = First call → new instance created → stored in static variable
// Next calls → return existing instance


// export default new DBConnection();


// another example 
class Logger {
  constructor() {
    if (Logger.instance) return Logger.instance;

    Logger.instance = this;
  }

  log(msg) {
    console.log(msg);
  }
}

const logger = new Logger();
// export default logger;


// yufyytyth  uyugugguguyukyhfr kvvg