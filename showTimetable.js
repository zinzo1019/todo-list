const plusButton = document.getElementById('plusButton');
const divTag = document.getElementById('divTag');

var plusBtnCheck = 0; 

plusButton.addEventListener('click', () => {
    if (plusBtnCheck == 0) {
        divTag.innerHTML = '<div id="createTimetable">' + 
        // '<table class="createTable">' + 
            // '<field/set>' +
                '<p>Create Timetable</p>' +
                '<ul>' +
                    '<li>' +
                        '<label for="subject">subject</label>' +
                        '<input type="text" id="subject" autocomplete="off" autofocus="autofocus" required="required" placeholder="자바스크립트 활용" class="font">' +
                    '</li>' +
                    '<li>' +
                        '<label for="day">day</label>' +
                        '<select class="font" id="day">' +
                            '<option value="mon">Monday</option>' +
                            '<option value="tue">Tuesday</option>' +
                            '<option value="wed">Wednesday</option>' +
                            '<option value="thu">Thursday</option>' +
                            '<option value="fri">Friday</option>' +
                        '</select>' +
                    '</li>' +
                    '<li>' +
                        '<label for="timeStart">start time</label>' +
                        '<select class="font timesize" id="timeStart">' +
                            '<option value="9">9</option>' +
                            '<option value="10">10</option>' +
                            '<option value="11">11</option>' +
                            '<option value="12">12</option>' + 
                            '<option value="13">13</option>' +
                           ' <option value="14">14</option>' + 
                            '<option value="15">15</option>' +
                            '<option value="16">16</option>' +
                            '<option value="17">17</option>' +
                            '<option value="18">18</option>' +
                        '</select>' +
                    '</li>' +
                    '<li>' +
                    '<label for="time">hours</label>' +
                    '<select class="font" id="time">' +
                    '<option value="1">1</option>' +
                    '<option value="2">2</option>' +
                    '<option value="3">3</option>' +
                    '</select>' +
                    '<button id="enrollment" class="font-size">add</button>' +
                    '</li>' +
                    '</ul>' +
                    // '</fieldset>' +
                    // '</table>' +
                    '</div>';
                    
                    // 꼭 여기서 선언해야 한다 
                    const subject = document.getElementById('subject');
                    const day = document.getElementById('day');
                    const timeStart = document.getElementById('timeStart');
                    const time = document.getElementById('time');
                    const enrollment = document.getElementById('enrollment');

                    enrollment.addEventListener('click', () => {
                            timetable();
                        });
                
                    plusBtnCheck++;
                    } else {
                        const createTimetable = document.getElementById('createTimetable');
                        createTimetable.remove();
                        plusBtnCheck = 0;
                    }
                });
            
// 색깔을 담는 배열
var colorArray = ["#FFA7A7", "#FFC19E", "#FAED7D", "#CEF279", "#B7F0B1",
    "#B2EBF4", "#B2CCFF", "#B5B2FF", "#D1B2FF", "#FFB2F5", "#FFB2D9", "#D5D5D5"];
// 색배열의 인덱스
var i = 0;
// 수업이 삽입된 셀 저장
var dataArray = [];
// dataArray 배열의 인덱스
var t = 0;

// 색배열의 인덱스가 범위를 초과하면 다시 0으로 리셋
var colorIndex = function() {
    if (i > 11) {
        i = 0;
    }
}

// 기존에 있던 수업과 겹치는지 확인하는 함수
var check = function(temp) {
    for (var i = 0; i < dataArray.length; i++) {
        // 강의가 겹쳤다면
        if (dataArray[i].id == temp) {
            alert(dataArray[i].innerText + " 수업과 시간이 겹칩니다. 이전 강의를 먼저 삭제해주세요.");
            return 0;
        }
    }
}

function timetable() {
    if (delete_done == 0) {
        // 학점수가 만약 1이라면
        if (time.value == '1') {
            var temp = day.value + timeStart.value;
            // 강의가 겹쳤다면 이 함수를 빠져나온다. 
            if (check(temp) == 0) {
                return;
            }
            // 조합한 id와 tempID 연결
            var tempID = document.getElementById(temp);
            // 조합한 id가 있는 <td></td>에 내가 입력한 값 넣기
            tempID.innerText = subject.value;
            // 색깔 넣기
            tempID.style.background = colorArray[i++];
            colorIndex();
            // 시간표의 어느 셀에 데이터가 저장되었는지 저장
            dataArray[t++] = tempID;
        }

        // 학점수가 만약 2라면
        else if (time.value == '2') {
            var temp = day.value + timeStart.value;
            // 강의가 겹쳤다면 이 함수를 빠져나온다. 
            if (check(temp) == 0) {
                return;
            }
            var tempID = document.getElementById(temp);
            tempID.innerHTML = subject.value;
            tempID.style.background = colorArray[i];

            var temp2 = day.value + Number(Number(timeStart.value) + 1);
            var temp2ID = document.getElementById(temp2);
            temp2ID.innerHTML = subject.value;
            temp2ID.style.background = colorArray[i++];
            colorIndex();

            dataArray[t++] = tempID;
            dataArray[t++] = temp2ID;

            // 학점수가 만약 3이라면
        } else if (time.value == '3') {
            var temp = day.value + timeStart.value;
            // 강의가 겹쳤다면 이 함수를 빠져나온다. 
            if (check(temp) == 0) {
                return;
            }
            var tempID = document.getElementById(temp);
            tempID.innerHTML = subject.value;
            tempID.style.background = colorArray[i];

            var temp2 = day.value + Number(Number(timeStart.value) + 1);
            var temp2ID = document.getElementById(temp2);
            temp2ID.innerHTML = subject.value;
            temp2ID.style.background = colorArray[i];

            var temp3 = day.value + Number(Number(timeStart.value) + 2);
            var temp3ID = document.getElementById(temp3);
            temp3ID.innerHTML = subject.value;
            temp3ID.style.background = colorArray[i++];
            colorIndex();

            dataArray[t++] = tempID;
            dataArray[t++] = temp2ID;
            dataArray[t++] = temp3ID;
        } else {
            alert('error');
        }
    } else {
        alert("done 버튼을 먼저 눌러주세요.");
    }
}


function enterkey() {
    if (window.event.keyCode == 13) {
        timetable();
    }
}

// 삭제 버튼과 완료 버튼 id 연결
const deleteBtn = document.getElementById('delete');
const doneBtn = document.getElementById('done');
const finishBtn = document.getElementById('finish');

var delete_done = 0;
var subject_innerText = [];

// delete() 함수
function deleteFunc() {
    if (delete_done == 0) {
        for (var i = 0; i < dataArray.length; i++) {
            var tempID = "roundButton" + i;
            subject_innerText[i] = dataArray[i].innerText;
            // 배열의 모든 원소에 버튼과 과목명 삽입
            dataArray[i].innerHTML = "<button id='roundButton' class='roundButton'" +
                "onClick='roundButtonClick(this.id)'>-</button>" + dataArray[i].innerText;
            // roundButton에게 각자 다른 id 부여
            roundButton.setAttribute('id', tempID);
        }
        delete_done++;
    } else {
        alert("done 버튼을 먼저 눌러주세요.");
    }
}

// roundButton을 누르면 발생하는 일
function roundButtonClick(buttonId) {
    // roundButton과 id 연결
    const child = document.getElementById(buttonId);
    // roundButton의 부모 div의 id 연결
    // <td></td>의 id에 대한 정보가 담겨있음
    var parent = child.parentNode;
    parent.style.background = 'whitesmoke';
    parent.innerHTML = "<p></p>"
    //dataArray 배열에서 <td></td>의 정보를 가진 인덱스가 몇 번인지 찾기
    const parentFinde = dataArray.findIndex(function(item) {
        return item.id === parent.id;
    });
    // 배열에서 삭제하기
    if (parentFinde > -1) {
        dataArray.splice(parentFinde, 1);
        subject_innerText.splice(parentFinde, 1);
    }
    // innerHTML로 삽입한 roundButton의 <button></button>과 subject.value 삭제하기
    $("button").remove("child");
    // filter 함수로 배열에서 빈 인덱스 제거
    dataArray = dataArray.filter(function(n) {
        return n != null;
    });
    subject_innerText = subject_innerText.filter(function(n) {
        return n != null;
    });
    // delete button을 누른 만큼 t값도 작아져야 한다
    t--;
}

// done() 함수
function doneFunc() {
    delete_done = 0;
    for (var i = 0; i < dataArray.length; i++) {
        // <td></td>의 id 저장
        const parent2 = dataArray[i];
        parent2.innerHTML = subject_innerText[i];
    }
}

deleteBtn.addEventListener('click', () => {
    deleteFunc();
});

doneBtn.addEventListener('click', () => {
    doneFunc();
});
