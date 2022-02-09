<template>
<div class="container">
  <Header></Header>
  <form>
    <div class="venue_details">
      <InputSpace name="Client Name" place="hesus" type="text" value="Kamande" lable="User Name"/>
      <InputSpace name="Short Name" place="Short Name" type="text" lable="Short Name"/>
      <InputSpace name="Telephone Number" place="Telephone Number" type="number" lable="Telephone Number"/>
      <InputSpace name="Email Address - Reports" place="Email Address - Reports" type="text" lable="Email Address - Reports"/>
      <InputSpace name="Email Address - Billing" place="Email Address - Billing" type="text" lable="Email Address - Billing"/>
      <InputSpace name="Street Address" place="Street Address" type="text" lable="Street Address"/>
      <!-- <InputSpace name="POS Provider" place="POS Provider" type="text" lable="POS Provider"/> -->
      <div class="input-box">
        <label for="Pos Provider"></label>
        <v-combobox
          v-model="select"
          :items="items"
          label="POS Provider"
          multiple
          outlined
          dense
        ></v-combobox>
      </div>
    </div>
  </form>
</div>
</template>

<script>
import Header from './components/Header.vue'
import InputSpace from './components/InputSpace.vue'
// import createVuetify from './plugins/vuetify'
export default {
  name: 'App',
  components: {
    Header,
    InputSpace,
  },
  data () {
      return {
        select: ['Vuetify', 'Programming'],
        items: [
          'Programming',
          'Design',
          'Vue',
          'Vuetify',
        ],
      }
    },
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
  height: 100vh;
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
  background: orange;
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

</style>
