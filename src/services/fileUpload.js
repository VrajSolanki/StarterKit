var axios = require('axios');
import {NEW_SERVER_URL} from 'store/static'
let ENDPOINT_TO_GET_SIGNED_URL = `${NEW_SERVER_URL}/dashboard/upload/sign-s3`;

function uploadFileS3(file){
  return new Promise(function(resolve, reject) {
    let returnUrl = null;
    axios.get(ENDPOINT_TO_GET_SIGNED_URL, {
      params:{
        'file-name': file.name,
        'file-type': file.type,
        'content-type': 'content'
      }})
      .then(function (result) {
        // console.log(result);
        returnUrl = result.data.url;
        var signedUrl = result.data.signedRequest;
        var options = {
          // onUploadProgress: e => {
          //   if(progressAction){
          //       progressAction((e.loaded/e.total * 100.0).toFixed(0));
          //   }
          // },
          headers: {'Content-Type': file.type}
        };
        return axios.put(signedUrl, file, options);
      })
      .then(function (result) {
        resolve(returnUrl);
      })
      .catch(function (err) {
        console.log(err);
        reject(err);
      });

    });

  }

  export default uploadFileS3;
