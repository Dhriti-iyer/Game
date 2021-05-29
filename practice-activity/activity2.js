function get_score()
{
    score=localStorage.getItem("score");
    document.getElementById("update").innerHTML="<h3>Score : " + score;
}
function back()
{
    window.location="activity_1.html";
}