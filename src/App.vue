<template>
  <div >
    
    <v-app id="inspire">
      <Header></Header>
      <v-form>
        <v-container>
          <v-row>
            <v-col
              cols="12"
              sm="6"
              md="6"
            >
              <v-text-field
                label="Venue Name"
                placeholder="Venue"
                outlined
                dense
              ></v-text-field>
            </v-col>
            <v-col
              cols="12"
              sm="6"
              md="6"
            >
              <v-text-field
                label="Owner Name"
                placeholder="Owner"
                outlined
                dense
              ></v-text-field>
            </v-col>
            <v-col
              cols="12"
              sm="6"
              md="6"
            >
              <v-text-field
                label="Telephone Number"
                placeholder="T No"
                outlined
                dense
              ></v-text-field>
            </v-col>
            <v-col
              cols="12"
              sm="6"
              md="6"
            >
              <v-text-field
                label="Email"
                placeholder="Email"
                outlined
                dense
              ></v-text-field>
            </v-col>
            <v-col
              cols="12"
              sm="6"
              md="6"
            >
              <v-text-field
                label="Email Address - Billing"
                placeholder="Email Address - Billing"
                outlined
                dense
              ></v-text-field>
            </v-col>
            <v-col
              cols="12"
              sm="6"
              md="6"
            >
              <v-text-field
                label="Street Address"
                placeholder="Street Address"
                outlined
                dense
              ></v-text-field>
            </v-col>
            <v-col
              cols="12"
              sm="6"
              md="6"
            >
              <v-text-field
                label="Location"
                placeholder="Location"
                outlined
                dense
              ></v-text-field>
            </v-col>
            <v-col
              cols="12"
              sm="6"
              md="6"
            >
              <v-combobox
              :items="items"
              label="POS Provider"
              multiple
              outlined
              dense
            ></v-combobox>
            </v-col>
          </v-row>
           <Table></Table>
           <!-- <DrinkSelection @add-card="addCard"></DrinkSelection> -->
           <Drink></Drink>
        </v-container>
      </v-form>
        <br/>
        
    </v-app>
    
  </div>
</template>

<script>
import Header from './components/Header.vue'
import InputSpace from './components/InputSpace.vue'
import Table from './components/Table.vue'
// import DrinkSelection from './components/DrinkSelection.vue'
import Drink from './components/Drink.vue'
// import createVuetify from './plugins/vuetify'
export default {
  name: 'App',
  components: {
    Header,
    InputSpace,
    Table,
    Drink,
  },
  data () {
      return {
        select: ["Programming", "Design"],
        items: [
          'Programming',
          'Design',
          'Vue',
          'Vuetify',
        ],
      }
  },
  methods: {
    // addCard(j) {
    //   console.log("this is j", j)
    // }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

}
body{
  display: flex;
  justify-content: center;
  align-items: center;
  background: darkgoldenrod;

}
.container{
  max-width: 700px;
  width:100%;
  background: #fff;
  border-radius: 5px;
  padding: 25px 30px;

}

Header{
  font-size: 25px;
  font-weight: 500;
  color: yellowgreen;
  position: relative;
}

.container Header::before{
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3px;
  width: 50px;
  background: blue;
}
.container form .venue_details{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.input-box{
    margin-bottom: 15px;
    width: calc(100% / 2 - 20px);
}
v-combobox{
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
  padding-left: 15px;
}
.add-but{
  color: yellow;
}
</style>
