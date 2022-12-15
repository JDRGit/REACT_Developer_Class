// Menu data structure, DO NOT modify it in any way. Line 2 to 7.
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];

let mainEl = document.querySelector("main");
mainEl.style.backgroundColor = 'var(--main-bg)';
mainEl.innerHTML = '<h1>SEI Rocks!</h1>';
mainEl.classList.add('flex-ctr'); 
  
let  topMenuEl = document.getElementById('top-menu');
topMenuEl.style.height = '100%';
topMenuEl.style.backgroundColor = 'var( --top-menu-bg)';
topMenuEl.classList.add('flex-around');

for(let i in menuLinks){

    let a = document.createElement('a');
    a.textContent = menuLinks[i].text;
    a.setAttribute('href','menuLink[i].href');
    topMenuEl.appendChild(a);

}


// Tasks
// Task 1.0
// Select and cache the <main>element in a variable named mainEl.

// Task 1.1
// Set the background color of mainElto the value stored in the --main-bgCSS custom property.

// Hint: Assign a string that uses the CSS var()function like this:
// 'var(--main-bg)'

// Task 1.2
// Set the content of mainElto <h1>SEI Rocks!</h1>.

// Task 1.3
// Add a class of flex-ctrto mainEl.

// Task 2.0
// Select and cache the <nav id="top-menu">element in a variable named topMenuEl.

// Task 2.1
// Set the height topMenuElelement to be 100%.

// Task 2.2
// Set the background color of topMenuElto the value stored in the --top-menu-bgCSS custom property.

// Task 2.3
// Add a class of flex-aroundto topMenuEl.

// Task 3.0
// Copy the following data structure to the top of script.js:
// // Menu data structure
// var menuLinks = [
//     {text: 'about', href: '/about'},
//     {text: 'catalog', href: '/catalog'},
//     {text: 'orders', href: '/orders'},
//     {text: 'account', href: '/account'},
//   ];

//   Task 3.1
// Iterate over the entire menuLinksarray and for each "link" object:

// Create an <a>element.
// On the new element, add an hrefattribute with its value set to the hrefproperty of the "link" object.
// Set the new element's content to the value of the textproperty of the "link" object.
// Append the new element to the topMenuElelement.