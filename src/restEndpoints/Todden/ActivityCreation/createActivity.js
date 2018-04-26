import chai from 'chai';
import chaiHttp from 'chai-http';

let should = chai.should();
let assert = chai.assert;
let expect = chai.expect;

chai.use(chaiHttp);

import {NEW_SERVER_URL} from '../../responseObjects';
import {activityDetail} from './activityCreationObject';
import _ from 'lodash';

it('it should create activity ', (done) => {
    let sendData = _.cloneDeep(activityDetail);
    delete sendData['id'];
    delete sendData['updated_by'];
    chai.request(NEW_SERVER_URL)
        .post('/activity/activity/add/new')
        .send({activity_data:sendData})
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            assert.containsAllKeys(res.body,['is_success','activity_id']);
            res.body.is_success.should.be.eql(true);
            should.exist(res.body.activity_id);
            activityDetail['id'] = res.body.activity_id;
            done();
        });


});