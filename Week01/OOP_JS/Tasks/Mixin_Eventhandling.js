// event handling using mixin

const eventMixin ={
    on(event,func){
        let eventsObj = this._events ??= {}; // events object which stores array of handlers for every event 
        eventsObj[event] ??= []; // check if the handlers array exists for the particular event,if not create the array 
        eventsObj[event].push(func); // else push func to array
    },
    emit(event,data){
        let eventsObj = this._events
        eventsObj?.[event]?.forEach(func => { // run all the handlers attached to that event 
            func(data); // call function with specific data
        });
    },
    off(event,fn){
        if(this._events?.[event]){ // security check
            // remove the given handler from the event handlers of specific event 
            this._events[event] = this._events[event].filter(eventFn => eventFn !== fn);
        }else{
            console.log(`Given ${fn} is not attached to ${event}`);
            return;
        }
       
    }
}

// another class
class User{};
Object.assign(User.prototype,eventMixin); // event mixin


// testing cases
const u = new User();

function loginHandler(name) {
  console.log(name, "logged in");
}

u.on("login", loginHandler);
u.emit("login", "Sourabh");

u.off("login", loginHandler);
u.emit("login", "Sourabh");// now this will not run

