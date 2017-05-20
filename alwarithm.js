"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
exports.__esModule = true;
var fs = require("fs");
var Algoritmo = './QuickSort';
var Algorithm = (function () {
    function Algorithm(approach, name) {
        this.iterationsTime = 0;
        this.testFn = approach;
        this.name = name;
    }
    Algorithm.prototype.getAverage = function (iterations) {
        this.average = this.iterationsTime / iterations;
        return this.average;
    };
    return Algorithm;
}());
var TestCycle = (function () {
    function TestCycle(input, output, iterations) {
        this.approaches = [];
        this.input = input;
        this.output = output;
        this.iterations = iterations;
    }
    TestCycle.prototype.addApproach = function (approach) {
        console.log(approach);
        this.approaches.push(approach);
    };
    TestCycle.prototype.runTests = function () {
        for (var _i = 0, _a = this.approaches; _i < _a.length; _i++) {
            var approach = _a[_i];
            //run each approach...
            var start = Date.now();
            for (var i = 0; i < this.iterations; i++) {
                //setup iteration
                var sample = void 0;
                if (this.input.concat !== undefined) {
                    sample = this.input.slice();
                }
                else if (typeof this.input === 'object') {
                    sample = __assign({}, this.input);
                }
                else {
                    sample = this.input;
                }
                //start test
                // console.log(`sample: ${sample}`);
                var result = approach.testFn(sample);
                // console.log(`result: ${result}`);
                approach.status = JSON.stringify(result) === JSON.stringify(this.output);
            }
            var end = Date.now();
            approach.iterationsTime = end - start;
            approach.getAverage(this.iterations);
        }
    };
    return TestCycle;
}());
var Algoritmos = fs.readdirSync(Algoritmo);
var quicksortTest = new TestCycle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], [1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 10, 11, 11, 11, 11, 12, 12, 12, 12, 13, 13, 13, 13, 14, 14, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20], 1000);
Algoritmos.forEach(function (file) {
    var fn = require(Algoritmo + '/' + file);
    quicksortTest.addApproach(new Algorithm(fn, file));
});
quicksortTest.runTests();
quicksortTest.approaches.forEach(function (approach) {
    if (approach.status) {
        console.log("Result is correct: " + approach.status);
    }
    console.log("Approach by " + approach.name + " avg time was " + approach.average + " with " + quicksortTest.iterations + ".");
});
