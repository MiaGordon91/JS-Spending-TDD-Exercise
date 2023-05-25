import {UserPayments} from '../src';

describe( 'Check for suspicious payments', () => {
    it('will return an email', () => {

        const sut = new UserPayments();

        let expectedEmail = 'Hello User';
        
        expect(sut.sendEmail()).toBe(expectedEmail);
        
    })
})