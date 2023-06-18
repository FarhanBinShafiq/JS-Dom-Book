// select the elements

let form = document.querySelector('form')
let bookInput = document.getElementById('book')
let authorInput = document.getElementById('author')
let yearInput = document.getElementById('year')
let submitBtn = document.getElementById('submitButton')
let bookList = document.querySelector('.books-list')

console.log(form, bookInput, authorInput, yearInput)

submitBtn.addEventListener('click', (e) => {
    alert("Clicked")
    e.preventDefault()


    let newRow = document.createElement('tr')

    //Book 
    let newBook = document.createElement('td')
    newBook.innerHTML = bookInput.value
    newRow.appendChild(newBook)
    console.log(newRow.appendChild(newBook))
    //Author 
    let newAuthor = document.createElement('td')
    newAuthor.innerHTML = authorInput.value
    newRow.appendChild(newAuthor)



    //year 
    let newYear = document.createElement('td')
    newYear.innerHTML = yearInput.value
    newRow.appendChild(newYear)

    bookList.appendChild(newRow)

})


