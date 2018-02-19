function forLoop (array)
{
  for (let i = 0; i < 25; i++)
  {
    if (i === 1)
    {
      array.push("I am 1 strange loop.");
    }
    else
    {
      array.push(`I am ${i} strange loops.`);
    }
  }
}

function whileLoop (number)
{
  while (number > 0)
  {
    console.log(number);
    number--;
  }
  return ('done');
}

function doWhileLoop (array)
{
  
}

function maybeTrue() {
  return Math.random() >= 0.5 // Returns a random number between 0 (inclusive) and 1 (exclusive)
}
 
// run until `maybeTrue()` returns `false`
// (so the body of the loop might _never_ run!)
while (maybeTrue()) {
  console.log("And I ran; I ran so far away!");
}



