const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

  const cardDiv = document.createElement('div');
  cardDiv.className = 'card';

  const headlineDiv = document.createElement('div');
  headlineDiv.className = 'headline';
  headlineDiv.textContent = article.headline;

  const authorDiv = document.createElement('div');
  authorDiv.className = 'author';

  const imgDiv = document.createElement('div');
  imgDiv.className = 'img-container';

  const img = document.createElement('img');
  img.src = article.authorPhoto;

  const authorName = document.createElement('span');
  authorName.textContent = 'By ' + article.authorName;

  imgDiv.appendChild(img);
  authorDiv.appendChild(imgDiv);
  authorDiv.appendChild(authorName);
  cardDiv.appendChild(headlineDiv);
  cardDiv.appendChild(authorDiv);
  document.querySelector('.cards-container').appendChild(cardDiv);
}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  
  axios.get('https://lambda-times-api.herokuapp.com/articles')
    .then(response => {
      // Tabs(response.data.topics); //no .topics??
    })
    .catch(error => {
      console.log('error:', error);
    })
}

export { Card, cardAppender }
