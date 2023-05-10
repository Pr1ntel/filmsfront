import axios from "axios";

class FilmsApiWorker {
    #axios;

    constructor() {
        this.#axios = axios.create({
            baseURL: "http://localhost:8080/films"
        });
    }

    async getAllFilms() {
        return await this.#axios.get("/getAllFilms");
    }
    async getHorrorFilms() {
        return await this.#axios.get("/horror");
    }
    async getComedyFilms() {
        return await this.#axios.get("/comedy");
    }
    async getActionFilms() {
        return await this.#axios.get("/action");
    }
    async getFantasyFilms() {
        return await this.#axios.get("/fantasy");
    }
    async getFilmById(){
        return await  this.#axios.get("/findFilm")
    }

}

export default FilmsApiWorker;