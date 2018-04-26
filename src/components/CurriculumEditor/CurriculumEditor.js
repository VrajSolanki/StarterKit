import React, { PropTypes } from 'react'
import _ from 'lodash'

import classes from './CurriculumEditor.scss'
import SubjectEditor from './components/SubjectEditor'

class CurriculumEditor extends React.Component {
  render () {

    let cur = this.props.curriculum;
    let is_inquiry_visible = this.props.is_inquiry_visible;
    let key_concepts = _.get(cur,'key_concepts',[])
    let lines_of_inquiry = _.get(cur,'lines_of_inquiry',[])
    let focus_for_learner = _.get(cur,'focus_for_learner',[])

    return(
     <div className={classes.container}>
       {/* Theme and Central Idea */}
       <div className={classes.themeGradeHolder}>
         <div className={classes.themeText}>{cur.theme}</div>
         <div className={classes.gradeSectionText}>Grade-{cur.grade}{cur.section} & Unit-{cur.unit} <span className={classes.curDuration}>({cur.duration})</span></div>
       </div>
       <div className={classes.centralIdeaText}>{cur.central_idea}</div>

       {/* Information Texts*/}
       <div className={classes.conceptsHolder}>
         <div className={classes.conceptsBox}>
           <div className={classes.conceptsBoxTitle}>Learner Profiles and Attitudes</div>
           <ul className={classes.conceptItemUL}>{focus_for_learner.map( (line,key)=><li className={classes.conceptItem} key={key}>{line}</li> )}</ul>
         </div>
         {this.props.userType == 'student' && !is_inquiry_visible?
           null:
           <div className={classes.conceptsBox}>
             <div className={classes.conceptsBoxTitle}>Lines of Inquiry</div>
             <ul className={classes.conceptItemUL}>{lines_of_inquiry.map( (line,key)=><li className={classes.conceptItem} key={key}>{line}</li>  )}</ul>
           </div>
         }
         <div className={classes.conceptsBox}>
           <div className={classes.conceptsBoxTitle}>Key Concepts</div>
           <ul className={classes.conceptItemUL}>{key_concepts.map( (line,key)=><li className={classes.conceptItem} key={key}>{line}</li>  )}</ul>
         </div>


       </div>

       {/* Subjects */}
       <div className={classes.subjectsHolder}>
         {
          //  _.map(cur.subjects,(subject,key)=>
          //  <SubjectEditor
          //    subject={subject} key={key}
          //    getNode={this.getNode} editable={true}
          //    changeStatus={this.changeStatus}
          //    />
          // )
        }

         {_.map(_.sortBy(cur.subjects,['order']),(subject,key)=>
           <SubjectEditor
             subject={subject} key={key}
             getNode={this.getNode} editable={this.getEditableForSubject(subject.id)}
             changeStatus={this.changeStatus}
             />
         )}
       </div>

     </div>
    )
  }
  changeStatus = (nodeId,status) =>{
    if(this.props.changeStatus)
    this.props.changeStatus({nodeId,status});
  }
  getNode = (id)=>{
    let status =  _.get(this.props, `nodeStatus[${id}]`, 'not-started');
    let returnObj = Object.assign({}, this.props.curriculum.nodes[id], {status});
    return returnObj;
  }
  getEditableForSubject = (subject) => {
    // console.log(subject);
    if(this.props.userType === 'teacher') return true
    else return false
    // return true
  }
}

export default CurriculumEditor;
