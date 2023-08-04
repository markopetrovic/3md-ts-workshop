// Any
let notSure: any = 'hello'
// --------------------------------------------------------------------------------------------------------------------

// Unknown - Similar to any, but safer. It represents a value whose type is not yet known.
let unknownValue: unknown = 'Hello'
// We need a type assertion to assign it to a specific type.
let message: string = unknownValue as string
// --------------------------------------------------------------------------------------------------------------------

// Boolean
const isDone = false // Implicitly typed
// --------------------------------------------------------------------------------------------------------------------

// Number
const decimal: number = 6 // Explicitly typed
// --------------------------------------------------------------------------------------------------------------------

// String
const color = 'blue'
// --------------------------------------------------------------------------------------------------------------------

// Array
let numbers: number[] = [1, 2, 3, 4, 5]
const numberList = [1, 2, 3]

let fruits: string[] = ['apple', 'banana', 'orange']
let arr: any[] = [1, true, 'free']
// --------------------------------------------------------------------------------------------------------------------

/**
 * Tuple
 * Tuple types allow you to express an array where the type of a fixed number of elements is known
 */
let x: [string, number, boolean]
x = ['hello', 10, false] // OK
// x = [10, "hello"] // Error

const rgb: [number, number, number] = [255, 255, 255]

//  Tuple array
let y: [string, number, boolean][]
y = [
  ['hello', 10, false]
  // ["world", 20]
]
// --------------------------------------------------------------------------------------------------------------------

// Union
let union: string | number = 'hello'
// --------------------------------------------------------------------------------------------------------------------

// Enum allows us to define a set of named constants.
// By default, enums begin numbering their members starting at 0.
// You can change this by manually setting the value of one of its members.
enum Direction {
  Up,
  Down,
  Left,
  Right
}

enum Direction2 {
  Up = 'UP',
  Down = 'DOWN',
  Left = 'LEFT',
  Right = 'RIGHT'
}
// --------------------------------------------------------------------------------------------------------------------

// Type assertion allows us to explicitly define the type of a variable when TypeScript is unable to infer it.

let someValue: any = 'this is a string'

let strLength: number = (<string>someValue).length
let strLength2: number = (someValue as string).length

const canvas = document.getElementById('canvas') as HTMLCanvasElement
// canvas.getContext("2d")
// --------------------------------------------------------------------------------------------------------------------

// Function
function add(x: number, y: number): number {
  return x + y
}
// --------------------------------------------------------------------------------------------------------------------

// Void - Represents the absence of a value. Typically used for functions that do not return a value.
function log(message: string): void {
  console.log(message)
}
// --------------------------------------------------------------------------------------------------------------------

// Type Aliases
type User = {
  name: string
  age: number
}
const user: User = {
  name: 'John',
  age: 30
}
// --------------------------------------------------------------------------------------------------------------------

// Interface
interface PersonInterface {
  readonly id: number
  name: string
  age?: number
  register(): string
}
// --------------------------------------------------------------------------------------------------------------------

// Extending Interfaces
interface Animal {
  name: string
  sound(): void
}
interface Cat extends Animal {
  purr?(): void
}

const tom: Cat = {
  name: 'Tom',
  sound: () => console.log('Meow')
  // purr: () => console.log("Purr")
}
// --------------------------------------------------------------------------------------------------------------------

// Class
class Person implements PersonInterface {
  id: number
  name: string
  age?: number
  protected gender: number
  constructor(id: number, name: string, age?: number) {
    this.id = id
    this.name = name
    this.age = age
  }
  register() {
    return `${this.name} is now registered`
  }
}

const person1 = new Person(1, 'John')
const person2 = new Person(2, 'Sara')

// console.log(person1.gender) // Can not access protected property
// --------------------------------------------------------------------------------------------------------------------

// Generics enables us to create reusable components that can work with a variety of types.

const clone = <T>(data: T): T => {
  return JSON.parse(JSON.stringify(data))
}

type Nullable<T> = T | null

type Truck = {
  id: number
  name: string
  odometer: Nullable<number>
}

const getArray = <T>(items: T[]): T[] => {
  return new Array().concat(items)
}

const numArray = getArray<number>([1, 2, 3, 4])
const strArray = getArray<string>(['Vlad', 'Pit', 'Lucy'])

// numArray.push("Sara")

// --------------------------------------------------------------------------------------------------------------------

// Partial type in TypeScript allows us to make all properties of a type optional
type Person1 = {
  name: string
  age: number
  occupation: string
}

type PersonPartial = Partial<Person1>

// This is equivalent to:
// type PersonPartial = {
//     name?: string;
//     age?: number;
//     occupation?: string;
// };
// --------------------------------------------------------------------------------------------------------------------

// Omit type in TypeScript allows us to construct a type by picking all properties from a type and then removing some keys.
type Person2 = {
  name: string
  age: number
  occupation: string
}
type PersonWithoutAge = Omit<Person2, 'age'>
// The type PersonWithoutAge is equivalent to:
// {
//   name: string;
//   occupation: string;
// }
