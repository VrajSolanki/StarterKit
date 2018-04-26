import _ from 'lodash'
export const SENTRY_URL = (__PROD__)?'https://69d6897fcb914e66a1bcfe0fbae145d5@sentry.io/183443':'https://f2bcccef481a47228fef36f9ca49d3cd@sentry.io/183442'
export const STAGING_SERVER_URL = 'https://teal-server-staging.herokuapp.com'
// export const SERVER_URL = 'http://10.0.4.237:3000'
export const SERVER_URL = 'https://teal-server.herokuapp.com'
// export const SERVER_URL = 'http://localhost:5000'
// export const SERVER_URL = 'http://10.0.4.237:3000'
export const LOCALHOST_URL = 'http://10.0.4.237:3000'
export const NEW_SERVER_URL = (__PROD__)?'http://apis.todden.com':'http://staging-apis.todden.com'
export const PDF_SERVER_URL = (__PROD__)?'http://apis.cerebroapp.me':'http://staging-apis.cerebroapp.me'

export const THUMB_URL = 'http://cloud.aischool.net/unsafe/200x200/'
export const WEBSITE_INFO = 'http://staging-apis.aischool.net/unfurl/?url'
export const LOGIN_IMAGES_LIST =
[
    "http://cloud.aischool.net/staging/content/ryZIj8JLZ.jpg",
    "http://cloud.aischool.net/staging/content/BkC3jUyLb.jpg",
    "http://cloud.aischool.net/staging/content/Hkt0sLyUb.jpg",
    "http://cloud.aischool.net/staging/content/rJusp8yU-.jpg"
]
//export const PUSHER_APP_KEY = '6414f2d89a4d7a1f2ade'  //Development
// export const PUSHER_APP_KEY = '2cf799c33a9d7380710c'  //Production
export const PUSHER_APP_KEY = (__PROD__)?'2cf799c33a9d7380710c':'6414f2d89a4d7a1f2ade'
export const PUSHER_CLUSTER = 'ap1'
export const PUSHER_EVENT_NAME = 'my_event'

export const GRADE_LIST =['5','6','7'];

export const QUIZ_QUESTION_TYPE = {
    'ANN' : 'Anagram',
    'BAQ' : 'True/False',
    'SAQ' : 'Multiple Choice Question',
    'MAQ' :  'Multiple Choice Question'
};
export const YOUTUBE_RESOURCE_KEY = 'AIzaSyDfJbtrn7dqPkFOmHfKyk8DdP0fvH0A_0o'
export const QUIZ_QUESTION_DIFFICULTY = {
  '1':'1',
  '2':'2',
  '3':'3',
  '4':'4',
  '5':'5'
};
export const ATTACHMENT_TYPE_TO_NAME = {
  'jpg': 'JPG IMAGE',
  'jpeg': 'JPEG IMAGE',
  'pdf' : 'PDF',
  'png' : 'PNG IMAGE'
}

export const FILE_TYPE_TO_ATTACHMENT_NAME = {
  'image/jpg': 'image',
  'image/jpeg': 'image',
  'application/pdf' : 'attachment',
  'image/png' : 'image'
}

export const COLOR_CODING_FOR_MASTERY = {
  0: "#AFAFB5",
  1: "#FFD200",
  2: "#FF9421",
  3: "#5CE2C6",
  4: "#21BB9A"
}

export const SUBJECT_LIST = {
  '' : 'All',
  'math' : 'Maths',
  'science': 'Science',
  'social' : 'Social',
  'english': 'English',
  'hindi': 'Hindi',
  'gujarati': 'Gujarati',
  'ict' : 'ICT'
};

export const STUDENT_KC_LIST = {
  'notStarted' : 'Not Started',
  'struggling': 'Struggling',
  'needsAttention' : 'Needs Attention',
  'needsPractice': 'Needs Practice',
  'onPath': 'On Path'
};

export const KC_LIST_TOP_NAV = {
  'notStarted' : '#FFF7F8',
  'struggling': '#FFF0F2',
  'needsAttention' : '#FFFFE0',
  'needsPractice': '#24CCA8',
  'onPath': '#20B796'
};

export const KC_DROPDOWN_OPTIONS = {
  'default': 'Select Question Type',
  'solve10': 'Solve 10 Questions',
  'solve7': 'Solve 7 Questions',
  'ans5': 'Answer 5 Correctly'
}

  export const KC_ASSIGN_OBJECT = {
  'solve10': { "assignment_type":"Attempt", "total_questions":10, "total_correct":0},
  'solve7':  { "assignment_type":"Attempt", "total_questions":7, "total_correct":0},
  'ans5':  { "assignment_type":"Attempt", "total_questions":5, "total_correct":0}
}

export const NEW_CURRICULUM = {
      "0": {
      "id": 0,
      "theme": "Sample Theme",
      "unit": "5",
      "central_idea": "Sample Central Idea",
      "grade": 5,
      "nodes": {},
      "subjects": {
        "ict": {
          "id": "ict",
          "list": [],
          "name": "Information and Communication Technology",
          "order": 8
        },
        "math": {
          "id": "math",
          "list": [],
          "name": "Math",
          "order": 2
        },
        "hindi": {
          "id": "hindi",
          "list": [],
          "name": "हिंदी",
          "order": 6
        },
        "english": {
          "id": "english",
          "list": [],
          "name": "English",
          "order": 1
        },
        "science": {
          "id": "science",
          "list": [],
          "name": "Science",
          "order": 3
        },
        "gujarati": {
          "id": "gujarati",
          "list": [],
          "name": "ગુજરાતી",
          "order": 7
        },
        "socialstudies": {
          "id": "socialstudies",
          "list": [],
          "name": "Social Studies",
          "order": 4
        }
      },
      "duration": "January 2nd to February 3rd",
      "key_concepts": [
        "Sample Key Concept"
      ],
      "lines_of_inquiry": [
        "Sample Line Of Inquiry"
      ],
      "focus_for_learner": [
        "Sample Focus for Learner"
      ],
    "is_inquiry_visible": false,
    "created_at": "2017-01-18T06:35:35.635Z",
    "updated_at": "2017-01-18T06:35:35.635Z"
    }
  }


export const RUBRIC_METRICS = [
  {name:'Ideas & Content',id:'Ideas & Content',rubricValue:['Beginning','Emerging','Developing','Proficient','Strong','Exemplary']},
  {name:'Organization',id:'Organization',rubricValue:['Beginning','Emerging','Developing','Proficient','Strong','Exemplary']},
  {name:'Voice',id:'Voice',rubricValue:['Beginning','Emerging','Developing','Proficient','Strong','Exemplary']},
  {name:'Word Choice',id:'Word Choice',rubricValue:['Beginning','Emerging','Developing','Proficient','Strong','Exemplary']},
  {name:'Sentence Fluency', id:'Sentence Fluency',rubricValue:['Beginning','Emerging','Developing','Proficient','Strong','Exemplary']},
  {name:'Conventions', id:'Conventions',rubricValue:['Beginning','Emerging','Developing','Proficient','Strong','Exemplary']}
]

export const placeholder_profile_pic = "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm"

export const gradeChapterQues = {
  '6': {
    "Alg":['1t1','1t2','1t3', '2t1','2t2','2t3','2t4','2t5', '3t1','3t2','3t3','3t4'],
    "FRA":['1t1','1t2','1t3', '2t1','2t2','2t3','2t4','2t5', '3t1','3t2','3t3','3t4'],
    "MEN":['1t1','1t2','1t3', '2t1','2t2','2t3','2t4','2t5', '3t1','3t2','3t3','3t4'],
    "OAE":['1t1','1t2','1t3', '2t1','2t2','2t3','2t4','2t5', '3t1','3t2','3t3','3t4'],
    "PAR":['1t1','1t2','1t3', '2t1','2t2','2t3','2t4','2t5', '3t1','3t2','3t3','3t4'],
    "PL":['1t1','1t2','1t3', '2t1','2t2','2t3','2t4','2t5', '3t1','3t2','3t3','3t4'],
    "RAP":['1t1','1t2','1t3', '2t1','2t2','2t3','2t4','2t5', '3t1','3t2','3t3','3t4'],
    "SAF":['1t1','1t2','1t3', '2t1','2t2','2t3','2t4','2t5', '3t1','3t2','3t3','3t4'],
    "SE":['1t1','1t2','1t3', '2t1','2t2','2t3','2t4','2t5', '3t1','3t2','3t3','3t4'],
    "SET":['1t1','1t2','1t3', '2t1','2t2','2t3','2t4','2t5', '3t1','3t2','3t3','3t4'],
    "SI":['1t1','1t2','1t3', '2t1','2t2','2t3','2t4','2t5', '3t1','3t2','3t3','3t4'],
    "FCA":['1t1','1t2','1t3', '2t1','2t2','2t3','2t4','2t5', '3t1','3t2','3t3','3t4'],
    "NS":['1t1','1t2','1t3', '2t1','2t2','2t3','2t4','2t5', '3t1','3t2','3t3','3t4'],
    "DEC":['1t1','1t2','1t3', '2t1','2t2','2t3','2t4','2t5', '3t1','3t2','3t3','3t4'],
    "FAM":['1t1','1t2','1t3', '2t1','2t2','2t3','2t4','2t5', '3t1','3t2','3t3','3t4']
  },

  '7': {
    "DEC":['1t1','1t2','1t3','1t4','2t1','2t2','2t3','2t4','2t5','2t6','2t7'],
    "FRA":['1t1','1t2','1t3','1t4','1t5','1t6','2t1','2t2','2t3','2t4','3t1','3t2','3t3','3t4','3t5'],
    "PAR":['1t1','1t2','1t3','1t4','1t5','1t6','1t7','1t8','2t1','2t2','2t3','2t4','2t5','2t6','3t1','3t2','3t3'],
    "FAM":['1t1','1t2','1t3','2t1','2t2','2t3','2t4','2t5','3t1','3t2','3t3','3t4'],
    "NS":['1t1','1t2','1t3','1t4','1t5','1t6','1t7','2t1','2t2','2t3','2t4','2t5','3t1','3t2','3t3'],
    "PER":['1t1','1t2','1t3','2t1','2t2','2t3','2t4','2t5','3t1','3t2','3t3','3t4'],
    "PL":['1t1','1t2','1t3','2t1','2t2','2t3','2t4','2t5','3t1','3t2','3t3','3t4'],
    "RAP":['1t1','1t2','1t3','2t1','2t2','2t3','2t4','2t5','3t1','3t2','3t3','3t4'],
    "SI":['1t1','1t2','1t3','2t1','2t2','2t3','2t4','2t5','3t1','3t2','3t3','3t4'],
    "UNM":['1t1','1t2','1t3','1t4','1t5','1t6','2t1','2t2','2t3','2t4','3t1','3t2','3t3','3t4','3t5'],
    "AVG":['1t1','1t2','1t3','1t4','2t1','2t2','2t3','2t4','2t5','2t6','3t1','3t2','3t3','3t4','3t5','3t6'],
    "FCA":['1t1','1t2','1t3','1t4','1t5','2t1','2t2','2t3','2t4','2t5','3t1','3t2','3t3','3t4','3t5','4t1','4t2','4t3','4t4','4t5','5t1','5t2','5t3','5t4'],
    "MEN":['1t1','1t2','1t3','1t4','1t5','2t1','2t2','2t3','2t4','2t5','3t1','3t2','3t3','3t4','3t5']
  }
}

export const getChaptersForGrade = (grade = '6') =>{
  return _.keys(gradeChapterQues[grade])
}
export const getDefaultChapterForGrade = (grade = '6') =>{
  return _.keys(gradeChapterQues[grade])[0]
}
export const getQuesTypesForGrade = (grade= '6') =>{
  return gradeChapterQues[grade]
}
