import axios from 'axios';


class FetchData {

    getBooks(){
        return axios.get(`https://s3-ap-southeast-1.amazonaws.com/he-public-data/books8f8fe52.json`);
    }
    getBooksImg(){
        return axios.get(`https://s3-ap-southeast-1.amazonaws.com/he-public-data/bookimage816b123.json`);
    }
    makePayment(){
        const headers = { 'X-Api-Key': 'test_8f980841e27daf4ef9d54c0aa80', 
        'X-Auth-Token': 'test_014869020bbbd9acf8ae3a8fcf6',
        'X-Salt':'15996fe75fe248f0a427373ba084bf07',
        'Content-Type': 'application/x-www-form-urlencoded'}
        const payload = {
        purpose: 'FIFA 16',
        amount: '2500',
        phone: '9999999999',
        buyer_name: 'John Doe',
        redirect_url: 'http://www.example.com/redirect/',
        send_email: true,
        webhook: 'http://www.example.com/webhook/',
        send_sms: true,
        email: 'foo@example.com',
        allow_repeated_payments: false}
        return axios.post('https://test.instamojo.com/api/1.1/payment-requests/',payload,headers)
    }
        
}

export default new FetchData()