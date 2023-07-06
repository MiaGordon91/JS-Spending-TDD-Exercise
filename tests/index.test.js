import EmailSender from '../src/UserPayments';
import PaymentFetcher from '../src/PaymentFetcher';
import Payments from '../src/Payments';

describe( 'Check for suspicious payments', () => {
    it('will return an email', () => {
        const sut = new EmailSender();

        let expectedEmail = 'Hello User';
        
        expect(sut.sendEmail()).toBe(expectedEmail);
    })

    it('fetches current and previous month payments when provided with a user id', () => {
        const sut = new PaymentFetcher()
        
        const expectedPayments = new Payments()
        expectedPayments.currentMonth = {entertainment: 5000}
        expectedPayments.previousMonth = {entertainment: 6000}

        expect(sut.fetchPayments(1).currentMonth.entertainment).toBe(expectedPayments.currentMonth.entertainment)
        expect(sut.fetchPayments(1).previousMonth.entertainment).toBe(expectedPayments.previousMonth.entertainment)
    })
})