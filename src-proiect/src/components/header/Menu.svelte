<!-- src/components/header/Menu.svelte -->
<script>

    import { menuItems } from '$lib/stores/theme';
   export let items = [];
  
    $: items = $menuItems; // Reactive subscription
    $: console.log('Rendered menu items:', items); // Log items for debugging
  </script>
  
  <nav>
    <ul>
      {#each items as item}
        <li><a href="{item.link}">{item.title}</a></li>
      {/each}
    </ul>
  </nav>
  
  <style>
    nav {
      padding: 1rem;
    }
    ul {
      list-style: none;
      display: flex;
      gap: 1rem;
    }
    a {
      text-decoration: none;
      color: inherit;
    }
  </style>
  