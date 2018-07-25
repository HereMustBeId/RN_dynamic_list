import {StyleSheet} from "react-native";
import generalStyles from "./config/style";

const styles = {
   container: {
      flex: 1,
   },
   row: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      paddingTop: 10
   },
   closeBtn: {
      marginTop: generalStyles.sizes.one
   },
   addText: {
      ...generalStyles.fonts.normal,
      color: generalStyles.colors.blue
   },
   dimensionsLine: {
      marginTop: 10,
      backgroundColor: generalStyles.colors.silver
   }
};

export default StyleSheet.create(styles);