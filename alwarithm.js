var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var Algorithm = (function () {
    function Algorithm(type, approach) {
        this.type = type;
        this.testFn = approach;
    }
    Algorithm.prototype.getAverage = function () {
        var sum = 0;
        for (var i = void 0; i < this.iterationTimes.length - 1; i++) {
            sum += this.iterationTimes[i];
        }
        this.average = sum / (this.iterationTimes.length - 1);
        return this.average;
    };
    return Algorithm;
}());
var TestCycle = (function () {
    function TestCycle(type, input, output, iterations) {
        this.name = type;
        this.input = input;
        this.output = output;
        this.iterations = iterations;
    }
    TestCycle.prototype.addApproach = function (approach) {
        this.approaches.push(approach);
    };
    TestCycle.prototype.runTests = function () {
        for (var _i = 0, _a = this.approaches; _i < _a.length; _i++) {
            var approach = _a[_i];
            //run each approach...
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
                var start = Date.now();
                var result = approach.testFn(sample);
                var end = Date.now();
                approach.status = JSON.stringify(result) === JSON.stringify(this.output);
                approach.iterationTimes.push(end - start);
            }
            approach.getAverage();
        }
    };
    return TestCycle;
}());
var quickSortTest = new TestCycle('quicksort', [3, 2, 1], [1, 2, 3], 30);
