import React, {useState} from 'react';
import { Text, View, StyleSheet, Button, AsyncStorage } from 'react-native';
import CheckBox from '@react-native-community/checkbox';




const Profile = () => {
  const [isChickenSelected, setChickenSelection] = useState(false);
  const [isBeefSelected, setBeefSelection] = useState(false);
  const [isFishSelected, setFishSelection] = useState(false);
  const [isVegetarianSelected, setVegetarianSelection] = useState(false);
  const [isVeganSelected, setVeganSelection] = useState(false);
  const [isGlutenFreeSelected, setGlutenFreeSelection] = useState(false);
  const [theArray, setTheArray] = useState([]);

  function saveSelection(name, selection) {
    
    if (selection !== false) {
      // console.log(name, selection)
      // AsyncStorage.setItem('preference', JSON.stringify([name]))
       //setTheArray([...theArray, name])
      //  console.log(theArray);
    }
    // console.log(theArray);
  }
  const saveArr = (name, selection) => {
    
  }


    return (
      <View style={styles.container}>
        <View style={styles.checkboxContainer}>
          <View>
          <CheckBox
            value={isChickenSelected}
            onValueChange={setChickenSelection}
            style={styles.checkbox}
          />
          {/* {saveSelection('chicken', isChickenSelected)} */}
          
          {/* {AsyncStorage.setItem('preferences',  JSON.stringify)} */}
          {/* {saveSelection('chicken', isChickenSelected)} */}
          <Text style={styles.label}>Chicken</Text>
          </View>


          <View>
          <CheckBox
            value={isBeefSelected}
            onValueChange={setBeefSelection}
            style={styles.checkbox}
          />
          {/* {saveSelection('beef', isBeefSelected)} */}
          <Text style={styles.label}>Beef</Text>  
          </View> 


          <View>
          <CheckBox
            value={isFishSelected}
            onValueChange={setFishSelection}
            style={styles.checkbox}
          />
          {/* {saveSelection('fish', isFishSelected)} */}
          <Text style={styles.label}>Fish</Text>
          </View>


          <View>
          <CheckBox
            value={isVegetarianSelected}
            onValueChange={setVegetarianSelection}
            style={styles.checkbox}
          />
          {/* {saveSelection('vegetarian', isVegetarianSelected)} */}
          <Text style={styles.label}>Vegetarian</Text>
          </View>


          <View>
          <CheckBox
            value={isVeganSelected}
            onValueChange={setVeganSelection}
            style={styles.checkbox}
          />
          {/* {saveSelection('vegan', isVeganSelected)} */}
          <Text style={styles.label}>Vegan</Text>
          </View>


          <View>
          <CheckBox
            value={isGlutenFreeSelected}
            onValueChange={setGlutenFreeSelection}
            style={styles.checkbox}
          />
          {/* {saveSelection('glutenFree', isGlutenFreeSelected)} */}
          <Text style={styles.label}>Gluten Free</Text>
          </View>

        </View>

        <Button title="Save" />
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