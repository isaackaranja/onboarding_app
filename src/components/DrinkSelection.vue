<template>
    <div>
        <v-row class="pa-0">
            <v-col cols="2">
                <v-combobox
                v-model="manufacturerName"
                :items="manufacturers"
                label="Manufacture"
                outlined
                class="manufacture"
                dense
                @change="()=> {brandName=undefined}"
            ></v-combobox>
            </v-col>
            <v-col cols="2">
                <v-combobox
                    v-model="brandName"
                    :items="drinkChoice[manufacturerName]"
                    label="Brand"
                    outlined
                    dense
                    class="brand"
                ></v-combobox>
            </v-col>
     
        </v-row>
    </div>
</template>
<script>
export default({
    name: "DrinkSelection",
    props: ['value'],
    data() {
        return{
            drinkChoice: {
            "Jack Black":[],
            "SAB": ["Dublin Soul", "Weiss"],
            "Namibia": ["Rhythm Stick", "Mr Brownstone", "Acid Queen"],
            "Crafters": ["Pot Belge", "Born Slippy", "Hazy Daze"],
            "CBC":["Slice of Life", "Happy Pills", "Californicator"],
                
            },
            manufacturers: ["Jack Black", 
            "SAB","Namibia", 
            "Crafters", "CBC"],
            // brand: ["Slice of Life", "Happy Pills", "Californicator", 
            // "Pot Belge", "Born Slippy", "Hazy Daze", "Rhythm Stick", 
            // "Mr Brownstone", "Acid Queen", "Dublin Soul", "Weiss"],
            manufacturerName: undefined,
            brandName: undefined,
        }
    },
    methods: {
       
    },
    computed:  {
      result () {
        return {
            manufacturer: this.manufacturerName, brand: this.brandName, sku: [{dispenseType: '', dispenseSize: '', posCode: ''}]
            }
      }
    },
    watch: {
        result(to){
            console.log(to)
            this.$emit('drink',to)
        }
        // manufacturerName(to){
        //     console.log(to);
        // },
        // brandName(to){
        //     console.log(to);
        // },
    },
    emits: ['add-task']

})
</script>

<style scoped>
.sec_row{
    border: 1px solid red;
}
.add-button{
  color: yellow;
}
</style>