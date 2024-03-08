let user_score=0;
let comp_score=0;


const user_choice=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const   update_user_score=document.querySelector("#user-score");
const update_comp_score=document.querySelector("#comp-score");

user_choice.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let user_click=choice.getAttribute("id");
        let comp_choices=genCompChoice();

        if(user_click===comp_choices)
        {

            msg.innerText="Game was Draw!! Play Again..";
            msg.style.backgroundColor="#081218";
        }
        else
        {
            user_win=true;
            if(user_click==="paper")
            {
                //rock,scissors
                user_win=comp_choices==="rock" ? true:false;
            }
            else if(user_click==="rock")
            {
                //scissors,paper
                user_win=comp_choices==="paper" ? false:true;
            }
            else
            {
                //rock,paper
                user_win=comp_choices==="rock" ? false:true;
            }
            showWinner(user_win,comp_choices,user_click);
        }
      
       
    });
});

const showWinner=(user_win,comp_choices,user_click)=>{
        if(user_win)
        {
            user_score=user_score+1;
            update_user_score.innerText=user_score;
            msg.innerText=`you win!! your ${user_click} beats ${comp_choices} `;
            msg.style.backgroundColor="green";
        }
        else
        {
            comp_score=comp_score+1;
            update_comp_score.innerText=comp_score;
            msg.innerText=`you lose!! ${comp_choices} beats your ${user_click}`;
            msg.style.backgroundColor="red";
        }
};

const genCompChoice=()=>{
    let comp_game=["rock","paper","scissors"];
    
    let comp_choice=Math.floor(Math.random()*3);

    return comp_game[comp_choice];
  
};

