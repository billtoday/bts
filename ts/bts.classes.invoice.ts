/// <reference path="./typings/main.d.ts" />
import * as plugins from "./bts.plugins";
import * as classes from "./bts.classes";

export class Invoice {
    id:number;
    payment:classes.payment;
    buyer:classes.contact;
    seller:classes.contact;
    vatId:string;
    date:Date;
    constructor(){
        
    };
    get pdf(){
        return invoicePdf(this);
    }
};

let invoicePdf = function(invoiceArg:Invoice){
    return undefined;
}