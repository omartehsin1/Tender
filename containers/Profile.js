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
        // AsyncStorage.clear();
    AsyncStorage.setItem("userFoodPreferences", JSON.stringify(data));
    AsyncStorage.setItem('chicken', JSON.stringify(isChickenSelected));
    AsyncStorage.setItem('beef', JSON.stringify(isBeefSelected));
    AsyncStorage.setItem('fish', JSON.stringify(isFishSelected));
    AsyncStorage.setItem('vegetarian', JSON.stringify(isVegetarianSelected));
    AsyncStorage.setItem('vegan', JSON.stringify(isVeganSelected));
    AsyncStorage.setItem('glutenFree', JSON.stringify(isGlutenFreeSelected));
    //    setQuery(!query)
    


  }
   const fetchItems = async () => {
    try {
      const chicken = await AsyncStorage.getItem('chicken');
      const beef = await AsyncStorage.getItem('beef');
      const fish = await AsyncStorage.getItem('fish');
      const vegetarian = await AsyncStorage.getItem('vegetarian');
      const vegan = await AsyncStorage.getItem('vegan');
      const glutenFree = await AsyncStorage.getItem('glutenFree');
      const val = await AsyncStorage.getItem("userFoodPreferences");
      console.log(val)
      setChickenSelection(chicken)
      setBeefSelection(beef)
      setFishSelection(fish)
      setVegetarianSelection(vegetarian)
      setVeganSelection(vegan)
      setGlutenFreeSelection(glutenFree)
      // return val

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
    // preferenceUpdate
    
     fetchItems()
     
  }, [query]);


    
    

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
                let foodData = theData.filter((pref) => pref.type == "Chicken")
                for (const recipe of foodData) {
                  setData(data => [...data, recipe])
                }

              } else {
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
                let foodData = theData.filter((pref) => pref.type == "Beef")
                for (const recipe of foodData) {
                  setData(data => [...data, recipe])
                }
                
              } else {
                setTheArray(theArray.filter(function(preference) {
                  return preference !== "Beef"
                }))
              }
            }
            }
            style={styles.checkbox}
          />
          <Text style={styles.label}>Beef</Text>  
          </View> 


          <View>
          <CheckBox
            value={isFishSelected}
            onValueChange={(val) => 
              {
                setFishSelection(val)
                if (val == true) {
                setTheArray(theArray => [...theArray, "Fish"])
                let foodData = theData.filter((pref) => pref.type == "Fish")
                for (const recipe of foodData) {
                  setData(data => [...data, recipe])
                }
                
              } else {
                setTheArray(theArray.filter(function(preference) {
                  return preference !== "Fish"
                }))
              }
            }
          }
            style={styles.checkbox}
          />
          <Text style={styles.label}>Fish</Text>
          </View>


          <View>
          <CheckBox
            value={isVegetarianSelected}
            onValueChange={(val) => 
              {
                setVegetarianSelection(val)
                if (val == true) {
                setTheArray(theArray => [...theArray, "Vegetarian"])
                let foodData = theData.filter((pref) => pref.type == "Vegetarian")
                for (const recipe of foodData) {
                  setData(data => [...data, recipe])
                }
                
              } else {
                setTheArray(theArray.filter(function(preference) {
                  return preference !== "Vegetarian"
                }))
              }
            }
            }
            style={styles.checkbox}
          />
          <Text style={styles.label}>Vegetarian</Text>
          </View>


          <View>
          <CheckBox
            value={isVeganSelected}
            onValueChange={(val) => 
              {
                setVeganSelection(val)
                if (val == true) {
                setTheArray(theArray => [...theArray, "Vegan"])
                let foodData = theData.filter((pref) => pref.type == "Vegan")
                for (const recipe of foodData) {
                  setData(data => [...data, recipe])
                }
                
              } else {
                setTheArray(theArray.filter(function(preference) {
                  return preference !== "Vegan"
                }))
              }
            }
            }
            style={styles.checkbox}
          />
          {/* {saveSelection('vegan', isVeganSelected)} */}
          <Text style={styles.label}>Vegan</Text>
          </View>


          <View>
          <CheckBox
            value={isGlutenFreeSelected}
            onValueChange={(val) => 
              {
                setGlutenFreeSelection(val)
                if (val == true) {
                setTheArray(theArray => [...theArray, "GlutenFree"])
                let foodData = theData.filter((pref) => pref.type == "GlutenFree")
                for (const recipe of foodData) {
                  setData(data => [...data, recipe])
                }
                
              } else {
                setTheArray(theArray.filter(function(preference) {
                  return preference !== "GlutenFree"
                }))
              }
            }
            }
            style={styles.checkbox}
          />
          <Text style={styles.label}>Gluten Free</Text>
          </View>

        </View>

        <Button title="Save" onPress={savePressed}/>
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