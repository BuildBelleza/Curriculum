# REDUX - 101 An overview

- When we talk about <1>, we mean variables that can be accessed throughout the application regardless of what the view may be
- With React and its useState hook, state is managed locally– that is, the state variables are exposed only within the component where they are defined
- As such, they are specifically tied the component's corresponding <2> in the browser
- This type of architecture is known as <3>
- The <4> means the data, as defined by the state of a variable or variables, available to the view
- The <5> is the data that is rendered in the browser at a given point in time
- And the <6> is the logic that decides if the model should change
- Managing global state was possible before Redux but Redux makes it easier
- Redux is based on <7> which is an <8> similar to MVC
- Unlike MVC and Flux, however, Redux is a <9>
- Redux was created by <10> and Andrew Clark in 2015
- Learning Redux is not easy because there are several pieces to it and they are located in many different files
- Another challenge is that its setup is <11> which means you don't know whether it's working until everything is in place
- Redux introduces several new terms you will need to master
- The <12> is an object that contains keys you defined and whose values may be accessed anywhere in the application
- A <13> is a method provided by the store itself
- It triggers the process which ultimately updates the store and <14> our custom functions
- We do not refer to dispatches as event listeners or event handlers but they play an essential part in responding to events
- The dispatch calls an <15> which is a function that does some custom logic and then returns an object
- This object is called the action or the <16>– it always has a <17> and usually has a <18>, as well
- You can think of it as the what (payload) and where (type) for updating the store
- Once an action object is created, the <19> uses it to determine how to update the store
- You can think of a reducer as an <20> and an <21> in one function
- The reducer has access to the <22> of the store by default
- This means it can update the store with a value even if said value is dependent on the current value of some key in the store
- These new terms are part of the way <23> flows when state is managed by Redux
- A <24> is a function that reads a corresponding <25> (e.g. a variable or variables in the store)
- The selector <26> variables in the store to a component or components
- For a component to read variables in the store, it needs the <27> hook
- For a component to write a value to the store, it needs the <28> hook
- Although learning Redux can be challenging, it used to be worse– the @reduxjs/toolkit library now does a lot of the work for us and is considered the official way to scaffold a React-Redux application as of 2021


## **Key terms and phrases**

- action creator
- action object
- architectural pattern
- controller
- current state
- Dan Abramov
- data
- dispatch
- event handler
- event listener
- exposes
- Flux
- global state
- library
- model
- model-view-controller (MVC)
- non-linear
- payload
- reducer
- selector
- slice of state
- store
- type
- useDispatch
- useSelector
- view
- view
- wraps


