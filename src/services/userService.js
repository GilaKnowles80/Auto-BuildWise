import axios from "axios";

export async function getUsersList() {
  const res = await axios.get("http://localhost:4000/api/users");
  return res.data;
}