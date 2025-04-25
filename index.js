const bookStore = {
    name: 'Flatbooks Technical Books',
    books: [
        {
            id:1,
            title: 'Eloquent JavaScript: A Modern Introduction to Programming',
            author: 'Marjin Haverbeke',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51IKycqTPUL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
            
        },
        {
            id:2,
            title: 'JavaScript & JQuery: Interactive Front-End Web Development',
            author: 'Jon Duckett',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/31SRWF+LkKL._SX398_BO1,204,203,200_.jpg'
        },
        {
            id:3,
            title: 'JavaScript: The Good Parts',
            author: 'Douglas Crockford',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/5131OWtQRaL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
        },
        {
            id:4,
            title: 'JavaScript: The Definitive Guide',
            author: 'David Flanagan',
            imageUrl: "https://images-na.ssl-images-amazon.com/images/I/51wijnc-Y8L._SX379_BO1,204,203,200_.jpg"
            
        },
        {
            id:5,
            title: 'You Don’t Know JS',
            author: 'Kyle Simpson',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41T5H8u7fUL._SX331_BO1,204,203,200_.jpg'
        },
        {
            id:6,
            title: 'Cracking the Coding Interview',
            author: 'Gayle Laakmann McDowell',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41oYsXjLvZL._SY344_BO1,204,203,200_.jpg'
            
        }
    ]
}

// Select the header element and update it
const bookStoreTitle = document.getElementById('header');
bookStoreTitle.textContent = bookStore.name;

// Function to display a single book
const showSingleBook = (book) => {
    const bookContainer = document.createElement('div');
    bookContainer.classList.add('book-container');

    const bookImage = document.createElement('img');
    bookImage.src = book.imageUrl;
    bookImage.alt = book.title;

    const bookTitle = document.createElement('h3');
    bookTitle.textContent = book.title;

    const bookAuthor = document.createElement('p');
    bookAuthor.textContent = `by ${book.author}`;

    bookContainer.appendChild(bookImage);
    bookContainer.appendChild(bookTitle);
    bookContainer.appendChild(bookAuthor);

    return bookContainer;
}

// Function to display all books
const showAllBooks = (books) => {
    const booksContainer = document.createElement('div');
    booksContainer.classList.add('books-container');

    books.forEach(book => {
        const bookElement = showSingleBook(book);
        booksContainer.appendChild(bookElement);
    });

    return booksContainer;
}

// Get the app element and append the bookstore content
const appElement = document.getElementById('app');
const bookStoreElement = showAllBooks(bookStore.books);
appElement.appendChild(bookStoreElement);

console.log("Bookstore Name: ", bookStore.name);
console.log("Books Array: ", bookStore.books);
