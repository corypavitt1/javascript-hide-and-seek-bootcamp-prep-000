  function getFirstSelector(selector){
    return (document.querySelector(selector))
  }

  function nestedTarget() {
return(document.getElementById('nested').querySelector('.target'))

  }
function deepestChild() {
<<<<<<< HEAD
  return (document.getElementById('grand-node').querySelectorAll('div')[3])
}

function increaseRankBy(n) {
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')

for (let i = 0; i < lis.length; i++) {
  lis[i].innerHTML = parseInt(lis[i].innerHTML) +n
}

=======
  return (document.getelementbyId('grand-node').lastChildelement)
>>>>>>> 057cc1eb62485f4dbd88f3b844daeccb4752da1f
}
