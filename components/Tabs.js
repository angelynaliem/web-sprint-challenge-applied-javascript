// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element


const axios = require('axios');

axios.get('https://lambda-times-backend.herokuapp.com/topics')

.then(response => {
  console.log(response.data.topics);

  const tabData = response.data.topics;
  console.log(tabData);

  tabData.forEach((item) => {
      const topic = document.createElement("div");
      topic.textContent = item;
      topic.classList.add("tab");
      const topics = document.querySelector(".topics");
      topics.appendChild(topic);
      console.log(topic);
    
  })


//   response.data.topics.forEach(item, i => {
//       const topic = document.createElement("div");
//       item[i].textContent = response.data.topics.item[i];
//       const topics = document.querySelector(".topics");
//       topics.appendChild(topic);

//   })
})

.catch(function(error) {
  console.log("error!", error);
})

.then(function() {
});


