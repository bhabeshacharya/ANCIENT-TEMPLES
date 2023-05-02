$(".icon").click(function () {
    $(".nav-list").toggle();
});
$(".nav-items").click(function () {
    $(".nav-list").toggle();
});

function submit(){
    var score = 0 ;
    if (document.getElementById('correct1').checked) {
        score++;
    }
    if (document.getElementById('correct2').checked) {
        score++;
    }
    if (document.getElementById('correct3').checked) {
        score++;
    }
    if (document.getElementById('correct4').checked) {
        score++;
    }
    if (document.getElementById('correct5').checked) {
        score++;
    }
    document.getElementById('res').innerHTML = 'Your score is '+score+'/5';
    document.getElementsByClassName('input').checked = False;
}

$(".openquiz").click(function () {
    $(".quiz-container").toggle();
    $(".display-container").toggle();
});
$(".sbtn").click(function () {
    $(".result-container").toggle();
    $(".quiz-container").toggle();
});
$(".bbtn").click(function () {
    $(".quiz-container").toggle();
    $(".display-container").toggle();
});
$(".pbtn").click(function () {
    $(".result-container").toggle();
    $(".quiz-container").toggle();
});
$(".hbtn").click(function () {
    $(".result-container").toggle();
    $(".display-container").toggle();
});