import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '../utils/theme';
import {DEVICE, ROUTES, SWITTO_SIZES} from '../utils/constants';
import {Divider} from 'react-native-elements';
import {Icon} from '../components/Icon';
import Dialog, {DialogContent} from 'react-native-popup-dialog';
import {useNavigation} from '@react-navigation/native';
const CurrentOrders = () => {
  return (
    <ScrollView
      style={{
        backgroundColor: COLORS.cardBackground,
        paddingHorizontal: 20,
        paddingBottom: 120,
        flex: 1,
      }}>
      {/*new order card*/}
      <NewOrder />
      {/*food preparing*/}
      <PreparingFood />
      {/*readyFood*/}
      <ReadyFood />
      {/*drivingFood*/}
      <DrivingFood />
      {/*cash on Hand*/}
      <CashOnHand />
    </ScrollView>
  );
};
export default CurrentOrders;

const styles = StyleSheet.create({});

const NewOrder = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        borderRadius: 15,
        backgroundColor: COLORS.whitePure,
        marginTop: 10,
        paddingBottom: 20,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 20,
          justifyContent: 'space-between',
          paddingVertical: 10,
        }}>
        <Text style={{color: COLORS.textBlack, fontWeight: '500'}}>
          Id: 323
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: COLORS.newOrderButtonGreen,
            borderRadius: 25,
            paddingVertical: 7,
            paddingHorizontal: 15,
          }}>
          <Text
            style={{color: COLORS.whitePure, fontSize: SWITTO_SIZES.fontSize}}>
            New Order
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{paddingHorizontal: 20, marginTop: 10}}>
        <Divider width={0.5} color={COLORS.textBlack} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 20,
          justifyContent: 'space-between',
          paddingVertical: 5,
          marginTop: 5,
        }}>
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
          <Icon
            name={'person'}
            IconType={'Ionicons'}
            color={COLORS.descriptionText}
            size={'extra-small'}
          />
          <Text
            style={{
              color: COLORS.textBlack,
              fontWeight: '400',
              fontSize: SWITTO_SIZES.fontSize,
              paddingLeft: 10,
            }}>
            Pavithra rathudan
          </Text>
        </View>
        <View style={{flex: 1}}>
          <Text
            style={{
              color: COLORS.textBlack,
              fontWeight: '400',
              fontSize: SWITTO_SIZES.fontSize,
              paddingLeft: 10,
            }}>
            9.40H
          </Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 20,
          justifyContent: 'space-between',
          paddingVertical: 5,
        }}>
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
          <Icon
            name={'cash'}
            IconType={'Ionicons'}
            color={COLORS.descriptionText}
            size={'extra-small'}
          />
          <Text
            style={{
              color: COLORS.textBlack,
              fontWeight: '400',
              fontSize: SWITTO_SIZES.fontSize,
              paddingLeft: 10,
            }}>
            Cash on delivery
          </Text>
        </View>
        <View style={{flex: 1}}>
          <Text
            style={{
              color: COLORS.textBlack,
              fontWeight: '400',
              fontSize: SWITTO_SIZES.fontSize,
              paddingLeft: 10,
            }}>
            CHF 75.00
          </Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 10,
          paddingHorizontal: 20,
        }}>
        <TouchableOpacity
          style={{
            flex: 1,
            borderRadius: 8,
            borderColor: COLORS.descriptionText,
            paddingVertical: 15,
            borderWidth: 1,
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: COLORS.textBlack,
              fontWeight: '400',
              fontSize: SWITTO_SIZES.fontSize,
              paddingHorizontal: 10,
            }}>
            Decline
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate(ROUTES.orderDetail)}
          style={{
            flex: 2,
            borderRadius: 8,
            borderColor: COLORS.descriptionText,
            paddingVertical: 15,
            borderWidth: 1,
            marginLeft: 5,
            backgroundColor: COLORS.activeButtonBlue,
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: COLORS.whitePure,
              fontWeight: '500',
              fontSize: SWITTO_SIZES.fontSize,
              paddingHorizontal: 10,
            }}>
            Accept order
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const PreparingFood = () => (
  <View
    style={{
      borderRadius: 15,
      backgroundColor: COLORS.whitePure,
      marginTop: 10,
      paddingBottom: 20,
    }}>
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        justifyContent: 'space-between',
        paddingVertical: 10,
      }}>
      <Text style={{color: COLORS.textBlack, fontWeight: '500', flex: 1}}>
        Id: DF980
      </Text>
      <TouchableOpacity
        style={{
          flex: 1,
          alignItems: 'center',
          backgroundColor: COLORS.foodPreparingColor,
          borderRadius: 25,
          paddingVertical: 7,
          paddingHorizontal: 10,
        }}>
        <Text
          style={{
            color: COLORS.whitePure,
            fontSize: SWITTO_SIZES.fontSize,
            paddingHorizontal: 5,
          }}>
          Food is Preparing
        </Text>
      </TouchableOpacity>
    </View>
    <View style={{paddingHorizontal: 20, marginTop: 10}}>
      <Divider width={0.5} color={COLORS.textBlack} />
    </View>
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        justifyContent: 'space-between',
        paddingVertical: 5,
        marginTop: 5,
      }}>
      <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
        <Icon
          name={'person'}
          IconType={'Ionicons'}
          color={COLORS.descriptionText}
          size={'extra-small'}
        />
        <Text
          style={{
            color: COLORS.textBlack,
            fontWeight: '400',
            fontSize: SWITTO_SIZES.fontSize,
            paddingLeft: 10,
          }}>
          Pavithra rathudan
        </Text>
      </View>
      <View style={{flex: 1}}>
        <Text
          style={{
            color: COLORS.textBlack,
            fontWeight: '400',
            fontSize: SWITTO_SIZES.fontSize,
            paddingLeft: 10,
          }}>
          9.50H
        </Text>
      </View>
    </View>

    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        justifyContent: 'space-between',
        paddingVertical: 5,
      }}>
      <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
        <Icon
          name={'md-wine'}
          IconType={'Ionicons'}
          color={COLORS.descriptionText}
          size={'extra-small'}
        />
        <Text
          style={{
            color: COLORS.textBlack,
            fontWeight: '400',
            fontSize: SWITTO_SIZES.fontSize,
            paddingLeft: 10,
          }}>
          Phanat tai
        </Text>
      </View>
      <View style={{flex: 1}}>
        <Text
          style={{
            color: COLORS.textBlack,
            fontWeight: '400',
            fontSize: SWITTO_SIZES.fontSize,
            paddingLeft: 10,
          }}>
          10:10H
        </Text>
      </View>
    </View>
  </View>
);

const ReadyFood = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        borderRadius: 15,
        backgroundColor: COLORS.whitePure,
        marginTop: 10,
        paddingBottom: 20,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 20,
          justifyContent: 'space-between',
          paddingVertical: 10,
        }}>
        <Text style={{color: COLORS.textBlack, fontWeight: '500', flex: 1}}>
          Id: DF980
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate(ROUTES.readyFoodOrderDetail)}
          style={{
            backgroundColor: COLORS.readyFoodButtonOrange,
            flex: 1,
            alignItems: 'center',
            borderRadius: 25,
            paddingVertical: 7,
            paddingHorizontal: 10,
          }}>
          <Text
            style={{
              color: COLORS.whitePure,
              fontSize: SWITTO_SIZES.fontSize,
              paddingHorizontal: 5,
            }}>
            Food is Ready
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{paddingHorizontal: 20, marginTop: 10}}>
        <Divider width={0.5} color={COLORS.textBlack} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 20,
          justifyContent: 'space-between',
          paddingVertical: 5,
          marginTop: 5,
        }}>
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
          <Icon
            name={'person'}
            IconType={'Ionicons'}
            color={COLORS.descriptionText}
            size={'extra-small'}
          />
          <Text
            style={{
              color: COLORS.textBlack,
              fontWeight: '400',
              fontSize: SWITTO_SIZES.fontSize,
              paddingLeft: 10,
            }}>
            Pavithra rathudan
          </Text>
        </View>
        <View style={{flex: 1}}>
          <Text
            style={{
              color: COLORS.textBlack,
              fontWeight: '400',
              fontSize: SWITTO_SIZES.fontSize,
              paddingLeft: 10,
            }}>
            9.50H
          </Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 20,
          justifyContent: 'space-between',
          paddingVertical: 5,
        }}>
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
          <Icon
            name={'md-wine'}
            IconType={'Ionicons'}
            color={COLORS.descriptionText}
            size={'extra-small'}
          />
          <Text
            style={{
              color: COLORS.textBlack,
              fontWeight: '400',
              fontSize: SWITTO_SIZES.fontSize,
              paddingLeft: 10,
            }}>
            Phanat tai
          </Text>
        </View>
        <View style={{flex: 1}}>
          <Text
            style={{
              color: COLORS.textBlack,
              fontWeight: '400',
              fontSize: SWITTO_SIZES.fontSize,
              paddingLeft: 10,
            }}>
            10:10H
          </Text>
        </View>
      </View>
    </View>
  );
};

const DrivingFood = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <View
      style={{
        borderRadius: 15,
        backgroundColor: COLORS.whitePure,
        marginTop: 10,
        paddingBottom: 20,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 20,
          justifyContent: 'space-between',
          paddingVertical: 10,
        }}>
        <Text style={{color: COLORS.textBlack, fontWeight: '500', flex: 1}}>
          Id: DF980
        </Text>
        <TouchableOpacity
          onPress={()=> setShowModal(true)}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            flex: 1,
            backgroundColor: COLORS.newOrderButtonGreen,
            justifyContent: 'center',
            borderRadius: 25,
            paddingVertical: 7,
            paddingHorizontal: 10,
          }}>
          <Text
            style={{
              color: COLORS.whitePure,
              fontSize: SWITTO_SIZES.fontSize,
              paddingHorizontal: 5,
            }}>
            Driving
          </Text>
          <View
            style={{
              width: 18,
              height: 18,
              borderRadius: 9,
              backgroundColor: COLORS.drivingIndicateGreen,
              position: 'absolute',
              right: 10,
            }}
          />
        </TouchableOpacity>
      </View>
      <View style={{paddingHorizontal: 20, marginTop: 10}}>
        <Divider width={0.5} color={COLORS.textBlack} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 20,
          justifyContent: 'space-between',
          paddingVertical: 5,
          marginTop: 5,
        }}>
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
          <Icon
            name={'person'}
            IconType={'Ionicons'}
            color={COLORS.descriptionText}
            size={'extra-small'}
          />
          <Text
            style={{
              color: COLORS.textBlack,
              fontWeight: '400',
              fontSize: SWITTO_SIZES.fontSize,
              paddingLeft: 10,
            }}>
            Pavithra rathudan
          </Text>
        </View>
        <View style={{flex: 1}}>
          <Text
            style={{
              color: COLORS.textBlack,
              fontWeight: '400',
              fontSize: SWITTO_SIZES.fontSize,
              paddingLeft: 10,
            }}>
            9.50H
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 20,
          justifyContent: 'space-between',
          paddingVertical: 5,
          marginTop: 5,
        }}>
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
          <Icon
            name={'card'}
            IconType={'Ionicons'}
            color={COLORS.descriptionText}
            size={'extra-small'}
          />
          <Text
            style={{
              color: COLORS.textBlack,
              fontWeight: '400',
              fontSize: SWITTO_SIZES.fontSize,
              paddingLeft: 10,
            }}>
            Credit Card
          </Text>
        </View>
        <View style={{flex: 1}}>
          <Text
            style={{
              color: COLORS.textBlack,
              fontWeight: '400',
              fontSize: SWITTO_SIZES.fontSize,
              paddingLeft: 10,
            }}>
            CHF 90.00
          </Text>
        </View>
      </View>
      <Dialog
        visible={showModal}
        onTouchOutside={() => {
          setShowModal(false);
        }}>
        <DialogContent
          style={{
            backgroundColor: COLORS.whitePure,
            width: DEVICE.width * 0.9,
          }}>
          <View
            style={{
              borderRadius: 8,
              paddingHorizontal: 10,
              paddingVertical: 15,
              width: '100%',
            }}>
            <Text
              style={{
                fontSize: SWITTO_SIZES.fontSize,
                fontWeight: '300',
                color: COLORS.textBlack,
              }}>
              Delivery location:
            </Text>
            <Text
              style={{
                fontSize: SWITTO_SIZES.titleSize,
                fontWeight: '500',
                color: COLORS.textBlack,
                marginTop: 5,
              }}>
              Vijay Kumar
            </Text>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 5,
              }}>
              <Text
                style={{
                  fontSize: SWITTO_SIZES.fontSize,
                  color: COLORS.textBlack,
                  fontWeight: '400',
                  marginLeft: 5,
                }}>
                {' '}
                Friedenstrasse 2 , 6004 Luzern.
              </Text>
            </View>
            <View>
              <Divider
                width={0.5}
                color={COLORS.desGray}
                style={{marginTop: 15}}
              />
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 5,
                backgroundColor: COLORS.backgroundLightGray,
                paddingVertical: 5,
                paddingHorizontal: 0,
              }}>
              <Text
                style={{
                  fontSize: SWITTO_SIZES.fontSize,
                  color: COLORS.textBlack,
                  fontWeight: '300',
                  paddingHorizontal: 20,
                  paddingVertical: 5,
                }}>
                Delivery Instructions Display here, Delivery Instructions
                Display here
              </Text>
            </View>

            <TouchableOpacity
              onPress={() => setShowModal(false)}
              style={{
                backgroundColor: COLORS.swipeButtonGreen,
                marginTop: 20,
                borderRadius: 3,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingVertical: 15,
                }}>
                <Icon
                  name={'thumbs-up'}
                  IconType={'Ionicons'}
                  size={'small'}
                  color={COLORS.whitePure}
                />
                <Text
                  style={{
                    fontSize: SWITTO_SIZES.titleSize,
                    color: COLORS.whitePure,
                    fontWeight: '600',
                    marginLeft: 5,
                  }}>
                  Done
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </DialogContent>
      </Dialog>
    </View>
  );
};

const CashOnHand = () => (
  <TouchableOpacity
    style={{
      backgroundColor: COLORS.cashHand,
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 8,
      marginTop: 10,
      marginBottom: 20,
      flexDirection: 'row',
      alignItems: 'center',
    }}>
    <Icon
      name={'alert-circle'}
      IconType={'Ionicons'}
      color={COLORS.whitePure}
      size={'small'}
    />
    <Text
      style={{
        color: COLORS.whitePure,
        fontWeight: '500',
        fontSize: SWITTO_SIZES.fontSize,
        paddingLeft: 10,
      }}>
      Cash in Hand : CHF 75.00
    </Text>
  </TouchableOpacity>
);
