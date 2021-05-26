export interface UserModel {
    id?: number;
    name: string;
    email: string;
    password: string;
    refreshTocken?: string;
    photo: string;
}
