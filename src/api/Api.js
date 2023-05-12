import axios from "axios";
import findFilm from "../components/optionalFilms/FindFilm";

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

    async getFilmById(id) {
        return await this.#axios.get(`/findFilm/${id}`);
    }

    async deleteFilmById(id) {
        return await this.#axios.delete(`/deleteFilm/${id}`);
    }

    async addNewFilm(filmsItem) {
        return await this.#axios.post("/addFilm", filmsItem);
    }

}

export default FilmsApiWorker;