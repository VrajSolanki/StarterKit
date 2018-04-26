import chai from 'chai';
import chaiHttp from 'chai-http';

let should = chai.should();
let assert = chai.assert;
let expect = chai.expect;

chai.use(chaiHttp);

import {NEW_SERVER_URL} from '../../responseObjects';
import {event_data} from './plannerObject';
it('it should delete event', function(done){
    if(event_data['id']!='' && event_data['id']!=null) {
        chai.request(NEW_SERVER_URL)
            .post('/activity/admin/calendar/event/delete')
            .send({event_data: {id: event_data['id']}})
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