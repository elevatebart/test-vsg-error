<template>
  <input type="checkbox" v-model="checked" />
</template>

<script>

/**
 * @name Checkbox
 */
export default {
  props:{
    value:{
      type:Boolean,
      default:false
    }
  },
  data(){
    return {
      checked:this.value
    }
  },
}
</script>

<docs lang="md">
# document checkbox

```jsx
<Checkbox />
```

</docs>
