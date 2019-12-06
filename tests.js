// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});


describe('sayHello', function () {
    it('should be a defined function', function () {
        expect(typeof sayHello).toBe('function');
    });
    it("should return a string when called.", function () {
        expect(typeof sayHello()).toBe("string")
    });
    it('should return the string "Hello, Jane!" when input = Jane', function () {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it('should return the string "Hello, Alex!" when input = Alex', function () {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    })
    it('should return the string "Hello, Pat!" when input = Pat', function () {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    })
    it('should return the string "Hello, World!" when undefined', function () {
        expect(sayHello()).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when input === true', function () {
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when input === false', function () {
        expect(sayHello(false)).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when input === null', function () {
        expect(sayHello(null)).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when input is empty string ""', function () {
        expect(sayHello("")).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when input is a number', function () {
        expect(sayHello(2.3)).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when input is a array', function () {
        expect(sayHello([1,2,3])).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when input is an object', function () {
        expect(sayHello(/regex/)).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when input is a function', function () {
        expect(sayHello(function(){})).toBe("Hello, World!");
    });
});

describe('isEven', function () {
    it('should be a defined function', function () {
        expect(typeof isEven).toBe('function');
    });
    it('should return true when called with isEven(2)', function () {
        expect(isEven(2)).toBe(true);
    });
    it('should return true when called with isEven(-4)', function () {
        expect(isEven(-4)).toBe(true);
    });
    it('should return false when called with isEven(3)', function () {
        expect(isEven(3)).toBe(false);
    });
    it('should return false when called with isEven("banana")', function () {
        expect(isEven("banana")).toBe(false);
    });
    it('should return true when called with isEven("8")', function () {
        expect(isEven("8")).toBe(true);
    });
    it('should return false when called with isEven(Infinity)', function () {
        expect(isEven(Infinity)).toBe(false);
    });
    it('should return false when called with isEven("banana")', function () {
        expect(isEven("banana")).toBe(false);
    });
    it('should return false when called with isEven(true) or isEven(false)', function () {
        expect(isEven(true ||false)).toBe(false);
    });
    it('should return false when called without an argument like isEven()', function () {
        expect(isEven()).toBe(false);
    });
});