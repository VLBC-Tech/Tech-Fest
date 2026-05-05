import { postRequest } from "./services";

interface UserFormData {
  fullName: string;
  email: string;
  phoneNumber: string;
  occupation: string;
  churchName: string;
  branchName: string;
  churchUnit: string;
  location: string;
  // experienceLevel: string;
  eventName?: string;
  skill?: string;
  stack?: string;
  yearsOfExperience?: string;
  participationIntent?: string;
  webUrl?: string;
}

export function registerUser(data: UserFormData) {
  return postRequest<UserFormData, unknown>(data, "user");
}
