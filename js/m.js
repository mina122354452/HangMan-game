let wordName;
let mainSeconds = 55;
let tokenSeconds;
let seconds;
let CurrentGameStatus;
let sArray;
let sWrong;
let wroteLetters = ["", "", "", "", ""];
let currentGameScore;
let points = 0;
let gameNumber = 0;
 
if (localStorage.getItem("points")) {
    points = parseInt(localStorage.getItem("points"))
}
if (localStorage.getItem("gameNumber")) {
    gameNumber = parseInt(localStorage.getItem("gameNumber"))
}
let rank = 'nope';
if (points <= 0) {
        rank = "nope"

    } else if (points <= 20) {
        rank = "Amateur"
    } else if (points <= 40) {
        rank = "HotShot"
    } else if (points <= 60) {
        rank = "Expert"
    } else if (points <= 80) {
        rank = "Champ"
    } else if (points <= 100) {
        rank = "Superstar"
    } else if (points >= 101) {
        rank = "Legend"
    };
let br = document.createElement("br");
let closeGame = document.querySelector(".i-con-c");
let mainUrl = "https://mina122354452.github.io/HangMan-game/index.html";
closeGame.onclick = function() {
    window.location.href = mainUrl;

};
class History {
    constructor(GameStatus, score, time, wrongTries) {
        this.i = GameStatus;
        this.u = score;
        this.s = time;
        this.y = wrongTries;
    }
    setLocalStorage() {
        window.localStorage.setItem(`historyGameNumber ${gameNumber}`, JSON.stringify({
            "GameStatus": this.i,
            "score": this.u,
            "time": this.s,
            "wrongTries": this.y,
        }))
    }
}


if (localStorage.getItem("Name")) {
    if (sessionStorage.getItem("status")) {
        document.querySelector(".info").style.display = "none";
        document.querySelector(".card").className = "card-2"
        document.querySelector("#d-span").innerHTML = `Hello ${localStorage.getItem("Name")}`;
        document.getElementById("dash").innerHTML = `whats up? I hope you are good, your points is ${points}, your rank is ${rank}, but you will be expert`
    } else {
        sessionStorage.setItem("status", true)
        document.querySelector(".the-name").innerHTML = localStorage.getItem("Name");
        let myText = `whats up? I hope you are good, your points is ${points}, your rank is ${rank}, but you will be expert`;

        let myPra = document.getElementById("dash");

        let i = 0;
        let myText1 = `Hello ${localStorage.getItem("Name")}`;
        let myPras = document.querySelector("#d-span");
        let u = 0;
        window.onload = function(e) {


            setTimeout(function() {

                if (myPras.innerHTML == '') {
                    let interval;
                    interval = setInterval(function() {
                        myPras.innerHTML += myText1[u];
                        u++;
                        if (u > myText1.length - 1) { clearInterval(interval); } else {
                            e.preventDefault();
                            console.log(myPras.innerHTML)
                        }
                    }, 55)
                } else {
                    e.preventDefault();
                    console.log(myPras.innerHTML)
                }


                setTimeout(function() {
                    if (myPra.innerHTML == '') {
                        let interval;

                        interval = setInterval(function() {

                            myPra.innerHTML += myText[i];
                            i++;

                            if (i > myText.length - 1) { clearInterval(interval); }

                        }, 75);
                    } else {
                        e.preventDefault();
                        console.log(myPra.innerHTML)
                    }
                }, 1000)



            }, 2000)
            setTimeout(function() {
                document.querySelector(".info").style.opacity = "0";
                document.querySelector(".card").style.marginTop = "-129px";

            }, 10000)
        };
    };
    if (points <= 0) {
        rank = "nope"

    } else if (points <= 20) {
        rank = "Amateur"
    } else if (points <= 40) {
        rank = "HotShot"
    } else if (points <= 60) {
        rank = "Expert"
    } else if (points <= 80) {
        rank = "Champ"
    } else if (points <= 100) {
        rank = "Superstar"
    } else if (points >= 101) {
        rank = "Legend"
    };
    if (rank == "nope") {
        document.querySelector(".rank-board").innerHTML = "Un ranked"

    } else if (rank == "Amateur") {
        document.querySelector(".rank-board").innerHTML = ""
        let img = document.createElement("img");
        let rankTxt = document.createElement("h2")
        let spanRange = document.createElement("span")
        img.className = "ima-rank-1";
        rankTxt.className = "txt-rank";
        spanRange.className = "span-rank"
        img.src = "img/1.png";
        rankTxt.innerHTML = "Amateur"
        spanRange.innerHTML = "Next rank HotShot"
        document.querySelector(".rank-board").appendChild(img)
        document.querySelector(".rank-board").appendChild(rankTxt)
        document.querySelector(".rank-board").appendChild(spanRange)

    } else if (rank == "HotShot") {
        document.querySelector(".rank-board").innerHTML = ""
        let img = document.createElement("img");
        let rankTxt = document.createElement("h2")
        let spanRange = document.createElement("span")
        img.className = "ima-rank-2";
        rankTxt.className = "txt-rank";
        spanRange.className = "span-rank"
        img.src = "img/2.png";
        rankTxt.innerHTML = "HotShot"
        spanRange.innerHTML = "Next rank Expert"
        document.querySelector(".rank-board").appendChild(img)
        document.querySelector(".rank-board").appendChild(rankTxt)
        document.querySelector(".rank-board").appendChild(spanRange)
    } else if (rank == "Expert") {
        document.querySelector(".rank-board").innerHTML = ""
        let img = document.createElement("img");
        let rankTxt = document.createElement("h2")
        let spanRange = document.createElement("span")
        img.className = "ima-rank-3";
        rankTxt.className = "txt-rank";
        spanRange.className = "span-rank"
        img.src = "img/3.png";
        rankTxt.innerHTML = "Expert"
        spanRange.innerHTML = "Next rank Champ"
        spanRange.style.left = "156px"
        document.querySelector(".rank-board").appendChild(img)
        document.querySelector(".rank-board").appendChild(rankTxt)
        document.querySelector(".rank-board").appendChild(spanRange)
    } else if (rank == "Champ") {
        document.querySelector(".rank-board").innerHTML = ""
        let img = document.createElement("img");
        let rankTxt = document.createElement("h2")
        let spanRange = document.createElement("span")
        img.className = "ima-rank-4";
        rankTxt.className = "txt-rank";
        spanRange.className = "span-rank"
        img.src = "img/4.png";
        rankTxt.innerHTML = "Champ"
        spanRange.innerHTML = "Next rank Superstar"
        spanRange.style.left = "154px"

        document.querySelector(".rank-board").appendChild(img)
        document.querySelector(".rank-board").appendChild(rankTxt)
        document.querySelector(".rank-board").appendChild(spanRange)
    } else if (rank == "Superstar") {
        document.querySelector(".rank-board").innerHTML = ""
        let img = document.createElement("img");
        let rankTxt = document.createElement("h2")
        let spanRange = document.createElement("span")
        img.className = "ima-rank-5";
        rankTxt.className = "txt-rank";
        spanRange.className = "span-rank"
        img.src = "img/5.png";
        rankTxt.innerHTML = "Superstar"
        spanRange.innerHTML = "Next rank Legend"
        spanRange.style.left = "139px"

        document.querySelector(".rank-board").appendChild(img)
        document.querySelector(".rank-board").appendChild(rankTxt)
        document.querySelector(".rank-board").appendChild(spanRange)
    } else if (rank == "Legend") {
        document.querySelector(".rank-board").innerHTML = ""
        let img = document.createElement("img");
        let rankTxt = document.createElement("h2")
        let spanRange = document.createElement("span")
        img.className = "ima-rank-6";
        rankTxt.className = "txt-rank";
        spanRange.className = "span-rank"
        img.src = "img/6.png";
        rankTxt.innerHTML = "Legend"
        spanRange.innerHTML = "Congratulation you finished Game"
        document.querySelector(".rank-board").appendChild(img)
        document.querySelector(".rank-board").appendChild(rankTxt)
        document.querySelector(".rank-board").appendChild(spanRange)
    };
    if (localStorage.getItem("timeTravel")) {
        if (document.querySelector(".no")) {
            document.querySelector(".ach-board").innerHTML = ""
            let pAch = document.createElement("p");
            let img = document.createElement("img");
            let div = document.createElement("div");

            pAch.className = "p-ach"
            img.className = "img-ach"
            pAch.innerHTML = "Time traveler";
            img.src = "img/time traveller.png"
            div.appendChild(img)
            div.appendChild(pAch)
            document.querySelector(".ach-board").appendChild(div);
        } else {
            let pAch = document.createElement("p");
            let img = document.createElement("img");
            let div = document.createElement("div");

            pAch.className = "p-ach"
            img.className = "img-ach"
            pAch.innerHTML = "Time traveler";
            img.src = "img/time traveller.png"
            div.appendChild(img)
            div.appendChild(pAch)
            document.querySelector(".ach-board").appendChild(div);
        };

    };
    if (localStorage.getItem("darkFight")) {
        if (document.querySelector(".no")) {
            document.querySelector(".ach-board").innerHTML = ""
            let pAch = document.createElement("p");
            let img = document.createElement("img");
            let div = document.createElement("div");
            pAch.className = "p-ach-2";
            img.className = "img-ach-2";
            pAch.innerHTML = "Dark Traveler";
            img.src = "img/dark figther.png";
            div.appendChild(img)
            div.appendChild(pAch)
            document.querySelector(".ach-board").appendChild(div);
        } else {
            let pAch = document.createElement("p");
            let img = document.createElement("img");
            let div = document.createElement("div");
            pAch.className = "p-ach-2";
            img.className = "img-ach-2";
            pAch.innerHTML = "Dark Traveler";
            img.src = "img/dark figther.png";
            div.appendChild(img)
            div.appendChild(pAch)
            document.querySelector(".ach-board").appendChild(div);
        }


    }
    if (window.localStorage.getItem(`historyGameNumber ${gameNumber}`)) {
        document.querySelector(".gam-board").remove()
        let table = document.createElement("table");
        let tbody = document.createElement("tbody");
        let idv = document.createElement("div")
        document.querySelector(".game-history").style.gridRow = "2/8";
        idv.className = "t-d-b"
        tbody.className = "tbody"
        table.className = "table-b"
        for (let i = 1; i <= gameNumber; i++) {
            let tr = document.createElement("tr");
            let tdn = document.createElement("td");
            let tds = document.createElement("td");
            let tdSc = document.createElement("td");
            let tdt = document.createElement("td");
            let tdw = document.createElement("td");
            let localH = JSON.parse(window.localStorage.getItem(`historyGameNumber ${i}`));
            tdn.innerHTML = `${i}`
            tds.innerHTML = `${localH.GameStatus}`
            tdSc.innerHTML = `${localH.score}`
            tdt.innerHTML = `${localH.time}`
            tdw.innerHTML = `${localH.wrongTries}`
            tdn.className = "td-1"
            tds.className = "td-2"
            tdSc.className = "td-3"
            tdt.className = "td-4"
            tdw.className = "td-5"
            tr.className = "tr-h-b"
            tr.appendChild(tdn)
            tr.appendChild(tds)
            tr.appendChild(tdSc)
            tr.appendChild(tdt)
            tr.appendChild(tdw)
            tbody.appendChild(tr)
        }
        table.appendChild(tbody)
        idv.appendChild(table)
        document.querySelector(".game-history").appendChild(idv)
    }

    let newGame = document.querySelector(".game-starter");
    newGame.onclick = function() {




        document.querySelector(".dash-con").style.display = "none";
        document.querySelector(".the-game").style.display = "block";
        let aSeconds,
            countDiv = document.querySelector('.s-ti'),
            secondPass = function secondPass(e) {

                'use strict';
                if (document.querySelector(".alert-overlay") || document.querySelector(".alert-overlay-w")) {
                    console.log("over")
                    clearInterval(countdown);
                    tokenSeconds = mainSeconds - seconds;
                    if (tokenSeconds <= 15) {
                        CurrentGameStatus = "Excellent";
                    } else if (tokenSeconds <= 20) {
                        CurrentGameStatus = "Good";
                    } else if (tokenSeconds <= 25) {
                        CurrentGameStatus = "Not bad";
                    }
                    // let win = new History("win", currentGameScore, tokenSeconds, sWrong);
                    // win.setLocalStorage();
                }
                let minutes = Math.floor(seconds / 60),
                    remSeconds = seconds % 60;
                e.innerHTML = minutes + ":" + remSeconds;
                if (seconds < 10) {
                    remSeconds = "0" + remSeconds
                };
                if (seconds > 0) {
                    seconds = seconds - 1;
                } else {
                    clearInterval(countdown);

                };
                if (document.querySelector(".alert-overlay") || document.querySelector(".alert-overlay-w")) {
                    tokenSeconds = mainSeconds - seconds

                    console.log("over")
                    clearInterval(countdown);
                    if (tokenSeconds <= 15) {
                        CurrentGameStatus = "Excellent";
                    } else if (tokenSeconds <= 20) {
                        CurrentGameStatus = "Good";
                    } else if (tokenSeconds <= 25) {
                        CurrentGameStatus = "Not bad";
                    }
                    // let win = new History("win", currentGameScore, tokenSeconds, sWrong);
                    // win.setLocalStorage();
                }
                aSeconds = seconds;
                if (aSeconds == 4) {
                    countDiv.classList.add("s-ti-a");
                    if (document.querySelector(".alert-overlay") || document.querySelector(".alert-overlay-w")) {
                        tokenSeconds = mainSeconds - seconds

                        console.log("over")
                        clearInterval(countdown);
                        if (tokenSeconds <= 15) {
                            CurrentGameStatus = "Excellent";
                        } else if (tokenSeconds <= 20) {
                            CurrentGameStatus = "Good";
                        } else if (tokenSeconds <= 25) {
                            CurrentGameStatus = "Not bad";
                        }
                        // let win = new History("win", currentGameScore, tokenSeconds, sWrong);
                        // win.setLocalStorage();
                    } else {
                        countDiv.classList.add("s-ti-a");
                    }
                } else if (aSeconds == 3) {
                    if (document.querySelector(".alert-overlay") || document.querySelector(".alert-overlay-w")) {
                        tokenSeconds = mainSeconds - seconds

                        console.log("over")
                        clearInterval(countdown);
                        if (tokenSeconds <= 15) {
                            CurrentGameStatus = "Excellent";
                        } else if (tokenSeconds <= 20) {
                            CurrentGameStatus = "Good";
                        } else if (tokenSeconds <= 25) {
                            CurrentGameStatus = "Not bad";
                        }
                        // let win = new History("win", currentGameScore, tokenSeconds, sWrong);
                        // win.setLocalStorage();
                    } else {

                        let div = document.createElement("div");
                        div.className = "time-f";
                        document.querySelector(".the-game").appendChild(div)
                        let seconds = 3,
                            countDiv = document.querySelector('.time-f'),
                            secondPass = function secondPass(e) {
                                'use strict';
                                let minutes = Math.floor(seconds / 60),
                                    remSeconds = seconds % 60;
                                countDiv.innerHTML = remSeconds;
                                if (seconds < 10) {
                                    remSeconds = "0" + remSeconds
                                };
                                if (seconds > 0) {
                                    seconds = seconds - 1;
                                } else {
                                    clearInterval(countdown);
                                };
                            },
                            countdown = setInterval(function() {
                                'use strict';
                                secondPass();


                            }, 1000);
                    }


                } else if (aSeconds == 2) {

                    document.querySelector('.s-ti').style.animationDuration = "1s";

                    if (document.querySelector(".alert-overlay") || document.querySelector(".alert-overlay-w")) {
                        console.log("over");
                        countdown.preventDefault()
                        clearInterval(countdown);
                        tokenSeconds = mainSeconds - seconds
                        if (tokenSeconds <= 15) {
                            CurrentGameStatus = "Excellent";
                        } else if (tokenSeconds <= 20) {
                            CurrentGameStatus = "Good";
                        } else if (tokenSeconds <= 25) {
                            CurrentGameStatus = "Not bad";
                        }


                    }
                } else if (aSeconds == 1) {
                    document.querySelector('.s-ti').style.animationDuration = "0.1s";
                    if (document.querySelector(".alert-overlay") || document.querySelector(".alert-overlay-w")) {
                        console.log("over");
                        clearInterval(countdown);
                        tokenSeconds = mainSeconds - seconds


                    }
                } else if (aSeconds == 0) {
                    if (document.querySelector(".alert-overlay") || document.querySelector(".alert-overlay-w")) {
                        console.log("over");
                        clearInterval(countdown);
                        tokenSeconds = mainSeconds - seconds
                        if (tokenSeconds <= 15) {
                            CurrentGameStatus = "Excellent";
                        } else if (tokenSeconds <= 20) {
                            CurrentGameStatus = "Good";
                        } else if (tokenSeconds <= 25) {
                            CurrentGameStatus = "Not bad";
                        }

                    } else {
                        const emptyLetterCount = wroteLetters.filter(letter => letter === "").length;

                        if (sWrong <= 2 && emptyLetterCount <= 2) {
                            currentGameScore = 10;
                        } else if (sWrong <= 4 && emptyLetterCount <= 4) {
                            return 5;
                        } else if (sWrong <= 6 && emptyLetterCount <= 6) {
                            currentGameScore = -5;
                        } else if (sWrong <= 8 && emptyLetterCount <= 8) {
                            currentGameScore = -10;
                        } else { currentGameScore = 0 }; // Default score if none of the conditions match



                        let divP = document.createElement("div");
                        let div = document.createElement("div");
                        let spanScore = document.createElement("span");
                        let spanNewGame = document.createElement("span");
                        let spanHome = document.createElement("span");
                        let divText = document.createTextNode(`Game over, The Word is ${wordName}`);
                        divP.className = "alert-overlay"
                        spanScore.innerHTML = `you got ${currentGameScore} points`;
                        spanHome.className = "sp-h-w"
                        spanNewGame.className = "sp-n-w";
                        spanNewGame.innerHTML = "new game"
                        spanHome.innerHTML = "Home"
                        spanScore.style.cssText = "font-size: 34px;display: block;color: #d7e5e7;"
                        div.appendChild(divText);
                        div.appendChild(spanScore)
                        div.appendChild(spanNewGame)
                        div.appendChild(spanHome)
                        divP.appendChild(div);
                        div.className = 'popup';
                        document.body.appendChild(divP);
                        document.querySelector(".the-game").style.pointerEvents = "none";
                        gameNumber++
                        localStorage.setItem("gameNumber", gameNumber);
                        let TimeLost = new History("Lost", currentGameScore, "full time", sWrong);
                        TimeLost.setLocalStorage()
                        if (currentGameScore !== undefined) {
                            points += currentGameScore
                            currentGameScore = undefined;
                        };
                        localStorage.setItem("points", points);

                        spanHome.onclick = function() {
                            window.location.href = mainUrl;

                        };
                        // edit
                        spanNewGame.onclick = function() {

                            const currentURL = new URL(window.location.href);
                            currentURL.searchParams.set('hideElements', 'true');
                            window.location.href = currentURL.toString();

                        };
                    }

                };
            },
            countdown = setInterval(function() {
                'use strict';
                if (document.querySelector(".alert-overlay") || document.querySelector(".alert-overlay-w")) {
                    console.log("over")
                    clearInterval(countdown);
                    tokenSeconds = mainSeconds - seconds
                    if (tokenSeconds <= 15) {
                        CurrentGameStatus = "Excellent";
                    } else if (tokenSeconds <= 20) {
                        CurrentGameStatus = "Good";
                    } else if (tokenSeconds <= 25) {
                        CurrentGameStatus = "Not bad";
                    }

                } else {
                    secondPass(countDiv);
                }

            }, 1000);



    };

} else {
    intro()
}

function intro() {
    let overLay = document.createElement("div");;
    let introAlert = document.createElement("div");
    let hr = document.createElement("hr");
    let headingAlert = document.createElement("h2");
    let textAlert = document.createElement("p");
    let inputName = document.createElement("input");
    let startGame = document.createElement("span");
    hr.className = "hr-a"

    introAlert.className = "alert";
    startGame.innerHTML = "next"
    headingAlert.className = "head-alert";
    textAlert.className = "text-alert";
    startGame.className = "start-game";
    startGame.style.opacity = "0";
    startGame.style.pointerEvents = "none";
    overLay.className = "alert-overlay";
    inputName.type = "text"
    introAlert.appendChild(headingAlert);
    introAlert.appendChild(hr);
    introAlert.appendChild(textAlert);
    introAlert.appendChild(inputName);
    introAlert.appendChild(startGame);
    overLay.appendChild(introAlert);
    document.body.appendChild(overLay);
    let headAlertTxt = "Hello There";
    let bodyAlertTxt = "Hello This is hang man game, it is about guess the word you have eight chance I hope you will love it";
    let i = 0;
    let t = 0;

    function typeEffect() {

        if (headingAlert.textContent == '') {
            var interval = setInterval(function() {

                headingAlert.innerHTML += headAlertTxt[i];
                i++;

                if (i > headAlertTxt.length - 1) { clearInterval(interval); }

            }, 80);
        } else {
            e.preventDefault();
        };

    }
    typeEffect()
    setTimeout(function(e) {
        if (textAlert.textContent == '') {
            var interval = setInterval(function() {

                textAlert.innerHTML += bodyAlertTxt[t];
                t++;

                if (t > bodyAlertTxt.length - 1) { clearInterval(interval); }

            }, 96);
        } else {
            e.preventDefault();
        };
    }, 2000);
    setTimeout(function() {
        startGame.style.opacity = "1";
        textAlert.style.marginBottom = "20px";
        startGame.style.pointerEvents = "all";


    }, 12000)
    startGame.onclick = function name() {
        startGame.remove();
        let okey = document.createElement("span");
        okey.className = "start-game";
        okey.style.opacity = "0"
        introAlert.appendChild(okey)

        okey.innerHTML = "Okey";
        let haText = 'Write your Name';
        let txText = 'Hello This is hang man game, What is your Name?';
        let s = 0;
        let h = 0;
        textAlert.style.marginBottom = "53px"

        function tNameType() {
            if (headingAlert.textContent == '') {
                var interval = setInterval(function() {

                    headingAlert.textContent += haText[s];
                    s++;

                    if (s > haText.length - 1) { clearInterval(interval); }

                }, 100);
            } else {
                headingAlert.innerHTML = "";
                var interval = setInterval(function() {

                    headingAlert.textContent += haText[s];
                    textAlert.innerHTML = "";

                    s++;

                    if (s > haText.length - 1) { clearInterval(interval); }

                }, 100)
            }
        }
        tNameType();
        setTimeout(function() {
            if (textAlert.textContent == '') {
                var interval = setInterval(function() {

                    textAlert.textContent += txText[h];
                    h++;

                    if (h > txText.length - 1) { clearInterval(interval); }

                }, 70);
            } else {
                textAlert.innerHTML = "";
                var interval = setInterval(function() {

                    textAlert.textContent += txText[h];
                    h++;

                    if (h > txText.length - 1) { clearInterval(interval); }

                }, 70);
            }
        }, 3000)

        headingAlert.style.height = "55px"

        overLay.style.backgroundColor = "rgba(0, 0, 0, .6)";

        okey.style.cssText = "text-align: center;background-color: #aedce2;width: 120px;height: 40px;transform: translate(259%, 8%);-webkit-transform: translate(259%, 8%);-moz-transform: translate(259%, 8%);-ms-transform: translate(259%, 8%);-o-transform: translate(259%, 8%);cursor: pointer;z-index: 10000000;";
        okey.style.opacity = "0";
        setTimeout(function() {
            inputName.style.display = "block";
            textAlert.style.marginBottom = "0px";

        }, 7000);
        inputName.placeholder = "Type your name";
        inputName.oninput = function() {
            okey.style.opacity = "1"
            if (document.getElementsByClassName("loader").length !== 0) {
                inputName.focus()
            } else {
                if (document.getElementsByClassName("f-c").length !== 0) {
                    document.querySelector(".f-c").remove();

                } else if (document.getElementsByClassName("t-c").length !== 0) {
                    document.querySelector(".t-c").remove();
                }
                let checkNameDiv = document.createElement("div");
                let checkNameSpan1 = document.createElement("span");
                let checkNameSpan2 = document.createElement("span");
                let checkNameSpan3 = document.createElement("span");
                let checkNameSpan4 = document.createElement("span");
                checkNameDiv.className = "loader";
                checkNameDiv.appendChild(checkNameSpan1)
                checkNameDiv.appendChild(checkNameSpan2)
                checkNameDiv.appendChild(checkNameSpan3)
                checkNameDiv.appendChild(checkNameSpan4)
                introAlert.appendChild(checkNameDiv);
                textAlert.style.height = "88px";
                textAlert.style.marginTop = "20px";
                textAlert.style.marginBottom = "0px";
                headingAlert.style.height = "61 px";
                inputName.style.height = "40px";
                okey.style.transform = "translate(259%,36%)";
                hr.style.marginTop = "10px";
                okey.style.pointerEvents = "none"
                okey.style.cursor = "no-drop"
                okey.style.setProperty("cursor", "no-drop", "important");

            }


        }
        inputName.onkeyup = function() {
            setTimeout(function() {
                if (document.getElementsByClassName("loader").length !== 0) {
                    document.querySelector(".loader").remove();
                }
                textAlert.style.height = "72px";
                textAlert.style.marginTop = "18px";
                okey.style.transform = "translate(259%,4%)"
                hr.style.marginTop = "0px";
                textAlert.style.marginTop = "3px";
                inputName.style.height = "52px"
                okey.style.cursor = "pointer"
                okey.style.pointerEvents = "all "
                textAlert.style.marginBottom = "0px";




            }, 2000)
        }
        inputName.onkeydown = function() {
            setTimeout(function() {
                let c;
                let a = Array.from(inputName.value);
                console.log()

                function check(...name) {
                    for (let i = 1; i < name.length; i++) {


                        if (name[i] !== name[i].toUpperCase()) {

                            b = true;
                        } else if (name[i] === name[i].toUpperCase()) {


                            c = false;
                        }
                    }
                }
                check(...a)
                if (inputName.value === '' || inputName.value === ' ' || inputName.value.length <= 2) {
                    if (document.getElementsByClassName("f-c").length !== 0) {
                        inputName.focus();
                    } else {
                        if (document.getElementsByClassName("t-c").length !== 0) {
                            document.querySelector(".t-c").remove();
                            let fCheck = document.createElement("i");
                            fCheck.classList.add("fa-solid", "fa-xmark", "fa-bounce", "fa-sm", "f-c");
                            fCheck.title = "please write your name";

                            introAlert.appendChild(fCheck);
                        } else if (document.getElementsByClassName("loader").length !== 0) {
                            document.querySelector(".loader").remove();
                            let fCheck = document.createElement("i");
                            fCheck.classList.add("fa-solid", "fa-xmark", "fa-bounce", "fa-sm", "f-c");
                            fCheck.title = "please write your name";

                            introAlert.appendChild(fCheck);
                            textAlert.style.height = "72px";
                            textAlert.style.marginTop = "18px";
                            okey.style.transform = "translate(259%,0%)"
                            hr.style.marginTop = "0px";
                            textAlert.style.marginTop = "3px";
                            inputName.style.height = "52px"
                            okey.style.cursor = "pointer"
                            okey.style.pointerEvents = "all "
                            textAlert.style.marginBottom = "0px";
                        } else {
                            let fCheck = document.createElement("i");
                            fCheck.classList.add("fa-solid", "fa-xmark", "fa-bounce", "fa-sm", "f-c");
                            fCheck.title = "please write your name";

                            introAlert.appendChild(fCheck)
                        }

                    }


                } else if (inputName.value[0] !== inputName.value[0].toUpperCase()) {
                    if (document.getElementsByClassName("f-c").length !== 0) {
                        inputName.focus();

                    } else {
                        if (document.getElementsByClassName("t-c").length !== 0) {
                            document.querySelector(".t-c").remove();
                            let fCheck = document.createElement("i");
                            fCheck.classList.add("fa-solid", "fa-xmark", "fa-bounce", "fa-sm", "f-c");
                            fCheck.title = "please write first character uppercase";

                            introAlert.appendChild(fCheck)
                        } else if (document.getElementsByClassName("loader").length !== 0) {
                            document.querySelector(".loader").remove();
                            let fCheck = document.createElement("i");
                            fCheck.classList.add("fa-solid", "fa-xmark", "fa-bounce", "fa-sm", "f-c");
                            fCheck.title = "please write first character uppercase";

                            introAlert.appendChild(fCheck);
                            textAlert.style.height = "72px";
                            textAlert.style.marginTop = "18px";
                            okey.style.transform = "translate(259%,0%)"
                            hr.style.marginTop = "0px";
                            textAlert.style.marginTop = "3px";
                            inputName.style.height = "52px"
                            okey.style.cursor = "pointer"
                            okey.style.pointerEvents = "all "
                            textAlert.style.marginBottom = "0px";
                        } else {
                            let fCheck = document.createElement("i");
                            fCheck.classList.add("fa-solid", "fa-xmark", "fa-bounce", "fa-sm", "f-c");
                            fCheck.title = "please write first character uppercase";

                            introAlert.appendChild(fCheck)
                        }
                    }
                } else if (c === false) {
                    if (document.getElementsByClassName("f-c").length !== 0) {
                        inputName.focus();


                    } else {
                        if (document.getElementsByClassName("t-c").length !== 0) {
                            document.querySelector(".t-c").remove();
                            let fCheck = document.createElement("i");
                            fCheck.classList.add("fa-solid", "fa-xmark", "fa-bounce", "fa-sm", "f-c");
                            fCheck.title = "please write just first character uppercase";

                            introAlert.appendChild(fCheck)
                        } else if (document.getElementsByClassName("loader").length !== 0) {
                            document.querySelector(".loader").remove();
                            let fCheck = document.createElement("i");
                            fCheck.classList.add("fa-solid", "fa-xmark", "fa-bounce", "fa-sm", "f-c");
                            fCheck.title = "please write just first character uppercase";

                            introAlert.appendChild(fCheck);
                            textAlert.style.height = "72px";
                            textAlert.style.marginTop = "18px";
                            okey.style.transform = "translate(259%,0%)"
                            hr.style.marginTop = "0px";
                            textAlert.style.marginTop = "3px";
                            inputName.style.height = "52px"
                            okey.style.cursor = "pointer"
                            okey.style.pointerEvents = "all "
                            textAlert.style.marginBottom = "0px";
                        } else {
                            let fCheck = document.createElement("i");
                            fCheck.classList.add("fa-solid", "fa-xmark", "fa-bounce", "fa-sm", "f-c");
                            fCheck.title = "please write just first character uppercase";

                            introAlert.appendChild(fCheck)
                        }
                    }
                } else {
                    if (document.getElementsByClassName("t-c").length !== 0) {
                        inputName.focus();

                    } else {
                        if (document.getElementsByClassName("f-c").length !== 0) {
                            document.querySelector(".f-c").remove();
                            let tCheck = document.createElement("i");
                            tCheck.classList.add("fa-solid", "fa-check", "fa-shake", "fa-sm", "t-c");
                            introAlert.appendChild(tCheck)
                        } else if (document.getElementsByClassName("loader").length !== 0) {
                            document.querySelector(".loader").remove();
                            let tCheck = document.createElement("i");
                            tCheck.classList.add("fa-solid", "fa-check", "fa-shake", "fa-sm", "t-c");
                            introAlert.appendChild(tCheck)
                        } else if (document.getElementsByClassName("er").length !== 0) {
                            document.querySelector(".er").remove();
                            let tCheck = document.createElement("i");
                            tCheck.classList.add("fa-solid", "fa-check", "fa-shake", "fa-sm", "t-c");
                            introAlert.appendChild(tCheck)
                        } else {
                            let tCheck = document.createElement("i");
                            tCheck.classList.add("fa-solid", "fa-check", "fa-shake", "fa-sm", "t-c");
                            introAlert.appendChild(tCheck)
                        }

                    }


                }


            }, 2100)

        }




        okey.onclick = function() {

            let b;
            let c;
            let a = Array.from(inputName.value);
            console.log()

            function check(...name) {
                for (let i = 1; i < name.length; i++) {


                    if (name[i] !== name[i].toUpperCase()) {

                        b = true;
                    } else if (name[i] === name[i].toUpperCase()) {


                        c = false;
                    }
                }
            }
            check(...a)
            if (inputName.value === '' || inputName.value === ' ' || inputName.value.length <= 2) {
                if (document.getElementsByClassName("er").length !== 0) {
                    inputName.focus();
                    document.querySelector(".er").remove();
                    let emptyError = document.createElement("span");
                    emptyError.textContent = "please write your name";
                    emptyError.className = "er";
                    inputName.after(emptyError);
                    okey.style.cssText = "text-align: center;background-color: #aedce2;width: 120px;height: 40px;transform: translate(259%, 9%);-webkit-transform: translate(259%, 9%);-moz-transform: translate(259%, 9%);-ms-transform: translate(259%, 9%);-o-transform: translate(259%, 9%);cursor: pointer;z-index: 10000000;";
                } else {
                    let emptyError = document.createElement("span");
                    emptyError.textContent = "please write your name";
                    emptyError.className = "er";
                    inputName.after(emptyError);
                    okey.style.cssText = "text-align: center;background-color: #aedce2;width: 120px;height: 40px;transform: translate(259%, 9%);-webkit-transform: translate(259%, 9%);-moz-transform: translate(259%, 9%);-ms-transform: translate(259%, 9%);-o-transform: translate(259%, 9%);cursor: pointer;z-index: 10000000;";
                }


            } else if (inputName.value[0] !== inputName.value[0].toUpperCase()) {
                if (document.getElementsByClassName("er").length !== 0) {
                    inputName.focus();
                    document.querySelector(".er").remove();
                    let emptyFirst = document.createElement("span");
                    emptyFirst.textContent = "please write first character uppercase";
                    emptyFirst.className = "er";
                    inputName.after(emptyFirst);
                    okey.style.cssText = "text-align: center;background-color: #aedce2;width: 120px;height: 40px;transform: translate(259%, 9%);-webkit-transform: translate(259%, 9%);-moz-transform: translate(259%, 9%);-ms-transform: translate(259%, 9%);-o-transform: translate(259%, 9%);cursor: pointer;z-index: 10000000;";


                } else {
                    let emptyFirst = document.createElement("span");
                    emptyFirst.textContent = "please write first character uppercase";
                    emptyFirst.className = "er";
                    9
                    inputName.after(emptyFirst);
                    okey.style.cssText = "text-align: center;background-color: #aedce2;width: 120px;height: 40px;transform: translate(259%, 9%);-webkit-transform: translate(259%, 9%);-moz-transform: translate(259%, 9%);-ms-transform: translate(259%, 9%);-o-transform: translate(259%, 9%);cursor: pointer;z-index: 10000000;";
                }
            } else if (c === false) {
                if (document.getElementsByClassName("er").length !== 0) {
                    inputName.focus();
                    document.querySelector(".er").remove();
                    let emptyFirst = document.createElement("span");
                    emptyFirst.textContent = "please write just first character uppercase";
                    emptyFirst.className = "er";
                    inputName.after(emptyFirst);
                    okey.style.cssText = "text-align: center;background-color: #aedce2;width: 120px;height: 40px;transform: translate(259%, 9%);-webkit-transform: translate(259%, 9%);-moz-transform: translate(259%, 9%);-ms-transform: translate(259%, 9%);-o-transform: translate(259%, 9%);cursor: pointer;z-index: 10000000;";


                } else {
                    let emptyFirst = document.createElement("span");
                    emptyFirst.textContent = "please write just first character uppercase";
                    emptyFirst.className = "er";
                    inputName.after(emptyFirst);
                    okey.style.cssText = "text-align: center;background-color: #aedce2;width: 120px;height: 40px;transform: translate(259%, 27%);-webkit-transform: translate(259%, 27%);-moz-transform: translate(259%, 27%);-ms-transform: translate(259%, 27%);-o-transform: translate(259%, 127);cursor: pointer;z-index: 10000000;";
                }
            } else {
                localStorage.setItem("Name", inputName.value);
                location.reload()
            }
        }
    }
}



























const letters = "abcdefghijklmnopqrstuvwxyz";
let lettersArray = Array.from(letters),
    lettersContainer = document.querySelector(".letters");
lettersArray.forEach(letter => {
    let span = document.createElement("span"),
        theLetter = document.createTextNode(letter);
    span.appendChild(theLetter);
    span.className = 'letter-box';
    lettersContainer.appendChild(span)
});
// const words = {
//     programming: ["php", "javascript", "go", "scala", "fortran", "r", "mysql", "python"],
//     movies: ["Prestige", "Inception", "Parasite", "Interstellar", "Whiplash", "Memento", "Coco", "Up"],
//     famousPeople: ["Albert Einstein", "Hitchcock", "Alexander", "Cleopatra", "Mahatma Ghandi"],
//     countries: ["Syria", "Palestine", "Yemen", "Egypt", "Bahrain", "Qatar"]
// };
fetch('https://mina122354452.github.io/HangMan-game/js.json')
    .then(response => response.json())
    .then(data => {

        const words = data;
        let allKeys = Object.keys(words);
        let randomPropNumber = Math.floor(Math.random() * allKeys.length);
        let randomPropName = allKeys[randomPropNumber],
            randomPropValue = words[randomPropName],
            randomValueNumber = Math.floor(Math.random() * randomPropValue.length),
            randomValueValue = randomPropValue[randomValueNumber];
        console.log(randomValueValue);
        wordName = randomValueValue;
        sArray = Array.from(randomValueValue.toLowerCase());
        document.querySelector(".game-info .category span").innerHTML = randomPropName;
        let lettersGuessContainer = document.querySelector(".letters-guess");
        let lettersAndSpace = Array.from(randomValueValue);
        lettersAndSpace.forEach(letter => {
            let emptySpan = document.createElement("span");
            if (letter === ' ') {
                emptySpan.className = 'with-space';
            };
            lettersGuessContainer.appendChild(emptySpan);

        });
        // for (let i = 0; i <= lettersAndSpace.length; i++) {
        //     let emptySpan = document.createElement("span");
        //     if (i === ' ') {
        //         emptySpan.className = 'with-space';
        //     };
        //     lettersGuessContainer.appendChild(emptySpan);

        // }

        let guessSpans = document.querySelectorAll(".letters-guess span");
        let wrongAttempts = 0;
        let spanTries = document.querySelector(".s-t");
        let theDraw = document.querySelector(".hangman-draw");
        document.addEventListener("click", (e) => {
            let theStatus = false;

            if (e.target.className === 'letter-box') {
                e.target.classList.add("clicked");
                let theClickedLetter = e.target.innerHTML.toLowerCase(),
                    theChosenValue = Array.from(randomValueValue.toLowerCase());

                theChosenValue.forEach((wordLetter, wordIndex) => {
                    if (theClickedLetter == wordLetter) {
                        theStatus = true;

                        guessSpans.forEach((span, spanIndex) => {
                            if (wordIndex == spanIndex) {
                                span.innerHTML = theClickedLetter;

                            }
                        });

                    }
                })
                let chArray = theChosenValue;
                let jj = Array.from(document.querySelectorAll(".letters-guess span"));
                let arc = [];
                for (let i = 0; i < jj.length; i++) {
                    arc[i] = jj[i].innerHTML;
                    if (chArray[i] === ' ') {
                        chArray[i] = '';


                    }
                };
                wroteLetters = arc

                if (arc.join() === chArray.join()) {

                    let overLay = document.createElement("div");;
                    let introAlert = document.createElement("div");
                    let hr = document.createElement("hr");
                    let headingAlert = document.createElement("h2");
                    let textAlert = document.createElement("p");
                    let startGame = document.createElement("span");
                    let homeGame = document.createElement("span");
                    let spanTime = document.createElement("span");
                    let spanWrong = document.createElement("span");
                    let counterH1 = document.createElement("h1")
                    let counterH1W = document.createElement("h1");
                    let pointsTxt = document.createElement("span");
                    let counterH1P = document.createElement("h1");

                    counterH1P.className = "counter-p"
                    pointsTxt.className = "points-txt"
                    counterH1W.className = "counter-w"
                    counterH1.className = "counter"
                    spanTime.innerHTML = "Time Spent";
                    spanWrong.innerHTML = "Wrong Tries";
                    spanTime.className = "a-s-t";
                    spanWrong.className = "a-s-w";
                    hr.className = "hr-a-w";
                    introAlert.className = "alert-w";
                    startGame.innerHTML = "new game";
                    homeGame.innerHTML = "Home game";
                    headingAlert.className = "head-alert-w";
                    textAlert.className = "text-alert-w";
                    startGame.className = "start-game-w";
                    startGame.style.opacity = "0";
                    homeGame.className = "home-game"
                    startGame.style.pointerEvents = "none";
                    overLay.className = "alert-overlay-w";
                    pointsTxt.innerHTML = "your Points"
                    introAlert.appendChild(headingAlert);
                    introAlert.appendChild(hr);
                    introAlert.appendChild(textAlert);
                    setTimeout(function() {

                        if (tokenSeconds <= 10) {
                            currentGameScore = 40;
                        } else if (tokenSeconds <= 15) {
                            currentGameScore = 30;
                        } else if (tokenSeconds <= 23) {
                            currentGameScore = 20;
                        } else if (tokenSeconds <= 27) {
                            currentGameScore = 10;
                        }


                        counterH1.setAttribute("data-count", tokenSeconds)

                        introAlert.appendChild(counterH1)
                        const counters = document.querySelector(".counter");
                        let initial_count = 0;
                        const final_count = counters.dataset.count;

                        const counting = setInterval(updateCounting, 60);



                        function updateCounting() {
                            if (final_count == 0) {
                                initial_count = 0;
                                counters.innerHTML = initial_count

                            } else {
                                initial_count = initial_count + 1;
                                counters.innerHTML = initial_count
                            };
                            if (initial_count >= final_count) {
                                clearInterval(counting)
                            };
                        }
                    }, 3067);
                    setTimeout(function() {
                        counterH1W.setAttribute("data-count", wrongAttempts)

                        introAlert.appendChild(counterH1W)
                        const counters = document.querySelector(".counter-w");
                        let initial_count = 0;
                        const final_count = counters.dataset.count;

                        const counting = setInterval(updateCounting, 60);



                        function updateCounting() {
                            let win = new History("win", currentGameScore, tokenSeconds, sWrong);
                            win.setLocalStorage();
                            if (final_count == 0) {
                                initial_count = 0;
                                counters.innerHTML = initial_count

                            } else {
                                initial_count = initial_count + 1;
                                counters.innerHTML = initial_count
                            };

                            if (initial_count >= final_count) {
                                clearInterval(counting)
                            };
                        }
                    }, 4000);
                    setTimeout(function() {

                        counterH1P.setAttribute("data-count", currentGameScore)

                        introAlert.appendChild(counterH1P)
                        const counters = document.querySelector(".counter-p");
                        let initial_count = 0;
                        const final_count = counters.dataset.count;

                        const counting = setInterval(updateCountingv, 40);



                        function updateCountingv() {
                            if (final_count == 0) {
                                initial_count = 0;
                                counters.innerHTML = initial_count

                            } else {
                                initial_count = initial_count + 1;
                                counters.innerHTML = initial_count
                            };

                            if (initial_count >= final_count) {
                                clearInterval(counting)
                            };
                        }

                        if (currentGameScore !== undefined) {
                            points += currentGameScore;
                            currentGameScore = undefined;
                        }
                        localStorage.setItem("points", points)

                    }, 4900)

                    introAlert.appendChild(spanTime);
                    introAlert.appendChild(spanWrong);
                    introAlert.appendChild(pointsTxt)
                    introAlert.appendChild(startGame);
                    introAlert.appendChild(homeGame);
                    overLay.appendChild(introAlert);
                    document.body.appendChild(overLay);

                    let headAlertTxt = "you win!";
                    let bodyAlertTxt = `${tokenSeconds <= 15 ? "Excellent" : "Good"} Game, `;
                    let i = 0;
                    let t = 0;




                    function typeEffect() {

                        if (headingAlert.textContent == '') {
                            var interval = setInterval(function() {

                                headingAlert.innerHTML += headAlertTxt[i];
                                i++;

                                if (i > headAlertTxt.length - 1) { clearInterval(interval); }

                            }, 50);
                        } else {
                            e.preventDefault();
                        };

                    };

                    typeEffect()


                    setTimeout(function() {
                        spanTime.style.opacity = "1";
                    }, 2000);
                    setTimeout(function() {
                        spanWrong.style.opacity = "1";
                    }, 2500);
                    setTimeout(function() {
                        pointsTxt.style.opacity = "1";
                    }, 4500)
                    setTimeout(function(e) {
                        if (textAlert.textContent == '') {
                            var interval = setInterval(function() {

                                textAlert.innerHTML += bodyAlertTxt[t];
                                t++;

                                if (t > bodyAlertTxt.length - 1) { clearInterval(interval); }

                            }, 76);
                        } else {
                            e.preventDefault();
                        };
                    }, 800);
                    setTimeout(function() {
                        startGame.style.opacity = "1";
                        textAlert.style.marginBottom = "20px";
                        startGame.style.pointerEvents = "all";
                        homeGame.style.pointerEvents = "all";
                        homeGame.style.opacity = "1";

                    }, 10500);

                    homeGame.onclick = function() {
                        window.location.href = mainUrl;

                    };

                    // edit
                    startGame.onclick = function() {
                        // Set a query parameter to indicate the need to hide elements after reload
                        window.location.href = window.location.href + "?hideElements=true";
                        // Reload the page
                        // location.reload();
                    };
                    // let win = new History("win", currentGameScore, tokenSeconds, sWrong);
                    // win.setLocalStorage();
                    if (currentGameScore !== undefined) {
                        points += currentGameScore;
                        currentGameScore = undefined;
                    }
                    localStorage.setItem("points", points)
                    gameNumber++
                    localStorage.setItem("gameNumber", gameNumber);

                    // tokenSeconds < 3 && sArray.length >= 6
                    if (tokenSeconds < 3 && sArray.length >= 6) {
                        let pAch = document.createElement("p");
                        let img = document.createElement("img");
                        let div = document.createElement("div");

                        pAch.className = "p-ach"
                        img.className = "img-ach"
                        pAch.innerHTML = "Time traveler";
                        img.src = "img/time traveller.png"
                        div.appendChild(img)
                        div.appendChild(pAch)
                        document.querySelector(".ach-board").appendChild(div);
                        window.localStorage.setItem("timeTravel", "true")
                    } else if (tokenSeconds < 5 && sArray.length >= 10) {
                        let pAch = document.createElement("p");
                        let img = document.createElement("img");
                        let div = document.createElement("div");
                        pAch.className = "p-ach-2";
                        img.className = "img-ach-2";
                        pAch.innerHTML = "Dark Traveler";
                        img.src = "img/dark figther.png";
                        div.appendChild(img)
                        div.appendChild(pAch)
                        document.querySelector(".ach-board").appendChild(div);
                        window.localStorage.setItem("darkFight", "true");

                    } else {
                        document.querySelector(".ach-board").innerHTML = "No Achievements";
                    }
                }
                if (theStatus !== true) {

                    wrongAttempts++;
                    sWrong = wrongAttempts;

                    spanTries.innerHTML = wrongAttempts
                    if (wrongAttempts == 5) {
                        spanTries.classList.add("s-t-a");
                        document.querySelector(".alert-text-2").innerHTML = "you have 3 chances";
                        document.querySelector(".container-2").style.opacity = "1";
                    } else if (wrongAttempts == 6) {
                        spanTries.style.animationDuration = "1s";
                        document.querySelector(".alert-text-2").innerHTML = "you have 2 chances";
                        document.querySelector(".container-2").style.opacity = "1";
                    } else if (wrongAttempts == 7) {
                        spanTries.style.animationDuration = "0.1s";
                        document.querySelector(".alert-text-2").innerHTML = "you have 1 chances";
                        document.querySelector(".container-2").style.opacity = "1";
                    }

                    theDraw.classList.add(`wrong-${wrongAttempts}`);
                    document.getElementById("fail").play();
                    if (wrongAttempts === 8) {
                        endGame();
                        lettersContainer.classList.add("finished")



                    }
                } else {
                    document.getElementById("success").play();

                }
            };
            console.log(theStatus)


        });

        if (sArray.length <= 3) {
            mainSeconds = 10
        } else if (sArray.length <= 6) {
            mainSeconds = 25
        } else if (sArray.length <= 9) {
            mainSeconds = 32

        } else if (sArray.length <= 12) {
            mainSeconds = 40

        } else if (sArray.length <= 15) {
            mainSeconds = 45

        }
        seconds = mainSeconds;
        sWrong = wrongAttempts;
        // edit

        function endGame() {
            const emptyLetterCount = wroteLetters.filter(letter => letter === "").length;

            if (tokenSeconds <= 5 && emptyLetterCount <= 2) {
                currentGameScore = 10;
            } else if (tokenSeconds <= 10 && emptyLetterCount <= 4) {
                return 5;
            } else if (tokenSeconds <= 14 && emptyLetterCount <= 6) {
                currentGameScore = -5;
            } else if (tokenSeconds <= 19 && emptyLetterCount <= 8) {
                currentGameScore = -10;
            } else { currentGameScore = 0 };

            // Default score if none of the conditions match
            let divP = document.createElement("div");
            let div = document.createElement("div");
            let spanScore = document.createElement("span");
            let spanNewGame = document.createElement("span");
            let spanHome = document.createElement("span");
            let divText = document.createTextNode(`Game over, The Word is ${wordName}`);
            divP.className = "alert-overlay"
            spanScore.innerHTML = `you got ${currentGameScore} points`;
            spanHome.className = "sp-h-w"
            spanNewGame.className = "sp-n-w";
            spanNewGame.innerHTML = "new game"
            spanHome.innerHTML = "Home"
            spanScore.style.cssText = "font-size: 34px;display: block;color: #d7e5e7;"
            div.appendChild(divText);
            div.appendChild(spanScore)
            div.appendChild(spanNewGame)
            div.appendChild(spanHome)
            divP.appendChild(div);
            div.className = 'popup';
            document.body.appendChild(divP);
            document.querySelector(".the-game").style.pointerEvents = "none";

            setTimeout(function name(params) {
                gameNumber++
                localStorage.setItem("gameNumber", gameNumber);
                let wrongLost = new History("Lost", currentGameScore, tokenSeconds, `all chance: ${sWrong}`);
                console.log(tokenSeconds)
                wrongLost.setLocalStorage();
                if (currentGameScore !== undefined) {
                    points += currentGameScore
                    currentGameScore = undefined;
                }
                localStorage.setItem("points", points);
            }, 2000)
            spanHome.onclick = function() {
                window.location.href = mainUrl;

            };


            // edit
            spanNewGame.onclick = function() {

                const currentURL = new URL(window.location.href);
                currentURL.searchParams.set('hideElements', 'true');
                window.location.href = currentURL.toString();

            };
        }
    })
    .catch(error => console.error(error));


document.addEventListener("DOMContentLoaded", function() {

    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());

    if (params.hideElements === "true") {

        document.querySelector(".dash-con").style.display = "none";
        document.querySelector(".the-game").style.display = "block";
        let aSeconds,
            countDiv = document.querySelector('.s-ti'),
            secondPass = function secondPass(e) {

                'use strict';
                if (document.querySelector(".alert-overlay") || document.querySelector(".alert-overlay-w")) {
                    console.log("over")
                    clearInterval(countdown);
                    tokenSeconds = mainSeconds - seconds
                }
                let minutes = Math.floor(seconds / 60),
                    remSeconds = seconds % 60;
                e.innerHTML = minutes + ":" + remSeconds;
                if (seconds < 10) {
                    remSeconds = "0" + remSeconds
                };
                if (seconds > 0) {
                    seconds = seconds - 1;
                } else {
                    clearInterval(countdown);

                };
                if (document.querySelector(".alert-overlay") || document.querySelector(".alert-overlay-w")) {
                    tokenSeconds = mainSeconds - seconds

                    console.log("over")
                    clearInterval(countdown);
                }
                aSeconds = seconds;
                if (aSeconds == 4) {
                    countDiv.classList.add("s-ti-a");
                    if (document.querySelector(".alert-overlay") || document.querySelector(".alert-overlay-w")) {
                        tokenSeconds = mainSeconds - seconds

                        console.log("over")
                        clearInterval(countdown);
                    } else {
                        countDiv.classList.add("s-ti-a");
                    }
                } else if (aSeconds == 3) {
                    if (document.querySelector(".alert-overlay") || document.querySelector(".alert-overlay-w")) {
                        tokenSeconds = mainSeconds - seconds

                        console.log("over")
                        clearInterval(countdown);
                    } else {

                        let div = document.createElement("div");
                        div.className = "time-f";
                        document.querySelector(".the-game").appendChild(div)
                        let seconds = 3,
                            countDiv = document.querySelector('.time-f'),
                            secondPass = function secondPass(e) {
                                'use strict';
                                let minutes = Math.floor(seconds / 60),
                                    remSeconds = seconds % 60;
                                countDiv.innerHTML = remSeconds;
                                if (seconds < 10) {
                                    remSeconds = "0" + remSeconds
                                };
                                if (seconds > 0) {
                                    seconds = seconds - 1;
                                } else {
                                    clearInterval(countdown);
                                };
                            },
                            countdown = setInterval(function() {
                                'use strict';
                                secondPass();
                            }, 1000);
                    }


                } else if (aSeconds == 2) {

                    document.querySelector('.s-ti').style.animationDuration = "1s";

                    if (document.querySelector(".alert-overlay") || document.querySelector(".alert-overlay-w")) {
                        console.log("over");
                        countdown.preventDefault()
                        clearInterval(countdown);
                        tokenSeconds = mainSeconds - seconds



                    }
                } else if (aSeconds == 1) {
                    document.querySelector('.s-ti').style.animationDuration = "0.1s";
                    if (document.querySelector(".alert-overlay") || document.querySelector(".alert-overlay-w")) {
                        console.log("over");
                        clearInterval(countdown);
                        tokenSeconds = mainSeconds - seconds



                    }
                } else if (aSeconds == 0) {
                    if (document.querySelector(".alert-overlay") || document.querySelector(".alert-overlay-w")) {
                        console.log("over");
                        clearInterval(countdown);
                        tokenSeconds = mainSeconds - seconds



                    } else {
                        const emptyLetterCount = wroteLetters.filter(letter => letter === "").length;

                        if (sWrong <= 2 && emptyLetterCount <= 2) {
                            currentGameScore = 10;
                        } else if (sWrong <= 4 && emptyLetterCount <= 4) {
                            return 5;
                        } else if (sWrong <= 6 && emptyLetterCount <= 6) {
                            currentGameScore = -5;
                        } else if (sWrong <= 8 && emptyLetterCount <= 8) {
                            currentGameScore = -10;
                        } else { currentGameScore = 0 };
                        let divP = document.createElement("div");
                        let div = document.createElement("div");
                        let spanScore = document.createElement("span");
                        let spanNewGame = document.createElement("span");
                        let spanHome = document.createElement("span");
                        let divText = document.createTextNode(`Game over, The Word is ${wordName}`);
                        divP.className = "alert-overlay"
                        spanScore.innerHTML = `you got ${currentGameScore} points`;
                        spanHome.className = "sp-h-w"
                        spanNewGame.className = "sp-n-w";
                        spanNewGame.innerHTML = "new game"
                        spanHome.innerHTML = "Home"
                        spanScore.style.cssText = "font-size: 34px;display: block;color: #d7e5e7;"
                        div.appendChild(divText);
                        div.appendChild(spanScore)
                        div.appendChild(spanNewGame)
                        div.appendChild(spanHome)
                        divP.appendChild(div);
                        div.className = 'popup';
                        document.body.appendChild(divP);
                        document.querySelector(".the-game").style.pointerEvents = "none";
                        gameNumber++
                        localStorage.setItem("gameNumber", gameNumber);
                        let TimeLost = new History("Lost", currentGameScore, "full time", sWrong);
                        TimeLost.setLocalStorage()
                        spanHome.onclick = function() {
                            window.location.href = mainUrl;

                        };
                        if (currentGameScore !== undefined) {
                            points += currentGameScore
                            currentGameScore = undefined;
                        }
                        localStorage.setItem("points", points)

                        // edit
                        spanNewGame.onclick = function() {

                            const currentURL = new URL(window.location.href);
                            currentURL.searchParams.set('hideElements', 'true');
                            window.location.href = currentURL.toString();

                        };
                    }

                }
            },
            countdown = setInterval(function() {
                'use strict';
                if (document.querySelector(".alert-overlay") || document.querySelector(".alert-overlay-w")) {
                    console.log("over")
                    clearInterval(countdown);
                    tokenSeconds = mainSeconds - seconds

                } else {
                    secondPass(countDiv);
                }

            }, 1000);
    }


});
