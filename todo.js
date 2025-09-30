 let random = 0;
 const sound =['sound/my blood line depend on me/bankai-乱闘-中川ヒドイ-made-with-Voicemod.mp3',
   "sound/my blood line depend on me/gambare-gambare-made-with-Voicemod.mp3",
    "sound/my blood line depend on me/my-baby-boy-made-with-Voicemod.mp3",
 "sound/my blood line depend on me/return-by-death-sound-made-with-Voicemod.mp3",
 "sound/my blood line depend on me/vine-boom-made-with-Voicemod.mp3"
 ]
 const sound2=["sound/man of culture/akatsuki-theme-made-with-Voicemod.mp3",
    "sound/man of culture/akatsuki-theme-made-with-Voicemod.mp3",
    "sound/man of culture/ara-ara-sound-effect-127279.mp3",
    "sound/man of culture/set-your-heart-ablaze-made-with-Voicemod.mp3",
    "sound/man of culture/yosha!-made-with-Voicemod.mp3"
 ]
 let soundGroup=""
    let n ;
    const body =document.querySelector('.yes').classList
    console.log(sound)
   
   let checkelem = ''
let input =[]
function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
let go =`${JSON.parse( localStorage.getItem(`itwork`))}`||"";

document.querySelector('.output').innerHTML=go;

function userin()
{
    input.push(document.querySelector('.userinput-js').value);console.log(go),go = ''
}
function output()
{
  let a='<h1 class="heading">Task</h1>'
    input.forEach((input,i)=>{
if(i!==0){a=""}
document.querySelector('.output').classList.remove('display')
    go+=`${a}<div class="sub sub${i}"><p class ="user${i}  user">${input}</p> <input type="checkbox" value="user${i}" onchange="check();gate(${i});sin('${n}');save()" name="user" id="user${i}"class="user${i} tosee" ></div> `
    ;save();


    })

}
function check()
{
     checkelem = document.querySelector('input[name="user"]:checked');document.querySelector(`.${checkelem.value}`).remove();console.log(checkelem.value);random=Math.random() 
}

function gate(one)
{
    checkelem.remove();input.splice(one,1);document.querySelector(`.sub${one}`).remove()
}

 function change()
 {
    n='b';
    if(!body.contains('yes1'))
        {
            body.add('yes1');body.remove('yes2')
        }
    if (!document.querySelector(`.sub${0}`).classList.contains('white'))
        {
            for(let i=0;i<input.length;i++)
                {

                    document.querySelector(`.sub${i}`).classList.add('white');document.querySelector(`.sub${i}`).classList.remove('black')
                }
        }
        sound.forEach((voice,index)=>{soundGroup+= `<audio class="b${index}" src="${voice}"></audio> `} )
   
        document.querySelector('.sand-js').innerHTML=`${soundGroup}`
       
   
    // let sound =document.querySelector(`.b${n}`)
}
function change2()
{
    n='c';
    if(!body.contains('yes2'))
      {
        body.add('yes2');body.remove('yes1')
      }
    if (!document.querySelector(`.sub${0}`).classList.contains('black'))
      {
        for(let i=0;i<input.length;i++)
          {

            document.querySelector(`.sub${i}`).classList.add('black');document.querySelector(`.sub${i}`).classList.remove('white')
          }
     } 
      sound2.forEach((voice,index)=>{soundGroup+= `<audio class="c${index}" src="${voice}"></audio> `} )
      document.querySelector('.sand-js').innerHTML=`${soundGroup}`
console.log(soundGroup)}
function sin()
{
    let l;
   l=randInt(0, 4)
   
   if(n){
   document.querySelector(`.${n}${l}`).play()
   }
   else
        {
        document.querySelector(`.a1`).play()
        }
}


function save(){localStorage.setItem(`itwork`,`${JSON.stringify(document.querySelector('.output').innerHTML)}`)}
console.log(JSON.parse(localStorage.getItem('itwork')))
console.log(go)

setInterval(()=>{let clock = new Date()
let hour =clock.getHours().toString().padStart(2,'0')
let min = clock.getMinutes().toString().padStart(2,'0')
let sec = clock.getSeconds().toString().padStart(2,'0')
  document.querySelector('.js-time').innerHTML=`${hour}: ${min} :${sec}`},1000)

