
console.log('working');

fetch('/api/books')
    .then((res) => res.json())
    .then((data) => {
        console.log(`book data`)
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

async function displayBooks(arr) {
    const div = document.querySelector('#books');

    await arr.forEach(book => {
        const card = document.createElement('div');
        card.classList.add('book-card');
        
        card.appendChild(bookCard(book));

        const btnContainerElement = btnContainer();
        card.appendChild(btnContainerElement);
        
        div.appendChild(card);
    });
}

function btnContainer() {
    const btnContainer = document.createElement('div');
    btnContainer.classList.add('btn-container'); 

    const updateBtn = document.createElement('button');
    updateBtn.textContent = 'Update Book';
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Remove Book';

    btnContainer.appendChild(updateBtn);
    btnContainer.appendChild(deleteBtn);

    return btnContainer;
}

function bookCard(obj) {
    const { title, author, rating, status } = obj;
    const bookCard = document.createElement('div');
    bookCard.classList.add('book-info'); 

    bookCard.innerHTML = `<h1>${title}</h1> <p>Author: ${author}</p> <p>Rating: ${rating}</p><p> Status: ${status}</p>`;

    return bookCard;
}

displayBooks(books);