import chai from 'chai';
import chaiHttp from 'chai-http';

let should = chai.should();
let assert = chai.assert;
let expect = chai.expect;

export const userDataTesting = (user_data) => {
    user_data.should.be.a('object');
    Object.keys(user_data).map((key,index) => {
        let user = user_data[key];
        assert.containsAllKeys(user,['first_name','last_name','profile_image']);
        user['first_name'].should.be.a('string');
        user['last_name'].should.be.a('string');
        user['profile_image'].should.be.a('string');
    });
};