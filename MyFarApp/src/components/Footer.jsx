import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context'; // safe area hook

const Footer = ({ navigation }) => {
  const insets = useSafeAreaInsets(); // gives bottom padding dynamically (for Android/iPhone)

  return (
    <View style={[styles.footer, { paddingBottom: insets.bottom > 0 ? insets.bottom : 10 }]}>
      <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('#')}>
        <Ionicons name="home-outline" size={24} color="#fff" />
        <Text style={styles.label}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('#')}>
        <Ionicons name="person-outline" size={24} color="#fff" />
        <Text style={styles.label}>Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('')}>
        <Ionicons name="log-out-outline" size={24} color="#fff" />
        <Text style={styles.label}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

// const styles = StyleSheet.create({
//   footer: {
//     position: 'absolute',
//     bottom: Platform.OS === 'android' ? 10 : 0, // moves up slightly on Android
//     left: 0,
//     right: 0,
//     backgroundColor: '#111',
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     alignItems: 'center',
//     borderTopWidth: 1,
//     borderColor: '#222',
//     zIndex: 10,
//     elevation: 8,
//     paddingVertical: 10,
//     borderTopLeftRadius: 20,
//     borderTopRightRadius: 20,
//   },
//   iconContainer: {
//     alignItems: 'center',
//   },
//   label: {
//     color: '#fff',
//     fontSize: 12,
//     marginTop: 4,
//   },
// });

const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 100,
    backgroundColor: '#111',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
   
    marginBottom: '',
    borderTopWidth: 1,
    borderColor: '#222',
    zIndex: 10,
    elevation: 5, // adds shadow on Android
  },
  iconContainer: {
    alignItems: 'center',
  },
  label: {
    color: '#fff',
    fontSize: 12,
    marginTop: 4,
  },
});

export default Footer;
