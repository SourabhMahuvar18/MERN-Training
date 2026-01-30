/*  
    Observer Pattern defines a one-to-many dependency, where multiple observers 
    automatically get notified when the subject changes.
*/

// One object changes → many objects automatically react.

/*
    core components : 
    subject - maintain a list of its observers
    observers - who gets notidfication once the subject is changed
    notiify() -  method to send notification to observers about the changed subject 
    subscribe() - method to add observers to a specific subject 
    unsubscribe() - method to remove the observers from the subject 
*/

class Subject {
  constructor() {
    this.observers = [];
  }

  subscribe(fn) {
    this.observers.push(fn);
  }

  unsubscribe(fn) {
    this.observers = this.observers.filter(o => o !== fn);
  }

  notify(data) {
    this.observers.forEach(fn => fn(data)); // callling the fn (observers) when the subject changes  ewfweuyititnekyr 
  }
}

// we can use it as follow 

const notifier = new Subject();

const user1 = (msg) => console.log("User1:", msg); // functions as the observers 
const user2 = (msg) => console.log("User2:", msg);

// notifier.subscribe(user1);
// notifier.subscribe(user2);

// notifier.notify("New order placed!");
// notifier.notify("order is deliverd");

// console.log(observers); obbsevers[] is a private data 

// some more usage as 
const EventBus = new Subject();

EventBus.subscribe((order) => {
  console.log("Send email:", order.id);
});

EventBus.subscribe((order) => {
  console.log("Send SMS:", order.id);
});

EventBus.subscribe((order) => {
  console.log("Update analytics:", order.id);
});

function createOrder(order) {
  console.log("Order created:", order.id);
  EventBus.notify(order);
}

createOrder({ id: 101 });

// welojfwekp[ewk k;kpmll,]


