<script lang="ts">
    import { menuItems } from '$lib/stores/theme';
    import { get } from 'svelte/store';
  
    const items = get(menuItems);
  </script>
  
  <nav>
    <ul>
      {#each items as item}
        <li>
          <a href={item.link}>{item.title}</a>
        </li>
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
  
    li a {
      text-decoration: none;
      color: inherit;
      font-weight: bold;
    }
  </style>
  