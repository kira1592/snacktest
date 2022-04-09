import React, { useState, useRef } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Swiper from 'react-native-swiper';

export default function Setup() {
  const [goal, setGoal] = useState('loss');
  const Loss = () => setGoal('loss');
  const Gain = () => setGoal('gain');
  const Re = () => setGoal('re');
  const [two, setTwo] = useState(false);
  const swiperRef = useRef(null);
  const next = () => {
    if (swiperRef) {
      swiperRef.current.scrollBy(1);
    }
  };

  return (
    <View style={{ flex: 1, flexDirection: 'row', padding: 0 }}>
      <Swiper
        ref={swiperRef}
        showsPagination={false}
        loop={false}
        scrollEnabled={false}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.title}>What's your Goal?</Text>
          </View>
          <View style={styles.contex}>
            <TouchableOpacity onPress={Loss} style={styles.card}>
              <View
                style={[styles.cardcontainer, { backgroundColor: '#fbe9e7' }]}>
                <Text style={styles.subtitle}>Weight Loss</Text>
                <Image
                  style={goal === 'loss' ? styles.choose : { display: 'none' }}
                  source={require('../assets/round_check_circle_black_48dp.png')}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={Gain} style={styles.card}>
              <View
                style={[styles.cardcontainer, { backgroundColor: '#efebe9' }]}>
                <Text style={styles.subtitle}>Weight Gain</Text>
                <Image
                  style={goal === 'gain' ? styles.choose : { display: 'none' }}
                  source={require('../assets/round_check_circle_black_48dp.png')}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={Re} style={styles.card}>
              <View
                style={[styles.cardcontainer, { backgroundColor: '#fafafa' }]}>
                <Text style={styles.subtitle}>Body Recomposition</Text>
                <Image
                  style={goal === 're' ? styles.choose : { display: 'none' }}
                  source={require('../assets/round_check_circle_black_48dp.png')}
                />
              </View>
            </TouchableOpacity>
            <View style={{ flex: 1 }}></View>
            <TouchableOpacity onPress={next}>
              <View style={styles.btn}>
                <Text style={[styles.btntext, { color: '#fafafa' }]}>Next</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.container}>
         <View style={styles.header}>
            <Text style={styles.title}>About You</Text>
          </View>
           <View style={styles.contex}>

          
           </View>
        </View>
      </Swiper>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  header: {
    height: 120,
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
  },
  contex: {
    flex: 1,
    width: '100%',
    paddingTop: 24,
    paddingHorizontal: 8,
  },
  title: {
    margin: 16,
    fontSize: 26,
    fontWeight: 'bold',
  },
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    height: 100,
    width: '100%',
    marginVertical: 6,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    borderRadius: 24,
  },

  cardcontainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    height: 100,
    width: '100%',
    marginVertical: 6,
    borderRadius: 24,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
    paddingStart: 24,
  },
  btntext: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  btn: {
    width: '100%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    backgroundColor: '#2962ff',
    marginBottom: 24,
  },
  choose: {
    width: 40,
    height: 40,
    margin: 16,
    tintColor: '#1de9b6',
  },
});
