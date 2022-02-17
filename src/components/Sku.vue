<template>
	<v-combobox
		v-model="sku"
		label="Sku"
	></v-combobox>
</template>

<script>
  export default{
    name: "Sku",
    props: ['value'],
	 data() {
		 return {
			sku: ''
		 }
	 },
   watch: {
    sku(to){
        console.log(to)
        this.$emit('sku',to)
      }
   },
   
  };
</script>