// Lesson 1: Arrays, Objects, and Functions
 
// 1. Create an empty array to hold the quotes
const quotes = []
 
/*
  2. Function: addQuote
  - Accepts a quote object with id, content, and author
  - Adds it to the quotes array
*/
function addQuote(quote) {
  return quotes.push(quote)
  // TODO: Add the quote object to the quotes array
}
 
/*
  3. Function: deleteQuote
  - Accepts an id
  - Removes the quote with that id from the array
*/
function deleteQuote(id) {
  const index = quotes.findIndex(q => q.id === id);
  if (index !== -1) {
    quotes.splice(index, 1);
  }
}
  // TODO: Remove the quote object from the array using the given id
 
/*
  4. Function: updateQuote
  - Accepts an id and an object with new content and/or author
  - Updates the quote with the given id
*/
function updateQuote(id, updatedQuote) {
  // TODO: Find the quote by id and update its properties
  const index = quotes.findIndex(quote => quote.id === id)
  return quotes[index] = {...quotes[index], ...updatedQuote}
}
 
/*
  5. Function: getAllQuotes
  - Returns all quotes in the array
*/
function getAllQuotes() {
  return quotes
  // TODO: Return the quotes array
}
 
// 6. Test your functions below
// Add 3 quotes
addQuote({ id: 1, content: 'Stay hungry, stay foolish.', author: 'Steve Jobs' })
addQuote({ id: 2, content: 'Do or do not. There is no try.', author: 'Yoda' })
addQuote({
  id: 3,
  content: 'Simplicity is the ultimate sophistication.',
  author: 'Leonardo da Vinci'
})
// Delete 1 quote
deleteQuote(2)
// Update 1 quote
updateQuote(1, { content: 'Stay hungry. Stay foolish.', author: 'Jobs' })
// Print all quotes
console.log(getAllQuotes())

//