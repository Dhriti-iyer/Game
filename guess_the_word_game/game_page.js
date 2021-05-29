player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;

function send() {
    getword = document.getElementById("word").value;
    word = getword.toLowerCase();

    first_char = word.charAt(1);
    console.log(first_char);

    length_div_2 = Math.floor(word.length / 2);
    second_char = word.charAt(length_div_2);
    console.log(second_char);

    lenght_minus_1 = word.length - 1;
    third_char = word.charAt(lenght_minus_1);
    console.log(third_char);

    remove_firstchar = word.replace(first_char, "_");
    console.log(remove_firstchar);
    remove_secondchar = remove_firstchar.replace(second_char, "_");
    console.log(remove_secondchar);
    remove_thirdchar = remove_secondchar.replace(third_char, "_");
    console.log(remove_thirdchar);

    question = "<h4 id='word_display'> Q. " + remove_thirdchar + "</h4>";
    input = "<br> Answer : <input type='text' id='input_check_box' placeholder='Enter your answer'>";
    check_button = "<br> <br> <button class='btn btn-info' onclick='check();'>Check</button>";
    row = question + input + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
}

question_turn = "player_1";
answer_turn = "player_2";

function check() {
    get_answer = document.getElementById("input_check_box").value;
    answer = get_answer.toLowerCase();

    if (answer == word) {
        if (answer_turn == "player_1") {
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1_score;
        }
        else {
            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
    }
    if (question_turn == "player_1") {
        question_turn = "player_2";
        document.getElementById("player_question").innerHTML = "Question Turn - " + player2_name;
    }
    else {
        question_turn = "player_1";
        document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
    }
    if (answer_turn == "player_1") {
        answer_turn = "player_2";
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;
    }
    else {
        answer_turn = "player_1";
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1_name;
    }
}