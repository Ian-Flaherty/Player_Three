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

export const createLikes = async (likeData) => {
  try {
    console.log(likeData)
    const response = await api.post("/likes", { like: likeData });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateLikes = async (id, like) => {
  try {
    const response = await api.put(`/likes/${id}`, like);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteLikes = async (id) => {
  try {
    const response = await api.delete(`/likes/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
