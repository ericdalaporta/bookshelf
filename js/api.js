const getBooks = async () => {
  const books = [
    { id: 1, title: "O Senhor dos Anéis", author: "J.R.R. Tolkien", genre: "fantasia", cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1566425108l/33.jpg" },
    { id: 3, title: "Cem Anos de Solidão", author: "Gabriel García Márquez", genre: "ficcao", cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1327881361l/320.jpg" },
    { id: 4, title: "1984", author: "George Orwell", genre: "ficcao", cover: "https://images-na.ssl-images-amazon.com/images/I/819js3EQwbL.jpg" },
    { id: 5, title: "Orgulho e Preconceito", author: "Jane Austen", genre: "romance", cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1320399351l/1885.jpg" },
    { id: 6, title: "Harry Potter e a Pedra Filosofal", author: "J.K. Rowling", genre: "fantasia", cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1474154022l/3.jpg" },
    { id: 8, title: "A Menina que Roubava Livros", author: "Markus Zusak", genre: "drama", cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1522157426l/19063.jpg" },
    { id: 9, "title": "Sapiens: Uma Breve História da Humanidade", "author": "Yuval Noah Harari", "genre": "historia", "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1420585954l/23692271.jpg" },
    { id: 11, "title": "Fahrenheit 451", "author": "Ray Bradbury", "genre": "ficcao", "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1383718290l/13079982.jpg" },
    { id: 12, "title": "A Revolução dos Bichos", "author": "George Orwell", "genre": "classico", "cover": "https://images-na.ssl-images-amazon.com/images/I/91BsZhxCRjL.jpg" },
    { id: 13, "title": "É Assim Que Acaba", "author": "Colleen Hoover", "genre": "romance", "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1470427482l/27362503.jpg" },
  ];

  books.sort((a, b) => a.id - b.id);

  return new Promise(resolve => {
    setTimeout(() => {
      resolve(books);
    }, 200);
  });
};