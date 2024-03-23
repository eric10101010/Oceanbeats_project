<template>
  <section class="back d-flex align-items-center justify-content-center">
    <h1 class="backBox text-center py-4">
      <router-link to="/" class="text-center text-white text-decoration-none">
        不存在此頁<br>返回首頁
      </router-link>
    </h1>
  </section>
</template>

<style lang="scss" scoped>

.index{
  font-size: 50px;
  text-decoration: none;
}
.back{
  height: 100vh;
  background: url('https://images.unsplash.com/photo-1523672557977-2c106afb2278?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80') no-repeat 50% 50%;
  background-size: cover;
  object-fit: cover;
  display: flex;
  justify-content: center;
}
.back{
  &Box {
    width: 300px;
    background-color: rgba(0, 0, 0, 0.7);
  }
}
</style>
