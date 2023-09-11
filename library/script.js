const myLibrary = [];

// Book object
function Book(title, pages, readBook=false) {
        this.title = title;
        this.pages = pages;
        this.read = readBook;
}

// function to add new book into the Library array
function addBookToLibrary(title, pages, readBook) {
    // create a book instance
    let book = new Book(title, pages, readBook);
    myLibrary.push(book);
    console.log(myLibrary)
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
addsBookButton.addEventListener('click', () => {
    addBookToLibrary(title.value, pages.value, readBook);
})