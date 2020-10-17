import React, {useState} from 'react';
import { Text, View } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

const Profile = () => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false)
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Profile</Text>
        <CheckBox
          disabled={false}
          value={toggleCheckBox}
          onValueChange={(newValue) => setToggleCheckBox(newValue)}
        />
      </View>
    );
}



export default Profile;