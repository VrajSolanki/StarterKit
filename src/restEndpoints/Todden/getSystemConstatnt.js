import chai from 'chai';
import chaiHttp from 'chai-http';

let should = chai.should();
let assert = require('chai').assert;
let expect = chai.expect;

chai.use(chaiHttp);

import {NEW_SERVER_URL} from '../responseObjects';
import {systemConstants} from './toddenObject';

it('it should GET System Constants ', (done) => {
    chai.request(NEW_SERVER_URL)
        .get('/activity/admin/constants/get')
        .end((err, res) => {
            res.should.have.status(200);
            let constants_data  = res.body.constants_data;
            constants_data.should.be.a('object');

            //Required Keys
            assert.hasAllKeys(systemConstants, constants_data);

            let grade_list = constants_data.grade_list;
            let themes = constants_data.themes;
            let grades = constants_data.grades;
            let activity_types = constants_data.activity_types;
            let areas_of_development = constants_data.areas_of_development;
            let areas = constants_data.areas;
            let modules = constants_data.modules;
            let objectives = constants_data.objectives;
            let indicators = constants_data.indicators;
            let materials = constants_data.materials;
            let stand_alone = constants_data.stand_alone;
            let capture_learning = constants_data.capture_learning;
            let sections = constants_data.sections;
            let planner_area_type = constants_data.planner_area_type;

            // Grades should contain all grade_list
            grade_list.should.be.a('array');
            assert.hasAllKeys(grades,grade_list);


            //Grade_List Object Testing
            grades.should.be.a('object');
            Object.keys(grades).map((key,index) => {
               let grade = grades[key];
               assert.containsAllKeys(grade,['name','activity_types','themes','areas_of_development'])
                grade['name'].should.be.a('string');
                grade['themes'].should.be.a('array');
                grade['activity_types'].should.be.a('array');
                grade['areas_of_development'].should.be.a('array');

                //Themes Should Contain Theme List
                let theme_list = grade['themes'];
                if(theme_list.length>0) {
                    assert.containsAllKeys(themes, theme_list);
                }

                //Activity Type Should Contain Activity Type List
                let activity_types_list = grade['activity_types'];
                if(activity_types_list.length>0) {
                    assert.containsAllKeys(activity_types, activity_types_list);
                }

                //Areas_of_development should Contain Areas_of_development_list
                let areas_of_development_list = grade['areas_of_development'];
                if(areas_of_development_list.length>0) {
                    assert.containsAllKeys(areas_of_development, areas_of_development_list);
                }
            });


            //Activity_Type Object Testing
            activity_types.should.be.a('object');
            Object.keys(activity_types).map((key,index) => {
               let activity_type = activity_types[key];
                assert.containsAllKeys(activity_type,['name','areas']);
                activity_type['name'].should.be.a('string');
                activity_type['areas'].should.be.a('array');

                //Areas Should Contain areas_list
                let areas_list = activity_type['areas'];
                if(areas_list.length>0) {
                    assert.containsAllKeys(areas, areas_list);
                }
            });

            //Areas Object Testing
            areas.should.be.a('object');
            Object.keys(areas).map((key,index) => {
               let area = areas[key];
                assert.containsAllKeys(area,['name']);
                area['name'].should.be.a('string');
            });

            //Modules Object Testing
            modules.should.be.a('object');
            Object.keys(modules).map((key,index) => {
                let module = modules[key];
                assert.containsAllKeys(module,['name']);
                module['name'].should.be.a('string');
            });

            //Themes Object Testing
            themes.should.be.a('object');
            Object.keys(themes).map((key,index) => {
                let theme = themes[key];
                assert.containsAllKeys(theme,['name','central_idea','modules']);
                theme['name'].should.be.a('string');
                theme['central_idea'].should.be.a('string');
                theme['modules'].should.be.a('array');

                //Modules Should Contain modules_list
                let modules_list = theme['modules'];
                if(modules_list.length>0) {
                    assert.containsAllKeys(modules, modules_list);
                }
            });

            //Areas of Development Testing

            areas_of_development.should.be.a('object');
            Object.keys(areas_of_development).map((key,index) => {
                let aod = areas_of_development[key];
                assert.containsAllKeys(aod,['name','objectives']);
                aod['name'].should.be.a('string');
                aod['objectives'].should.be.a('object');
                let objectives_grade = aod['objectives'];
                Object.keys(objectives_grade).map((key,index) => {
                    let objectives_list = objectives_grade[key];
                    objectives_list.should.be.a('array');

                    //Objectives Should Contain objectives_list
                    if(objectives_list.length>0){
                        assert.containsAllKeys(objectives, objectives_list);
                    }
                });
            });

            //Objectives Testing
            objectives.should.be.a('object');
            Object.keys(objectives).map((key,index) => {
                let obj = objectives[key];
                assert.containsAllKeys(obj,['name','indicators']);
                obj['name'].should.be.a('string');
                obj['indicators'].should.be.a('object');
                let indicators_grade = obj['indicators'];
                Object.keys(indicators_grade).map((key,index) => {
                    let indicators_list = indicators_grade[key];
                    indicators_list.should.be.a('array');

                    //Indicators should contain indicator_list
                    if(indicators_list.length>0){
                        assert.containsAllKeys(indicators, indicators_list);
                    }
                })

            });

            //Indicators Testing
            indicators.should.be.a('object');
            Object.keys(indicators).map((key,index) => {
                let ind = indicators[key];
                assert.containsAllKeys(ind,['name']);
                ind['name'].should.be.a('string');
            });

            //Materials Testing
            materials.should.be.a('object');
            Object.keys(materials).map((key,index) => {
                let material = materials[key];
                assert.containsAllKeys(material,['name']);
                material['name'].should.be.a('string');
            });

            //Stand Alone Testing
            stand_alone.should.be.a('object');
            assert.containsAllKeys(stand_alone,['areas']);
            let stand_alone_areas = stand_alone['areas'];
            Object.keys(stand_alone_areas).map((key,index) => {
                let area = stand_alone_areas[key];
                assert.containsAllKeys(area,['name']);
                area['name'].should.be.a('string');
            });

            //Capture Learning Testing
            capture_learning.should.be.a('object');
            Object.keys(capture_learning).map((key,index) => {
                let learning = capture_learning[key];
                assert.containsAllKeys(learning,['name']);
                learning['name'].should.be.a('string');
            });

            //Sections Testing
            sections.should.be.a('object');
            Object.keys(sections).map((key,index) => {
                let section = sections[key];
                assert.containsAllKeys(section,['name']);
                section['name'].should.be.a('string');
            });

            //Planner Area Type Testing
            planner_area_type.should.be.a('object');
            Object.keys(planner_area_type).map((key,index) => {
               let  planner_area_type_grade = planner_area_type[key];
               planner_area_type_grade.should.be.a('object');

               Object.keys(planner_area_type_grade).map((key,index) => {
                  let area_type = planner_area_type_grade[key];
                   assert.containsAllKeys(area_type,['name','type']);
                   area_type['name'].should.be.a('string');
                   area_type['type'].should.be.a('string');

               });
            });

            Object.keys(constants_data).map((key,index) => {
               systemConstants[key] = constants_data[key];
            });
            done();
        });
});