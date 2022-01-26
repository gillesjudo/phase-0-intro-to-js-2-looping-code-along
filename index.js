// Code your solutions in this file
const thankYouCards=[]
function writeCards(giftGivers, giftType) {
    for(let i = 0; i < giftGivers.length; i++) {
      thankYouCards.push(`Thank you, ${giftGivers[i]}, for the wonderful ${giftType} gift!`);
      debugger;
    }
    return thankYouCards;
    }
  function countDown(number){
  while(number >= 0) {
  console.log(number--)
  debugger;
  }
  return number;
  }
  