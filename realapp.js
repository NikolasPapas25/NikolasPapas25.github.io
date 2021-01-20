const user = document.querySelector('.userbox');

const pass = document.querySelector('.textbox');

const butt = document.querySelector('.button');

const riddle = document.querySelector('.riddle');


butt.addEventListener('click', function(){
 
    if(pass.value === String('3passion')){
        const newWindow2 = window.open();
        newWindow2.document.write('ok ' + user.value + ' this is a one time deal. Are you ready?');
        var butto = newWindow2.document.createElement("button");
        butto.innerHTML = "yes";
        var body = newWindow2.document.getElementsByTagName("body")[0];
        body.appendChild(butto);
        butto.addEventListener('click', function(){
            newWindow2.document.write('you are gay')
            var buttoo = newWindow2.document.createElement("button");
            buttoo.innerHTML = "if you really think your not gay. click";
            var bodyy = newWindow2.document.getElementsByTagName("body")[0];
            bodyy.appendChild(buttoo);
            buttoo.addEventListener('click', function(){
                newWindow2.location.replace("https://www.pornhub.com/gay/video/search?search=gay+porn");
            })
        })
    }   
    }
)

riddle.addEventListener('click', function(){
    const newWindow = window.open();
    newWindow.document.write("now you need to crack this password:\n"
    ,"A man wanted to enter an exclusive club\n "
    ,"but did not know the password that was required.\n"
    ,"He waited by the door and listened.\n"
    ,"A club member knocked on the door and the doorman said, twelve.\n"
    ,"The member replied, six  and was let in.\n"
    ,"A second member came to the door and the doorman said, six.\n"
    ,"The member replied, three and was let in.\n "
    ,"The man thought he had heard enough and walked up to the door.\n"
    ,"The doorman said ,ten and the man replied, five. But he was not let in.\n"
    ," What should have he said?\n"
    ,"Second word/number of the password:\n"
    ,"4 Grapes\n"
    ,"1 Apple\n"
    ,"7 Bananas\n"
    ,"7 Mangoes \n"
    ,"2 Pineapples\n"
    ,"1 Orange\n"
    ,"8 Pomegranates\n"
    ,"NO SPACES%&* BETWEEN THE TWO NUMBERS/WORDS\n");
    newWindow.focus()
}
)