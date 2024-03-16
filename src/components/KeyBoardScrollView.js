import React from 'react';
import PropTypes from 'prop-types';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const KeyBoardScrollView = props => (
  <KeyboardAwareScrollView
    {...props}
    keyboardShouldPersistTaps="handled"
    alwaysBounceVertical={false}
    enableResetScrollToCoords={false}
    bounces={false}>
    {props.children}
  </KeyboardAwareScrollView>
);

KeyBoardScrollView.propTypes = {
  children: PropTypes.array.isRequired,
};

export default KeyBoardScrollView;
