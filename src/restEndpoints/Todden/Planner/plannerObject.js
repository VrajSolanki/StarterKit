import {teacher_id,selected_class_data} from '../toddenObject';
import {activityDetail} from '../ActivityCreation/activityCreationObject';
export const unit_data = {
    "id":'',
    "section_group_id":selected_class_data.group_section_id,
    "start_date":"2017-11-04",
    "duration":30,
    "unit_uid":"WRTG"
};

export const event_data = {
    "grade_uid":selected_class_data.selected_grade,
    "start_date":"2017-08-04",
    "end_date":"2017-08-04",
    "name":"Testing Event",
    "created_by":teacher_id,
    "id":''
};

export const feedRequestObj = {
    "user_id":teacher_id,
    "page":1,
    "count":8,
    "filters":{
        "grade":["Test Grade"],
        "theme":[],
        "activity_type":[],
        "area":[],
        "state":["Approved"]
    },
    "planned_date":unit_data['start_date'],
    "search_text":""
    //"unit_id":''
};

export const planner_data = {
    "area_uid":"MR",
    //"unit_id":'',
    "planned_date":unit_data['start_date']
    //"activity_ids":[]
};
