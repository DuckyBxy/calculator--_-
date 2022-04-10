function insert(num){
    document.forms["form"]["textview"].value = document.forms["form"]["textview"].value+num;
}

function equal(){
    var exp = document.forms["form"]["textview"].value;
    if(exp){
    document.forms["form"]["textview"].value = eval(document.forms["form"]["textview"].value)
    }
}

function clean(){
    document.forms["form"]["textview"].value = "";
}