import chai from 'chai';
import chaiHttp from 'chai-http';
import _ from 'lodash'

let should = chai.should();
let assert = chai.assert;
let expect = chai.expect;

chai.use(chaiHttp);

import {NEW_SERVER_URL} from '../../responseObjects';
import {unit_data} from './plannerObject';
it('it should get Orphaned Activities', function(done)  {
    if(unit_data['id']!='' && unit_data['id']!=null) {
        let sendData = _.cloneDeep(unit_data);
        sendData['duration'] = unit_data['duration'] + 10;
        chai.request(NEW_SERVER_URL)
            .post('/activity/planner/unit/orphan/activities/count')
            .send({unit_data: sendData})
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                assert.containsAllKeys(res.body, ['is_success', 'orphan_activities']);
                res.body.is_success.should.be.eql(true);
                unit_data['duration'] = unit_data['duration'] + 10;
                should.exist(res.body['orphan_activities']);
                done();
            });
    }
    else{
        this.skip();
    }


});