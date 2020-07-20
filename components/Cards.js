// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

const axios = require('axios');

axios.get('https://lambda-times-backend.herokuapp.com/articles')


.then(response => {

    const bootstrapArray = response.data.articles.bootstrap;
    console.log(bootstrapArray);
    bootstrapArray.forEach(item => {
    const cardsContainer = document.querySelector(".cards-container");
    cardsContainer.appendChild(articleCardMaker(item));
    });

    const javascriptArray = response.data.articles.javascript;
    console.log(javascriptArray);
    javascriptArray.forEach(item => {
    const cardsContainer = document.querySelector(".cards-container");
    cardsContainer.appendChild(articleCardMaker(item));
    })

    const technologyArray = response.data.articles.technology;
    console.log(technologyArray);
    technologyArray.forEach(item => {
    const cardsContainer = document.querySelector(".cards-container");
    cardsContainer.appendChild(articleCardMaker(item));
    })

    const jqueryArray = response.data.articles.jquery;
    console.log(jqueryArray);
    jqueryArray.forEach(item => {
    const cardsContainer = document.querySelector(".cards-container");
    cardsContainer.appendChild(articleCardMaker(item));
    })

    const nodeJsArray = response.data.articles.node;
    console.log(nodeJsArray);
    nodeJsArray.forEach(item => {
    const cardsContainer = document.querySelector(".cards-container");
    cardsContainer.appendChild(articleCardMaker(item));
    })
  
  })
  
  .catch(function(error) {
    console.log("error!", error);
  })
  
  .then(function() {
  });

  function articleCardMaker(obj) {
      const articleCard = document.createElement("div");
      const articleHeadline = document.createElement("div");
      const articleAuthor = document.createElement("div");
      const articleImageContainer = document.createElement("div");
      const articleImage = document.createElement("img");
      const articleAuthorName = document.createElement("span");

      articleCard.classList.add("card");
      articleHeadline.classList.add("headline");
      articleAuthor.classList.add("author");
      articleImageContainer.classList.add("img-container");

      articleHeadline.textContent = obj.headline;
      articleImage.src = obj.authorPhoto;
      articleAuthorName.textContent = "By " + obj.authorName;

      articleCard.append(articleHeadline, articleAuthor);
      articleAuthor.append(articleImageContainer, articleAuthorName);
      articleImageContainer.appendChild(articleImage);

      articleCard.addEventListener("click", () => {
          console.log(obj.headline);
      })
      
      return articleCard;
  }


  
  
  
