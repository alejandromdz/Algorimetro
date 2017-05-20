import * as fs from 'fs';
const  Algoritmo='./QuickSort'

class Algorithm{
    name:string
    testFn:Function;
    status:boolean;
    iterationsTime:number=0;
    average:number;
    getAverage(iterations:number){
        this.average = this.iterationsTime/iterations;
        return this.average;
    }

    constructor(approach:Function, name:string){
        this.testFn = approach;
        this.name = name;
    }
}

class TestCycle{
    approaches:Algorithm[] = [];
    input:any;
    output:any;
    iterations:number;
    name:string;
    constructor(input:any, output:any, iterations:number){
        this.input = input;
        this.output = output;
        this.iterations = iterations;
    }
    addApproach(approach:Algorithm){
        console.log(approach)
        this.approaches.push(approach);
    }
    runTests(){
        for(let approach of this.approaches ){
            //run each approach...
            let start = Date.now();

            for( let i = 0; i<this.iterations; i++ ){
                //setup iteration
                let sample;
                if( this.input.concat !== undefined ){
                    sample = [...this.input];
                }else if( typeof this.input === 'object'){
                    sample = {...this.input};
                }
                else{
                    sample = this.input;
                }

                //start test
                // console.log(`sample: ${sample}`);
                let result = approach.testFn(sample);
                // console.log(`result: ${result}`);
                
                approach.status = JSON.stringify(result) === JSON.stringify(this.output); 
            }
            let end = Date.now();
            approach.iterationsTime = end-start;
            approach.getAverage(this.iterations);
        }
    }
}



var Algoritmos=
fs.readdirSync(Algoritmo);

let quicksortTest = new TestCycle([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
    [1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10,11,11,11,11,12,12,12,12,13,13,13,13,14,14,14,14,15,15,15,15,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20]
    ,1000);

Algoritmos.forEach(function(file){
    let fn = require(Algoritmo+'/'+file);

    quicksortTest.addApproach(new Algorithm(fn,file));
}
)

quicksortTest.runTests();
quicksortTest.approaches.forEach(function(approach){
    if(approach.status){
        console.log(`Result is correct: ${approach.status}`);
    }
    console.log(`Approach by ${approach.name} avg time was ${approach.average} with ${quicksortTest.iterations}.`);
})