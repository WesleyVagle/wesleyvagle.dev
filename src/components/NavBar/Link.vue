<template>
    <router-link :to="to" class="link flex flex-col" exact-active-class="active">
      <div>
        <slot name="default"></slot>
      </div>
      <div class="text-sm">
        <slot name="extra"></slot>
      </div>
    </router-link>
  </template>
  
  <script>
  export default {
    props: {
      to: {
        type: String,
        required: true
      }
    }
  }
  </script>
  
  <style scoped>
  .link {
    all: unset;
    position: relative;
    cursor: pointer;
    transition: 0.5s;
    color: #888;
  }
  
  .link::after {
    content: '';
    position: absolute;
    width: 0;
    height: 7px;
    bottom: -15px;
    left: 0;
    background-color: #ffffff;
    transition: 0.5s;
  }
  
  .link:hover::after {
    width: 100%;
  }
  
  .link:hover {
    color: #fff;
  }
  
  .link.active {
    color: #fff;
  }
  
  .link.active::after {
    width: 100%;
  }
  </style>