/*
    Observer Pattern is almost similar to PubSub Pattern.
    Subscribers in the publish/subscribe pattern are notified through some messaging medium, but
    observers are notified by implementing a handler similar to the subject.
*/



var Subject = function () {
    this.observers = [];

    return {
        subscribeObserver:  (observer) =>{
            this.observers.push(observer);
        },
        unsubscribeObserver:  (observer)=> {
            var index = this.observers.indexOf(observer);
            if (index > -1) {
                this.observers.splice(index, 1);
            }
        },
        notifyObserver:  (observer) =>{
            var index = this.observers.indexOf(observer);
            if (index > -1) {
                this.observers[index].notify(index);
            }
        },
        notifyAllObservers:  ()=> {
            for (var i = 0; i < this.observers.length; i++) {
                this.observers[i].notify(i);
            };
        }
    };
};

var Observer = function () {
    return {
        notify: function (index) {
            console.log("Observer " + index + " is notified!");
        }
    }
}

var subject = new Subject();

var observer1 = new Observer();
var observer2 = new Observer();
var observer3 = new Observer();
var observer4 = new Observer();

subject.subscribeObserver(observer1);
subject.subscribeObserver(observer2);
subject.subscribeObserver(observer3);
subject.subscribeObserver(observer4);

subject.notifyObserver(observer2); // Observer 2 is notified!

subject.notifyAllObservers();
  // Observer 1 is notified!
  // Observer 2 is notified!
  // Observer 3 is notified!
  // Observer 4 is notified!
