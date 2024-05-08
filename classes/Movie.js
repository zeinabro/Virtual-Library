// import the Media class:
const Media = require("./Media")
// create your Movie class:
class Movie extends Media {
    constructor(title,year,genre,director,duration,rating){
        super(title,year,genre)
        this.director=director;
        this.duration=duration;
        this.rating=rating;
    }

    summary(){
        return `Title: ${this.title}, Director: ${this.director}, Year: ${this.year}, Genre: ${this.genre}, Rating: ${this.rating}`
    }

    static longestMovie(movies){
        let longest = 0;
        let idx = 0;
        movies.forEach((movie,i) => {
            if (movie.duration>longest){
                longest=movie.duration
                idx=i
            }
        });
        return movies[idx]
    }

    static calculateAverageRating(movies){
        let avgSum = 0;
        movies.forEach(movie => avgSum+=movie.rating)
        return avgSum/movies.length
    }
}
// don't change below
module.exports = Movie;