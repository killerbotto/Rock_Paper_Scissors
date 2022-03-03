function computerPlay(){
    let play
    play=Math.random()*3
    if(play<=1){
        console.log("Computer = Paper")
        return("Paper")
    } else{
        if(play<=2){
            console.log("Computer = Rock")
            return("Rock")
        }else{
            console.log("Computer = Scissors")
            return("Scissors")}
    }
}

// function playerPlay(){
//     let play=prompt("1=Rock / 2=Paper / 3=Scissors")
//     console.log(play);
//     if(play==2){
//         console.log("Player = Paper")
//         return("Paper")
//     } else{
//         if(play==1){
//             console.log("Player = Rock")
//             return("Rock")
//         }else{
//             console.log("Player = Scissors")
//             return("Scissors")}
//     }
// }

let compPoints=0
let playerPoints=0

function Play(x,y){
    if(compPoints==5){
        document.getElementById("result").innerHTML=("Computer wins!!")
        rp.classList.add("active")
        rp.classList.remove("reload")
    } else{
        if(playerPoints==5){
            document.getElementById("result").innerHTML=("Player wins!!")
            rp.classList.add("active")
            rp.classList.remove("reload")
        }else{
            if(x==y){
                document.getElementById("result").innerHTML=("It`s a draw! Both players chose " +x)
            }else{
                if (x=="Rock"&&y=="Paper"||x=="Paper"&&y=="Scissors"||x=="Scissors"&&y=="Rock"){
                    document.getElementById("result").innerHTML=("Player is the winner! "+y+" beats "+x+" !")
                    playerPoints++
                    document.getElementById("playerScore").innerHTML=playerPoints
                    document.getElementById("compScore").innerHTML=compPoints       
                }else{
                    document.getElementById("result").innerHTML=("Computer is the winner! "+x+" beats "+y+" !")
                    compPoints++
                    document.getElementById("playerScore").innerHTML=playerPoints
                    document.getElementById("compScore").innerHTML=compPoints
                    }
                }
            }
        } 
}

const R=document.getElementById("Rock")
R.addEventListener("click", function(){
    console.log("Rock")
    Play(computerPlay(),"Rock")
    R.classList.add("clicked")
    R.addEventListener("transitionend",function (e){
        this.classList.remove("clicked")
    });
});

const P=document.getElementById("Paper")
P.addEventListener("click", function(){
    console.log("Paper")
    Play(computerPlay(),"Paper")
    P.classList.add("clicked")
    P.addEventListener("transitionend",function (e){
        this.classList.remove("clicked")
    });
});

const S=document.getElementById("Sci")
S.addEventListener("click", function(){
    console.log("Scissors")
    Play(computerPlay(),"Scissors")
    S.classList.add("clicked")
    S.addEventListener("transitionend",function (e){
        this.classList.remove("clicked")
    });
});

const rp=document.getElementById("reload")
rp.addEventListener("click", function(){
    rp.classList.add("clicked")
    document.location.reload(true)
    rp.addEventListener("transitionend",function (e){
        this.classList.remove("clicked")
    });
});