<script>
        import { Card, Button, Rating, Badge } from 'flowbite-svelte';
        import axios from 'axios';
        import { onMount } from 'svelte';

        let cars = [];

        onMount(async () => {
        try {
        const response = await axios.get('https://nervesparks.onrender.com/api/car/getAll');
        cars = response.data.cars;
        } catch (error) {
        console.error('Error fetching data:', error);
        }
        });

</script>


      
<div class="space-y-4">
        {#each cars as car}
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
</div>