export interface User {
    id: number;
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    password: string;
    verificationCode: string;
    passwordResetCode: string | null;
    verified: boolean
}