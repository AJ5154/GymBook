import axios from "axios";
import { SignInProps, SignUpProps } from "./types";
import { LoginApiResponse } from "../Login/SignIn.type";
import { APIErrorResponse } from "../common/types/APIErrorResponse.type";

export const postSignInData = async (data: SignInProps) => {
  try {
    const response = await axios.post(
      "http://localhost:7575/api/v1/auth/login",
      data
    );
    return response.data;
  } catch (error: unknown) {
    if (error instanceof APIErrorResponse) {
      console.error(error.message);
    } else {
      console.error("An unknown error occurred");
    }
  }
};

export const postSignupData = async (
  data: SignUpProps
): Promise<LoginApiResponse | void> => {
  try {
    const response = await axios.post(
      "http://localhost:7575/api/v1/auth/signup",
      data
    );
    const apiData = response.data as LoginApiResponse;
    return apiData;
  } catch (error: unknown) {
    if (error instanceof APIErrorResponse) {
      console.error(error.message);
    } else {
      console.error("An unknown error occurred");
    }
  }
};
