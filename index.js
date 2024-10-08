function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  return fetch('https://anapioficeandfire.com/api/books')
  .then(response => {
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }
      return response.json(); // Parse the JSON from the response
  })
  .then(books => {
    renderBooks(books);
  })
  .catch(error => {
      console.error('Fetch error:', error);
      throw error; // Re-throw the error for further handling if needed
  });
  
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
