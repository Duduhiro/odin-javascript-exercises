const getTheTitles = function(books) {
    titles = []
    books.forEach(book => {
        titles.push(book.title)
    });
    return titles
};

// Do not edit below this line
module.exports = getTheTitles;
