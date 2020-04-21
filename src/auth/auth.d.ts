export interface AuthConfig {
  clientID: string;
  domain: string;
  redirectUri: string;
  returnTo: string;
  scope: string;
  audience: string;
  responseType: string;
}


export interface AuthUser {
  sub: string;
  nickname: string;
  name: string;
  picture: string;
  updated_at: string;
  email: string;
  email_verified: boolean;
  'https://hasura.io/jwt/claims': {
    'x-hasura-default-role': string;
    'x-hasura-allowed-roles': string[]
    'x-hasura-user-id': string;
  }
}
