export interface User {
    id: number;
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    password: string;
    verificationCode: string;
    resetPasswordCode: string;
    verified: boolean
}