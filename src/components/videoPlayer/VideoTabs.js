import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import COLORS from '~constants/colors';
import responsiveFonts from '~utils/responsiveFonts';

import TabButton from '../TabButton';

import CourseContext from './CourseContext';
import Discussion from './Discussion';

function VideoTabs() {
  const [isCourseContent, setIsCourseContent] = useState(true);

  return (
    <View style={styles.container}>
      <View style={styles.tabBarContainer}>
        <TabButton
          text="Course Content"
          condition={!isCourseContent}
          onPress={() => {
            setIsCourseContent(true);
          }}
        />
        <TabButton
          text="Discussion"
          condition={isCourseContent}
          onPress={() => {
            setIsCourseContent(false);
          }}
        />
      </View>
      <View style={styles.tabContentWrapper}>
        {isCourseContent ? <CourseContext /> : <Discussion />}
      </View>
    </View>
  );
}

export default VideoTabs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBarContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabContentWrapper: {
    flex: 6,
  },
  tabText: {
    fontFamily: 'DMSans_700Bold',
    fontSize: responsiveFonts(14),
  },
  selectedTabContainer: {
    backgroundColor: COLORS.lightBaseTwo,
  },
  selectedTab: {
    color: COLORS.darkBaseOne,
  },
  nonSelectedTab: {
    color: COLORS.lightBaseThree,
  },
});
