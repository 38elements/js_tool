import {bar} from "./bar";

export class Foo {
    bar = bar;
}

var foo = new Foo();

console.log(bar);
console.log(foo.bar);
