
import axios from "axios";

export const postSignInData = async (data: SignInProps) => {
  try {
    const response = await axios.post(
      "http://localhost:7575/api/v1/auth/login",
      data
    );
    return response.data;
  } catch (error: any) {
    console.error(error.message);
    return [];
  }
};

export const postSignupData = async (data: SignUpProps) => {
  try {
    const response = await axios.post(
      "http://localhost:7575/api/v1/auth/signup",
      data
    );
    return response.data;
  } catch (error: any) {
    console.error(error.message);
    return [];
  }
};
