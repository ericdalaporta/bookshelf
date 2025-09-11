const getBooks = async () => {
  const books = [
    
    // --- CLÁSSICOS (20 LIVROS) ---
    { id: 22, title: "Crime e Castigo", author: "Fiódor Dostoiévski", genre: "Clássicos", cover: "https://covers.openlibrary.org/b/isbn/9780140449136-M.jpg", readLink: "https://humanitas.ufrn.br/wp-content/uploads/2025/02/Crime-Castigo.pdf" },
    { id: 68, title: "Memórias do Subsolo", author: "Fiódor Dostoiévski", genre: "Clássicos", cover: "https://covers.openlibrary.org/b/isbn/9780486270531-M.jpg", readLink: "https://www.kufunda.net/publicdocs/Mem%C3%B3rias%20do%20Subsolo%20-%20Fi%C3%B3dor%20Dostoi%C3%A9vski.pdf" },
    { id: 4, title: "1984", author: "George Orwell", genre: "Clássicos", cover: "https://covers.openlibrary.org/b/isbn/9780451524935-M.jpg", readLink: "https://multimidia.gazetadopovo.com.br/media/info/2022/202209/1984/e-book-1984.pdf" },
    { id: 69, title: "Guerra e Paz", author: "Liev Tolstói", genre: "Clássicos", cover: "https://covers.openlibrary.org/b/isbn/9781400079988-M.jpg", readLink: "https://www.epedagogia.com.br/materialbibliotecaonine/2544Guerra-e-Paz--Livro-1.pdf" },
    { id: 70, title: "O Conde de Monte Cristo", author: "Alexandre Dumas", genre: "Clássicos", cover: "https://covers.openlibrary.org/b/isbn/9780140449266-M.jpg", readLink: "https://www.ufmg.br/centrocultural/wp-content/uploads/2020/05/3-O-Conde-de-Monte-Cristo-Alexandre-Dumas-1_compressed1.pdf" },

    // --- FANTASIA (20 LIVROS) ---F
    { id: 1, title: "O Senhor dos Anéis", author: "J.R.R. Tolkien", genre: "Fantasia", cover: "https://covers.openlibrary.org/b/isbn/9780544003415-M.jpg", readLink: "https://estdaliteratura.wordpress.com/wp-content/uploads/2017/05/li-2-o-senhor-dos-aneis-j-r-r-tolkien.pdf" },
    { id: 2, title: "O Hobbit", author: "J.R.R. Tolkien", genre: "Fantasia", cover: "https://covers.openlibrary.org/b/isbn/9780345339683-M.jpg", readLink: "https://ddcus.org/pdf/summer_reading/10th_Grade/O%20Hobbit%20-%20J_%20R_%20R_%20Tolkien%20-%20BEAP%2010%20Portuguese.pdf" },
    { id: 11, title: "Fahrenheit 451", author: "Ray Bradbury", genre: "Fantasia", cover: "https://covers.openlibrary.org/b/isbn/9781451673319-M.jpg", readLink: "https://letrasufpr.wordpress.com/wp-content/uploads/2016/08/fahrenheit-451-ray-bradbury.pdf" },
    { id: 20, title: "Admirável Mundo Novo", author: "Aldous Huxley", genre: "Fantasia", cover: "https://covers.openlibrary.org/b/isbn/9780060850524-M.jpg", readLink: "https://cesarmangolin.wordpress.com/wp-content/uploads/2010/08/aldous-huxley-admiravel-mundo-novo.pdf" },
    { id: 23, title: "O Conto da Aia", author: "Margaret Atwood", genre: "Fantasia", cover: "https://covers.openlibrary.org/b/isbn/9780385490818-M.jpg", readLink: "https://moodle.ibiruba.ifrs.edu.br/pluginfile.php/25041/mod_resource/content/1/O-Conto-da-Aia-Margaret-Atwood.pdf" },
    { id: 25, title: "A Guerra dos Tronos", author: "George R.R. Martin", genre: "Fantasia", cover: "https://covers.openlibrary.org/b/isbn/9780553593716-M.jpg", readLink: "https://universobh.wordpress.com/wp-content/uploads/2013/01/a-guerra-dos-tronos-george-r-r-martin-as-crc3b4nicas-de-gelo-e-fogo-conhecimentovaleouro-blogspot-com-by-viniciusf6661.pdf" },

    // --- ROMANCE (20 LIVROS) ---
    { id: 5, title: "Orgulho e Preconceito", author: "Jane Austen", genre: "Romance", cover: "https://covers.openlibrary.org/b/isbn/9780141439518-M.jpg", readLink: "https://reciclaleitores.com.br/wp-content/uploads/2020/10/ORGULHO-E-PRECONCEITO-Austen-Jane.pdf" },
    { id: 79, title: "Anna Karenina", author: "Liev Tolstói", genre: "Romance", cover: "https://covers.openlibrary.org/b/isbn/9780143035008-M.jpg", readLink: "https://humanitas.ufrn.br/wp-content/uploads/2025/03/Anna-Karenina.pdf" },
    { id: 93, title: "Emma", author: "Jane Austen", genre: "Romance", cover: "https://covers.openlibrary.org/b/isbn/9780141439587-M.jpg", readLink: "https://reciclaleitores.com.br/wp-content/uploads/2020/10/EMMA-Jane-Austen.pdf" },
    { id: 94, title: "O Amor nos Tempos do Cólera", author: "Gabriel García Márquez", genre: "Romance", cover: "https://covers.openlibrary.org/b/isbn/9780307389732-M.jpg", readLink: "" },
    { id: 101, title: "O Rouxinol", author: "Kristin Hannah", genre: "Romance", cover: "https://covers.openlibrary.org/b/isbn/9780312577223-M.jpg", readLink: "https://doceru.com/doc/s5s8cvx" },
    { id: 103, title: "O Caderno de Noah", author: "Nicholas Sparks", genre: "Romance", cover: "https://covers.openlibrary.org/b/isbn/9780446605236-M.jpg", readLink: "https://doceru.com/doc/8s01c0s" },

    // --- SUSPENSE (20 LIVROS) ---
    { id: 39, title: "Garota Exemplar", author: "Gillian Flynn", genre: "Suspense", cover: "https://covers.openlibrary.org/b/isbn/9780307588371-M.jpg", readLink: "https://static.tumblr.com/amm1lw6/qAlmltxdn/garota_exemplar_-_gillian_flynn.pdf" },
    { id: 80, title: "O Silêncio dos Inocentes", author: "Thomas Harris", genre: "Suspense", cover: "https://covers.openlibrary.org/b/isbn/9780312924584-M.jpg", readLink: "https://statics-americanas.b2w.io/produtos/134561057/documentos/134561057_1.pdf" },
    { id: 81, title: "A Garota no Trem", author: "Paula Hawkins", genre: "Suspense", cover: "https://covers.openlibrary.org/b/isbn/9781594634024-M.jpg", readLink: "https://static.tumblr.com/yijpogv/3pYogwl98/a_garota_no_trem_-_paula_hawkins.pdf" },
    { id: 108, title: "Anjos e Demônios", author: "Dan Brown", genre: "Suspense", cover: "https://covers.openlibrary.org/b/isbn/9781416524793-M.jpg", readLink: "https://diegodelpasso.com/wp-content/uploads/2016/05/dan-brown-anjos-e-demonios.pdf" },
    { id: 65, title: "It: A Coisa", author: "Stephen King", genre: "Suspense", cover: "https://covers.openlibrary.org/b/isbn/9781501142970-M.jpg", readLink: "https://kbook.com.br/wp-content/uploads/2016/08/It_-A-coisa-Stephen-King.pdf" },
    { id: 114, title: "O Talentoso Ripley", author: "Patricia Highsmith", genre: "Suspense", cover: "https://covers.openlibrary.org/b/isbn/9780393332148-M.jpg", readLink: "https://doceru.com/doc/e15evns" },

    // --- NÃO-FICÇÃO (20 LIVROS) ---
    { id: 9, title: "Sapiens", author: "Yuval Noah Harari", genre: "Não-Ficção", cover: "https://covers.openlibrary.org/b/isbn/9780062316097-M.jpg", readLink: "https://maurooliveira.blog/wp-content/uploads/2019/12/pdf-sapiens-uma-breve-hsitc3b3ria-da-humanidade.pdf" },
    { id: 30, title: "O Diário de Anne Frank", author: "Anne Frank", genre: "Não-Ficção", cover: "https://covers.openlibrary.org/b/isbn/9780553296983-M.jpg", readLink: "https://diegodelpasso.com/wp-content/uploads/2016/05/o-dic3a1rio-de-anne-frank.pdf" },
    { id: 71, title: "Assim Falou Zaratustra", author: "Friedrich Nietzsche", genre: "Não-Ficção", cover: "https://covers.openlibrary.org/b/isbn/9780140441185-M.jpg", readLink: "https://www.ebooksbrasil.org/adobeebook/zara.pdf" },
    { id: 72, title: "O Banquete", author: "Platão", genre: "Não-Ficção", cover: "https://covers.openlibrary.org/b/isbn/9780140449273-M.jpg", readLink: "https://archivepublicdomain.com/files/2025/08/PlataoOBanquete.pdf" },
    { id: 73, title: "O Mito de Sísifo", author: "Albert Camus", genre: "Não-Ficção", cover: "https://covers.openlibrary.org/b/isbn/9780679733737-M.jpg", readLink: "https://sanderlei.com.br/PDF/Albert-Camus/Albert-Camus-O-Mito-de-Sisifo.pdf" },
    { id: 64, title: "Uma Breve História do Tempo", author: "Stephen Hawking", genre: "Não-Ficção", cover: "https://covers.openlibrary.org/b/isbn/9780553380163-M.jpg", readLink: "https://www.intrinseca.com.br/upload/livros/1ocap_UmaBreveHistoriaDoTempo.pdf" },
    { id: 121, title: "Cosmos", author: "Carl Sagan", genre: "Não-Ficção", cover: "https://covers.openlibrary.org/b/isbn/9780345539434-M.jpg", readLink: "https://kbook.com.br/wp-content/files_mf/carlsagancosmos.pdf" },
    { id: 124, title: "21 Lições para o Século 21", author: "Yuval Noah Harari", genre: "Não-Ficção", cover: "https://covers.openlibrary.org/b/isbn/9780525512172-M.jpg", readLink: "https://dagobah.com.br/wp-content/uploads/2019/02/21-licoes-para-o-seculo-21-Yuval-Noah-Harari.pdf" }
  ];

  return new Promise(resolve => {
    setTimeout(() => {
      resolve(books);
    }, 200);
  });
};
