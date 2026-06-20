export interface UserProfile{
    name: string;
    role: string;
}

export interface LoginResponse { 
    access_token: string;
    user: UserProfile;
}

export interface DecodedToken{
    sub: string;
    email: string;
    role: string;
    iat: number;
    exp: number;
    name?: string;
}