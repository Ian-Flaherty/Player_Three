import api from "./api-config";

export const getMovies = async () => {
  try {
    const response = await api.get("/movies");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getMovie = async (id) => {
  try {
    const response = await api.get(`/movies/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createMovies = async (movie) => {
  try {
    const response = await api.post("/movie-create", movie);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateMovies = async (id, movie) => {
  try {
    const response = await api.put(`/movies/${id}`, movie);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteMovies = async (id) => {
  try {
    const response = await api.delete(`/movies/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
