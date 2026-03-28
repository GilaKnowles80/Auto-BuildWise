import { supabase } from "../index.js";

export async function getAllProjects() {
  const { data, error } = await supabase.from("projects").select("*");
  if (error) throw error;
  return data;
}