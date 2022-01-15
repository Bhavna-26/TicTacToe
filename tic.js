let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
let btn4 = document.getElementById('btn4');
let btn5 = document.getElementById('btn5');
let btn6 = document.getElementById('btn6');
let btn7 = document.getElementById('btn7');
let btn8 = document.getElementById('btn8');
let btn9 = document.getElementById('btn9');
let moves = 9;
let flag1=0;
let flag2=0;
let flag3=0;
let flag4=0;
let flag5=0;
let flag6=0;
let flag7=0;
let flag8=0;
let flag9=0;
let d=document.getElementById('decide');
let para=document.getElementById('d');
function clicking1() {
    if ((moves % 2) == 0) {
        if (((btn2.innerText) == 'O') && ((btn3.innerText) == 'O')) {
            btn1.innerText = 'O';
           // alert('O win');
           para.innerText='O win';
           d.style.display="block";
        }
        else if(((btn4.innerText)=='O')&&((btn7.innerText)=='O')){
            btn1.innerText = 'O';
           // alert('O win');
           para.innerText='O win';
           d.style.display="block";

        }
        else if(((btn5.innerText)=='O')&&((btn9.innerText)=='O')){
            btn1.innerText = 'O';
          //  alert('O win');
          para.innerText='O win';
          d.style.display="block";
        }
        else{
            btn1.innerText = 'O';
            flag1=1;
            if((flag2==1)&&(flag3==1)&&(flag4==1)&&(flag5==1)&&(flag6==1)&&(flag7==1)&&(flag8==1)&&(flag9==1)){
               // alert('It is a tie')
               para.innerText='It is a tie';
               d.style.display="block";
            }
        }
        
    }
    else {
        if (((btn2.innerText) == 'X') && ((btn3.innerText) == 'X')) {
            btn1.innerText = 'X';
            // alert('X win');
            para.innerText='X win';
            d.style.display="block";
        }
        else if(((btn4.innerText)=='X')&&((btn7.innerText)=='X')){
            btn1.innerText = 'X';
            // alert('X win');
            para.innerText='X win';
            d.style.display="block";

        }
        else if(((btn5.innerText)=='X')&&((btn9.innerText)=='X')){
            btn1.innerText = 'X';
           // alert('X win');
           para.innerText='X win';
           d.style.display="block";
        }
        else{
            btn1.innerText = 'X';
            flag1=1;
            if((flag2==1)&&(flag3==1)&&(flag4==1)&&(flag5==1)&&(flag6==1)&&(flag7==1)&&(flag8==1)&&(flag9==1)){
               // alert('It is a tie')
               para.innerText='It is a tie';
               d.style.display="block";
            }
        }
    }
    moves--;
}
function clicking2() {
    if ((moves % 2) == 0) {
        if (((btn1.innerText) == 'O') && ((btn3.innerText) == 'O')) {
            btn2.innerText = 'O';
            //alert('O win');
            para.innerText='O win';
            d.style.display="block";
        }
        else if(((btn5.innerText)=='O')&&((btn8.innerText)=='O')){
            btn2.innerText = 'O';
          //  alert('O win');
          para.innerText='O win';
          d.style.display="block";

        }
     
        else{
            btn2.innerText = 'O';
            flag2=1;
            if((flag1==1)&&(flag3==1)&&(flag4==1)&&(flag5==1)&&(flag6==1)&&(flag7==1)&&(flag8==1)&&(flag9==1)){
               // alert('It is a tie')
               para.innerText='It is a tie';
               d.style.display="block";
            }
        }
    }
    else {
        if (((btn1.innerText) == 'X') && ((btn3.innerText) == 'X')) {
            btn2.innerText = 'X';
          //  alert('X win');
          para.innerText='X win';
          d.style.display="block";
        }
        else if(((btn5.innerText)=='X')&&((btn8.innerText)=='X')){
            btn2.innerText = 'X';
          //  alert('X win');
          para.innerText='X win';
          d.style.display="block";

        }
     
        else{
            btn2.innerText = 'X';
            flag2=1;
            if((flag1==1)&&
            (flag3==1)&&(flag4==1)&&(flag5==1)&&(flag6==1)&&(flag7==1)&&(flag8==1)&&(flag9==1)){
               // alert('It is a tie')
               para.innerText='It is a tie';
               d.style.display="block";
            }
        }
    }
    moves--;
}
function clicking3() {
    if ((moves % 2) == 0) {
        if (((btn1.innerText) == 'O') && ((btn2.innerText) == 'O')) {
            btn3.innerText = 'O';
            //alert('O win');
            para.innerText='O win';
            d.style.display="block";
        }
        else if(((btn6.innerText)=='O')&&((btn9.innerText)=='O')){
            btn3.innerText = 'O';
          //  alert('O win');
        
          para.innerText='O win';
          d.style.display="block";

        }
        else if(((btn5.innerText)=='O')&&((btn7.innerText)=='O')){
            btn3.innerText = 'O';
           // alert('O win');
           para.innerText='O win';
           d.style.display="block";
        }
        else{
            btn3.innerText = 'O';
            flag3=1;
            if((flag1==1)&&(flag2==1)&&(flag4==1)&&(flag5==1)&&(flag6==1)&&(flag7==1)&&(flag8==1)&&(flag9==1)){
              //  alert('It is a tie')
              para.innerText='It is a tie';
              d.style.display="block";
            }
        }
    }
    else {
        if (((btn1.innerText) == 'X') && ((btn2.innerText) == 'X')) {
            btn3.innerText = 'X';
            //alert('X win');
            para.innerText='X win';
            d.style.display="block";
        }
        else if(((btn6.innerText)=='X')&&((btn9.innerText)=='X')){
            btn3.innerText = 'X';
            //alert('X win');
            para.innerText='X win';
            d.style.display="block";

        }
        else if(((btn5.innerText)=='X')&&((btn7.innerText)=='X')){
            btn3.innerText = 'X';
          //  alert('X win');
          para.innerText='X win';
          d.style.display="block";
        }
        else{
            btn3.innerText = 'X';
            flag3=1;
            if((flag1==1)&&(flag2==1)&&(flag4==1)&&(flag5==1)&&(flag6==1)&&(flag7==1)&&(flag8==1)&&(flag9==1)){
             //   alert('It is a tie')
             para.innerText='It is a tie';
             d.style.display="block";
            }
        }
    }
    moves--;
}
function clicking4() {
    if ((moves % 2) == 0) {
        if (((btn5.innerText) == 'O') && ((btn6.innerText) == 'O')) {
            btn4.innerText = 'O';
            //alert('O win');
            para.innerText='O win';
            d.style.display="block";
        }
        else if(((btn1.innerText)=='O')&&((btn7.innerText)=='O')){
            btn4.innerText = 'O';
            //alert('O win');
            para.innerText='O win';
            d.style.display="block";

        }
     
        else{
            btn4.innerText = 'O';
            flag4=1;
            if((flag1==1)&&(flag2==1)&&(flag3==1)&&(flag5==1)&&(flag6==1)&&(flag7==1)&&(flag8==1)&&(flag9==1)){
                //alert('It is a tie')
                para.innerText='It is a tie';
                d.style.display="block";
            }
        }
    }
    else {
        if (((btn5.innerText) == 'X') && ((btn6.innerText) == 'X')) {
            btn4.innerText = 'X';
        //    alert('X win');
        para.innerText='X win';
        d.style.display="block";
        }
        else if(((btn1.innerText)=='X')&&((btn7.innerText)=='X')){
            btn4.innerText = 'X';
        //    alert('X win');
        para.innerText='X win';
        d.style.display="block";

        }
     
        else{
            btn4.innerText = 'X';
            flag4=1;
            if((flag1==1)&&(flag2==1)&&(flag3==1)&&(flag5==1)&&(flag6==1)&&(flag7==1)&&(flag8==1)&&(flag9==1)){
               // alert('It is a tie')
               para.innerText='It is a tie';
               d.style.display="block";
            }
        }
    }
    moves--;
}
function clicking5() {
    if ((moves % 2) == 0) {
        if (((btn4.innerText) == 'O') && ((btn6.innerText) == 'O')) {
            btn5.innerText = 'O';
          //  alert('O win');
          para.innerText='O win';
          d.style.display="block";
        }
        else if(((btn2.innerText)=='O')&&((btn8.innerText)=='O')){
            btn5.innerText = 'O';
            //alert('O win');
            para.innerText='O win';
            d.style.display="block";

        }
        else if(((btn1.innerText)=='O')&&((btn9.innerText)=='O')){
            btn5.innerText = 'O';
         //   alert('O win');
         para.innerText='O win';
         d.style.display="block";
        }
        else if(((btn3.innerText)=='O')&&((btn7.innerText)=='O')){
            btn5.innerText = 'O';
          //  alert('O win');
          para.innerText='O win';
          d.style.display="block";
        }
        else{
            btn5.innerText = 'O';
            flag5=1;
            if((flag1==1)&&(flag2==1)&&(flag3==1)&&(flag4==1)&&(flag6==1)&&(flag7==1)&&(flag8==1)&&(flag9==1)){
               // alert('It is a tie')
               para.innerText='It is a tie';
               d.style.display="block";
            }
        }
    
    }
    else {
        if (((btn4.innerText) == 'X') && ((btn6.innerText) == 'X')) {
            btn5.innerText = 'X';
           // alert('X win');
           para.innerText='X win';
           d.style.display="block";
        }
        else if(((btn2.innerText)=='X')&&((btn8.innerText)=='X')){
            btn5.innerText = 'X';
         //   alert('X win');
         para.innerText='X win';
         d.style.display="block";

        }
        else if(((btn1.innerText)=='X')&&((btn9.innerText)=='X')){
            btn5.innerText = 'X';
          //  alert('X win');
          para.innerText='X win';
          d.style.display="block";
        }
        else if(((btn3.innerText)=='X')&&((btn7.innerText)=='X')){
            btn5.innerText = 'X';
           // alert('X win');
           para.innerText='X win';
           d.style.display="block";
        }
        else{
            btn5.innerText = 'X';
            flag5=1;
            if((flag1==1)&&(flag2==1)&&(flag3==1)&&(flag4==1)&&(flag6==1)&&(flag7==1)&&(flag8==1)&&(flag9==1)){
               // alert('It is a tie')
               para.innerText='It is a tie';
               d.style.display="block";
            }
        }
    }
    moves--;
}
function clicking6() {
    if ((moves % 2) == 0) {
        if (((btn4.innerText) == 'O') && ((btn5.innerText) == 'O')) {
            btn6.innerText = 'O';
           // alert('O win');
           para.innerText='O win';
           d.style.display="block";
        }
        else if(((btn3.innerText)=='O')&&((btn9.innerText)=='O')){
            btn6.innerText = 'O';
          //  alert('O win');
          para.innerText='O win';
          d.style.display="block";

        }
     
        else{
            btn6.innerText = 'O';
            flag6=1;
            if((flag1==1)&&(flag2==1)&&(flag3==1)&&(flag4==1)&&(flag5==1)&&(flag7==1)&&(flag8==1)&&(flag9==1)){
               // alert('It is a tie')
               para.innerText='It is a tie';
               d.style.display="block";
            }
        }
        
    }
    else {
        if (((btn4.innerText) == 'X') && ((btn5.innerText) == 'X')) {
            btn6.innerText = 'X';
           // alert('X win');
           para.innerText='X win';
           d.style.display="block";
        }
        else if(((btn3.innerText)=='X')&&((btn9.innerText)=='X')){
            btn6.innerText = 'X';
           // alert('X win');
           para.innerText='X win';
           d.style.display="block";

        }
     
        else{
            btn6.innerText = 'X';
            flag6=1;
            if((flag1==1)&&(flag2==1)&&(flag3==1)&&(flag4==1)&&(flag5==1)&&(flag7==1)&&(flag8==1)&&(flag9==1)){
            //    alert('It is a tie')
            para.innerText='It is a tie';
           d.style.display="block";
            }
        }
    }
    moves--;
}
function clicking7() {
    if ((moves % 2) == 0) {
        if (((btn8.innerText) == 'O') && ((btn9.innerText) == 'O')) {
            btn7.innerText = 'O';
           // alert('O win');
           para.innerText='O win';
           d.style.display="block";
        }
        else if(((btn3.innerText)=='O')&&((btn5.innerText)=='O')){
            btn7.innerText = 'O';
          //  alert('O win');
          para.innerText='O win';
          d.style.display="block";

        }
        else if(((btn1.innerText)=='O')&&((btn4.innerText)=='O')){
            btn7.innerText = 'O';
          //  alert('O win');
          para.innerText='O win';
          d.style.display="block";
        }
        else{
            btn7.innerText = 'O';
            flag7=1;
            if((flag1==1)&&(flag2==1)&&(flag3==1)&&(flag4==1)&&(flag5==1)&&(flag6==1)&&(flag8==1)&&(flag9==1)){
                //alert('It is a tie')
                para.innerText='It is a tie';
                d.style.display="block";
            }
        }
        
    }
    else {
        if (((btn8.innerText) == 'X') && ((btn9.innerText) == 'X')) {
            btn7.innerText = 'X';
           // alert('X win');
           para.innerText='X win';
           d.style.display="block";
        }
        else if(((btn3.innerText)=='X')&&((btn5.innerText)=='X')){
            btn7.innerText = 'X';
         //   alert('X win');
         para.innerText='X win';
         d.style.display="block";

        }
        else if(((btn1.innerText)=='X')&&((btn4.innerText)=='X')){
            btn7.innerText = 'X';
          //  alert('X win');
          para.innerText='X win';
          d.style.display="block";
        }
        else{
            btn7.innerText = 'X';
            flag7=1;
            if((flag1==1)&&(flag2==1)&&(flag3==1)&&(flag4==1)&&(flag5==1)&&(flag6==1)&&(flag8==1)&&(flag9==1)){
                //alert('It is a tie')
                para.innerText='It is a tie';
                d.style.display="block";
            }
        }
    }
    moves--;
}
function clicking8() {
    if ((moves % 2) == 0) {
        if (((btn7.innerText) == 'O') && ((btn9.innerText) == 'O')) {
            btn8.innerText = 'O';
            //alert('O win');
            para.innerText='O win';
            d.style.display="block";
        }
        else if(((btn2.innerText)=='O')&&((btn5.innerText)=='O')){
            btn8.innerText = 'O';
        //    alert('O win');
        para.innerText='O win';
        d.style.display="block";

        }
     
        else{
            btn8.innerText = 'O';
            flag8=1;
            if((flag1==1)&&(flag2==1)&&(flag3==1)&&(flag4==1)&&(flag5==1)&&(flag6==1)&&(flag7==1)&&(flag9==1)){
               // alert('It is a tie')
               para.innerText='It is a tie';
               d.style.display="block";
            }
        }
        
    }
    else {
        if (((btn7.innerText) == 'X') && ((btn9.innerText) == 'X')) {
            btn8.innerText = 'X';
          //  alert('X win');
          para.innerText='X win';
          d.style.display="block";
        }
        else if(((btn2.innerText)=='X')&&((btn5.innerText)=='X')){
            btn8.innerText = 'X';
          //  alert('X win');
        
          para.innerText='X win';
          d.style.display="block";

        }
     
        else{
            btn8.innerText = 'X';
            flag8=1;
            if((flag1==1)&&(flag2==1)&&(flag3==1)&&(flag4==1)&&(flag5==1)&&(flag6==1)&&(flag7==1)&&(flag9==1)){
                //alert('It is a tie')
                para.innerText='It is a tie';
                d.style.display="block";
            }
        }
    }
    moves--;
}

function clicking9() {
    if ((moves % 2) == 0) {
        if (((btn7.innerText) == 'O') && ((btn8.innerText) == 'O')) {
            btn9.innerText = 'O';
          //  alert('O win');
          para.innerText='O win';
          d.style.display="block";
        }
        else if(((btn3.innerText)=='O')&&((btn6.innerText)=='O')){
            btn9.innerText = 'O';
        //    alert('O win');
        para.innerText='O win';
        d.style.display="block";

        }
        else if(((btn1.innerText)=='O')&&((btn5.innerText)=='O')){
            btn9.innerText = 'O';
         //   alert('O win');
         para.innerText='O win';
         d.style.display="block";
        }
        else{
            btn9.innerText = 'O';
            flag9=1;
            if((flag1==1)&&(flag2==1)&&(flag3==1)&&(flag4==1)&&(flag5==1)&&(flag6==1)&&(flag7==1)&&(flag8==1)){
            //    alert('It is a tie')
            para.innerText='It is a tie';
            d.style.display="block";
            }
        }
    }
    else {
        if (((btn7.innerText) == 'X') && ((btn8.innerText) == 'X')) {
            btn9.innerText = 'X';
           // alert('X win');
           para.innerText='X win';
           d.style.display="block";
        }
        else if(((btn3.innerText)=='X')&&((btn6.innerText)=='X')){
            btn9.innerText = 'X';
           // alert('X win');
           para.innerText='X win';
           d.style.display="block";

        }
        else if(((btn1.innerText)=='X')&&((btn5.innerText)=='X')){
            btn9.innerText = 'X';
           // alert('X win');
           para.innerText='X win';
           d.style.display="block";
        }
        else{
            btn9.innerText = 'X';
            flag9=1;
            if((flag1==1)&&(flag2==1)&&(flag3==1)&&(flag4==1)&&(flag5==1)&&(flag6==1)&&(flag7==1)&&(flag8==1)){
               // alert('It is a tie')
               para.innerText='It is a tie';
               d.style.display="block";
            }
        }
    }
    moves--;
};
// if((flag1==1)&&(flag2==1)&&(flag3==1)&&(flag4==1)&&(flag5==1)&&(flag6==1)&&(flag7==1)&&(flag8==1)&&(flag9==1)){
//     alert('It is a tie')
// }
function reset(){
    btn1.innerText=" ";
    btn2.innerText=" ";
    btn3.innerText=" ";
    btn4.innerText=" ";
    btn5.innerText=" ";
    btn6.innerText=" ";
    btn7.innerText=" ";
    btn8.innerText=" ";
    btn9.innerText=" ";
    flag1=0;
 flag2=0;
 flag3=0;
 flag4=0;
 flag5=0;
 flag6=0;
 flag7=0;
 flag8=0;
 flag9=0;
 d.style.display="none";
 moves=9;

}