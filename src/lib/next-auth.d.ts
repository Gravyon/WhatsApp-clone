// custom fields from the next-auth library
// these are going to be added to the original
import 'next-auth';

declare module 'next-auth' {
    interface Session {
        user: User;
    }
    interface User {
        id: string;
        username: string;
    }
}
