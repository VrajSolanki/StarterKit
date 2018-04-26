import chai from 'chai';
import chaiHttp from 'chai-http';

let should = chai.should();
let assert = chai.assert;
let expect = chai.expect;

chai.use(chaiHttp);

import {NEW_SERVER_URL} from '../../responseObjects';
import {activityDetail} from './activityCreationObject';
import {userDataTesting} from '../userDataTestingFunction';
import {activityObjectTesting} from '../activityObjectTestingFunction';

it('it should view activity ', function(done) {
    if(activityDetail['id']!='' && activityDetail['id']!=null) {
        let sendData = {
            activity_id: activityDetail['id'],
        };
        chai.request(NEW_SERVER_URL)
            .post('/activity/activity/detail/get')
            .send(sendData)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                assert.containsAllKeys(res.body, ['is_success', 'activity_data']);
                res.body.is_success.should.be.eql(true);
                res.body.activity_data.should.be.a('object');
                let user_data = res.body.activity_data.user_data;
                userDataTesting(user_data);
                let activity_data = res.body.activity_data.activity_data;
                activityObjectTesting(activity_data, user_data)

                done();
            });
    }
    else{
        this.skip();
    }


});