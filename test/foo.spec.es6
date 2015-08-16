"use strict" ;

import {Foo} from "../dist/foo"

describe("Foo", () => {
    it("bar", () => {
        let foo = new Foo();
        expect(foo.bar).toBe(12345);
    });
});
