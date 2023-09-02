import axios from "axios";

export function prefixAdminImagePath(image: string) { // Admin Image 경로 자동으로 적어주는 메서드
    return "/images/admins/" + image;
}

export function getAxios() {
    return axios.create({
        baseURL: 'http://localhost:8080', // 기본 URL
        timeout: 5000, // 타임아웃까지 대기시간 (밀리초), 5000이면 5초임
        withCredentials: true // 요청에 대한 인증 정보 전송 여부
    })
}