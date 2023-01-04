let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  

  // Part 1
  
  document.querySelector('#main-title').innerHTML = 'Jaime DOM Homepage';
  

  // Part 2
  document.querySelector('body').style.backgroundColor = "#d7465f"; 

  // Part 3
  const favoriteThings = document.querySelectorAll('#favorite-things li');
  favoriteThings[favoriteThings.length-1].remove();
 
  // Part 4
  const specialTitle = document.querySelectorAll(`.special-title`);
  for (let i = 0; i < specialTitle.length; i++) {
    specialTitle[i].style.fontSize = '2rem';
  }

  // Part 5
  const lists = document.querySelectorAll("#past-races li");
  lists.forEach((e) => {
    if (e.innerText == "Chicago") e.parentNode.removeChild(e);
  });

  // Part 6
  const newlist = document.getElementById('past-races');
  let newItem = document.createElement('li');
  newItem.textContent = 'San Francisco';
  newlist.appendChild(newItem);

  // Part 7

  let div = document.createElement('div');
  let mainDiv = document.querySelector('.main');
  div.classList.add('blog-post');
  div.classList.add('purple');
  mainDiv.appendChild(div);

  let h1 = document.createElement('h1');
  h1.innerHTML = 'San Franciso';
  div.appendChild(h1);

  let p = document.createElement('p');
  p.innerHTML = 'I had a great time racing in San Francisco. The course was challenging, but the views were beautiful.';
  div.appendChild(p);

  // Part 8
  const quoteTitle = document.querySelector('#quote-title');
  quoteTitle.addEventListener('click', randomQuote);

  // Part 9
  let blogPosts = document.querySelectorAll('.blog-post');

  for (let i = 0; i < blogPosts.length; i++) {
  blogPosts[i].addEventListener('mouseout', function() {
    this.classList.toggle('purple');
  });

  blogPosts[i].addEventListener('mouseenter', function() {
    this.classList.toggle('red');
  });
}

});
