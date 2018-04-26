import chai from 'chai';
import chaiHttp from 'chai-http';

let should = chai.should();
let assert = chai.assert;
let expect = chai.expect;

chai.use(chaiHttp);

import {NEW_SERVER_URL} from '../../responseObjects';
import {event_data} from './plannerObject';
it('it should add event', (done) => {
    chai.request(NEW_SERVER_URL)
        .post('/activity/admin/calendar/event/add')
        .send({event_data})
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            assert.containsAllKeys(res.body,['is_success','id']);
            res.body.is_success.should.be.eql(true);
            should.exist(res.body.id);
            event_data['id']=res.body.id;
            done();
        });


});