import React, {useState, useEffect} from 'react';
import { Text, View, StyleSheet, Button, AsyncStorage } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import Demo from '../assets/data/demo';
// import * as Home from './Home';
import { preferenceUpdate } from './Home';



const Profile = () => {
  const [isChickenSelected, setChickenSelection] = useState(false);
  const [isBeefSelected, setBeefSelection] = useState(false);
  const [isFishSelected, setFishSelection] = useState(false);
  const [isVegetarianSelected, setVegetarianSelection] = useState(false);
  const [isVeganSelected, setVeganSelection] = useState(false);
  const [isGlutenFreeSelected, setGlutenFreeSelection] = useState(false);
  const [theArray, setTheArray] = useState([]);
  const [data, setData] = useState([]);
  const [query, setQuery] = useState(false);
  // let data = Demo;
  let theData = Demo;

  const savePressed = () => {
    
    //  AsyncStorage.setItem("userFoodPreferences", JSON.stringify(data))
    //  localStorage.setItem("userFoodPreferences", JSON.stringify(data));
      //  console.log(data);
       setQuery(!query)
      //  preferenceUpdate(query);
  }
   const fetchItems = async () => {
    try {
      const result = [{}];
      const val = await AsyncStorage.getItem("userFoodPreferences");
      return val

    } catch(error) {
      console.log(error)
    }
  } 

  useEffect(() => {
    // const obj = JSON.parse(localStorage.getItem("userFoodPreferences"))
    // console.log(obj);
    // console.log("test")
    // Home.preferenceUpdate(query);
    // preferenceUpdate(query);
    preferenceUpdate
    // fetchItems().then(response => console.log(response))
  }, [query])





    return (
      <View style={styles.container}>
        <View style={styles.checkboxContainer}>
          <View>
          <CheckBox
            value={isChickenSelected}
            onValueChange={(val) => 
              
              {
                setChickenSelection(val);
                if (val == true) {
                
                setTheArray(theArray => [...theArray, "Chicken"])
                let chickenData = theData.filter((pref) => pref.type == "Chicken")
                for (const chickData of chickenData) {
                  setData(data => [...data, chickData])
                }
                // console.log(chickenData)
                
                

              } else {
                // console.log("it is false");
                setTheArray(theArray.filter(function(preference) {
                  return preference !== "Chicken"
                }))
              }
              
            }
            }
            style={styles.checkbox}
          />
          <Text style={styles.label}>Chicken</Text>
          </View>


          <View>
          <CheckBox
            value={isBeefSelected}
            onValueChange={(val) => 
              {
                setBeefSelection(val)
                if (val == true) {
                setTheArray(theArray => [...theArray, "Beef"])
                let beefData = theData.filter((pref) => pref.type == "Beef")
                for (const beef of beefData) {
                  setData(data => [...data, beef])
                }
                // setData(data => [...data, beefData])
              } else {
                setTheArray(theArray.filter(function(preference) {
                  return preference !== "Beef"
                }))
              }
            }
            }
            style={styles.checkbox}
          />
          {/* {saveSelection('beef', isBeefSelected)} */}
          <Text style={styles.label}>Beef</Text>  
          </View> 


          <View>
          <CheckBox
            value={isFishSelected}
            onValueChange={(val) => 
              {
                if (val == true) {
                setTheArray(theArray => [...theArray, "Fish"])
              }
            }
          }
            style={styles.checkbox}
          />
          {/* {saveSelection('fish', isFishSelected)} */}
          <Text style={styles.label}>Fish</Text>
          </View>


          <View>
          <CheckBox
            value={isVegetarianSelected}
            onValueChange={(val) => 
              {if (val == true) {
                setTheArray(theArray => [...theArray, "Vegetarian"])
              }}}
            style={styles.checkbox}
          />
          {/* {saveSelection('vegetarian', isVegetarianSelected)} */}
          <Text style={styles.label}>Vegetarian</Text>
          </View>


          <View>
          <CheckBox
            value={isVeganSelected}
            onValueChange={(val) => 
              {if (val == true) {
                setTheArray(theArray => [...theArray, "Vegan"])
              }}}
            style={styles.checkbox}
          />
          {/* {saveSelection('vegan', isVeganSelected)} */}
          <Text style={styles.label}>Vegan</Text>
          </View>


          <View>
          <CheckBox
            value={isGlutenFreeSelected}
            onValueChange={(val) => 
              {if (val == true) {
                setTheArray(theArray => [...theArray, "Gluten-Free"])
              }}}
            style={styles.checkbox}
          />
          {/* {saveSelection('glutenFree', isGlutenFreeSelected)} */}
          <Text style={styles.label}>Gluten Free</Text>
          </View>

        </View>

        <Button title="Save" onPress={savePressed
          //   {
          //     theArray.map((item, index) => (
          //     //  data.filter(obj => obj.type.includes(pref => console.log(pref)))
          //     // console.log(data)
              

                
          //     ))

          // }
        }/>
        {/* onPress={AsyncStorage.clear()} */}
    </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
  },
});


export default Profile;