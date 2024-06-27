import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Color, Border, FontFamily, FontSize, Padding } from "../GlobalStyles";

const Home = () => {
  return (
    <View style={styles.home}>
      <Image
        style={[styles.menuIcon, styles.menuIconLayout]}
        resizeMode="cover"
        source={require("../assets/menu.png")}
      />
      <View style={[styles.userIcon2, styles.iconPosition1]}>
        <Image
          style={styles.menuIconLayout}
          resizeMode="cover"
          source={require("../assets/group-37128.png")}
        />
        <View style={styles.icon}>
          <Image
            style={styles.iconLayout2}
            resizeMode="cover"
            source={require("../assets/menu1.png")}
          />
          <Image
            style={[styles.vuesaxlinearnotificationIcon, styles.iconLayout2]}
            resizeMode="cover"
            source={require("../assets/vuesaxlinearnotification.png")}
          />
          <Image
            style={[styles.menuIcon2, styles.menuIconLayout]}
            resizeMode="cover"
            source={require("../assets/menu2.png")}
          />
          <Image
            style={styles.menuIcon3}
            resizeMode="cover"
            source={require("../assets/menu3.png")}
          />
        </View>
      </View>
      <View style={[styles.navbar, styles.navbarShadowBox]}>
        <View style={styles.navbarInner}>
          <View style={[styles.menuHomeParent, styles.parentFlexBox]}>
            <Image
              style={[styles.menuHomeIcon, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../assets/menu-home.png")}
            />
            <Image
              style={[styles.menuHomeIcon, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../assets/menu-home1.png")}
            />
            <Image
              style={[styles.menuHomeIcon, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../assets/menu-home2.png")}
            />
            <Image
              style={[styles.menuHomeIcon, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../assets/menu-profile.png")}
            />
          </View>
        </View>
        <View style={styles.iosHomeIndicatorSf}>
          <View style={[styles.homeIndicator, styles.homeLayout]} />
        </View>
      </View>
      <View style={[styles.frame, styles.tabLayout]}>
        <View style={[styles.tab, styles.tabLayout]}>
          <Text style={styles.recommended}>Recommended</Text>
          <Text style={[styles.bestOffers, styles.topRatesTypo]}>
            Best Offers
          </Text>
          <Text style={[styles.topRates, styles.topRatesTypo]}>Top Rates</Text>
        </View>
      </View>
      <View style={[styles.navbar3, styles.navbar3Layout]}>
        <Image
          style={[styles.subtractIcon, styles.navbar3Layout]}
          resizeMode="cover"
          source={require("../assets/subtract.png")}
        />
        <Image
          style={styles.menuHomeIcon3}
          resizeMode="cover"
          source={require("../assets/menu-home3.png")}
        />
        <View style={[styles.menuHome, styles.menuIconPosition]}>
          <Image
            style={[styles.dotIcon, styles.dotIconLayout]}
            resizeMode="cover"
            source={require("../assets/dot.png")}
          />
          <Image
            style={[styles.homeIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/home.png")}
          />
          <Image
            style={[styles.menuHomeChild, styles.menuPosition]}
            resizeMode="cover"
            source={require("../assets/line-6.png")}
          />
          <Image
            style={[styles.focusIcon, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/focus.png")}
          />
          <View style={[styles.menuHomeItem, styles.menuPosition]} />
          <View style={[styles.menuHomeInner, styles.flightIcon1Bg]} />
        </View>
        <Image
          style={[styles.menuHomeIcon4, styles.menuIconPosition]}
          resizeMode="cover"
          source={require("../assets/menu-home4.png")}
        />
        <Image
          style={[styles.menuStatisktikIcon, styles.menuIconPosition]}
          resizeMode="cover"
          source={require("../assets/menu-statisktik.png")}
        />
        <Image
          style={[styles.menuProfileIcon1, styles.menuIconPosition]}
          resizeMode="cover"
          source={require("../assets/menu-profile1.png")}
        />
        <View style={[styles.iosHomeIndicatorSf1, styles.statusBarPosition]}>
          <View style={[styles.homeIndicator1, styles.homeLayout]} />
        </View>
      </View>
      <View style={[styles.frame1, styles.framePosition]}>
        <LinearGradient
          style={[styles.frameChild, styles.framePosition]}
          locations={[0, 1]}
          colors={["#00575e", "#bf033b"]}
          useAngle={true}
          angle={99.83}
        />
        <View style={[styles.frameParent, styles.parentLayout]}>
          <View style={styles.frameGroup}>
            <View style={styles.ellipseLayout}>
              <Image
                style={[styles.ellipseIcon, styles.ellipseLayout]}
                resizeMode="cover"
                source={require("../assets/ellipse.png")}
              />
              <Image
                style={[styles.solargalleryBoldIcon, styles.iconPosition]}
                resizeMode="cover"
                source={require("../assets/solargallerybold.png")}
              />
            </View>
            <Text style={[styles.title, styles.timeTypo]}>{`Hello,
Wilson Lubin`}</Text>
            <View style={styles.namaUser}>
              <Text style={[styles.profileUser, styles.profileTypo2]}>
                Hello Traveler!
              </Text>
              <Text style={[styles.profileUser1, styles.profileTypo1]}>
                Welcome Back!
              </Text>
              <View style={styles.place}>
                <Image
                  style={styles.solarmapPointOutlineIcon}
                  resizeMode="cover"
                  source={require("../assets/solarmappointoutline.png")}
                />
                <Text style={[styles.profileUser2, styles.profileTypo]}>
                  Jakarta, Indonesia
                </Text>
              </View>
              <View style={styles.place1}>
                <Image
                  style={styles.solarmapPointOutlineIcon1}
                  resizeMode="cover"
                  source={require("../assets/solarmappointoutline1.png")}
                />
                <Text style={[styles.profileUser3, styles.profileTypo]}>
                  Jakarta, Indonesia
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.user}>
            <View style={styles.namaUser1}>
              <Text style={[styles.profileUser4, styles.profileFlexBox]}>
                Welcome Back!
              </Text>
              <Text style={[styles.profileUser5, styles.profileFlexBox]}>
                Ryan Aminoff
              </Text>
              <View style={styles.place2}>
                <Image
                  style={styles.solarmapPointOutlineIcon1}
                  resizeMode="cover"
                  source={require("../assets/solarmappointoutline2.png")}
                />
                <Text style={[styles.profileUser3, styles.profileTypo]}>
                  Jakarta, Indonesia
                </Text>
              </View>
            </View>
          </View>
          <Image
            style={styles.iconLayout}
            resizeMode="cover"
            source={require("../assets/icon.png")}
          />
        </View>
        <View style={[styles.cardMainFeaturs, styles.parentLayout]}>
          <Image
            style={[styles.bg1Icon, styles.bg1IconLayout]}
            resizeMode="cover"
            source={require("../assets/bg1.png")}
          />
          <Image
            style={[styles.bg1Icon1, styles.bg1IconLayout]}
            resizeMode="cover"
            source={require("../assets/bg1.png")}
          />
          <View style={[styles.mainFeaturesParent, styles.parentLayout]}>
            <View style={[styles.mainFeatures, styles.mainPosition]}>
              <View style={styles.flight}>
                <View style={[styles.flightIcon, styles.iconFlexBox]}>
                  <Image
                    style={styles.entypoaircraftIcon}
                    resizeMode="cover"
                    source={require("../assets/entypoaircraft.png")}
                  />
                </View>
                <Text style={[styles.title1, styles.titleTypo]}>Flight</Text>
              </View>
              <View style={[styles.train, styles.trainSpaceBlock]}>
                <View style={[styles.flightIcon, styles.iconFlexBox]}>
                  <Image
                    style={styles.entypoaircraftIcon}
                    resizeMode="cover"
                    source={require("../assets/raphaeltrain.png")}
                  />
                </View>
                <Text style={[styles.title1, styles.titleTypo]}>Train</Text>
              </View>
              <View style={[styles.train, styles.trainSpaceBlock]}>
                <View style={[styles.flightIcon, styles.iconFlexBox]}>
                  <Image
                    style={styles.entypoaircraftIcon}
                    resizeMode="cover"
                    source={require("../assets/solarbusbold.png")}
                  />
                </View>
                <Text style={[styles.title1, styles.titleTypo]}>Bus</Text>
              </View>
              <View style={[styles.train, styles.trainSpaceBlock]}>
                <View style={[styles.flightIcon, styles.iconFlexBox]}>
                  <Image
                    style={styles.entypoaircraftIcon}
                    resizeMode="cover"
                    source={require("../assets/solarbuildingsbold.png")}
                  />
                </View>
                <Text style={[styles.title1, styles.titleTypo]}>Hotel</Text>
              </View>
              <View style={[styles.train, styles.trainSpaceBlock]}>
                <View style={[styles.flightIcon, styles.iconFlexBox]}>
                  <Image
                    style={styles.entypoaircraftIcon}
                    resizeMode="cover"
                    source={require("../assets/ionboat.png")}
                  />
                </View>
                <Text style={[styles.title1, styles.titleTypo]}>Boat</Text>
              </View>
              <View style={[styles.cinema, styles.trainSpaceBlock]}>
                <View style={[styles.hotelIcon2, styles.iconFlexBox]}>
                  <Image
                    style={styles.solarmapPointOutlineIcon1}
                    resizeMode="cover"
                    source={require("../assets/solarticketbold.png")}
                  />
                </View>
                <Text style={[styles.title6, styles.titleTypo]}>Cinema</Text>
              </View>
            </View>
            <View style={styles.mainPosition}>
              <View style={styles.flight}>
                <View style={[styles.flightIcon1, styles.flightIcon1Bg]}>
                  <Image
                    style={styles.entypoaircraftIcon}
                    resizeMode="cover"
                    source={require("../assets/entypoaircraft1.png")}
                  />
                </View>
                <Text style={[styles.title7, styles.titleTypo]}>Flight</Text>
              </View>
              <View style={[styles.train, styles.trainSpaceBlock]}>
                <View style={[styles.flightIcon1, styles.flightIcon1Bg]}>
                  <Image
                    style={styles.entypoaircraftIcon}
                    resizeMode="cover"
                    source={require("../assets/solarbuildingsbold1.png")}
                  />
                </View>
                <Text style={[styles.title7, styles.titleTypo]}>Hotel</Text>
              </View>
              <View style={[styles.train, styles.trainSpaceBlock]}>
                <View style={[styles.flightIcon1, styles.flightIcon1Bg]}>
                  <Image
                    style={[styles.raphaeltrainIcon1, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/raphaeltrain1.png")}
                  />
                </View>
                <Text style={[styles.title7, styles.titleTypo]}>Holiday</Text>
              </View>
              <View style={[styles.train, styles.trainSpaceBlock]}>
                <View style={[styles.flightIcon1, styles.flightIcon1Bg]}>
                  <Image
                    style={styles.solarbusBoldIcon1}
                    resizeMode="cover"
                    source={require("../assets/solarbusbold1.png")}
                  />
                </View>
                <Text style={[styles.title7, styles.titleTypo]}>Transfer</Text>
              </View>
              <View style={[styles.boat1, styles.trainSpaceBlock]}>
                <View style={[styles.flightIcon1, styles.flightIcon1Bg]}>
                  <Image
                    style={styles.entypoaircraftIcon}
                    resizeMode="cover"
                    source={require("../assets/ionboat1.png")}
                  />
                </View>
                <Text style={[styles.title7, styles.titleTypo]}>Boat</Text>
              </View>
              <View style={[styles.cinema, styles.trainSpaceBlock]}>
                <View style={[styles.hotelIcon2, styles.iconFlexBox]}>
                  <Image
                    style={styles.solarmapPointOutlineIcon1}
                    resizeMode="cover"
                    source={require("../assets/solarticketbold.png")}
                  />
                </View>
                <Text style={[styles.title6, styles.titleTypo]}>Cinema</Text>
              </View>
            </View>
            <Text
              style={[styles.profileUser7, styles.profileTypo2]}
            >{`Book Flight, Hotels & Holiday Packages`}</Text>
          </View>
        </View>
        <View style={[styles.statusBar, styles.statusBarPosition]}>
          <View style={[styles.action, styles.iconPosition]}>
            <Text style={[styles.time, styles.timeTypo]}>9:41</Text>
          </View>
          <View style={[styles.container, styles.iconPosition]}>
            <Image
              style={styles.combinedShapeIcon}
              resizeMode="cover"
              source={require("../assets/combined-shape.png")}
            />
            <Image
              style={[styles.wiFiIcon, styles.iconSpaceBlock]}
              resizeMode="cover"
              source={require("../assets/wifi.png")}
            />
            <Image
              style={[styles.batteryIcon, styles.iconSpaceBlock]}
              resizeMode="cover"
              source={require("../assets/battery.png")}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  menuIconLayout: {
    height: 40,
    width: 40,
  },
  iconPosition1: {
    top: 64,
    display: "none",
    position: "absolute",
  },
  iconLayout2: {
    height: 30,
    width: 30,
  },
  navbarShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 8,
      height: 4,
    },
    backgroundColor: Color.colorWhite,
  },
  parentFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  iconLayout1: {
    maxHeight: "100%",
    overflow: "hidden",
  },
  homeLayout: {
    width: 134,
    borderRadius: Border.br_81xl,
  },
  tabLayout: {
    height: 20,
    position: "absolute",
    overflow: "hidden",
  },
  topRatesTypo: {
    color: Color.colorDarkslategray_200,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    letterSpacing: 1,
    fontSize: FontSize.bodyTextManropeRegular14_size,
    top: "50%",
    marginTop: -10,
    position: "absolute",
  },
  navbar3Layout: {
    height: 80,
    width: 375,
    left: 0,
    position: "absolute",
  },
  menuIconPosition: {
    top: 15,
    width: 50,
    height: 50,
    position: "absolute",
    overflow: "hidden",
  },
  dotIconLayout: {
    height: 8,
    display: "none",
  },
  iconLayout: {
    height: 24,
    width: 24,
  },
  menuPosition: {
    top: 36,
    position: "absolute",
  },
  flightIcon1Bg: {
    backgroundColor: Color.colorDarkslategray_100,
    borderRadius: Border.br_81xl,
  },
  statusBarPosition: {
    marginLeft: -187.5,
    left: "50%",
    width: 375,
    position: "absolute",
  },
  framePosition: {
    width: 375,
    top: 0,
    left: 0,
    position: "absolute",
  },
  parentLayout: {
    width: 327,
    position: "absolute",
  },
  ellipseLayout: {
    height: 49,
    width: 49,
  },
  iconPosition: {
    top: "50%",
    position: "absolute",
  },
  timeTypo: {
    fontFamily: FontFamily.headingManropeSemiBold20,
    fontWeight: "600",
  },
  profileTypo2: {
    fontFamily: FontFamily.bodyTextInterMedium16,
    textAlign: "left",
    fontWeight: "500",
  },
  profileTypo1: {
    fontFamily: FontFamily.bodyTextManropeRegular14,
    color: Color.colorDarkgray,
  },
  profileTypo: {
    marginLeft: 4,
    lineHeight: 22,
    textAlign: "left",
    fontSize: FontSize.bodyTextManropeRegular14_size,
  },
  profileFlexBox: {
    letterSpacing: 0.2,
    textAlign: "left",
  },
  bg1IconLayout: {
    height: 138,
    width: 138,
    display: "none",
    position: "absolute",
  },
  mainPosition: {
    paddingVertical: Padding.p_11xs,
    paddingHorizontal: Padding.p_xl,
    flexWrap: "wrap",
    top: 84,
    marginLeft: -163.5,
    width: 327,
    left: "50%",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  iconFlexBox: {
    borderRadius: Border.br_81xl,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  titleTypo: {
    marginTop: 8,
    fontFamily: FontFamily.bodyTextInterRegular12,
    textAlign: "center",
    alignSelf: "stretch",
  },
  trainSpaceBlock: {
    marginLeft: 12,
    alignItems: "center",
  },
  iconSpaceBlock: {
    marginLeft: 5,
    height: 12,
  },
  menuIcon: {
    left: 261,
    display: "none",
    borderRadius: Border.br_31xl,
    top: 64,
    position: "absolute",
    overflow: "hidden",
  },
  vuesaxlinearnotificationIcon: {
    marginLeft: 8,
  },
  menuIcon2: {
    marginLeft: 8,
    display: "none",
    overflow: "hidden",
  },
  menuIcon3: {
    width: 37,
    height: 37,
    marginLeft: 8,
    display: "none",
    overflow: "hidden",
  },
  icon: {
    marginLeft: 219,
    flexDirection: "row",
  },
  userIcon2: {
    alignItems: "center",
    flexDirection: "row",
    left: 24,
    display: "none",
  },
  menuHomeIcon: {
    width: 50,
    alignSelf: "stretch",
  },
  menuHomeParent: {
    alignSelf: "stretch",
    flex: 1,
  },
  navbarInner: {
    paddingHorizontal: 24,
    paddingTop: 5,
    paddingBottom: 16,
    justifyContent: "center",
    height: 50,
    width: 375,
    overflow: "hidden",
  },
  homeIndicator: {
    backgroundColor: "#dadada",
    height: 4,
  },
  iosHomeIndicatorSf: {
    paddingHorizontal: 120,
    paddingVertical: 6,
    marginTop: 10,
    display: "none",
  },
  navbar: {
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowRadius: 24,
    elevation: 24,
    paddingHorizontal: 0,
    paddingVertical: 10,
    left: 0,
    bottom: 0,
    display: "none",
    position: "absolute",
  },
  recommended: {
    left: "0%",
    color: "#7f67d7",
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    letterSpacing: 1,
    fontSize: FontSize.bodyTextManropeRegular14_size,
    marginTop: -10,
    top: "50%",
    position: "absolute",
  },
  bestOffers: {
    left: "44.3%",
    textAlign: "center",
  },
  topRates: {
    left: "79.79%",
    textAlign: "right",
  },
  tab: {
    width: 386,
    top: 0,
    left: 24,
  },
  frame: {
    top: 351,
    width: 410,
    left: 0,
  },
  subtractIcon: {
    top: 0,
  },
  menuHomeIcon3: {
    top: -36,
    left: 157,
    borderRadius: 36,
    width: 60,
    height: 60,
    position: "absolute",
    overflow: "hidden",
  },
  dotIcon: {
    marginTop: 11,
    marginLeft: -4,
    width: 8,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  homeIcon: {
    marginTop: -18,
    marginLeft: -12,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  menuHomeChild: {
    marginLeft: -11,
    height: 0,
    width: 22,
    left: "50%",
    display: "none",
  },
  focusIcon: {
    height: "16%",
    width: "16%",
    top: "72%",
    right: "42%",
    bottom: "12%",
    left: "42%",
    maxWidth: "100%",
    display: "none",
    position: "absolute",
  },
  menuHomeItem: {
    left: 19,
    backgroundColor: "#2765cb",
    width: 12,
    height: 8,
    display: "none",
    borderRadius: Border.br_31xl,
  },
  menuHomeInner: {
    left: 22,
    width: 6,
    height: 3,
    top: 36,
    position: "absolute",
  },
  menuHome: {
    left: 20,
  },
  menuHomeIcon4: {
    left: 85,
  },
  menuStatisktikIcon: {
    left: 234,
  },
  menuProfileIcon1: {
    left: 305,
  },
  homeIndicator1: {
    marginLeft: -66.5,
    bottom: 8,
    backgroundColor: "#05050e",
    height: 5,
    left: "50%",
    position: "absolute",
  },
  iosHomeIndicatorSf1: {
    height: 34,
    bottom: 0,
  },
  navbar3: {
    bottom: 0,
  },
  frameChild: {
    borderBottomRightRadius: Border.br_110xl_5,
    borderBottomLeftRadius: Border.br_110xl_5,
    height: 259,
    backgroundColor: "transparent",
    top: 0,
  },
  ellipseIcon: {
    top: 0,
    left: 0,
    position: "absolute",
  },
  solargalleryBoldIcon: {
    marginTop: -19.5,
    marginLeft: -19.5,
    width: 39,
    height: 39,
    left: "50%",
    overflow: "hidden",
  },
  title: {
    fontSize: FontSize.headingManropeSemiBold20_size,
    lineHeight: 28,
    marginLeft: 16,
    color: Color.mainColorsSecondary,
    textAlign: "left",
    display: "none",
  },
  profileUser: {
    color: Color.colorWhite,
    lineHeight: 24,
    fontSize: FontSize.bodyTextInterMedium16_size,
  },
  profileUser1: {
    marginTop: 3,
    color: Color.colorDarkgray,
    lineHeight: 16,
    fontSize: FontSize.bodyTextInterRegular12_size,
    textAlign: "left",
    display: "none",
  },
  solarmapPointOutlineIcon: {
    width: 16,
    height: 16,
    overflow: "hidden",
  },
  profileUser2: {
    fontFamily: FontFamily.bodyTextInterRegular12,
    color: Color.colorWhite,
  },
  place: {
    marginTop: 3,
    alignItems: "center",
    flexDirection: "row",
  },
  solarmapPointOutlineIcon1: {
    height: 22,
    width: 22,
    overflow: "hidden",
  },
  profileUser3: {
    color: Color.colorDarkgray,
    fontFamily: FontFamily.bodyTextManropeRegular14,
  },
  place1: {
    marginTop: 3,
    flexDirection: "row",
    display: "none",
  },
  namaUser: {
    marginLeft: 16,
  },
  frameGroup: {
    alignItems: "center",
    flexDirection: "row",
  },
  profileUser4: {
    lineHeight: 18,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.bodyTextInterRegular12,
    color: Color.colorDarkgray,
  },
  profileUser5: {
    fontWeight: "700",
    fontFamily: FontFamily.manropeBold,
    marginTop: 5,
    lineHeight: 24,
    fontSize: FontSize.bodyTextInterMedium16_size,
    color: Color.mainColorsSecondary,
  },
  place2: {
    marginTop: 5,
    flexDirection: "row",
    display: "none",
  },
  namaUser1: {
    display: "none",
  },
  user: {
    width: 143,
    height: 74,
    alignItems: "center",
    flexDirection: "row",
    display: "none",
  },
  frameParent: {
    top: 60,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    left: 24,
  },
  bg1Icon: {
    top: -58,
    right: -62,
  },
  bg1Icon1: {
    top: 161,
    left: -84,
  },
  entypoaircraftIcon: {
    width: 21,
    height: 21,
    overflow: "hidden",
  },
  flightIcon: {
    backgroundColor: Color.colorGray_100,
    height: 40,
    width: 40,
  },
  title1: {
    lineHeight: 22,
    marginTop: 8,
    fontSize: FontSize.bodyTextManropeRegular14_size,
    color: Color.mainColorsSecondary,
  },
  flight: {
    alignItems: "center",
    flex: 1,
  },
  train: {
    flex: 1,
  },
  hotelIcon2: {
    backgroundColor: Color.colorFuchsia,
    width: 48,
    height: 48,
  },
  title6: {
    color: Color.textPrimary,
    lineHeight: 22,
    marginTop: 8,
    fontSize: FontSize.bodyTextManropeRegular14_size,
  },
  cinema: {
    width: 50,
    display: "none",
  },
  mainFeatures: {
    display: "none",
  },
  flightIcon1: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    height: 40,
    width: 40,
  },
  title7: {
    lineHeight: 16,
    fontSize: FontSize.bodyTextInterRegular12_size,
    color: Color.mainColorsSecondary,
  },
  raphaeltrainIcon1: {
    overflow: "hidden",
  },
  solarbusBoldIcon1: {
    height: 17,
    width: 17,
    overflow: "hidden",
  },
  boat1: {
    display: "none",
    flex: 1,
  },
  profileUser7: {
    fontSize: 24,
    lineHeight: 32,
    width: 283,
    color: Color.mainColorsSecondary,
    top: 0,
    left: 0,
    position: "absolute",
  },
  mainFeaturesParent: {
    top: 24,
    height: 152,
    left: 0,
  },
  cardMainFeaturs: {
    top: 129,
    shadowColor: "rgba(13, 6, 45, 0.1)",
    shadowRadius: 40,
    elevation: 40,
    borderRadius: 20,
    height: 206,
    shadowOpacity: 1,
    shadowOffset: {
      width: 8,
      height: 4,
    },
    backgroundColor: Color.colorWhite,
    left: 24,
    overflow: "hidden",
  },
  time: {
    letterSpacing: 0,
    lineHeight: 18,
    width: 54,
    fontSize: FontSize.size_mini,
    color: Color.colorWhite,
    textAlign: "center",
  },
  action: {
    marginTop: -9,
    width: "14.4%",
    right: "79.2%",
    left: "6.4%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  combinedShapeIcon: {
    height: 11,
    width: 17,
  },
  wiFiIcon: {
    width: 15,
  },
  batteryIcon: {
    width: 25,
  },
  container: {
    marginTop: -6,
    right: 24,
    flexDirection: "row",
  },
  statusBar: {
    height: 44,
    top: 0,
  },
  frame1: {
    height: 335,
    top: 0,
    overflow: "hidden",
  },
  home: {
    width: "100%",
    height: 812,
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
});

export default Home;
