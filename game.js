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

function playerPlay(){
    let play=prompt("1=Rock / 2=Paper / 3=Scissors")
    console.log(play);
    if(play==2){
        console.log("Player = Paper")
        return("Paper")
    } else{
        if(play==1){
            console.log("Player = Rock")
            return("Rock")
        }else{
            console.log("Player = Scissors")
            return("Scissors")}
    }
}

function Play(x,y){
    if(x==y){
        console.log("It`s a daw! Both players chose" ,x)
    }else{
        if (x=="Rock"&&y=="Paper"||x=="Paper"&&y=="Scissors"||x=="Scissors"&&y=="Rock"){
            console.log("Player is the winner!",y," beats ",x," !")
        }else{
            console.log("Computer is the winner!",x," beats ",y," !")
        }
    }
}
let i=1
while(i<=3){
    Play(computerPlay(),playerPlay())
    i++
}