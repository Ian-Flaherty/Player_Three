import api from "./api-config";

export const getLikes = async () => {
  try {
    const response = await api.get("/likes");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getLike = async (id) => {
  try {
    const response = await api.get(`/likes/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createlikes = async (movie) => {
  try {
    const response = await api.post("/movie-create", movie);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updatelikes = async (id, movie) => {
  try {
    const response = await api.put(`/likes/${id}`, movie);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deletelikes = async (id) => {
  try {
    const response = await api.delete(`/likes/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
