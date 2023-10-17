<script setup></script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container px-5">
      <router-link class="navbar-brand" to="/">MOJO</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/">主页</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">关于</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contact">联系</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/pricing">价格</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/faq">常见问题</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped></style>
