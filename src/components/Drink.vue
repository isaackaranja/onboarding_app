<template>
    <div>
      <DrinkSelection @drink="newDrinkSelection" v-model="drinkSelection"></DrinkSelection>
        <v-btn depressed @click="drinks.push(drinkSelection)" color="primary" class="add-button">
            Add
        </v-btn>
        <!-- <v-btn depressed @click="addDrink" color="primary" class="add-button">
            Add
        </v-btn> -->
        <v-row>
          <v-col md="6" v-for="drink in drinks"
            :key="drink.id">
            <v-card>
              {{ drink.manufacturer }} : 
              {{ drink.brand }}
              <!-- <v-text-field v-model="drink.posCode"/>  -->
              <!-- <SkuDefinition @sku="drink.sku=to" v-model="drink.sku"/> -->
              <v-row v-for="dispense in drink.sku">
                <v-col>
                  <DispenseType @dispenseType="drinkType" v-model="drink.type"/>
                </v-col>
                <v-col>
                  <DispenseSize @size="drinkSize" v-model="drink.size"/>
                </v-col>
                <v-col>
                  <Sku @sku="drinkSku" v-model="drink.sku"/>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>

          <v-row>
          <v-col md="" v-for="(card, index) in drinksCardList"
            :key="card.id">
            <v-card>
              {{ card.drink.manufacturer }} : 
              {{ card.drink.brand }}
              <!-- <v-btn depressed @click="card.dispense.push({dispenseType: '', dispenseSize: '', posCode: ''})" color="primary" class="add-button">
                  Add new row
              </v-btn> -->
              <v-simple-table>
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th class="text-left">
                        Dispense Type
                      </th>
                      <th class="text-left">
                        Dispense Size
                      </th>
                      <th>
                        Pos Code
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="dispense in card.dispense"
                      :key="dispense.id"
                    >
                      <td> 
                        <v-combobox
                          :items="dispenseSize"
                          label="Dispense_type"
                          outlined
                          v-model="dispense.dispenseType"
                          dense
                          @change="card.dispense.push({dispenseType: '', dispenseSize: '', posCode: ''})"
                        ></v-combobox>
                      </td>
                      <td>
                         <v-text-field
                            label="Size"
                            required
                            :disabled="!dispense.dispenseType"
                          ></v-text-field>
                      </td>
                      <td>
                        <v-text-field
                          label="Pos Codes"
                          required
                          :disabled="!dispense.dispenseType"
                        ></v-text-field>
                      </td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </v-card>
          </v-col>
        </v-row>
    </div>
</template>
<script>
import SkuDefinition from './SkuDefinition'
import DrinkSelection from './DrinkSelection.vue'
import Sku from './Sku.vue'
import DispenseType from './DispenseType.vue'
import DispenseSize from './DispenseSize.vue'
export default({
    name: "Drink",
    components: {
      DrinkSelection,
      SkuDefinition,
      DispenseType,
      DispenseSize,
      Sku
    },
    data: () => {
      return {
        drinkSelection: undefined,
        drink: {},
        drinks: [],
        drinkCard: {},
        drinksCardList: [],
        dispenseSize: ['pint', 'half_pint', 'jag']
      }
    },
    methods: {
      newDrinkSelection(to) {
        this.drinkSelection = to
      },
      drinkType(to) {
        this.drink.type=to
      },
      drinkSize(to) {
        this.drink.size=to
      },
      drinkSku(to) {
        this.drink.sku=to
        this.drinkSelection.sku.push(this.drink)
      }

    // addRowInCard(cardIndex) {
    //   const selected_card = this.drinksCardList[cardIndex]
    //   this.drinksCardList[cardIndex].dispense.push({dispenseType: '', dispenseSize: '', posCode: ''})
    //   console.log(selected_card)
    // },

    // addDrink() {
    //   // this.drinkCard.drink = this.drinkSelection
    //   // this.drinkCard.dispense = [{dispenseType: '', dispenseSize: '', posCode: ''}]
    //   // this.drinksCardList.push(this.drinkCard)
    //   // this.drinkCard = {}
    //   // console.log("hae there", this.drinksCardList)
    //   // console.log(this.drinkSelection)

    //   this.drinks.push(this.drinkSelection)
    //   // this.drinks.push({dispense:[]})
    //   // this.drinks.dispense.push({dispenseType: '', dispenseSize: '', posCode: ''})
    // }
  }
})
</script>
