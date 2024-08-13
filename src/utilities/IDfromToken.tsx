import { jwtDecode } from "jwt-decode";

interface JwtPayload {
  id: string;
  iat: number;
  exp: number;
}
export function getUserIdFromToken() {
  const token = localStorage.getItem("authToken");
  if (!token) return null;

  const decodedToken = jwtDecode<JwtPayload>(token);
  return decodedToken.id; // This assumes the token has a `userId` field
}

export function isTokenExpired() {
  try {
    const token = localStorage.getItem("authToken");
    console.log(token);
    if (!token) return true;

    const decodedToken = jwtDecode<JwtPayload>(token);

    // Get the current time in seconds
    const currentTime = Math.floor(Date.now() / 1000);
    console.log(currentTime);
    // Check if the token has expired
    console.log(decodedToken.exp);
    console.log(decodedToken.exp < currentTime);
    return decodedToken.exp < currentTime;
  } catch (error) {
    // If decoding fails, assume the token is expired
    console.error("Invalid token:", error);
    return true;
  }
}
