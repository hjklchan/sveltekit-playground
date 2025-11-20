<script>
  import "../app.css";
  import favicon from "$lib/assets/favicon.svg";
  import logo from "$lib/assets/53471930.jpeg";
  import Header from '$lib/components/layouts/WikiHeader.svelte';
  import Footer from '$lib/components/layouts/WikiFooter.svelte';

  const { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<!-- Header -->
<Header {logo} />
<!-- 页面主体：记得加上顶部内边距，避免被 header 挡住 -->
<main class="max-w mx-auto px-4 pt-4">
  {@render children()}
</main>
<!-- Footer -->
<Footer />
