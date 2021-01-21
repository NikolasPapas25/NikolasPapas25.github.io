const intro = document.querySelector('.intro')
const instr = document.querySelector('.ins')
const button = document.querySelector('.start')
const dont = document.querySelector('.dont')
var y = document.createElement('img')
let virus = 89
intro.classList.add('change');
instr.classList.add('change2');
button.classList.add('change3')
let wait = 20

y.setAttribute('src',
'hdgta6.jpg')
y.setAttribute('width', '1900')
y.setAttribute('height', '830')
y.setAttribute('alt', ' the loading bbcc')
document.body.appendChild(y)


button.addEventListener('click', function(){
    document.write('loading...')
    const bt = document.createElement('button')
    bt.innerHTML = 'skip the loading'
    const bdy = document.getElementsByTagName('body')[0]
    bdy.appendChild(bt)
    bt.addEventListener('click', function(){
        virus += 1
    document.write('SIKE, downloading virus ' + virus + '% complete')
    })
    
    var x = document.createElement("img")
    x.setAttribute('src',
    'zackgay.jpeg')
    x.setAttribute('width', '1880')
    x.setAttribute('height', '940')
    x.setAttribute('alt', ' the loading bbc')
    document.body.appendChild(x)

    var l = document.createElement("img")
    l.setAttribute('src',
     'hdgta6.jpg')
    l.setAttribute('width', '1880')
    l.setAttribute('height', '940')
    l.setAttribute('alt', ' the loadingg bbc')
    setTimeout(function(){
        document.body.replaceChild(l, x)
    }, 5000)

    
    var q = document.createElement("img")
    q.setAttribute('src',
     'gtaFunny.jpg')
    q.setAttribute('width', '1880')
    q.setAttribute('height', '940')
    q.setAttribute('alt', ' the loadingg bbc')
    setTimeout(function(){
        document.body.replaceChild(q, l)
    }, 10000)

    var w = document.createElement("img")
    w.setAttribute('src',
     'roast.jpg')
    w.setAttribute('width', '1880')
    w.setAttribute('height', '940')
    w.setAttribute('alt', ' the loadingg bbc')
    setTimeout(function(){
        document.body.replaceChild(w, q)
    }, 20000)

    var e = document.createElement("img")
    e.setAttribute('src',
     'imageforgame.jpg')
    e.setAttribute('width', '1880')
    e.setAttribute('height', '940')
    e.setAttribute('alt', ' the loadingg bbc')
    setTimeout(function(){
        document.body.replaceChild(e, w)
    }, 30000)

    var r = document.createElement("img")
    r.setAttribute('src',
     'face.jpg')
    r.setAttribute('width', '1880')
    r.setAttribute('height', '940')
    r.setAttribute('alt', ' the loadingg bbc')
    setTimeout(function(){
        document.body.replaceChild(r, e)
    }, 40000)

    var t = document.createElement("img")
    t.setAttribute('src',
     'mario.jpg')
    t.setAttribute('width', '1880')
    t.setAttribute('height', '940')
    t.setAttribute('alt', ' the loadingg bbc')
    setTimeout(function(){
        document.body.replaceChild(t, r)
    }, 60000)










    setTimeout(function(){
        alert('still loading...Press "ok" to continue loading to confirm that you are not a bot')
    }, 70000)
    setTimeout(function(){
        document.write('95% complete')
    }, 110000)
    setTimeout(function(){
        const user = window.prompt('select your character, 1=messi, 3=nuhiu (pick nuhiu to work pussy')
        if(user === '1'){
            document.write('98% loading..')
        
        }
        if(user === '2'){
            document.write('69% loading...')
        }
        if(user === '3'){
            document.write('GOATED ANSWER! 100% COMPLETE!! Press Ok')
            setTimeout(function(){
                av = document.location.replace('https://youtu.be/CSQ2cZrhnsQ')
            }, 25000)

            
            

        }
    }, 120000)
}
)

