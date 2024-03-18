<script>
  import Sidebar from "./Sidebar.svelte";
  import Cars from "./cars.svelte";


</script>


<div class="flex gap-10 mt-10 max-w-full w-[1350px] px-6 dark:text-white text-3xl">
        <div class="sidebar outline-1">
                <Sidebar />
        </div>
        <div class="mt-4 content mx-auto flex flex-col items-center gap-6">
                <Cars />        
        </div>
</div>