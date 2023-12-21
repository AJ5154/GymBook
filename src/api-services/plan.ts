import axios from "axios";
import { AppStorage } from "../common/utilities/locakStorage";
import { CreatePlanDto } from "./plan.types";

export async function createPlan(createParams: CreatePlanDto) {
  const token = AppStorage.getAccessToken();
  const gymId = AppStorage.getGymId();
  await axios.post(
    `http://localhost:7575/api/v1/gyms/${gymId}/plans`,
    createParams,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
}
