const addBook = document.getElementById("add-book-button");
const newBook = document.getElementById("new-book-button");

var bookCardDiv = document.getElementById("library-container");

const addBookCardToLibraryDiv = (book) => {
  	        var newDiv = document.createElement("div");
              newDiv.setAttribute("id", book.id); 

            var newTitle = document.createElement("span");
            var newH5 = document.createElement("h5");
            var titleContent = document.createTextNode(`title:  ${book.title}`);
              newTitle.setAttribute("id", book.id); 


            newH5.appendChild(titleContent);
            newTitle.appendChild(newH5);
            newDiv.appendChild(newTitle);

            var newAuthor = document.createElement("span");
            var newH5 = document.createElement("h5");
            var authorContent = document.createTextNode(`Author:  ${book.author}`);
              newAuthor.setAttribute("id", book.id);            

            newH5.appendChild(authorContent);
            newAuthor.appendChild(newH5);
            newDiv.appendChild(newAuthor);

            var newPages = document.createElement("span");
            var newH5 = document.createElement("h5");
            var pagesContent = document.createTextNode(`Pages:  ${book.pages}`);
              newPages.setAttribute("id", book.id);            



            newH5.appendChild(pagesContent);
            newPages.appendChild(newH5);
            newDiv.appendChild(newPages);
    
            bookCardDiv.appendChild(newDiv);


  
}




const myLibrary = [];


const deleteCard = (id, createDeleteButton) => {
    var buttonId = document.getElementById(createDeleteButton.id)
    buttonId.remove();

    myLibrary.forEach((book, index) => {
        if(book.id == id){
            var element = document.getElementById(book.id)
            myLibrary.splice(index, 1);
            element.remove();
        }   
    })
}

function Book(title, author, pages){
    var bookId =  crypto.randomUUID()
    var createDeleteButton = document.createElement("button");
    var buttonText = document.createTextNode("Delete");
        createDeleteButton.setAttribute("id", bookId);


    this.id = bookId
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.button = function(){
        

        //  var deleteButton = document.getElementById("delete-button");

         createDeleteButton.addEventListener("click", function(){
             deleteCard(bookId, createDeleteButton);
         }, false);


         createDeleteButton.appendChild(buttonText);
         bookCardDiv.appendChild(createDeleteButton); 



    }

}


function changeStyle(){
    document.getElementById("input-container").classList.remove('inputs-button');
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
        document.getElementById("input-container").classList.add('inputs-button');

    }


    const inputs = document.querySelectorAll('#title, #author, #pages');
    


    inputs.forEach(input =>{
        input.value = '';
    });

}


newBook.addEventListener("click", changeStyle)
addBook.addEventListener("click", addBookToLibrary);

