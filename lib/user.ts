
import UserType from './../types/user';

export function logout() {
    document.cookie = "user=doofenshmirtz;expires=Thu, 01 Jan 1970 00:00:01 GMT";    
    window.location.href = window.location.href;
}

export function getCurrentUser(): UserType | null {
    // Normally we'd decode auth provider cookie here to get user info including pfp link
    if (document.cookie.includes("user=doofenshmirtz")) {
        return {
            username: "doofenshmirtz",
            image: "https://pfps.gg/assets/pfps/4689-doofenshmirtz.png"
        };
    }
    return null;
}

export function login(username: string, password: string) {
    if (username === 'doofenshmirtz' && password === 'evilinc') {
        // Normally, this would be an expiring cookie from an auth provider
        document.cookie = "user=doofenshmirtz";
        // Refresh
        window.location.href = window.location.href;
    }
}