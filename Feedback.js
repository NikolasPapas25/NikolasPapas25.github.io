const user_input = document.getElementById('Pass');
const conti = document.getElementById('conti');
const client_Pass = user_input.value;
const em = document.getElementById('EmInput');
const Clients = []

function Read_Data(){
    if(user_input.value == localStorage.getItem('pass')){
        window.alert('nice');
        window.open('mailto:apoel25nikolas@gmail.com?subject=Write your feedback below!&body=');
    }else if(user_input.value != localStorage.getItem('pass') || user_input.value == null){
        window.alert('trash');
    }
}

