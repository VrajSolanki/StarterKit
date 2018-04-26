import chai from 'chai';
import chaiHttp from 'chai-http';

let should = chai.should();
let assert = chai.assert;
let expect = chai.expect;
import {activityDetail} from './ActivityCreation/activityCreationObject';
import {systemConstants} from './toddenObject';

export const activityObjectTesting = (activity,user_data) => {
        activity.should.be.a('object');
        assert.containsAllKeys(activity,activityDetail);
        should.exist(activity.id);
        activity.title.should.be.a('string');
        activity.grade.should.be.a('string');
        if(activity.grade!='') {
            expect(systemConstants.grades).to.have.property(activity.grade);
        }
        activity.theme.should.be.a('string');
        if(activity.theme!=''){
            expect(systemConstants.themes).to.have.property(activity.theme);
        }
        activity.area.should.be.a('string');
        if(activity.area!=''){
            expect(systemConstants.areas).to.have.property(activity.area);
        }
        activity.module.should.be.a('string');
        if(activity.module!='') {
            expect(systemConstants.modules).to.have.property(activity.module);
        }
        activity.group_size.should.be.a('string');
        activity.materials.should.be.a('array');
        let materials = activity.materials;
        materials.map((material,index) => {
            expect(systemConstants.materials).to.have.property(material);
        });
        let setup_steps = activity.setup_steps;
        setup_steps.should.be.a('array');
        setup_steps.map((setup_step,key) => {
            setup_step.should.be.a('string');
        });
        activity.engagement_time.should.be.a('string');
        activity.observations.should.be.a('array');
        let observations = activity.observations;
        observations.map((observation,key) => {
           observation.should.be.a('string');
        });
        let learning_objectives = activity.learning_objectives;
        learning_objectives.should.be.a('array');
        learning_objectives.map((learning_objective,key) => {
            learning_objective.should.be.a('object');
            assert.containsAllKeys(learning_objective,['aod','obj','indi']);
            expect(systemConstants.areas_of_development).to.have.property(learning_objective['aod']);
            expect(systemConstants.objectives).to.have.property(learning_objective['obj']);
            expect(systemConstants.indicators).to.have.property(learning_objective['indi']);
        });
        should.exist(activity.created_by);
        //expect(user_data).to.have.property(activity.created_by);
        activity.refrence_imgs.should.be.a('array');
        let refrence_imgs = activity.refrence_imgs;
        refrence_imgs.map((refrence_img,index) => {
           refrence_img.should.be.a('string');
        });
        activity.state.should.be.a('string');
        activity.capture_learning.should.be.a("array");
        let capture_learning = activity.capture_learning;
        capture_learning.map((capture_learning_element,index) => {
            capture_learning_element.should.be.a('string');
            expect(systemConstants.capture_learning).to.have.property(capture_learning_element);
        });
        activity.is_in_improvement.should.be.a('boolean');
        activity.refrence_atts.should.be.a('array');
        let refrence_atts = activity.refrence_atts;
        refrence_atts.map((refrence_att,index) => {
            refrence_att.should.be.a('object');
            assert.containsAllKeys(refrence_att,['url','name','type']);
            Object.keys(refrence_att).map((key,index) => {
                refrence_att[key].should.be.a('string');
            });
        });
        activity.activity_type.should.be.a('string');
        if(activity.activity_type!='') {
            expect(systemConstants.activity_types).to.have.property(activity.activity_type);
        }

};