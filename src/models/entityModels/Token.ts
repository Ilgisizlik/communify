export interface Token {
    Role : string[];
    aud : string;
    exp : number;
    iss : string;
    nbf : number;
}

export enum Roles {
    Admin = 1,
    User = 2,
}