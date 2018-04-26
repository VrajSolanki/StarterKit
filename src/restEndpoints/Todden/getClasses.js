import chai from 'chai';
import chaiHttp from 'chai-http';

let should = chai.should();
let assert = require('chai').assert;
let expect = chai.expect;

chai.use(chaiHttp);

import {NEW_SERVER_URL} from '../responseObjects';
import {systemConstants,teacher_id} from './toddenObject';

it('it should GET teacher classes ', (done) => {
    chai.request(NEW_SERVER_URL)
        .post('/activity/teacher/class/get')
        .send({teacher_id})
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            assert.containsAllKeys(res.body,['is_success',['class_data']]);
            res.body.is_success.should.be.eql(true);
            let class_data = res.body.class_data;
            class_data.should.be.a('object');

            //System Constants should have all the grades which are assigned to teachers.
            assert.containsAllKeys(systemConstants.grades,class_data);
            Object.keys(class_data).map((key,index) => {
               let sections = class_data[key];
               sections.should.be.a('array');

               sections.map((section,index) => {
                   assert.containsAllKeys(section,['classroom_uid','section','section_group_id','role','section_uids']);
                   section['classroom_uid'].should.be.a('string');
                   section['section'].should.be.a('string');
                   should.exist(section['section_group_id']);
                   section['role'].should.be.a('string');
                   section['section_uids'].should.be.a('array');

                   //Classroom_id should belong to sections
                   expect(systemConstants.sections).to.have.property(section['classroom_uid']);


                   //Sections_uids should belong to sections
                   assert.containsAllKeys(systemConstants.sections,section['section_uids']);



               });

            });
            done();
        });
});