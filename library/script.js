const myLibrary = [
    {
        'author': 'Josh',
        'title': 'The alien Invasion',
        'pages': 255,
        'read': false,
    },

];

// Book object
function Book(author, title, pages, readBook=false) {
        this.author = author;
        this.title = title;
        this.pages = pages;
        this.read = readBook;
}

// function to add new book into the Library array
function addBookToLibrary(author, title, pages, readBook) {
    // create a book instance
    let book = new Book(author, title, pages, readBook);
    // check if book present
    myLibrary.forEach((item) => {
        if (item.title === title) {
            alert("This book is already in your library");
        } else {
            myLibrary.push(book);
        }
    })
}

// display the books present in cards
function displayBooks() {
    console.log(myLibrary)
    // check if list is empty
    if (myLibrary.length === 0 || myLibrary == []) {
        console.log('Your library is empty')
    }
    // loop through library array and create cards for each element
    myLibrary.forEach((item) => {
        const card = document.createElement('div');
        card.className = 'card';
        const author = document.createTextNode(item.author);
        const title = document.createTextNode(item.title);
        const pageCount = document.createTextNode(`Pages: ${item.pages}`);
        card.appendChild(author)
        card.appendChild(title)
        card.appendChild(pageCount)

    })
}

// function to remove book
function removeBookFromLibrary() {
}

// function to display the info on the Library page

// Handle inputs for book details
const title = document.getElementById('title');
const pages = document.getElementById('pages');
let readBook = false;
// const readBook = document.getElementById('readBook')
const addsBookButton = document.getElementById('newBook')

console.log(title.value);
console.log(pages.value);


// Check for click on Add New Book
// addsBookButton.addEventListener('click', () => {
//     addBookToLibrary(title.value, pages.value, readBook);
// })

displayBooks();
