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

}

export default FilmsApiWorker;