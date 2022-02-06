<template>
  <Header></Header>
  <InputSpace name="Client Name" place="hesus" type="text" value="Kamande" lable="User Name"/>
  <InputSpace name="Short Name" place="Short Name" type="text" lable="Short Name"/>
  <InputSpace name="Telephone Number" place="Telephone Number" type="number" lable="Telephone Number"/>
  <InputSpace name="Email Address - Reports" place="Email Address - Reports" type="text" lable="Email Address - Reports"/>
  <InputSpace name="Email Address - Billing" place="Email Address - Billing" type="text" lable="Email Address - Billing"/>
  <InputSpace name="Street Address" place="Street Address" type="text" lable="Street Address"/>
  <InputSpace name="POS Provider" place="POS Provider" type="text" lable="POS Provider"/>
</template>


<script>
import Header from './components/Header.vue'
import InputSpace from './components/InputSpace.vue'
export default {
  name: 'App',
  components: {
    Header,
    InputSpace
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
</style>
