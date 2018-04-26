import chai from 'chai';
import chaiHttp from 'chai-http';

let should = chai.should();
let assert = chai.assert;
let expect = chai.expect;

chai.use(chaiHttp);

describe('Test Cases for Planner', () => {
    require('./addUnit');
    require('./getUnitList');
    require('./getOrphanedActivities');
    require('./editUnit');
    require('./addEvent');
    require('./editEvent');
    require('./deleteEvent');
    require('./fetchFeed');
    require('./addActivityInPlanner');
    require('./getUnitDetail');
    require('./moveNextWeek');
    require('./deleteActivityFromPlanner');
    require('./deleteUnit');
    require('../ActivityCreation/deleteActivity');
});