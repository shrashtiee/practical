import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../utility/colorConstant';
import Fonts from '../../utility/fonts';
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: Colors.WHITE_COLOR,
        flex: 1,
    },
    itemStyle: {
        height: 70,
        borderRadius: 5,
        borderWidth: 0.5,
        marginVertical: 10,
        backgroundColor: Colors.WHITE_COLOR
    },
    innerView: {
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        marginBottom: 20,
    },
    headingText: {
        fontSize: 18,
        fontFamily: Fonts.MEDIUM,
        color: Colors.WHITE_COLOR,
    },
    textStyle: {
        fontSize: 15,
        fontFamily: Fonts.REGULAR,
        paddingHorizontal: 10,
        color: Colors.BLACK_COLOR
    },
    cardViewStyle: {
        backgroundColor: Colors.BUTTON_COLOR,
        borderColor: Colors.WHITE_COLOR,
        borderRadius: 5,
        borderWidth: 0.5,
        elevation: 6,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 15
    },
    imageViewStyle: {
        height: 200,
        width: 200,
        alignSelf: 'center',
    },
    imageStyle: {
        height: '100%',
        width: '100%',
        borderRadius: 10,
        resizeMode: 'contain'
    },
    nameTextStyle: {
        fontSize: 20,
        fontFamily: Fonts.BOLD,
        textAlign: 'center',
        color: Colors.WHITE_COLOR
    }
});

export default styles;