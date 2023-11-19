
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

async function displayBooks(arr) {
    const div = document.querySelector('#books');
    console.log(`displayBooks(${arr})`);
    await arr.forEach(elem => {
        console.log(`forEach method: ${elem}`);
        const card = document.createElement('div');
        card.classList.add('book-card');
        
        card.appendChild(bookCard(elem));

        const btnContainerElement = btnContainer(elem.id);
        card.appendChild(btnContainerElement);
        
        div.appendChild(card);
    });
}

function btnContainer(book) {
    const btnContainer = document.createElement('div');
    btnContainer.classList.add('btn-container'); 

    const updateBtn = document.createElement('button');
    updateBtn.textContent = 'Update Book';
    updateBtn.addEventListener('click', () => openUpdateForm(book))

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Remove Book';
    deleteBtn.addEventListener('click', () => removeBook(id))

    btnContainer.appendChild(updateBtn);
    btnContainer.appendChild(deleteBtn);

    return btnContainer;
}

function openUpdateForm(book) {
    console.log(`openUpdateForm book: ${book}`);
    document.querySelector('#title').value = book.title
    document.querySelector('#author').value = book.author
    document.querySelector('#rating').value = book.rating
    document.querySelector('#status').value = book.status

    toggleModal()
}

// Delete book
async function removeBook(bookId) {
    try {
        const res = await fetch(`api/books/${bookId}`, {
            method: 'DELETE',
        })
        if (res.ok) {
            location.reload()
        } else {
            console.error('Failed to remove book')
        }
    } catch (error) {
        console.error(error.message)
    }
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
function toggleModal() {
    const modal = document.querySelector('#addBook')
    modal.classList.toggle('modal');
  }
  
// Adding a new book 
  const addBookBtn = document.querySelector('#c2aBtn')
  
  addBookBtn.addEventListener('click', toggleModal)

  bookForm.addEventListener('submit', async function(event){
    event.preventDefault();
    const formData = {
        title: document.querySelector('#title').value,
        author: document.querySelector('#author').value,
        rating: document.querySelector('#rating').value,
        status: document.querySelector('#status').value
    }
    const newBook = { title, author, rating, status };
  
    try {
      const res = await fetch('/api/books', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newBook),
      })
  
      if (res.ok) {
        location.reload();
      } else {
        console.error('Failed to add book')
      }
    } catch (error) {
      console.error(error.message)
    }
  })

//   displayBooks(books)