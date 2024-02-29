let library = [];

//Предусмотрите функцию для добавления книги в библиотеку. Библиотека должна быть представлена в виде массива объектов.

const addBook = (name, author, published, genre, pages) => library.push({ name, author, published, genre, pages });

addBook("Хоббит", "Дж. Р. Р. Толкиен", 1937, "Фэнтези", 310);
addBook("Гарри Поттер и философский камень", "Дж. К. Роулинг", 1997, "Фэнтези", 223);
addBook("1984", "Джордж Оруэлл", 1949, "Антиутопия", 328);

//Реализуйте функцию для удаления книги из библиотеки по названию.

const removeBook = (removeName) => library = library.filter(book => book.name !== removeName);

//Реализуйте функцию для поиска книг по автору и вывода списка всех книг этого автора.

const findBooksByAuthor = (searchAuthor) => booksByAuthor = library.filter(book => book.author === searchAuthor);

//Создайте функцию для фильтрации книг по жанру.

const filterBooksByGenre = (searchGenre) => booksByGenre = library.filter(book => book.genre === searchGenre);

//Разработайте функцию для генерации отчета о количестве книг каждого жанра в библиотеке.

const genreReport = () => {
    let genresList = {};
    library.forEach((book) => {
        const genre = book.genre
        if (Object.hasOwn(genresList, genre)) {
            genresList[genre] += 1;
        } else {
            genresList[genre] = 1;
        }
    });
    return genresList;
};

//Реализуйте функцию для генерации отчета о среднем количестве страниц по всем книгам в библиотеке.

const averagePagesReport = () => {
    let pagesCount = library.map(book => book.pages);
    return Math.floor(pagesCount.reduce((sum, current) => sum + current) / pagesCount.length);
};

console.log(`Среднее количество страниц: ${averagePagesReport()}`);
//Создайте функцию, которая выводит список всех книг, отсортированный по году издания, от новых к старым.

const sortByYear = () => library.sort((a, b) => b.published - a.published);
