
// #GameStudio JS

class GameStudio {
    #name;
    #foundedYear;
    #country;
    #username;
    #password;
    #nonReleasedGames;

    constructor(name, foundedYear, country, username, password){
        this.#name = name;
        this.#foundedYear = foundedYear;
        this.#country = country;
        this.#username = username;
        this.#password = password;
        this.#nonReleasedGames = [];
    }
    getName(name){
        this.#name;
    }
    setName(name){
        return this.#foundedYear;
    }
    setFoundedYear(foundedYear){
        this.#foundedYear = foundedYear;
    }
    getCountry(country){
        return this.#country;
    }
    setCountry(country){
        this.#country = country;
    }
    getUsername(){
        return this.#username;
    }
    setUsername(username){
        this.#username = username;
    }
    getPassword(){
        return this.#password;
    }
    setPassword(password){
        this.#password = password;
    }
    getNonReleasedGames(){
        return this.#nonReleasedGames;
    }
    setNonReleasedGames(nonReleasedGames){
        this.#nonReleasedGames = nonReleasedGames;
    }
    authenticate(username, password){
        return this.#username === username && this.#password === password;
    }

    calculateAge(){
        const currentYear = new Date().getFullYear();
        return currentYear - this.#foundedYear;
    }

    printDetails(){
        console.log(`Game Studio : ${this.#name},Founded:${this.#foundedYear},Country:${this.#country}`);
    }
}


// #VideoGame JS


class VideoGame{
    #title;
    #releaseYear;
    #genre;
    #developer;
    #released;

    constructor(title, releaseYear, genre, developer, released){
    this.#title = title;
    this.#releaseYear = releaseYear;
    this.#genre = genre;
    this.#developer = developer;
    this.#released = released;
    }

    getTitle(){
        return this.#title;
    }
    setTitle(title){
        this.#title = title;
    }
    getReleaseYear(){
        return this.#releaseYear;
    }
    setReleaseYear(releaseYear){
        this.#releaseYear = releaseYear;
    }
    getGenre(){
        return this.#genre;
    }
    setGenre(genre){
        this.#genre = genre;
        }
        getDeveloper(){
            return this.#developer;
            }
            setDeveloper(developer){
                this.#developer = developer;
                }
                isReleased(){
                    return this.#released;
                }
                setReleased(released){
                    this.#released = released;
                }
                printdetails(){
                    console.log(`Video Game : ${this.#title}, Release Year : ${this.#releaseYear}, Genre : ${this.#genre}, Released : ${this.#released}`);
                }
}