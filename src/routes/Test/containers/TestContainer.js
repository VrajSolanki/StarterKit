import { connect } from 'react-redux';
import Test from '../components/Test';
// import {} from './TestModule';

const mapActionCreators = {
  
};

const mapStateToProps = (state) => {
  console.log(state)
  return({
    
  })
};

export default connect(mapStateToProps, mapActionCreators)(Test)
