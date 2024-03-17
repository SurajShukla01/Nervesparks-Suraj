<script>
        import "../app.css";
  import Footer from "./Footer.svelte";
        import Navbar from "./Navbar.svelte";

</script>

<div class="navbar-container flex justify-center">
        <Navbar />
</div>
<hr class="w-full h-[2px] mx-auto bg-gray-100 border-0 rounded dark:bg-gray-700">

<div class="content-container flex flex-col items-center">
        <slot/>
</div>

<div class="footer-container flex justify-center">
        <Footer class="md:max-w-full w-[1350px]"/>
</div>
      