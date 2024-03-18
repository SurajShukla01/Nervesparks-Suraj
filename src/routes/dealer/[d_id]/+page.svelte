<script lang="ts">
  import { writable } from 'svelte/store';
  import { Card, Button, Rating, Badge } from 'flowbite-svelte';

// Initialize a writable store to hold the car data
let finalData = writable(null);
let carD = writable(null);

export let data;
// export let car;

let a = data.dealer.then(data => {
  finalData = data;
});

let c = data.cars.then(data => {
  carD = data;
//   console.log(car);
  
});

// console.log(car);



</script>


<div class="flex gap-10 mt-10 max-w-full w-[1350px] px-6 dark:text-white text-3xl">
              
              <Card class="text-center w-full" size="sm" padding="xl">
                <h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">{finalData.dealership_name}</h5>
                <p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">{finalData.dealership_email}</p>
                <div class="justify-center items-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
                  <Button>{finalData.dealership_location}</Button>
                </div>
              </Card>            
                
        <div class="space-y-4">
            {#if carD && Array.isArray(carD)}
            {#each carD as car}

                <Card href="/" horizontal size="lg" class="flex sm:max-w-full gap-8">
                        <div class="img-container">
                                <img src={car.car_info.model_img_url} class ="h-full max-h-24" alt={car.name}>
                        </div>
                        <div class="content">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{car.name}</h5>
                                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">{car.type}, {car.car_info.color},  {car.car_info.transmission_type}, Mileage: {car.car_info.mileage} miles</p>
                                <Rating rating="4" size="24" class="mt-2.5 mb-5">
                                        <Badge slot="text" class="ms-3 dark:bg-primary-600">4</Badge>
                                      </Rating>
                                      <div class="flex justify-between items-center">
                                        <span class="text-3xl font-bold text-gray-900 dark:text-white">₹600000</span>
                                        <Button href="/">Buy now</Button>
                                      </div>
                                  
                        </div>
                </Card>
                              {/each}
            {:else}
              <p>No cars data available.</p>
            {/if}

        
        </div>
    
</div>


