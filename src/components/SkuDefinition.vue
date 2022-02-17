<template>
  <div>
    <v-row>
      <v-col>
        <v-combobox
          v-model="dispense_type"
          label="Dispense Type"
        ></v-combobox>
      </v-col>
      <v-col>
        <v-combobox
          v-model="dispense_size"
          label="Dispense size"
        ></v-combobox>
      </v-col>
      <v-col>
        <v-combobox
          v-model="sku"
          label="sku"
        ></v-combobox>
      </v-col>
    </v-row>
    
  </div>
</template>

<script>
  export default{
    name: "SkuDefinition",
    props: ['value'],
    data() {
      return{
        sku: undefined,
        dispense_type:undefined,
        dispense_size: undefined,
      }
    },
    computed: {
      result() {
        return {sku: this.sku, dispense_type: this.dispense_type ,dispense_size: this.dispense_size}
      }
    },
    watch: {
      result(to){
        console.log(to)
      }
    },
    methods: {

    }
  };
</script>