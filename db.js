const authors = [
  {
    id: 1,
    name: "J.K. Rowling",
  },
  {
    id: 2,
    name: "Stephen King",
  },
  {
    id: 3,
    name: "Agatha Christie",
  },
  {
    id: 4,
    name: "Dan Brown",
  },
  {
    id: 5,
    name: "John Grisham",
  },
  {
    id: 6,
    name: "Jane Austen",
  },
];

const books = [
  {
    id: 1,
    title: "Harry Potter and the Philosopher's Stone",
  },
  {
    id: 2,
    title: "Harry Potter and the Chamber of Secrets",
  },
  {
    id: 3,
    title: "Harry Potter and the Prisoner of Azkaban",
  },
  {
    id: 4,
    title: "Harry Potter and the Goblet of Fire",
  },
  {
    id: 5,
    title: "Harry Potter and the Order of the Phoenix",
  },
  {
    id: 6,
    title: "Harry Potter and the Half-Blood Prince",
  },
  {
    id: 7,
    title: "Harry Potter and the Deathly Hallows",
  },
];

async function getAuthors() {
  return authors;
}

async function getAuthorById(id) {
  return authors.find((author) => author.id === parseInt(id));
}

async function getBooks() {
  return books;
}

async function getBookById(id) {
  return books.find((book) => book.id === parseInt(id));
}

module.exports = { getAuthors, getAuthorById, getBooks, getBookById };
