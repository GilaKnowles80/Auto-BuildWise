import axios from "axios";

export async function getUsers() {
  const res = await axios.get("http://localhost:4000/api/admin/users");
  return res.data;
}

export async function getAdminStats() {
  const res = await axios.get("http://localhost:4000/api/admin/stats");
  return res.data;
}