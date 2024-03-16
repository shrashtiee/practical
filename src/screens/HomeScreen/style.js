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
        height: 100,
        width: deviceWidth * 0.95,
        borderRadius: 5,
        borderWidth: 0.5,
        borderColor: Colors.WHITE_COLOR,
        marginVertical: 10,
        backgroundColor: Colors.WHITE_COLOR,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'center',
        elevation: 6,
        backgroundColor: Colors.WHITE_COLOR
    },
    flatlistView: {
        width: deviceWidth * 0.95,
        alignContent: 'center',
    },
    itemName: {
        fontSize: 20,
        fontFamily: Fonts.MEDIUM,
        color: Colors.BLACK_COLOR,
        textAlignVertical: 'center',
        paddingHorizontal: 20
    },
    imageViewStyle: {
        height: 100,
        width: 130,
    },
    imageStyle: { height: '100%', width: '100%', resizeMode: 'cover' }
});

export default styles;