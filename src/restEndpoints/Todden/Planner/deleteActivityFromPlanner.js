import chai from 'chai';
import chaiHttp from 'chai-http';

let should = chai.should();
let assert = chai.assert;
let expect = chai.expect;

chai.use(chaiHttp);

import {NEW_SERVER_URL} from '../../responseObjects';
import {planner_data,unit_data} from './plannerObject';
import {activityDetail} from '../ActivityCreation/activityCreationObject';
it('it should delete activity from planner', function(done) {
    if(activityDetail['id']!='' && activityDetail['id']!=null) {
        planner_data['unit_id'] = unit_data['id'];
        planner_data['activity_id'] = activityDetail['id'];
        chai.request(NEW_SERVER_URL)
            .post('/activity/planner/unit/activity/delete')
            .send(planner_data)
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