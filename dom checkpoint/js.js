
/*declacration*/
const heart=document.getElementsByClassName('fa-heart')
const btn_plus=document.getElementsByClassName('Qtn-plus')
const Qtn=document.getElementsByClassName('Qty')
const btn_moins=document.getElementsByClassName('Qtn-minus')
const price=document.getElementsByClassName('price')
const amount=document.getElementsByClassName('amount')
const total=document.getElementsByClassName('total')
console.log(total[0].innerText)

/*fonction heart */
for (let i=0; i < heart.length ; i++)
{

  heart[i].addEventListener('click',function()
{
  heart[i].classList.toggle('changecolor')  
})
}

/* bouton plus */

for (let i=0; i < btn_plus.length ; i++)
{

  btn_plus[i].addEventListener('click', function(){
    var total=0
    Qtn[i].value++
    amount[i].innerText=Number(amount[i].innerText)+Number(price[i].value)
    total=Number(total)+Number(amount[i].innerText)
    total[0].innerHTML=total


  })
}

/*bouton moins*/

for (let i=0; i < btn_moins.length ; i++)
{
  btn_moins[i].addEventListener('click', function(){
    if (Qtn[i].value>0)
    {
    Qtn[i].value--
    }
    else { Qtn[i].value=0 }

  })
}








