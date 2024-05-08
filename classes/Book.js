// import the Media class:
const Media = require("./Media");
// create your Book class:
class Book extends Media{
    constructor(title,year,genre,author,numPages,rating){
        super(title,year,genre)
        this.author=author;
        this.numPages=numPages;
        this.rating=rating;
    };

    summary(){
        return `Title: ${this.title}, Author: ${this.author}, Year: ${this.year}, Page Count: ${this.numPages}, Genre: ${this.genre}, Rating: ${this.rating}`
    };

    static highestRating(books){
        let highest = 0;
        let idx = -1
        books.forEach((book,i) => {
            console.log(book)
            if(book.rating>highest){
                highest=book.rating
                idx=i
            }
        });
        return books[idx]
    }

}

// don't change below
module.exports = Book;
