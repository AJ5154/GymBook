import axios from "axios";
import { AppStorage } from "../common/utilities/locakStorage";
import { CreatePlanDto, UpdatePlanDto } from "./plan.types";

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

export async function updatePlan(id: string, updateParams: UpdatePlanDto) {
  const token = AppStorage.getAccessToken();
  const gymId = AppStorage.getGymId();
  await axios.put(
    `http://localhost:7575/api/v1/gyms/${gymId}/plans/${id}`,
    updateParams,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
}

export async function deletePlan(planId: string) {
  const token = AppStorage.getAccessToken();
  const gymId = AppStorage.getGymId();
  await axios.delete(
    `http://localhost:7575/api/v1/gyms/${gymId}/plans/${planId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
}

export async function getPlan() {
  const token = AppStorage.getAccessToken();
  const gymId = AppStorage.getGymId();
  return await axios.get(`http://localhost:7575/api/v1/gyms/${gymId}/plans`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
