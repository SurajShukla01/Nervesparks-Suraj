<script lang='ts'>
        import { page } from '$app/stores';
        import { Search } from 'flowbite-svelte';
        import {  Sidebar, SidebarGroup, SidebarItem, SidebarWrapper } from 'flowbite-svelte';
        import {  UserSolid } from 'flowbite-svelte-icons';

        import axios from 'axios';
        import { onMount } from 'svelte';
        // import type { PageServerLoad } from './$types';

        // import { useParams } from '$app/navigation';
        import { responseStore } from './data/responseStore';

        var responseData;

        responseStore.subscribe(value => {
        responseData = value;
        });




        let dealers = [];

        onMount(async () => {
          try {
            const response = await axios.get('https://nervesparks.onrender.com/api/dealer/getAll',{
                headers: {
                'Content-Type': 'application/json',
                'authorization': 'Bearer '+responseData.data.tocken
                }
        });
            dealers = response.data.dealer;
          } catch (error) {
            console.error('Error fetching data:', error);
          }

        });


        let spanClass = 'flex-1 ms-3 whitespace-nowrap';
        $: activeUrl = $page.url.pathname;
        let nonActiveClass = "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white dark:hover:bg-gray-600 hover:bg-gray-200";
        let divClass = "overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-700 shadow-md mt-4"
        let asideClass = "w-full"
      </script>
      
      <Sidebar {activeUrl} {nonActiveClass} {asideClass}>
        <SidebarWrapper {divClass}>
                <div class="hidden lg:block mb-6">
                        <Search size="md" class="w-full border focus:outline-none" placeholder="Search Dealers" />
                </div>
          <SidebarGroup>
            {#each dealers as dealer}
            <SidebarItem label={dealer.dealership_name} {spanClass} href="/dealer/{dealer._id}">
              <svelte:fragment slot="icon">
                <UserSolid class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
              </svelte:fragment>
              <svelte:fragment slot="subtext">
                <span class="inline-flex justify-center items-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 hover:bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300"> {dealer.dealership_location}</span>
              </svelte:fragment>
      
            </SidebarItem>

            {/each}
          </SidebarGroup>
        </SidebarWrapper>
      </Sidebar>