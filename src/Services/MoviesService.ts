import axios from "axios";
import appConfig from "../Utils/AppConfig";
import SelectedMovieModel from "../Models/SelectedMovieModel";

class MoviesService {
  public async getMoviesBySearch(query: string, controller?: AbortController) {
    const apiKey: string = "7e073e2f";

    if (query.length) {
      const response = await axios.get(appConfig.apiURL, {
        params: {
          apiKey: apiKey,
          s: query,
        },
        signal: controller.signal,
      });
      const movies = response.data.Search;
      return movies;
    } else return [];
  }

  public async getMovieDetails(id: string): Promise<SelectedMovieModel> {
    const apiKey: string = "7e073e2f";

    const response = await axios.get(appConfig.apiURL, {
      params: {
        apiKey: apiKey,
        i: id,
      },
    });
    const movie = response.data;
    return movie;
  }
}

const moviesService = new MoviesService();

export default moviesService;
