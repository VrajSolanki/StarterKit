import chai from 'chai';
import chaiHttp from 'chai-http';

let should = chai.should();
let assert = chai.assert;
let expect = chai.expect;

chai.use(chaiHttp);

describe('Test Cases', () => {
    require('./getSystemConstatnt');
    require('./getClasses');
    require('./ActivityCreation');
    require('./Planner');
});