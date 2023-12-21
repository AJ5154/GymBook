import axios from "axios";
import { AppStorage } from "../common/utilities/locakStorage";

export async function createNewGym(newGymData: { name: string }) {
  const token = AppStorage.getAccessToken();
  return await axios.post("http://localhost:7575/api/v1/gyms", newGymData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export async function getGym() {
  const token = AppStorage.getAccessToken();
  return await axios.get("http://localhost:7575/api/v1/gyms", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
