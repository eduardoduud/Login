import { ResponseError } from "@/models/responses/ResponseError.model";

export const verifyEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

export const verifyPassword = (password: string): boolean => {
    const regex = /^(?=.\d)(?=.[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}/;
    return regex.test(password);
  };

export const checkPassword = (password: string): boolean => {
    return !verifyPassword(password)
}