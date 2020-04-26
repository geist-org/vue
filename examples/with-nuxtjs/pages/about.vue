<template>
  <div class="content">
    <h2>About page</h2>
    <zi-button>About Button</zi-button>
    <zi-spacer :y="3" />
    <zi-card>
      <h3>Card</h3>
    </zi-card>
    <zi-spacer :y="3" />
    <zi-input placeholder="input" />
    <p>
      <NuxtLink to="/">
        Go Back
      </NuxtLink>
    </p>
  </div>
</template>

<script>
export default {}
</script>
