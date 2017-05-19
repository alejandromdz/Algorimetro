import * as fs from 'fs';

const  Algoritmo='./QuickSort'

var Algoritmos=
fs.readdirSync(Algoritmo);

console.log(Algoritmos);

Algoritmos.forEach(function(file){
    console.log(Algoritmo+'/'+file)
    let fn = require(Algoritmo+'/'+file);
    //comment
}
)



class Algorithm{
    type:string;
    testFn:Function;
    status:boolean;
    iterationTimes:number[];
    average:number;
    getAverage(){
        let sum:number = 0;
        for(let i:number; i<this.iterationTimes.length-1; i++){
            sum+=this.iterationTimes[i];
        }
        this.average = sum / (this.iterationTimes.length-1) ;
        return this.average;
    }

    constructor(type:string, approach:Function){
        this.type=type;
        this.testFn=approach;
    }
}

class TestCycle{
    approaches:Algorithm[];
    inputType:string;
    input:any;
    output:any;
    iterations:number;
    name:string;
    constructor(type:string, input:any, output:any, iterations:number){
        this.name = type;
        this.input = input;
        this.output = output;
        this.iterations = iterations;
    }
    addApproach(approach:Algorithm){
        this.approaches.push(approach);
    }
    runTests(){
        for(let approach of this.approaches ){
            //run each approach...
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
                let start = Date.now();
                let result = approach.testFn(sample);
                let end = Date.now();
                approach.status = JSON.stringify(result) === JSON.stringify(this.output); 
                approach.iterationTimes.push( end-start );
            }

            approach.getAverage();
        }
    }
}

let quickSortTest = new TestCycle('quicksort',[3,2,1],[1,2,3],30)