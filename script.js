let bookTitle = document.querySelector('.title');
let bookAuthor = document.querySelector('.author');
let button = document.getElementById('save');

let searchButton = document.getElementById('search')
let searchInput = document.getElementById('search-input')
let real = document.getElementById('real')


button.addEventListener('click', function () {
  let title = bookTitle.value;
  let author = bookAuthor.value;
  console.log(`Button clicked`);
  if (title && author) {

    let books = JSON.parse(localStorage.getItem("books")) || [];

    books.push({title, author })
    localStorage.setItem("books", JSON.stringify(books));
    console.log("Book Added", {title, author})
    bookTitle.value = "";
    bookAuthor.value = "";
    console.log('Inputs cleared');
  } else {
    alert("Please Enter Both Title and Author");
  }
});

searchButton.addEventListener('click', function() {
  let searchValue = searchInput.value;

  if(!searchValue) alert("Please Enter an input to search");

  let books = JSON.parse(localStorage.getItem("books")) || [];

  let foundTitle = books.find(book => book.title === searchValue);
  let foundAuthor = books.find(book => book.author);
  console.log(foundTitle);
  console.log(foundAuthor);

  real.textContent = `"Title": ${foundTitle.title} \n\ "Author": ${foundTitle.author} \n`;
  searchInput.value = "";
})

// if(document.width == "430px") {
//   real.style.width = "500px";
// }