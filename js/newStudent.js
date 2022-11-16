// console.log("Welcome to Magic Notes:");
// showNotes();

// //Function to show elements from localStorage
// function showNotes() {
//     let tablebody = localStorage.getItem("tablebody");
//     if (tablebody == null) {
//         notesObj = [];
//     }
//     else {
//         notesObj = JSON.parse(tablebody);
//     }
//     let uiString = "";
//     // let html = "";
//     notesObj.forEach(function (element) {
//         // html += `
//         // <div class="noteCard my-2 ms-2 card" style ="width: 18rem;">
//         // <div class ="card-body">
//         // <h5 class = "card-title">${element.title}</h5>
//         // <p class= "card-text">${element.text}</p> 
//         // </div>
//         // </div>`
//         console.log("Adding to UI");
//         let tableBody = document.getElementById('tablebody');
//          uiString += `<tr>
//                             <td>${element.title}</td>
//                             <td>${element.text}</td>
                           
//                         </tr>`;
//         tableBody.innerHTML += uiString;
//     });
//     let notesElm = document.getElementById("tablebody");
//     if (notesObj.length != 0) {
//         notesElm.innerHTML = uiString;
//     }
//     else {
//         notesElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
//     }
// }
// //if user adds a note,add it to localStorage
// let addBtn = document.getElementById("addBtn");
// addBtn.addEventListener("click", submit);
//     function submit(e){
//     // let addTxt = document.getElementById("addTxt");
//     // let addTitle = document.getElementById("addTitle");
//     let addAuthor = document.getElementById("student");
//     let addBook = document.getElementById("bookName");
//     let tablebody = localStorage.getItem("tablebody");
//     if (tablebody == null) {
//         notesObj = [];
//     }
//     else {
//         notesObj = JSON.parse(tablebody);
//     }
//     let myObj = {
//         title: addBook.value,
//         text: addAuthor.value
//     }
//     notesObj.push(myObj);
//     localStorage.setItem("tablebody", JSON.stringify(notesObj));
//     addAuthor.value = "";
//     addBook.value = "";
//     // console.log(notesObj);
//     showNotes();
// e.preventDefault();
// }
console.log('This is ES6 version of Project 2');
class Book {
    constructor(name, Author, type) {
        this.name = name;
        this.author = Author;
        this.type = type;
    }
}

class Display
 {
    add(book) {
        console.log("Adding to UI");
        let tableBody = document.getElementById('tableBody');
        let uiString = `<tr>
                            <td>${book.name}</td>
                            <td>${book.author}</td>
                            <td>${book.type}</td>
                        </tr>`;
        tableBody.innerHTML += uiString;
    }

    clear() {
        let libraryForm = document.getElementById('libraryForm');
        libraryForm.reset();
    }

    validate(book) {
        if (book.name.length < 2 || book.author.length < 2) {
            return false
        }
        else {
            return true;
        }
    }

    show(type, displayMessage) {
        let message = document.getElementById('message');
        let boldText;
        if(type==='success'){
            boldText = 'Success';
        }
        else{
            boldText = 'Error!';
        }
        message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                                <strong>${boldText}:</strong> ${displayMessage}
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">×</span>
                                </button>
                            </div>`;
        setTimeout(function () {
            message.innerHTML = ''
        }, 5000);
    
    }
}

// Add submit event listener to libraryForm
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {
    console.log('YOu have submitted library form');
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;
    let type;
    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
    let cooking = document.getElementById('cooking');

    if (fiction.checked) {
        type = fiction.value;
    }
    else if (programming.checked) {
        type = programming.value;
    }
    else if (cooking.checked) {
        type = cooking.value;
    }

    let book = new Book(name, author, type);
    console.log(book);

    let display = new Display();

    if (display.validate(book)) {

        display.add(book);
        display.clear();
        display.show('success', 'Your book has been successfully added')
    }
    else {
        // Show error to the user
        display.show('danger', 'Sorry you cannot add this book');
    }

    e.preventDefault();
}

