import * as Font from 'expo-font'

const fetchFonts = () => {
    return Font.loadAsync({
        'icomoon': require('../assets/icomoon/icomoon.ttf')
    })
}

export default fetchFonts