import React, { useState } from "react";
import { View, Text, StyleSheet, SectionList, Pressable } from "react-native";

const menuItemsToDisplay = [
  {
    title: "Appetizers",
    data: [
      { name: "Hummus", price: "$5.00" },
      { name: "Moutabal", price: "$5.00" },
      { name: "Falafel", price: "$7.50" },
      { name: "Marinated Olives", price: "$5.00" },
      { name: "Kofta", price: "$5.00" },
      { name: "Eggplant Salad", price: "$8.50" },
    ],
  },
  {
    title: "Main Dishes",
    data: [
      { name: "Lentil Burger", price: "$10.00" },
      { name: "Smoked Salmon", price: "$14.00" },
      { name: "Kofta Burger", price: "$11.00" },
      { name: "Turkish Kebab", price: "$15.50" },
    ],
  },
  {
    title: "Sides",
    data: [
      { name: "Fries", price: "$3.00", id: "11K" },
      { name: "Buttered Rice", price: "$3.00" },
      { name: "Bread Sticks", price: "$3.00" },
      { name: "Pita Pocket", price: "$3.00" },
      { name: "Lentil Soup", price: "$3.75" },
      { name: "Greek Salad", price: "$6.00" },
      { name: "Rice Pilaf", price: "$4.00" },
    ],
  },
  {
    title: "Desserts",
    data: [
      { name: "Baklava", price: "$3.00" },
      { name: "Tartufo", price: "$3.00" },
      { name: "Tiramisu", price: "$5.00" },
      { name: "Panna Cotta", price: "$5.00" },
    ],
  },
];

const Item = ({ name, price }) => (
  <View style={menuStyles.innerContainer}>
    <Text style={menuStyles.itemText}>{name}</Text>
    <Text style={menuStyles.itemText}>{price}</Text>
  </View>
);

const Separator = () => <View style={menuStyles.separator} />;

const Footer = () => (
  <Text style={menuStyles.footerText}>
    All Rights Reserved by Little Lemon 2022
  </Text>
);

////////////

const ViewMenu = () => {
  const [showMenu, setShowMenu] = useState(false);

  const renderSectionHeader = ({ section: { title } }) => (
    <View style={menuStyles.headerStyle}>
      <Text style={menuStyles.sectionHeader}>{title}</Text>
    </View>
  );

  const renderItem = ({ item }) => <Item name={item.name} price={item.price} />;

  return (
    <View style={menuStyles.container}>
      {!showMenu && (
        <Text style={menuStyles.infoSection}>
          Little Lemon is a charming neighborhood bistro that serves simple food
          and classic cocktails in a lively but casual environment. View our
          menu to explore our cuisine with daily specials!
        </Text>
      )}

      <Pressable
        
        onPress={() => setShowMenu((prevState) => !prevState)}
      >
        <Text style={menuStyles.ViewMenuText}>
          {showMenu ? "Home" : "View Menu"}
        </Text>
      </Pressable>
      {showMenu && (
        <SectionList
          keyExtractor={(item, index) => item + index}
          sections={menuItemsToDisplay}
          renderItem={renderItem}
          renderSectionHeader={renderSectionHeader}
          ListFooterComponent={Footer}
          ItemSeparatorComponent={Separator}
        />
      )}
    </View>
  );
};

export default ViewMenu;

const menuStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  itemText: {
    color: "#F4CE14",
    fontSize: 20,
  },
  ViewMenuText: {
    color: "#fad417ff",
    fontSize: 30,
    justifyContent: "center",
    textAlign: "center",
    padding: 30,
    margin: 30,
    backgroundColor: "#85848262",
    borderRadius: 30,
  },
  headerStyle: {
    backgroundColor: "#F4CE14",
  },
  sectionHeader: {
    color: "black",
    fontSize: 26,
    flexWrap: "wrap",
    textAlign: "center",
  },
  footerText: {
    color: "#EDEFEE",
    fontSize: 20,
    flexWrap: "wrap",
    textAlign: "center",
  },
  infoSection: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: "#EDEFEE",
    textAlign: "center",
    backgroundColor: "#495E57",
  },
});
