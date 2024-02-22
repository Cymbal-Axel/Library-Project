const addBook = document.getElementById("add-book-button");





const myLibrary = [];

function Book(title, author, pages){
    this.title = title;
    this.author = author;
    this.pages = pages;
}



function addBookToLibrary(){
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;

    const newBook = new Book(title, author, pages)
    const inputs = document.querySelectorAll('#title, #author, #pages');
    

    myLibrary.push(newBook);

    inputs.forEach(input =>{
        input.value = '';
    })
    
    console.log(myLibrary)
    
}

addBook.addEventListener("click", addBookToLibrary);