import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DetailView from "./view";

const DetailScreen = (props) => {
    const { navigation, route } = props;
    const { item } = route.params;

    const handleBackButton = () => {
        navigation.goBack();
    }

    const handleItem = (item) => {
        console.log(item);
    }

    return (
        <DetailView
            handleBackButton={handleBackButton}
            handleItem={handleItem}
            item={item}
        />
    );
}
DetailScreen.navigationOptions = () => ({
});

DetailScreen.propTypes = {
    navigation: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    // Access state from Store.
});

export default connect(mapStateToProps)(DetailScreen);
