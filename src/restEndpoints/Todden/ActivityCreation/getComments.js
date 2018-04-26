import chai from 'chai';
import chaiHttp from 'chai-http';

let should = chai.should();
let assert = chai.assert;
let expect = chai.expect;

chai.use(chaiHttp);

import {NEW_SERVER_URL} from '../../responseObjects';
import {activityDetail} from './activityCreationObject';
import {userDataTesting} from '../userDataTestingFunction';

it('it should get comments ', function(done)  {
    if(activityDetail['id']!='' && activityDetail['id']!=null) {
        let sendData = {
            activity_id: activityDetail['id'],
        };
        chai.request(NEW_SERVER_URL)
            .post('/activity/comment/get/all')
            .send(sendData)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                assert.containsAllKeys(res.body, ['is_success', 'data']);
                res.body.is_success.should.be.eql(true);
                let data = res.body.data;
                data.should.be.a('object');
                assert.containsAllKeys(data, ['comment_data', 'user_data']);
                let comment_data = data.comment_data;
                let user_data = data.user_data;

                //User Data Testing
                userDataTesting(user_data);

                //Comment Data Testing

                comment_data.should.be.a('array');
                comment_data.map((comment, index) => {
                    assert.containsAllKeys(comment, ['data', 'from', 'comment_id', 'created_at', 'activity_id']);
                    should.exist(comment['from']);
                    expect(user_data).to.have.property(comment['from']);
                    should.exist(comment['comment_id']);
                    should.exist(comment['activity_id']);
                    comment['data'].should.be.a('object');
                    assert.containsAllKeys(comment['data'], ['comment']);
                    comment['data']['comment'].should.be.a('string');
                });


                done();
            });
    }
    else{
        this.skip();
    }


});