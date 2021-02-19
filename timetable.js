const subject = document.getElementById('subject');
const day = document.getElementById('day');
const timeStart = document.getElementById('timeStart');
const time = document.getElementById('time');
const color = document.getElementById('color');
const enrollment = document.getElementById('enrollment');

// 색깔을 담는 배열
var colorArray = ["#FFA7A7", "#FFC19E", "#FAED7D", "#CEF279", "#B7F0B1", 
"#B2EBF4", "#B2CCFF", "#B5B2FF", "#D1B2FF", "#FFB2F5", "#FFB2D9", "#D5D5D5"];
// 색배열의 인덱스
var i = 0;  
// 수업이 삽입된 셀 저장
var dataArray = [];
// dataArray 배열의 인덱스
var t = 0;

function timetable() {
    // 학점수가 만약 1이라면
     if (time.value == '1') {
    var temp = day.value + timeStart.value;
    // 조합한 id와 tempID 연결
    var tempID = document.getElementById(temp);
    // 조합한 id가 있는 <td></td>에 내가 입력한 값 넣기
    tempID.innerHTML = subject.value;
    // 색깔 넣기
    tempID.style.background= colorArray[i++];
    // 시간표의 어느 셀에 데이터가 저장되었는지 저장
    dataArray[t++] = tempID;
    }

    // 학점수가 만약 2라면
    else if (time.value == '2') {
        var temp = day.value + timeStart.value;
        var tempID = document.getElementById(temp);
        tempID.innerHTML = subject.value;
        tempID.style.background= colorArray[i];

        var temp2 = day.value + Number(Number(timeStart.value) + 1);
        var temp2ID = document.getElementById(temp2);
        temp2ID.innerHTML = subject.value;
        temp2ID.style.background= colorArray[i++];

        dataArray[t++] = tempID;
        dataArray[t++] = temp2ID;

    // 학점수가 만약 3이라면
    } else if (time.value == '3') {
        var temp = day.value + timeStart.value;
        var tempID = document.getElementById(temp);
        tempID.innerHTML = subject.value;
                tempID.style.background= colorArray[i];

        var temp2 = day.value + Number(Number(timeStart.value) + 1);
        var temp2ID = document.getElementById(temp2);
        temp2ID.innerHTML = subject.value;
                temp2ID.style.background= colorArray[i];

        var temp3 = day.value + Number(Number(timeStart.value) + 2);
        var temp3ID = document.getElementById(temp3);
        temp3ID.innerHTML = subject.value;
        temp3ID.style.background= colorArray[i++];

        dataArray[t++] = tempID;
        dataArray[t++] = temp2ID;
        dataArray[t++] = temp3ID;
    } else {
        alert('error');
    }
}

enrollment.addEventListener('click', () => {
   timetable();
}); 

function enterkey() {
    if (window.event.keyCode == 13) {
        timetable();
    }
}

// 삭제 버튼과 완료 버튼 id 연결
const deleteBtn = document.getElementById('delete');
const doneBtn = document.getElementById('done');

// 삭제 함수
function deleteFunc() {
    for (var i = 0; i < dataArray.length; i++) {
    var tempID = "roundButton" + i;
    // 배열의 모든 원소에 버튼과 과목명 삽입
     dataArray[i].innerHTML = "<button id='roundButton' class='roundButton' onClick='roundButtonClick(this.id)'>-</button>" + subject.value;
     // roundButton에게 각자 다른 id 부여
     roundButton.setAttribute('id', tempID);
     }
}

// roundButton을 누르면 발생하는 일
function roundButtonClick(buttonId) {
    // roundButton과 id 연결
    const child = document.getElementById(buttonId);
    // roundButton의 부모 div의 id 연결
    var parent = child.parentNode;
    parent.style.background= 'whitesmoke';
    parent.innerHTML = "<p></p>"
}

// 완료 함수
function doneFunc() {
//     1. 페이지 끌고 오기
//     2. 데이터 끌고 오기
//     3. 
}

deleteBtn.addEventListener('click', () => {
    deleteFunc();
});

doneBtn.addEventListener('click', () => {
    doneFunc();
});