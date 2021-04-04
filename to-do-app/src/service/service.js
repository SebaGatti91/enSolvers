import http from "../http-common";

class DataService {
  getAll() {
    return http.get("/tareas");
  }

  get(id) {
    return http.get(`/tareas/${id}`);
  }

  create(data) {
    return http.post("/tareas", data);
  }

  update(id, data) {
    return http.put(`/tareas/${id}`, data);
  }

  delete(id) {
    return http.delete(`/tareas/${id}`);
  }

  deleteAll() {
    return http.delete(`/tareas`);
  }

  findByTitle(title) {
    return http.get(`/tareas?title=${title}`);
  }
}

export default new DataService();