document.addEventListener("DOMContentLoaded", () => {
    handleDarkMode();
    handleBackToTop();
    handleScrollAnimations();

    if (document.getElementById("book-list")) {
        initializeCatalog();
    }
    if (document.getElementById("form-inscricao")) {
        initializeForm();
    }
});

function handleDarkMode() {
    const toggle = document.getElementById('dark-mode-toggle');
    if (!toggle) return;
    const switchSound = new Audio('https://www.soundjay.com/switch/switch-1.mp3');
    switchSound.volume = 0.3;

    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
        toggle.checked = true;
    }

    toggle.addEventListener('change', function () {
        switchSound.currentTime = 0;
        switchSound.play();
        if (this.checked) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
        }
    });
}

function handleBackToTop() {
    const button = document.getElementById('back-to-top');
    if (!button) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            button.classList.add('show');
        } else {
            button.classList.remove('show');
        }
    });

    button.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

function handleScrollAnimations() {
    const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
    if (elementsToAnimate.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
}

let allBooks = [];

async function initializeCatalog() {
    allBooks = await getBooks();
    const bookListElement = document.getElementById("book-list");
    const filtersContainer = document.getElementById("genre-filters");

    const genres = [...new Set(allBooks.map(book => book.genre))];
    populateFilters(genres, filtersContainer);
    displayBooks(allBooks, bookListElement);
}

function populateFilters(genres, container) {
    container.innerHTML = '';

    genres.forEach(genre => {
        const li = document.createElement('li');
        li.className = 'genre';
        const a = document.createElement('a');
        a.href = '#';
        a.textContent = genre.charAt(0).toUpperCase() + genre.slice(1);
        a.dataset.genre = genre;
        li.appendChild(a);
        container.appendChild(li);
    });

    const seeMoreLi = document.createElement('li');
    seeMoreLi.className = 'see-more';
    const seeMoreA = document.createElement('a');
    seeMoreA.href = '#';
    seeMoreA.textContent = 'Ver Tudo';
    seeMoreA.dataset.genre = 'all';
    seeMoreA.classList.add('active');
    seeMoreLi.appendChild(seeMoreA);
    container.appendChild(seeMoreLi);

    container.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const currentActive = container.querySelector('a.active');
            if (currentActive) {
                currentActive.classList.remove('active');
            }
            link.classList.add('active');
            const selectedGenre = link.dataset.genre;
            filterAndDisplayBooks(selectedGenre);
        });
    });
}

function displayBooks(books, container) {
    container.innerHTML = books.map((book, index) => `
    <div class="book-card animate-on-scroll" style="--card-index: ${index};">
      <div class="book-card-image-container">
        <img src="${book.cover}" alt="Capa do livro ${book.title}" class="book-card-image" loading="lazy">
<a href="${book.readLink}" class="book-card-read-link" target="_blank" rel="noopener noreferrer">Ler</a>      </div>
      <div class="book-card-content">
        <h3 class="book-card-title">${book.title}</h3>
        <p class="book-card-author">${book.author}</p>
      </div>
    </div>
  `).join('');

    handleScrollAnimations();
}

function filterAndDisplayBooks(genre) {
    const bookListElement = document.getElementById("book-list");
    let filteredBooks = [];
    if (genre === 'all') {
        filteredBooks = allBooks;
    } else {
        filteredBooks = allBooks.filter(book => book.genre === genre);
    }
    displayBooks(filteredBooks, bookListElement);
}

function initializeForm() {
    const form = document.getElementById("form-inscricao");
    const textarea = document.getElementById("sobre");
    const contador = document.getElementById("contador");

    const atualizarContador = () => {
        const chars = textarea.value.length;
        contador.textContent = `Caracteres: ${chars}`;
    };

    textarea.addEventListener("input", atualizarContador);
    atualizarContador();

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const nome = form.nome.value.trim();
        const email = form.email.value.trim();

        if (!nome || !email) {
            alert("Preencha todos os campos obrigatórios (nome e e-mail).");
            return;
        }

        alert("Inscrição enviada com sucesso!");
        form.reset();
        atualizarContador();
    });
}

window.addEventListener('DOMContentLoaded', () => {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
        document.body.classList.add('dark-mode');
    }

    const toggle = document.getElementById('dark-mode-toggle');
    if (toggle) {
        toggle.checked = theme === 'dark';
        toggle.addEventListener('change', () => {
            if (toggle.checked) {
                document.body.classList.add('dark-mode');
                localStorage.setItem('theme', 'dark');
            } else {
                document.body.classList.remove('dark-mode');
                localStorage.setItem('theme', 'light');
            }
        });
    }
});
