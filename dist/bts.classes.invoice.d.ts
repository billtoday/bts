import * as classes from "./bts.classes";
export declare class Invoice {
    id: number;
    payment: classes.payment;
    buyer: classes.contact;
    seller: classes.contact;
    vatId: string;
    date: Date;
    constructor();
    pdf: any;
}
