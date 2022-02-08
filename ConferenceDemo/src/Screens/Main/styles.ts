import { StyleSheet } from "react-native";
import { COLORS } from "../../Utils/constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  headerWrapper: {
    height: 70,
    paddingHorizontal: 20,
    paddingTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: COLORS.PRIMARY,
  },
  headerTitle: {
    lineHeight: 30,
    fontSize: 20,
    fontWeight: '500',
    alignSelf: 'center',
    color: COLORS.WHITE,
  },
  logoutButton: {
    width: 30,
    height: 30,
    alignSelf: 'center',
  },
  logoutButtonIcon: {
    minWidth: 25,
    minHeight: 25,
    alignSelf: 'center',
  },
  emptyView: {
    width: 30,
    height: 30,
    alignSelf: 'center',
  },
  settingsWrapper: {
    marginTop: 10,
    width: '100%',
    flexDirection: 'row',
    alignSelf: 'center',
  },
  settingsText: {
    color: COLORS.BLACK,
    alignSelf: 'center',
    marginRight: 20,
    lineHeight: 20,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
