const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //

  const headerDiv = document.createElement('div');
  headerDiv.className = 'header';

  const dateSpan = document.createElement('span');
  dateSpan.className = 'date';
  dateSpan.textContent = date;

  const heading = document.createElement('h1');
  heading.textContent = title;

  const tempSpan = document.createElement('span');
  tempSpan.className = 'temp';
  tempSpan.textContent = temp;

  headerDiv.appendChild(dateSpan);
  headerDiv.appendChild(heading);
  headerDiv.appendChild(tempSpan);
}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //

  Header('Any', '10/28/20', '29 degrees F');

  const headerDiv = document.querySelector('.header');
  document.querySelector(selector).appendChild(headerDiv);
}

export { Header, headerAppender }
