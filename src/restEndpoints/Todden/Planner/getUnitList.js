import chai from 'chai';
import chaiHttp from 'chai-http';

let should = chai.should();
let assert = chai.assert;
let expect = chai.expect;

chai.use(chaiHttp);

import {NEW_SERVER_URL} from '../../responseObjects';
import _ from 'lodash';
import moment from 'moment';
import {selected_class_data,systemConstants} from '../toddenObject';
it('it should get unit list', (done) => {

    let sendData = {

    };
    let current_year = moment().format('YYYY');
    let next_year = parseInt(current_year)+1;
    let start_date = `${current_year}-06-01`;
    let end_date = `${next_year}-05-31`;
    sendData['start_date']=start_date;
    sendData['end_date']=end_date;
    sendData['section'] = selected_class_data['section'];
    sendData['section_group_id'] = selected_class_data['group_section_id'];

    chai.request(NEW_SERVER_URL)
        .post('/activity/planner/unit/list/get')
        .send(sendData)
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            assert.containsAllKeys(res.body,['is_success','data']);
            res.body.is_success.should.be.eql(true);
            res.body.data.should.be.a('object');
            let data = res.body.data;
            assert.containsAllKeys(data,['calendar_detail','occupied_intervals','planner_detail','unit_left','unit_list']);
            let unit_list = data.unit_list;
            unit_list.should.be.a('array');
            unit_list.map((unit,index) => {
                unit.should.be.a('object');
                assert.containsAllKeys(unit,['id','start_date','end_date','unit_uid']);
                should.exist(unit['id']);
                unit['unit_uid'].should.be.a('string');
                expect(systemConstants.themes).to.have.property(unit['unit_uid']);
                unit['start_date'].should.be.a('string');
                unit['end_date'].should.be.a('string');

            });
            let unit_left = data.unit_left;
            unit_left.should.be.a('array');
            unit_left.map((unit,index) => {
                unit.should.be.a('string');
                expect(systemConstants.themes).to.have.property(unit);
            });
            let occupied_intervals= data.occupied_intervals;
            occupied_intervals.should.be.a('array');
            occupied_intervals.map((interval,index) => {
                assert.containsAllKeys(interval,['start_date','end_date']);
                interval['start_date'].should.be.a('string');
                interval['end_date'].should.be.a('string');
            });
            let planner_detail = data.planner_detail;
            planner_detail.should.be.a('object');
            assert.containsAllKeys(planner_detail,['grade_uid','section_group_id','section_uids']);
            should.exist(planner_detail['grade_uid']);
            expect(systemConstants.grades).to.have.property(planner_detail['grade_uid']);
            let section_uids = planner_detail['section_uids'];
            section_uids.should.be.a('array');
            section_uids.map((section,index) => {
                expect(systemConstants.sections).to.have.property(section);
            });
            let calendar_detail = data.calendar_detail;
            calendar_detail.should.be.a('object');
            assert.containsAllKeys(calendar_detail,['sprints','sprint_list','month_list']);
            let month_list = calendar_detail.month_list;
            month_list.should.be.a('object');
            Object.keys(month_list).map((key,index) => {
               let month = month_list[key];
                assert.containsAllKeys(month,['start_date','end_date','count','name','events']);
                month['start_date'].should.be.a('string');
                month['end_date'].should.be.a('string');
                month['name'].should.be.a('string');
                month['count'].should.be.a('number');
                month['events'].should.be.a('array');
                let events = month['events'];
                events.map((event,index) => {
                    assert.containsAllKeys(event,['start_date','end_date','id','name','day_string']);
                    event['start_date'].should.be.a('string');
                    event['end_date'].should.be.a('string');
                    event['name'].should.be.a('string');
                    event['day_string'].should.be.a('string');
                    should.exist(event['id']);
                });

            });
            let sprint_list = calendar_detail.sprint_list;
            sprint_list.should.be.a('object');
            Object.keys(sprint_list).map((key,index) => {
               let sprint = sprint_list[key];
                assert.containsAllKeys(sprint,['start_date','end_date','months','name']);
                sprint['start_date'].should.be.a('string');
                sprint['end_date'].should.be.a('string');
                sprint['name'].should.be.a('string');
                let months = sprint.months;
                months.should.be.a('array');
                assert.containsAllKeys(month_list,months);
            });
            let sprints = calendar_detail.sprints;
            sprints.should.be.a("array");
            assert.containsAllKeys(sprint_list,sprints);
            done();
        });


});