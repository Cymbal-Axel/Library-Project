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

    if(title || author || pages){
        const newBook = new Book(title, author, pages)
        myLibrary.push(newBook);
    }

    const inputs = document.querySelectorAll('#title, #author, #pages');
    


    inputs.forEach(input =>{
        input.value = '';
    });


}


addBook.addEventListener("click", addBookToLibrary);


