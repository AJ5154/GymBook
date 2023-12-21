import axios from "axios";
import { SignInApiResponse } from "../Login/SignIn.type";
import { APIErrorResponse } from "../common/types/APIErrorResponse.type";
import { SignInProps, SignUpProps } from "./auth.types";

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
): Promise<SignInApiResponse | void> => {
  try {
    const response = await axios.post(
      "http://localhost:7575/api/v1/auth/signup",
      data
    );
    const apiData = response.data as SignInApiResponse;
    return apiData;
  } catch (error: unknown) {
    if (error instanceof APIErrorResponse) {
      console.error(error.message);
    } else {
      console.error("An unknown error occurred");
    }
  }
};
