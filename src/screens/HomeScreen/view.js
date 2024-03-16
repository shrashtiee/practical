import React from "react";
import { connect } from 'react-redux';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList
} from 'react-native';
import styles from "./style";
import Recipe from "../../utility/recipeData";
import { ScreenHeader } from "../../components";

const HomeView = (props) => {
  const { handleItem } = props;

  return (
    <View style={styles.mainContainer}>
      <ScreenHeader
        headerTitle={'Recipe'}
      />
      <View style={styles.flatlistView}></View>
      <FlatList
        data={Recipe}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleItem(item)} style={styles.itemStyle}>
            <Text style={styles.itemName}>{item.name}</Text>
            <View style={styles.imageViewStyle}>
              <Image source={{ uri: item.image }}
                style={styles.imageStyle} />
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(HomeView);