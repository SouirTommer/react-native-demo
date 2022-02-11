/*
 * Copyright (c) 2011-2022, Zingaya, Inc. All rights reserved.
 */

import { StyleSheet } from "react-native";

import { COLORS } from "../../Utils/constants";

export default StyleSheet.create({
  firstArea: {
    flex: 0,
    backgroundColor: COLORS.PRIMARY,
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  contentWrapper: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
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
