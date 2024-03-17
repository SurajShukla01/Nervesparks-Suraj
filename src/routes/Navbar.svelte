<script>
	// import AppsMenu from '$lib/widgets/AppsMenu.svelte';
	import UserMenu from '$lib/widgets/UserMenu.svelte';
	import { DarkMode, NavBrand, NavHamburger, Navbar, Search } from 'flowbite-svelte';
	import { SunSolid, MoonSolid } from 'flowbite-svelte-icons';
	import Users from '../data/users.json';
  // let btnClass = 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-xl p-2';

	export let fluid = true;
	export let drawerHidden = false;
</script>

<Navbar {fluid} class="mt-px text-black py-0 pt-2.5 max-w-[1350px]" color="default">
	<NavHamburger
		onClick={() => (drawerHidden = !drawerHidden)}
		class="m-0 me-3 md:block lg:hidden"
	/>
	<NavBrand href="/" class="py-1.5 lg:w-60">
		<img src="/images/logo.png" class="me-3 h-6 sm:h-16" alt="Flowbite Logo" />
		<span class="self-center whitespace-nowrap text-xl font-semibold text-primary-500 dark:text-primary-500 sm:text-2xl"
			>DriveWay</span
		>
	</NavBrand>
	<div class="ms-auto hidden lg:block lg:ps-8">
		<Search size="md" class="w-96 border focus:outline-none" />
	</div>
	<div class=" flex items-center text-gray-500 dark:text-gray-400 sm:order-2">
		<DarkMode class="text-md">
			<SunSolid slot="lightIcon" color="yellow" />
			<MoonSolid slot="darkIcon" color="grey" />
		</DarkMode>
		<UserMenu {...Users[4]} />
	</div>
</Navbar>
