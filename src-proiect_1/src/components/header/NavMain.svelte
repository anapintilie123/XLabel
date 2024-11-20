<script lang="ts">
  import { base } from '$app/paths';
</script>

<nav id="nav-main" class="flex space-x-3 font-semibold">
  <a href={`${base}/`} class="nav-link">Home</a>
  <a href={`${base}/about`} class="nav-link">About</a>
</nav>

<style>
  #nav-main {
    display: flex;
    gap: 1rem;
  }

  .nav-link {
    text-decoration: none;
    color: var(--text-color);
    font-weight: 600;
    padding: 0.5rem;
    border-radius: 5px;
  }

  .nav-link:hover {
    background-color: var(--primary-color);
    color: var(--text-color);
  }

  .nav-link.active {
    background-color: var(--secondary-color);
    color: var(--text-color);
  }
</style>
