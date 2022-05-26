import {
  StyleSheet,
  View,
} from 'react-native';
import React from 'react';
import {DEVICE} from '../utils/constants';

import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const RestaurantDetail = () => {
  return (
    <SkeletonPlaceholder>
      <View>
        <View>
          <View style={styles.banner} />
          <View style={styles.backIcons}>
            <View style={styles.backIconsMainView}>
              <View style={[styles.iconView]}>
                <View style={{width: 35, height: 35, borderRadius: 8}} />
              </View>
              <View style={[styles.iconView]}>
                <View style={{width: 35, height: 35, borderRadius: 8}} />
              </View>
            </View>
          </View>
        </View>
        {/*{shopDetail}*/}

        <View style={{paddingHorizontal: 20, marginTop: 15}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View
              style={{
                width: 50,
                height: 50,
                borderRadius: 25,
              }}
            />
            <View style={{paddingLeft: 20}}>
              <View style={{height: 6, width: 100, marginTop: 10}} />
              <View style={{height: 4, width: 100, marginTop: 10}} />
            </View>
          </View>
        </View>

        {/*rating*/}

        <View style={styles.detailMain}>
          <View style={styles.detailView}>
            <View style={styles.detailFirstContainer}>
              <View style={{width: 12, height: 12, borderRadius: 8}} />
              <View style={[styles.detailSecondText, {height: 4, width: 40}]} />
            </View>
            <View style={styles.detailSecondContainer}>
              <View style={{width: 12, height: 12, borderRadius: 8}} />

              <View style={[styles.detailSecondText, {height: 4, width: 40}]} />
            </View>
            <View style={styles.detailThirdContainer}>
              <View style={{width: 12, height: 12, borderRadius: 8}} />

              <View style={[styles.detailSecondText, {height: 4, width: 40}]} />
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            flexWrap: 'wrap',
            marginTop: 20,
            paddingHorizontal: 20,
          }}>
          <View style={{width: (DEVICE.width - 50) / 2, marginTop: 20}}>
            <View>
              <View
                style={{
                  height: (DEVICE.width * 0.65 - 50) / 2,
                  borderRadius: 8,
                }}>
                <View style={styles.image} />
              </View>
              <View>
                <View style={{height: 6, width: 60, marginTop: 10}} />
                <View style={{height: 4, width: 40, marginTop: 10}} />
                <View style={{height: 4, width: 30, marginTop: 10}} />
              </View>
            </View>
          </View>
          <View
            style={{
              width: (DEVICE.width - 50) / 2,
              marginTop: 20,
              marginLeft: 10,
            }}>
            <View>
              <View
                style={{
                  height: (DEVICE.width * 0.65 - 50) / 2,
                  borderRadius: 8,
                }}>
                <View style={styles.image} />
              </View>
              <View>
                <View style={{height: 6, width: 60, marginTop: 10}} />
                <View style={{height: 4, width: 40, marginTop: 10}} />
                <View style={{height: 4, width: 30, marginTop: 10}} />
              </View>
            </View>
          </View>
          <View style={{width: (DEVICE.width - 50) / 2, marginTop: 20}}>
            <View>
              <View
                style={{
                  height: (DEVICE.width * 0.65 - 50) / 2,
                  borderRadius: 8,
                }}>
                <View style={styles.image} />
              </View>
              <View>
                <View style={{height: 6, width: 60, marginTop: 10}} />
                <View style={{height: 4, width: 40, marginTop: 10}} />
                <View style={{height: 4, width: 30, marginTop: 10}} />
              </View>
            </View>
          </View>
          <View
            style={{
              width: (DEVICE.width - 50) / 2,
              marginTop: 20,
              marginLeft: 10,
            }}>
            <View>
              <View
                style={{
                  height: (DEVICE.width * 0.65 - 50) / 2,
                  borderRadius: 8,
                }}>
                <View style={styles.image} />
              </View>
              <View>
                <View style={{height: 6, width: 60, marginTop: 10}} />
                <View style={{height: 4, width: 40, marginTop: 10}} />
                <View style={{height: 4, width: 30, marginTop: 10}} />
              </View>
            </View>
          </View>
          <View style={{width: (DEVICE.width - 50) / 2, marginTop: 20}}>
            <View>
              <View
                style={{
                  height: (DEVICE.width * 0.65 - 50) / 2,
                  borderRadius: 8,
                }}>
                <View style={styles.image} />
              </View>
              <View>
                <View style={{height: 6, width: 60, marginTop: 10}} />
                <View style={{height: 4, width: 40, marginTop: 10}} />
                <View style={{height: 4, width: 30, marginTop: 10}} />
              </View>
            </View>
          </View>
          <View
            style={{
              width: (DEVICE.width - 50) / 2,
              marginTop: 20,
              marginLeft: 10,
            }}>
            <View>
              <View
                style={{
                  height: (DEVICE.width * 0.65 - 50) / 2,
                  borderRadius: 8,
                }}>
                <View style={styles.image} />
              </View>
              <View>
                <View style={{height: 6, width: 60, marginTop: 10}} />
                <View style={{height: 4, width: 40, marginTop: 10}} />
                <View style={{height: 4, width: 30, marginTop: 10}} />
              </View>
            </View>
          </View>
        </View>
      </View>
    </SkeletonPlaceholder>
  );
};
export default RestaurantDetail;

const styles = StyleSheet.create({
  flatListView: {
    paddingBottom: 10,
    flex: 1,
  },
  backIconsMainView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  banner: {height: DEVICE.height * 0.25, width: DEVICE.width},
  backIcons: {position: 'absolute', width: DEVICE.width, top: 8},
  input: {flex: 1, paddingLeft: 10},
  searchView: {
    paddingVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  searchMainview: {paddingHorizontal: 20, marginTop: 10},
  detailMain: {paddingHorizontal: 20, marginTop: 10},
  detailView: {
    borderWidth: 1,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  detailFirstContainer: {
    borderRightWidth: 0.5,
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  detailFirstText: {
    marginLeft: 10,
  },
  detailSecondContainer: {
    borderLeftWidth: 0.5,
    borderRightWidth: 0.5,
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  detailSecondText: {
    marginLeft: 10,
  },
  detailThirdContainer: {
    borderLeftWidth: 0.5,
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  detailThirdText: {
    marginLeft: 10,
  },
  iconView: {
    padding: 5,
    borderRadius: 8,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  durationView: {
    flexDirection: 'row',
    position: 'absolute',
    alignItems: 'center',
    bottom: 0,
    borderBottomLeftRadius: 30,
    height: 40,
    width: 100,
    borderTopRightRadius: 30,
  },
  durationText: {
    fontWeight: '700',
    width: '100%',
    textAlign: 'center',
    fontSize: 13,
  },
  productName: {fontSize: 17, fontWeight: 'bold'},
  productNameView: {marginTop: 9},
  desView: {marginTop: 5, flexDirection: 'row', alignItems: 'center'},
  ratingText: {
    marginLeft: 2,
  },
  productNameShort: {
    marginLeft: 10,
  },
  desMinus: {
    marginLeft: 5,
    marginRight: 5,
  },
  desName: {
    marginLeft: 2,
  },
  price: {
    marginLeft: 10,
  },
});
