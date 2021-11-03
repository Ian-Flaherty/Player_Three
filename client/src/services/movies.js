import api from "./api-config";

export const getMovies = async () => {
  try {
    const response = await api.get("/movies");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getStory = async (id) => {
  try {
    const response = await api.get(`/movies/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createStory = async (story) => {
  try {
    const response = await api.post("/story-create", story);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateStory = async (id, story) => {
  try {
    const response = await api.put(`/movies/${id}`, story);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteStory = async (id) => {
  try {
    const response = await api.delete(`/movies/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
