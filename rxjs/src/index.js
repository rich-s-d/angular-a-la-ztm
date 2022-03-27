import { Observable } from "rxjs";

const observable = new Observable((subsriber) => {
    subsriber.next('Hello World')
    subsriber.next("Hello World Again")
    //subsriber.complete() // stop the observable and memory leak.
    subsriber.next("Hello World Again") // this will not be executed.
    const id = setInterval(() => {
        subsriber.next("Hello World Again")
    }, 1000)

    // below is how to save memory leak directly in the observer. But if we want to perpetually subscribe, we can choose to unsubscribe in the observer instead.
    //return clearInterval(id) // clear the interval to avoid memory leak.
})

const subscription = observable.subscribe({
    next: (x) => console.log(x),

    complete: () => console.log('completed'),

    error: (err) => console.error(err) // error function has a red background as opposed to log which is white.
})

setTimeout(() => {
    subscription.unsubscribe() // unsubscribe the observable.
}, 5000)