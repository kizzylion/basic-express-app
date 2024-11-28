const authors = [
  {
    id: 1,
    name: "J.K. Rowling",
    bio: "J.K. Rowling is a British author best known for her Harry Potter series. She was born in 1965 in Yate, Gloucestershire, England. Rowling began writing the first Harry Potter book in 1997 while she was on a delayed train from Manchester to London. The book was published in 1997 and became an instant success, selling over 450 million copies worldwide.",
  },
  {
    id: 2,
    name: "Stephen King",
    bio: "Stephen King is an American author best known for his horror novels. He was born in 1947 in Portland, Maine, USA. King began writing horror novels in the late 1970s and early 1980s, and has since become one of the most successful and influential horror authors of all time.",
  },
  {
    id: 3,
    name: "Agatha Christie",
    bio: "Agatha Christie is a British author best known for her detective novels. She was born in 1890 in Torquay, Devon, England. Christie began writing detective novels in the early 1920s, and has since become one of the most successful and influential detective authors of all time.",
  },
  {
    id: 4,
    name: "Dan Brown",
    bio: "Dan Brown is an American author best known for his thriller novels. He was born in 1964 in Exeter, New Hampshire, USA. Brown began writing thriller novels in the late 1990s, and has since become one of the most successful and influential thriller authors of all time.",
  },
  {
    id: 5,
    name: "John Grisham",
    bio: "John Grisham is an American author best known for his legal thriller novels. He was born in 1955 in Jonesboro, Arkansas, USA. Grisham began writing legal thriller novels in the late 1980s, and has since become one of the most successful and influential legal thriller authors of all time.",
  },
  {
    id: 6,
    name: "Jane Austen",
    bio: "Jane Austen is a British author best known for her romantic novels. She was born in 1775 in Steventon, Hampshire, England. Austen began writing romantic novels in the late 18th century, and has since become one of the most successful and influential romantic authors of all time.",
  },
];

const books = [
  {
    id: 1,
    title: "Harry Potter and the Philosopher's Stone",
    authorId: 1,
    summary:
      "Harry Potter and the Philosopher's Stone is a fantasy novel written by British author J.K. Rowling. The first novel in the Harry Potter series and Rowling's debut novel, it was published in 1997. The plot follows Harry Potter, a young wizard who discovers his magical heritage and his place in the wizarding world.",
  },
  {
    id: 2,
    title: "Harry Potter and the Chamber of Secrets",
    authorId: 1,
    summary:
      "Harry Potter and the Chamber of Secrets is a fantasy novel written by British author J.K. Rowling. The second novel in the Harry Potter series, it was published in 1998. The plot follows Harry Potter, a young wizard who discovers his magical heritage and his place in the wizarding world.",
  },
  {
    id: 3,
    title: "Harry Potter and the Prisoner of Azkaban",
    authorId: 1,
    summary:
      "Harry Potter and the Prisoner of Azkaban is a fantasy novel written by British author J.K. Rowling. The third novel in the Harry Potter series, it was published in 1999. The plot follows Harry Potter, a young wizard who discovers his magical heritage and his place in the wizarding world.",
  },
  {
    id: 4,
    title: "Harry Potter and the Goblet of Fire",
    authorId: 1,
    summary:
      "Harry Potter and the Goblet of Fire is a fantasy novel written by British author J.K. Rowling. The fourth novel in the Harry Potter series, it was published in 2000. The plot follows Harry Potter, a young wizard who discovers his magical heritage and his place in the wizarding world.",
  },
  {
    id: 5,
    title: "Harry Potter and the Order of the Phoenix",
    authorId: 1,
    summary:
      "Harry Potter and the Order of the Phoenix is a fantasy novel written by British author J.K. Rowling. The fifth novel in the Harry Potter series, it was published in 2003. The plot follows Harry Potter, a young wizard who discovers his magical heritage and his place in the wizarding world.",
  },
  {
    id: 6,
    title: "Harry Potter and the Half-Blood Prince",
    authorId: 1,
    summary:
      "Harry Potter and the Half-Blood Prince is a fantasy novel written by British author J.K. Rowling. The sixth novel in the Harry Potter series, it was published in 2005. The plot follows Harry Potter, a young wizard who discovers his magical heritage and his place in the wizarding world.",
  },
  {
    id: 7,
    title: "Harry Potter and the Deathly Hallows",
    authorId: 1,
    summary:
      "Harry Potter and the Deathly Hallows is a fantasy novel written by British author J.K. Rowling. The seventh and final novel in the Harry Potter series, it was published in 2007. The plot follows Harry Potter, a young wizard who discovers his magical heritage and his place in the wizarding world.",
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
