import axios from "axios";

export function prefixAdminImagePath(image: string) { // Admin Image 경로 자동으로 적어주는 메서드
    return "/images/admins/" + image;
}

export function getAxios() {
    return axios.create({
        baseURL: 'http://localhost:8080',
        timeout: 5000,
        withCredentials: true
    })
}