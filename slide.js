var ig,cont,t;
function imgStart(){
ig = new Array();
ig[0]="slide3.jpg";ig[ 1 ]="slide4.jpg"; ig[ 2 ]="slide2.jpg"; ig[ 3 ]="slide5.jpg";ig[ 4 ]="slide1.jpg";
document.ig.src =ig[0];
cont = 0;
t=setInterval('imgDis()',3000);
}
function imgDis()
{
if (cont < 5)
{
document.ig.src = ig[ cont ];
cont = cont + 1;
}
else
cont = 0;
}
function imgStop()
{
clearInterval(t);
}
