// Pub-Sub (Publish–Subscribe) Pattern = Advanced version of Observer Pattern
class PubSub {
  constructor() {
    this.topics = {};
  }

  subscribe(topic, callback) {
    // function to add tha callback to specific callbacks
    if (!this.topics[topic]) {
      this.topics[topic] = [];
    }
    this.topics[topic].push(callback);
  }
  publish(topic, data) {
    if (!this.topics[topic]) return;

    this.topics[topic].forEach((callback) => {
      callback(data);
    });
  }
  unsubscribe(topic, callback) {
    if (!this.topics[topic]) return;

    this.topics[topic].filter((fn) => fn !== callback);
  }
}

// now testing it using the data & objects
const bus = new PubSub();

function email(order) {
  console.log(`email: ${order.id}`);
}

function sms(order) {
  console.log(`SMS : ${order.id}`);
}

bus.subscribe("order created", email);
bus.subscribe("order created", sms);


bus.publish("order created",{id : 101});