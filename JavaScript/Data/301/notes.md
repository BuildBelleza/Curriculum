# JavaScript Data 301
## Understanding Immutability comes down to understanding how data is stored in memory.

These are primitive data types. Primitive data types are immutable.
* strings
* booleans
* numbers
* null
* undefined

let age = 32;  // initializes by value and gets a unique address (e.g. Hx78)
let marysAge = age; // initializes by reference, it gets a unique address (e.g. Rw33)
but doesnt hold a value, it simply points to Hx78
age = 33 // with reinitialization the new value is stored at a new address (e.g. Xa15)

Collections of primitive data types are mutable.
* arrays
* objects


Memory is temporary. So more memory is is necessary for more complex processes.