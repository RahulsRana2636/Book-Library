console.log("Welcome to College Library:");
add();
let data= JSON.parse(localStorage.getItem('notes'));
console.log(data);
class Library{
    constructor(booklist,booksObj){
        this.booklists = booklist;
        this.issuedBooks= booksObj;
    }
    getBooklists(){
        this.booklists.forEach(element => {
            console.log(element);
        });
    }
    issueBook(bookname){
        // this.bookname=bookname.bName;

        // this.student = bookname.sName;
        this.element= bookname;
    if(this.issuedBooks[bookname.bName]==undefined){
            this.issuedBooks[bookname.bName]= bookname.sName;
            this.issuedBooks.push(this.element);
            localStorage.setItem("books", JSON.stringify(this.issuedBooks));
            add();
    }
        // if(this.issuedBooks[this.bookname]==undefined){
        //     this.issuedBooks[this.bookname]=this.student;
        // }
        else{
            console.log("This book is already issued!");
        }
    }
    returnBook(bookname){
        delete this.issuedBooks[bookname];
    }
}
// let b = new Library(data);
// console.log(b);
// b.getBooklists();
// b.issueBook('Python','Rahul');
// b.issueBook('Python','Rana');

// Add submit event listener to libraryForm
let libraryForm = document.getElementById('submitBtn');
libraryForm.addEventListener("click", function(e){
    console.log('You have submitted library form');
    let name = document.getElementById('bookName');
    let author = document.getElementById('student');
   
    let books = localStorage.getItem("books");
    if (books == null) {
        this.booksObj = [];
    }
    else {
        this.booksObj = JSON.parse(books);
    }
    let myObj = {
        bName: name.value,
        sName: author.value
    }
    let b = new Library(data,this.booksObj);
    console.log(b);
    b.getBooklists();
    b.issueBook(myObj);
    // b.issueBook('Python','Rana');
    // this.booksObj.push(myObj);
    // localStorage.setItem("books", JSON.stringify(this.booksObj));
    name.value = "";
    author.value = "";
    
    console.log("book");

   
   
    e.preventDefault();
});


// Add methods to display prototype
 function add() {
    console.log("Adding to UI");

    let books = localStorage.getItem("books");
    if (books == null) {
        booksObj = [];
    }
    else {
        booksObj = JSON.parse(books);
    }
  
    let html = "";
    booksObj.forEach(function (element) {
        html += 
                 `<tr>
                        <td>${element.bName}</td>
                        <td>${element.sName}</td>
                    </tr>`
    });
    let tableBody = document.getElementById('tableBody');
   
    if (booksObj.length != 0) {
        console.log("I am printing");
        tableBody.innerHTML = html;
    }
    else {
        tableBody.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
    }
}





//  function show(type, displayMessage) {
//     let message = document.getElementById('message');
//     message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
//                             <strong>Messge:</strong> ${displayMessage}
//                             <button type="button" class="close" data-dismiss="alert" aria-label="Close">
//                             <span aria-hidden="true">×</span>
//                             </button>
//                         </div>`;
//     setTimeout(function () {
//         message.innerHTML = ''
//     }, 2000);

// }
