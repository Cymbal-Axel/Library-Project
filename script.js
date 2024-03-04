const addBook = document.getElementById("add-book-button");

var bookCardDiv = document.getElementById("library-container");

const addBookCardToLibraryDiv = (book) => {
  
  	        var newDiv = document.createElement("div");
             newDiv.setAttribute("id", book.id); 

            var newTitle = document.createElement("span");
            var newH5 = document.createElement("h5");
            var titleContent = document.createTextNode(`title:  ${book.title}`);

            newH5.appendChild(titleContent);
            newTitle.appendChild(newH5);
            newDiv.appendChild(newTitle);

            var newAuthor = document.createElement("span");
            var newH5 = document.createElement("h5");
            var authorContent = document.createTextNode(`Author:  ${book.author}`);

            newH5.appendChild(authorContent);
            newAuthor.appendChild(newH5);
            newDiv.appendChild(newAuthor);

            var newPages = document.createElement("span");
            var newH5 = document.createElement("h5");
            var pagesContent = document.createTextNode(`Pages:  ${book.pages}`);

            newH5.appendChild(pagesContent);
            newPages.appendChild(newH5);
            newDiv.appendChild(newPages);
    
            bookCardDiv.appendChild(newDiv);
  
}


 const deleteCard = (id) => {
    console.log(id)
}

const myLibrary = [];

function Book(title, author, pages){
    bookId =  crypto.randomUUID()
    this.id = bookId
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.button = function(){
        var createDeleteButton = document.createElement("button");
        var buttonText = document.createTextNode("Delete");

        createDeleteButton.setAttribute("id", "delete-button"); 

         var deleteButton = document.getElementById("delete-button");

         createDeleteButton.addEventListener("click", function(){
             deleteCard(bookId.saraza);
         }, false);



        createDeleteButton.appendChild(buttonText);
        bookCardDiv.appendChild(createDeleteButton);


    }

}


function addBookToLibrary(){
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;

    if(title || author || pages){
        const newBook = new Book(title, author, pages)
        myLibrary.push(newBook);
        addBookCardToLibraryDiv(newBook);
        newBook.button()
    }


    const inputs = document.querySelectorAll('#title, #author, #pages');
    


    inputs.forEach(input =>{
        input.value = '';
    });

}



addBook.addEventListener("click", addBookToLibrary);

