import axios from "axios";
import { CreateBatch, UpdateBranch } from "./batch.types";
import { AppStorage } from "../common/utilities/locakStorage";

export async function updateBatch(id: string, updateParams: UpdateBranch) {
  const token = AppStorage.getAccessToken();
  const gymId = AppStorage.getGymId();
  await axios.put(
    `http://localhost:7575/api/v1/gyms/${gymId}/batches/${id}`,
    updateParams,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
}

export async function createBatch(createBatchParams: CreateBatch) {
  const token = AppStorage.getAccessToken();
  const gymId = AppStorage.getGymId();
  await axios.post(
    `http://localhost:7575/api/v1/gyms/${gymId}/batches`,
    createBatchParams,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
}

export async function getBatch() {
  const token = AppStorage.getAccessToken();
  const gymId = AppStorage.getGymId();
  return await axios.get(`http://localhost:7575/api/v1/gyms/${gymId}/batches`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export async function deleteBatch(batchId: string) {
  const token = AppStorage.getAccessToken();
  const gymId = AppStorage.getGymId();
  await axios.delete(
    `http://localhost:7575/api/v1/gyms/${gymId}/batches/${batchId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
}
