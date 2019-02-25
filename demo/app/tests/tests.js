var Skeleton = require("nativescript-skeleton").Skeleton;
var skeleton = new Skeleton();

describe("greet function", function() {
    it("exists", function() {
        expect(skeleton.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(skeleton.greet()).toEqual("Hello, NS");
    });
});