import chai from 'chai';
import chaiHttp from 'chai-http';

let should = chai.should();
let assert = chai.assert;
let expect = chai.expect;

chai.use(chaiHttp);

import {NEW_SERVER_URL} from '../../responseObjects';
import {systemConstants} from '../toddenObject';
import {feedRequestObj,unit_data} from './plannerObject';
import {userDataTesting} from '../userDataTestingFunction';
import {activityObjectTesting} from '../activityObjectTestingFunction';

it('it should fetch feed ', (done) => {
    feedRequestObj['unit_id']=unit_data['id'];
    chai.request(NEW_SERVER_URL)
        .post('/activity/planner/unit/activity/get')
        .send(feedRequestObj)
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            assert.containsAllKeys(res.body,['is_success','user_data','activities','total_count','is_more','is_first_activity_present','activity_ids']);
            res.body.is_success.should.be.eql(true);
            let response = res.body;


            //User Data Testing
            userDataTesting(response.user_data);



            //Activities Testing;
            response.activities.should.be.a('object');
            let activities = response.activities;
            Object.keys(activities).map((key,index) => {
                activityObjectTesting(activities[key],response.user_data);
            });



            response.total_count.should.be.a('number');
            response.is_more.should.be.a('boolean');
            response.is_first_activity_present.should.be.a('boolean');

            //Activity_IDS Testing
            response.activity_ids.should.be.a('array');
            if(response.activity_ids.length>0){
                assert.containsAllKeys(response.activities,response.activity_ids);
            }

            done();
        });


});