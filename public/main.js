
console.log('working');
const addBook = document.querySelector('#bookForm')

fetch('/api/books')
    .then((res) => res.json())
    .then((data) => {
        console.log(data.rows)
        const books = data.rows
        displayBooks(books)
    }) 

// const books = [
//     {
//         id: 1,
//         title: 'To Kill a Mockingbird',
//         author: 'Harper Lee',
//         rating: 4,
//         status: 'unread'
//     },
//     {
//         id: 2,
//         title: '1984',
//         author: 'George Orwell',
//         rating: 4,
//         status: 'unread'
//     },
//     {
//         id: 3,
//         title: 'The Great Gatsby',
//         author: 'F. Scott Fitzgerald',
//         rating: 4,
//         status: 'read'
//     },
//     {
//         id: 4,
//         title: 'The Catcher in the Rye',
//         author: 'J.D. Salinger',
//         rating: 4,
//         status: 'unread'
//     },
//     {
//         id: 5,
//         title: 'To the Lighthouse ',
//         author: 'Virginia Woolf',
//         rating: 4,
//         status: 'unread'
//         },
//         {
//         id: 2,
//         title: 'The Hobbit',
//         author: 'J.R.R. Tolkien',
//         rating: 4,
//         status: 'read'
//         },
//         {
//         id: 1,
//         title: 'The Da Vinci Code',
//         author: 'Dan Brown',
//         rating: 4,
//         status: 'read'
//         },
//         {
//         id: 8,
//         title: 'Pride and Prejudice',
//         author: 'Jane Austen',
//         rating: 4,
//         status: 'unread'
//         },
// ]

// Show books if any in library curently
async function displayBooks(arr) {
    const div = document.querySelector('#books');
    console.log(`displayBooks(${arr})`);
    await arr.forEach(elem => {
        console.log(`forEach method: ${elem.id}`);
        const card = document.createElement('div');
        card.classList.add('book-card');
        
        card.appendChild(bookCard(elem));

        const btnContainerElement = btnContainer(elem);
        card.appendChild(btnContainerElement);
        
        div.appendChild(card);
    });
}

// creates button containers dynamically
function btnContainer(obj) {
    const btnContainer = document.createElement('div');
    btnContainer.classList.add('btn-container'); 

    const updateBtn = document.createElement('button');
    updateBtn.textContent = 'Update Book';
    updateBtn.addEventListener('click', () => toggleModal('update', obj.id))

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Remove Book';
    deleteBtn.addEventListener('click', () => removeBook(obj.id))
    

    btnContainer.appendChild(updateBtn);
    btnContainer.appendChild(deleteBtn);

    return btnContainer;
}

// creates the information for the book card
function bookCard(obj) {
    const { title, author, rating, status } = obj
    const bookCard = document.createElement('div')
    bookCard.classList.add('book-info') 

    bookCard.innerHTML = `<h1>${title}</h1> <p>Author: ${author}</p> <p>Rating: ${rating}</p><p> Status: ${status}</p>`;

    return bookCard
}

// Show form to add book
function toggleModal(mode, bookId = null) {
    const modal = document.querySelector('#addBook');
    modal.classList.toggle('modal-active');

    const formSubmitBtn = document.querySelector('#formSubmitBtn');
    formSubmitBtn.dataset.mode = mode;
    formSubmitBtn.dataset.id = bookId;

    // Clear form fields if adding a new book
    if (mode === 'add') {
        document.getElementById('bookForm').reset();
    }
}

  
// Adding a new book 
const addBookBtn = document.querySelector('#c2aBtn')
const displayArea = document.querySelector('#books')

addBookBtn.addEventListener('click', () => toggleModal('add'))
async function submitForm() {
    const title = document.getElementById('book-title').value;
    const author = document.getElementById('book-author').value;
    const rating = document.getElementById('book-rating').value;
    const status = document.getElementById('book-status').value;

    const formSubmitBtn = document.querySelector('#formSubmitBtn');
    const isUpdate = formSubmitBtn.dataset.mode === 'update';
    const url = isUpdate ? `/api/books/${formSubmitBtn.dataset.id}` : '/api/books';

    const method = isUpdate ? 'PUT' : 'POST';

    const newBook = { title, author, rating, status };

    try {
        const response = await fetch(url, {
            method,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newBook),
        });

        if (response.ok) {
            location.reload(); 
        } else {
            console.error('Failed to add/update book');
        }
    } catch (error) {
        console.error(error.message);
    }
}


// updateBook 
function openUpdateForm(book) {
    document.querySelector('#book-title').value = book.title;
    document.querySelector('#book-author').value = book.author;
    document.querySelector('#book-rating').value = book.rating;
    document.querySelector('#book-status').value = book.status;

    toggleModal('update', book.id);
}


// Delete Book Function 
async function removeBook(bookId) {
    try {
        const res = await fetch(`api/books/${bookId}`, {
            method: 'DELETE',
        });

        if (res.ok) {
            const bookCard = document.querySelector(`#book-${bookId}`);
            bookCard.remove(); // Remove the book card from the DOM
        } else {
            console.error('Failed to remove book');
        }
    } catch (error) {
        console.error(error.message);
    }
}


//   displayBooks(books)