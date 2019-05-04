# Extensions

{% tabs %}
{% tab title="AuthService.ts" %}
```typescript
import { IAuthCredentials, IAuthProps, IAuthState, IAuthServiceProps, AuthServiceProps } from './auth_command_props';
export class AuthService {
    props:IAuthServiceProps;
    constructor(p:IAuthServiceProps) {    
            this.props = p;
    }    
    public static GetNewInstance (
        username:string, 
        password: string, 
        email:string): IAuthServiceProps {      
        return new AuthServiceProps({
            username: username,
            password: password,
            emailAddress: email
        }, IAuthState.Login);
    }
    validate(){
        if(this.props.authState){
            console.log(this.props.authState);
        }
    }
    
}
```
{% endtab %}

{% tab title="IAuthServiceProps" %}
{% hint style="info" %}
Interface that is platform agnostic.
{% endhint %}

{% code-tabs %}
{% code-tabs-item title="IAuth.ts" %}
```typescript
export interface IAuthToken {
    token_name?: string;
    token_value?: string;
    token_expiration?: date;
}
export interface IAuthProps {
    isRetry?: boolean;
    isEnabled?: boolean;    
    isAuthenticated?: boolean;    
    retryCount?: number;
}
export enum IAuthState {
    None = 0,
    Insert = 50,
    Login = 100,
    Update = 150,
    PasswordReset = 200,
    PasswordRequest = 300
}
export interface IAuthCredentials  {          
    username?: string;
    password?: string;
    emailAddress?: string;    
 }

export interface IAuthServiceProps {
    authToken?: IAuthToken;
    authProps?: IAuthProps;
    authState?: IAuthState;
    authCreds?: IAuthCredentials;    
 }
```
{% endcode-tabs-item %}
{% endcode-tabs %}
{% endtab %}
{% endtabs %}

