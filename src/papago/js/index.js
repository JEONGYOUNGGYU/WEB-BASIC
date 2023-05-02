const brandLogo = document.querySelector(".brand-logo-border")

brandLogo.onclick = () => {
    // alert("로고 클릭 됨.")

    // 방법1
    // location.href = "https://papago.naver.com";
    // 값지정, 뒤로가기버튼O


    //방법2
    // location.replace("https://papago.naver.com");
    // replace() <- 함수, 뒤로가기버튼X

    location.href="http://127.0.0.1:5500/src/papago/papago.html";
}           

const convertButton = document.querySelector(".article-footer button")

convertButton.onclick = () => {
    // console.log("버튼 클릭")

    const textarea = document.querySelector(".article-body-textarea textarea");
    // alert(textarea.value);

    const pre = document.querySelector(".article-body-right pre");
    pre.textContent = textarea.value;

}

    const abt = document.querySelector(".article-body-textarea textarea");
    const abrPre = document.querySelector(".article-body-right pre");

    abt.onkeyup = () => {
        abrPre.textContent = abt.value;
    }


    // http/https 를 적지 않아도 기능동작가능
    const webUrl = document.querySelector("#web-url");
    const btnUrl = document.querySelector(".button-url button");

    btnUrl.onclick = () => {
        let protocols = new Array();
        protocols.push("http://");
        protocols.push("https://");

        console.log(protocols);
        for(let i = 0; i < protocols.length; i++){
            if(webUrl.value.includes(protocols[i])){
                location.href = webUrl.value;
                return; //리턴으로 빠져 나와서 맨 마지막 문장 실행
            }
        }

        location.href = "https://" + webUrl.value
    }
    

    webUrl.onkeypress = () => {
        if(window.event.keyCode == 13) {
            btnUrl.onclick();
        }
    }






























