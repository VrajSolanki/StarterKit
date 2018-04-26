import chai from 'chai';
import chaiHttp from 'chai-http';
import {activityObjectTesting} from '../activityObjectTestingFunction';
let should = chai.should();
let assert = chai.assert;
let expect = chai.expect;

chai.use(chaiHttp);

import {NEW_SERVER_URL} from '../../responseObjects';
import {selected_class_data,systemConstants} from '../toddenObject';
import {userDataTesting} from '../userDataTestingFunction';
it('it should get unit detail', (done) => {
    chai.request(NEW_SERVER_URL)
        .post('/activity/planner/unit/detail/get')
        .send({unit_id:"58"})
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            assert.containsAllKeys(res.body,['is_success','data']);
            res.body.is_success.should.be.eql(true);
            let data = res.body.data;
            assert.containsAllKeys(data,['unit','activities','user_data']);

            //User Data Testing
            userDataTesting(data.user_data);

            let activities = data.activities;
            activities.should.be.a('object');
            Object.keys(activities).map((key,index) => {
                activityObjectTesting(activities[key],data.user_data);
            });
            let unit = data.unit;
            unit.should.be.a('object');
            assert.containsAllKeys(unit,['id','uid','areas','weeks','duration','start_date','no_of_weeks','section_group_id','current_week_index']);
            should.exist(unit.id);
            unit['uid'].should.be.a('string');
            expect(systemConstants.themes).to.have.property(unit['uid']);
            unit['duration'].should.be.a('number');
            unit['no_of_weeks'].should.be.a('number');
            unit['section_group_id'].should.be.a('number');
            unit['current_week_index'].should.be.a('number');
            unit['start_date'].should.be.a('string');
            let areas = unit['areas'];
            areas.should.be.a('array');
            assert.containsAllKeys(systemConstants.planner_area_type[selected_class_data.selected_grade],areas);
            let weeks = unit['weeks'];
            weeks.should.be.a('array');
            weeks.map((week,index) => {
               week.should.be.a('object');
               assert.containsAllKeys(week,['start_date','end_date','is_next_week_present','activities']);
               week['start_date'].should.be.a('string');
               week['end_date'].should.be.a('string');
               week['is_next_week_present'].should.be.a('boolean');
               week['activities'].should.be.a('object');
               let planner_areas = week['activities'];
               assert.hasAllKeys(planner_areas,areas);
               Object.keys(planner_areas).map((key,index) => {
                  let activities_areas = planner_areas[key];
                  activities_areas.should.be.a('array');
                  activities_areas.map((activity,index) => {
                      expect(activities).to.have.property(activity);
                  });
               });
            });
            done();
        });


});