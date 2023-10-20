import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

class YodlrApi {
  static token;

  // GET Requests
  static async getUsers() {
    let res = await axios({
      url: `${BASE_URL}/users`,
      method: "get",
      headers: { Authorization: `Bearer ${YodlrApi.token}` },
    });
    return res.data;
  }

  static async getUser(id) {
    console.log(id);
    let res = await axios({
      url: `${BASE_URL}/users/${id}`,
      method: "get",
      headers: { Authorization: `Bearer ${YodlrApi.token}` },
    });
    return res.user;
  }

  // POST Requests
  static async addUser(data) {
    console.log(data);
    let res = await axios({
      url: `${BASE_URL}/users`,
      data: data,
      method: "post",
      headers: { Authorization: `Bearer ${YodlrApi.token}` },
    });
    console.log(res);
    return res.user;
  }

  // PATCH Requests
  static async editUser(id, data) {
    let res = await axios(`${BASE_URL}/${id}`, data, "patch", {
      Authorization: `Bearer ${YodlrApi.token}`,
    });
    return res.user;
  }

  // DELETE Requests
  static async removeUser(id) {
    let res = await axios(
      `${BASE_URL}/${id}`,
      { Authorization: `Bearer ${YodlrApi.token}` },
      "delete"
    );
    return res.body;
  }
}
export default YodlrApi;
