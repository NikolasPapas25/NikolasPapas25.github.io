const user_input = document.getElementById('Pass');
const Enter_Button = document.getElementById('Enter');
const conti = document.getElementById('conti');
const client_Pass = user_input.value;
const em = document.getElementById('EmInput');
const Clients = []
function Get_Data(){
    if(user_input.value == null){
        window.alert('Please Enter a Password');
    }else{
        window.alert(user_input.value);
        localStorage.setItem('clientPass', user_input.value);
        Enter_Button.remove();
        Clients.push(em.value)
    }
}
function Read_Data(){
    if(user_input.value == localStorage.getItem('clientPass')){
        window.alert('nice');
        window.open('mailto:apoel25nikolas@gmail.com?subject=Write your feedback below!&body=');
    }else if(user_input.value != localStorage.getItem('clientPass') || user_input.value == null){
        window.alert('trash');
    }
}

