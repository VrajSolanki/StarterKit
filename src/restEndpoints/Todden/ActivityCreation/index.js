import chai from 'chai';
import chaiHttp from 'chai-http';

let should = chai.should();
let assert = chai.assert;
let expect = chai.expect;

chai.use(chaiHttp);

describe('Test Cases for Activity Creation Tool', () => {
    require('./createActivity');
    require('./fetchFeed');
    require('./fetchFilter');
    require('./editActivity');
    require('./viewActivity');
    require('./addComment');
    require('./getComments');
});