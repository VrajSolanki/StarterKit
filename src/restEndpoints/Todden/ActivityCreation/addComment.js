import chai from 'chai';
import chaiHttp from 'chai-http';
import _ from 'lodash';

let should = chai.should();
let assert = chai.assert;
let expect = chai.expect;

chai.use(chaiHttp);

import {NEW_SERVER_URL} from '../../responseObjects';
import {comment_data} from './activityCreationObject';
import {teacher_id} from '../toddenObject';
import {activityDetail} from './activityCreationObject';

it('it should add comments ', function(done) {
    if(activityDetail['id']!='' && activityDetail['id']!=null) {
        let sendData = _.cloneDeep(comment_data);
        sendData['from'] = teacher_id;
        sendData['activity_id'] = activityDetail['id'];
        chai.request(NEW_SERVER_URL)
            .post('/activity/comment/add')
            .send({comment_data: sendData})
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                assert.containsAllKeys(res.body, ['is_success', 'comment_id']);
                res.body.is_success.should.be.eql(true);
                should.exist(res.body.comment_id);
                comment_data['comment_id'] = res.body.comment_id;
                done();
            });
    }
    else{
        this.skip();
    }


});