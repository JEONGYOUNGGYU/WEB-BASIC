let userData = {
    "code" :1,
    "msg" : "유저정보 로드 성공",
    "data" : {
        "usercode" : 20230425,
        "username" : "hong",
        "password" : "1234",
        "name" : "홍길동",
        "email" : "hong@gmail.com",
        "role" : ["ROLE_ADMIN", "ROLE_USER"],
        "provider" : "google"
    }
}

console.log(userData);
console.log(userData.data);

let jsonData = JSON.stringify(userData);
console.log(jsonData);