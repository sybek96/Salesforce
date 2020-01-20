import { LightningElement, api } from 'lwc';

import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import ACCOUNT_NAME from '@salesforce/schema/Account.Name';

export default class TestComp extends LightningElement {
    
    @api accountRecord;
    @api accountRecordList = [];

    handleClick(event){
        //output the account record data. This should be what I try to match
        this.accountRecord = {
            Name : "SEBASTIAN"
        };

        this.accountRecordList.push(this.accountRecord);

        this.accountRecord = {
            Name : "STEVEN"
        };
        this.accountRecordList.push(this.accountRecord);


        this.accountRecord = {
            Name : "BEN"
        };
        this.accountRecordList.push(this.accountRecord);


        //console.log(this.accountRecord.Name);


        this.accountRecordList.forEach(account => {
            console.log(account.Name);
        });

    }

}