var randomNumber1 = Math.floor(Math.random()*6)+1;
var temp1= document.querySelector(".img1" );


var temp2= document.querySelector(".img2" );
var randomNumber2 = Math.floor(Math.random()*6)+1;


// // Check if the prompt has already been shown
// if (!localStorage.getItem('promptShown')) {
//     // If not, show the prompt
//     let name1 = prompt("Enter Name Of Player 1");
//     let name2 = prompt("Enter Name Of Player 2");

//     console.log(userInput); // Do something with the input
  
//     // Set a flag in local storage to indicate the prompt has been shown
//     localStorage.setItem('promptShown', 'true');
//   }
  



if(randomNumber1===1)
{
    temp1.setAttribute("src","./images/dice1.png");

}
if(randomNumber1===2)
    {
        temp1setAttribute("src","./images/dice2.png");
    
    }
if(randomNumber1===3)
    {
        temp1.setAttribute("src","./images/dice3.png");
    
    }
if(randomNumber1===4)
    {
        temp1.setAttribute("src","./images/dice4.png");
    
    }
if(randomNumber1===5)
    {
        temp1.setAttribute("src","./images/dice5.png");
    
    }
if(randomNumber1===6)
    {
        temp1.setAttribute("src","./images/dice6.png");
    
    }









if(randomNumber2===1)
{
    temp2.setAttribute("src","./images/dice1.png");

}
if(randomNumber2===2)
    {
        temp2.setAttribute("src","./images/dice2.png");
    
    }
if(randomNumber2===3)
    {
        temp2.setAttribute("src","./images/dice3.png");
    
    }
if(randomNumber2===4)
    {
        temp2.setAttribute("src","./images/dice4.png");
    
    }
if(randomNumber2===5)
    {
        temp2.setAttribute("src","./images/dice5.png");
    
    }
if(randomNumber2===6)
    {
        temp2.setAttribute("src","./images/dice6.png");
    
    }



if(randomNumber1>randomNumber2)
    
{
    var title = (document.querySelector("h1"));
    title.textContent=("Player 1 Wins ! 😎");
    console.log(title);

}

else
{
    var title = (document.querySelector("h1"));
    title.textContent=("Player 2 Wins !  😎 ");
    console.log(title);

}