<!-- RegistrationForm.svelte -->
<script>
  // 
  import axios from "axios";
        let email = '';
        let password = '';
      
        async function handleSubmit(event) {
          event.preventDefault();
          
          let url = 'https://nervesparks.onrender.com/api/user/create';
          let data = {
            user_email: email,
            user_location: "London",
            user_info: {
              fullname: "Lee Jooe",
              gender: "male",
              DOB: "1990-05-15",
              phone_no: "1729834619"
            },
            password: password,
            vehicle_info: []
          }
          // Send registration data to your authentication API
          const response = await axios.post(url , JSON.stringify(data), {
    headers: {
    'Content-Type': 'application/json'
    }
}
 );

//           axios.post('https://nervesparks.onrender.com/api/user/create', 
//           {
//   user_email: email,
//   user_location: "London",
//   user_info: {
//     fullname: "Lee Jooe",
//     gender: "male",
//     DOB: "1990-05-15",
//     phone_no: "7902183478"
//   },
//   password: password,
//   vehicle_info: ["car_id_7", "car_id_3"]
// })
//   .then(response => {console.log('Response:', response.data);
//   })
//   .catch(error => {console.error('Error:', error);
//   });

          if (response) {
            // Handle successful registration (e.g., redirect to login page)
            console.log('Registration successful');
          } else {
            // Handle registration error (e.g., display error message)
            console.error('Registration failed');
          }
        }
      </script>
      
      <!-- <form on:submit={handleSubmit}>
        <label for="email">Email:</label>
        <input type="email" id="email" bind:value={email} required />
      
        <label for="password">Password:</label>
        <input type="password" id="password" bind:value={password} required />
      
        <button type="submit">Register</button>
      </form> -->
      
      <div class="min-h-screen flex items-center justify-center">
        <form on:submit={handleSubmit} class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96">
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
              Email
            </label>
            <input
            bind:value={email} 
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter your email"
            />
          </div>
          <div class="mb-6">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
              Password
            </label>
            <input
            bind:value={password} 
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Enter your password"
            />
          </div>
          <div class="flex items-center justify-between">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
      