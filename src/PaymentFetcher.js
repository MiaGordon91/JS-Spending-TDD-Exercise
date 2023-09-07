import Payments from '../src/Payments';

class PaymentFetcher {
 
    fetchPayments(userId){
        return new Payments();
    }

    comparePayments(userId){
        
       let payments = new Payments();

       let spendDifference = Object.keys(payments.currentMonth).reduce((a,k) => {        
        a[k] = payments.currentMonth[k] - payments.previousMonth[k];
        return a;
       }, {});

       return spendDifference;
    }

}

export default PaymentFetcher