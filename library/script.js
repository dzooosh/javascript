const myLibrary = [
    {
        'author': 'Josh',
        'title': 'The Alien Invasion',
        'pages': 255,
        'read': false,
    },
    {
        'author': 'Tope',
        'title': 'The Alonge kingdom',
        'pages': 25500,
        'read': false,
    },
];``

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
const cardContainer = document.querySelector('.cards-container');
// display the books present in cards
function displayBooks() {
    console.log(myLibrary)
    // check if list is empty
    if (myLibrary.length === 0 || myLibrary == []) {
        console.log('Your library is empty')
    }
    // loop through library array and create cards for each element
    myLibrary.forEach((item) => {
        console.log(item.author);
        const card = document.createElement('div');
        card.className = 'card';
        const authorName = document.createElement('h4');
        authorName.innerHTML = `<u>Author</u> <br/> <em>${item.author}</em>`
        const title = document.createElement('h3');
        title.innerHTML = `<u>Title</u> <br/> <em>${item.title}</em>`
        const pageCount = document.createElement('h4');
        pageCount.innerHTML=`<u>Pages: </u><br/> ${item.pages}`;
        card.appendChild(title);
        card.appendChild(authorName);
        card.appendChild(pageCount);
        cardContainer.appendChild(card);
    })
}

// function to remove book
function removeBookFromLibrary() {
}

// function to display the info on the Library page

// Handle inputs for book details
// const title = document.getElementById('title');
// const pages = document.getElementById('pages');
// let readBook = false;
// // const readBook = document.getElementById('readBook')
// const addsBookButton = document.getElementById('newBook')

// console.log(title.value);
// console.log(pages.value);


// Check for click on Add New Book
// addsBookButton.addEventListener('click', () => {
//     addBookToLibrary(title.value, pages.value, readBook);
// })

displayBooks();
