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

    if(myLibrary.length >= 1){
        myLibrary.forEach(object => {
            var displayBooks = document.getElementById("library-container");
                    
            var newDiv = document.createElement("div");
            var newTitle = document.createElement("span");
            var newH3 = document.createElement("h3");
    
            var titleContent = document.createTextNode(object.title);

                newH3.appendChild(titleContent);

                newTitle.appendChild(newH3);
    
                newDiv.appendChild(newTitle);
    
                displayBooks.appendChild(newDiv);
            

        })
    }

}

//iterar sobre el array de objetos y sobre el elemento del objeto acceder a la informacion, por ejemplo: myLibrary[0].title/myLibrary[0].pages/myLibrary[0].author


addBook.addEventListener("click", addBookToLibrary);

