const CardDiv = document.createElement('div');
CardDiv.className = 'card';

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

  const articles = article.articles;

  for (const property in articles) {
    const arr = articles[property];
    arr.forEach(item => {

      const headlineDiv = document.createElement('div');
      headlineDiv.className = 'headline';
      headlineDiv.textContent = item.headline;

      const authorDiv = document.createElement('div');
      authorDiv.className = 'author';

      const imgDiv = document.createElement('div');
      imgDiv.className = 'img-container';

      const img = document.createElement('img');
      img.src = item.authorPhoto;

      const authorSpan = document.createElement('span');
      authorSpan.textContent = 'By ' + item.authorName;

      CardDiv.appendChild(headlineDiv);
      imgDiv.appendChild(img);
      authorDiv.appendChild(imgDiv);
      authorDiv.appendChild(authorSpan);
      CardDiv.appendChild(authorDiv);
    })
  }
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

  fetch('https://lambda-times-api.herokuapp.com/articles').then(res => {
    if (res.ok) {
      return res.json();
    }
    throw new Error(res)
  })
  .catch(console.err)
  .then(res => {
    Card(res);
  })
  
  document.querySelector(selector).appendChild(CardDiv);
}

export { Card, cardAppender }
