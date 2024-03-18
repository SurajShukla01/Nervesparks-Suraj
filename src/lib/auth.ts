// import { writable } from "svelte/store";
// import { goto } from "$app/navigation";
// import axios from "axios";

// // Create a writable store to manage the authentication state
// export const isAuthenticated = writable(false);

// // Function to simulate login (replace with actual login logic)
// export async function login({email, password}) {
//   // Simulate login logic (e.g., API request)
//   let url = 'https://nervesparks.onrender.com/api/user/create';
//   let data = {
//     user_email: email,
//     user_location: "London",
//     user_info: {
//       fullname: "Lee Jooe",
//       gender: "male",
//       DOB: "1990-05-15",
//       phone_no: "1729834619"
//     },
//     password: password,
//     vehicle_info: []
//   }
//   // Send registration data to your authentication API
//   const response = await axios.post(url , JSON.stringify(data), {
// headers: {
// 'Content-Type': 'application/json'
// }

//   await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate async operation
//   isAuthenticated.set(true);
// }
//   )}
// // Function to simulate logout (replace with actual logout logic)
// export async function logout() {
//   // Simulate logout logic (e.g., clearing tokens, session data)
//   await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate async operation
//   isAuthenticated.set(false);
// }

// // Function to check if the user is logged in
// export function useLoggedIn() {
//   // Subscribe to the isAuthenticated store and return its value
//   const loggedIn = writable(false);
//   isAuthenticated.subscribe((value) => {
//     loggedIn.set(value);
//   });
//   return loggedIn;
// }

// // Middleware function to protect routes
// export function requireAuth() {
//   return async ({ redirect }) => {
//     // Check if the user is authenticated
//     const loggedIn = $isAuthenticated;

//     // If the user is not authenticated, redirect to the login page
//     if (!loggedIn) {
//       goto("/");
//     }
//   };
// }
