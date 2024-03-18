<script>
        import { Card, Button, Rating, Badge } from 'flowbite-svelte';
        import axios from 'axios';
        import { onMount } from 'svelte';
        import { responseStore } from './data/responseStore';

        var responseData;

        responseStore.subscribe(value => {
        responseData = value;
        });


        let cars = [];
        console.log("got here",responseData);
        onMount(async () => {
        try {
        const response = await axios.get('https://nervesparks.onrender.com/api/car/getAll',{
                headers: {
                'Content-Type': 'application/json',
                'authorization': 'Bearer '+responseData.data.tocken
                }
        });
        cars = response.data.cars;
        } catch (error) {
        console.error('Error fetching data:', error);
        }
        });

        responseStore.set(responseData);


</script>


      
<div class="grid grid-cols-2 gap-6">
        {#each cars as car}
        <Card href="/" horizontal size="lg" class="relative flex sm:max-w-full gap-8">
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
                                <Button href="/" class="absolute right-[10%]">Buy now</Button>
                              </div>
                          
                </div>
        </Card>
        {/each}
</div>