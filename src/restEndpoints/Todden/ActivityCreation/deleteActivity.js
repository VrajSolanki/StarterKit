import chai from 'chai';
import chaiHttp from 'chai-http';

let should = chai.should();
let assert = chai.assert;
let expect = chai.expect;

chai.use(chaiHttp);

import {NEW_SERVER_URL} from '../../responseObjects';
import {activityDetail} from './activityCreationObject';
import {teacher_id} from '../toddenObject';
import _ from 'lodash';

it('it should delete activity ', function(done) {
    if(activityDetail['id']!='' && activityDetail['id']!=null) {
        let sendData = {
            id: activityDetail['id'],
            updated_by: teacher_id
        };
        chai.request(NEW_SERVER_URL)
            .post('/activity/activity/delete')
            .send(sendData)
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