import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import HomeView from "./view";

const HomeScreen = (props) => {
    const { navigation } = props;

    const handleBackButton = () => {
        navigation.goBack();
    }

    const handleItem = (item) => {
        navigation.navigate('DetailScreen', { item: item })
    }

    return (
        <HomeView
            handleBackButton={handleBackButton}
            handleItem={handleItem}
        />
    );
}
HomeScreen.navigationOptions = () => ({
});

HomeScreen.propTypes = {
    navigation: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    // Access state from Store.
});

export default connect(mapStateToProps)(HomeScreen);
