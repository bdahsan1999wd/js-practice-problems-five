let library = {
    name: "City Library",
    books: {
        fiction: ["1984", "Brave New World", "Fahrenheit 451"],
        nonFiction: ["Sapiens", "Educated"]
    }
};

// Access the second book in the fiction array (index 1)
const secondFictionBook = library.books.fiction[1];

console.log(secondFictionBook);