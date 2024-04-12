<template>
    <NavbarDaybook/>
    <div class="d-flex">
      <div class="col-4">
          <!-- Entry list -->
          <!-- <h1>hoakfs</h1> -->
          <EntryList />
      </div>
      <div class="col">                            
          <router-view/>
      </div>
    </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
export default {
    components: {
        NavbarDaybook: defineAsyncComponent(() => import('../components/NavbarDaybook.vue')),
        EntryList: defineAsyncComponent(() => import('../components/EntryList.vue'))
    }
}
</script>