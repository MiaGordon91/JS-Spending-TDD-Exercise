import Payments from '../src/Payments';

class PaymentFetcher {
 
    fetchPayments(userId){
        return new Payments();
    }

}

export default PaymentFetcher