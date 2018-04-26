import chai from 'chai';
import chaiHttp from 'chai-http';

let should = chai.should();
let assert = chai.assert;
let expect = chai.expect;

chai.use(chaiHttp);

import {NEW_SERVER_URL} from '../../responseObjects';
import {unit_data} from './plannerObject';
it('it should edit unit', function(done)  {
    if(unit_data['id']!='' && unit_data['id']!=null) {
        chai.request(NEW_SERVER_URL)
            .post('/activity/planner/unit/edit')
            .send({unit_data: unit_data})
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                assert.containsAllKeys(res.body, ['is_success']);
                res.body.is_success.should.be.eql(true);
                done();
            });
    }
    else{
        this.skip();
    }


});