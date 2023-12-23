import axios from "axios";
import { AppStorage } from "../common/utilities/locakStorage";
import { CreateMemberDto, UpdateMemberDto } from "./member.types";

export async function getMember() {
  const token = AppStorage.getAccessToken();
  const gymId = AppStorage.getGymId();
  return await axios.get(`http://localhost:7575/api/v1/gyms/${gymId}/members`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export async function createMember(createParams: CreateMemberDto) {
  const token = AppStorage.getAccessToken();
  const gymId = AppStorage.getGymId();
  await axios.post(
    `http://localhost:7575/api/v1/gyms/${gymId}/members`,
    createParams,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
}

export async function updateMember(id: string, updateParams: UpdateMemberDto) {
  const token = AppStorage.getAccessToken();
  const gymId = AppStorage.getGymId();
  await axios.put(
    `http://localhost:7575/api/v1/gyms/${gymId}/members/${id}`,
    updateParams,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
}

export async function deleteMember(memberId: string) {
  const token = AppStorage.getAccessToken();
  const gymId = AppStorage.getGymId();
  await axios.delete(
    `http://localhost:7575/api/v1/gyms/${gymId}/member/${memberId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
}
