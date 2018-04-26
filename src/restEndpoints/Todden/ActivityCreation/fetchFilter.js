import chai from 'chai';
import chaiHttp from 'chai-http';

let should = chai.should();
let assert = chai.assert;
let expect = chai.expect;

chai.use(chaiHttp);

import {NEW_SERVER_URL} from '../../responseObjects';
import {systemConstants} from '../toddenObject';
import {filterObj} from './activityCreationObject';

it('it should fetch filters ', (done) => {
    chai.request(NEW_SERVER_URL)
        .post('/activity/activity/feed/filters/get')
        .send(filterObj)
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            assert.containsAllKeys(res.body,['is_success','filter_data']);
            res.body.is_success.should.be.eql(true);
            let filters = res.body.filter_data;

            //Filter Should contain filters_required
            assert.containsAllKeys(filters,filterObj.filters_required);
            Object.keys(filters).map((key,index) => {
                let filter = filters[key];
                filter.should.be.a('array');
                filter.map((fill,index) => {
                    fill.should.be.a('string');
                })
            });

            done();
        });


});