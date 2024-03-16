import React from "react";
import { connect } from 'react-redux';
import {
  View,
  Text,
  Image,
} from 'react-native';
import styles from "./style";
import { ScreenHeader, KeyBoardScrollView } from "../../components";

const DetailView = (props) => {
  const { item, handleBackButton } = props;

  return (
    <View style={styles.mainContainer}>
      <ScreenHeader
        headerTitle={'Recipe Details'}
        handleBackButton={handleBackButton} />
      <KeyBoardScrollView>
        <View style={styles.innerView}>
          <View style={styles.cardViewStyle}>
            <Text style={styles.nameTextStyle}>{item?.name}</Text>
          </View>
          <View style={styles.imageViewStyle}>
            <Image
              source={{ uri: item?.image }}
              style={styles.imageStyle}
            />
          </View>
          <View style={styles.cardViewStyle}>
            <Text style={styles.headingText}>Ingredients:</Text>
          </View>
          <Text style={styles.textStyle}>{item?.ingredients}</Text>
          <View style={styles.cardViewStyle}>
            <Text style={styles.headingText}>Steps:</Text>
          </View>
          <Text style={styles.textStyle}>{item?.steps}</Text>
        </View>
      </KeyBoardScrollView>

    </View>
  );
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(DetailView);