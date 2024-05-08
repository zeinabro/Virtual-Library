// create your Media class:
class Media {
    static totalMediaCount = 0;
    static ALL_MEDIA = []

    constructor(title,year,genre){
        this.title=title;
        this.year=year;
        this.genre=genre;
        Media.totalMediaCount++
        Media.ALL_MEDIA.push(this)
    };

    summary(){
        return `Title: ${this.title}, Year: ${this.year}, Genre: ${this.genre}`
    }
}
// uncomment below to export it:
module.exports = Media;