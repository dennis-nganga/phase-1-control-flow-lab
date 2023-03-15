function scuberGreetingForFeet(_distanceInFeet){
  if (_distanceInFeet<=400){
    return `This one is on me!`
  } else if (_distanceInFeet > 2000 && _distanceInFeet<= 2500){
    return 'I will gladly take your thirty bucks.';
  } else {
    return 'No can do.';
  } 

}

function ternaryCheckCity(city){
  const response = city === "NYC"?"Ok, sounds good." : "No go.";
return response;  
}

function switchOnCharmFromTip(tip) {
  switch(tip) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default:
      return 'Bye.';
  }
}