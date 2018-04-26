import request from 'superagent';

const AUTH_URL = "https://teal-server.herokuapp.com/auth/googlesignin";

function authWithServer(id_token){
  return new Promise(function(resolve, reject) {

    request
     .get(AUTH_URL)
     .query({ id_token: id_token})
     .end(function(err, res){
       if (!err){
         resolve(res);
       }
     });

  });
}

export default { authWithServer };
