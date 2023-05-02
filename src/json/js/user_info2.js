let userList = [
    {
        usercode : "20230001",
        username : "ghdrlfehd1",
        password : "1234",
        name : "홍길동",
        email : "ghdrlfehd@naver.com",
        role : "권한", 
        provider :"google"
    },
    {
        usercode : "20230002",
        username : "ghdrlfehd2",
        password : "1234",
        name : "홍길동",
        email : "ghdrlfehd@naver.com",
        role : ["ROLE_ADMIN", "ROLE_USER"],
        provider :"naver"
    },
    {
        usercode : "20230003",
        username : "ghdrlfehd3",
        password : "1234",
        name : "홍길동",
        email : "ghdrlfehd@naver.com",
        role : ["ROLE_ADMIN", "ROLE_USER"],
        provider :"kakao"
    }
]

for(let i = 0; i < userList.length; i++){
    
}

/*
버튼을 눌렀을 때
위에있는 객체가 JSON으로 바꾸고 
JSON->Obj로 바꿔서
반복문을 돌려 정보 뿌리기
*/

const userListLoadBtn = document.querySelector('user_list_load_btn');
const userTableList = document.querySelector('user-table-list');


userListLoadBtn.onclick = () => {
    // console.log("안녕");
    let userJSON = JSON.stringify(userList);
    let userListObj = JSON.parse(userJSON);

    // for(let i = 0; i < userListObj.length; i++){
        
    //     userTableList.innerHTML += `
    //     <tr>
    //         <td>${userListObj[i].usercode}</td>
    //         <td>${userListObj[i].username}</td>
    //         <td>${userListObj[i].password}</td>
    //         <td>${userListObj[i].name}</td>
    //         <td>${userListObj[i].email}</td>
    //         <td>${userListObj[i].role.join(", ")}</td>
    //         <td>${userListObj[i].procider}</td>
    //     </tr>
    //     `;
    // }


    /* #1 */
    // userListObj.forEach(function(user) {
    //     userTableList.innerHTML += `
    //     <tr>
    //         <td>${user.usercode}</td>
    //         <td>${user.username}</td>
    //         <td>${user.password}</td>
    //         <td>${user.name}</td>
    //         <td>${user.email}</td>
    //         <td>${user.role.join(", ")}</td>
    //         <td>${user.provider}}</td>
    //     </tr>
    //     `;
    // })

    /* #2 */
    // userListObj.forEach((user) => {
    //     userTableList.innerHTML += `
    //     <tr>
    //         <td>${user.usercode}</td>
    //         <td>${user.username}</td>
    //         <td>${user.password}</td>
    //         <td>${user.name}</td>
    //         <td>${user.email}</td>
    //         <td>${user.role.join(", ")}</td>
    //         <td>${user.provider}}</td>
    //     </tr>
    //     `;
    // })

    /* #3 */
    userListObj.forEach(user => {
        userTableList.innerHTML += `
        <tr>
            <td>${user.usercode}</td>
            <td>${user.username}</td>
            <td>${user.password}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.role.join(", ")}</td>
            <td>${user.provider}}</td>
        </tr>
        `;
    })

}