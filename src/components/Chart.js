import React, {useState, useEffect} from 'react';
import {View, Dimensions, StyleSheet} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import {styles} from '../theme/theme';

export default function Chart(props) {
  const [Labels, setLabels] = useState([]);

  useEffect(() => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    let temp = days
      .slice(new Date().getDay())
      .concat(days.slice(0, new Date().getDay()));
    setLabels(temp.reverse());
  }, []);

  return (
    <View>
      <LineChart
        data={{
          labels: Labels,
          datasets: [
            {
              data: props.data,
              strokeWidth: 2,
            },
          ],
        }}
        width={Dimensions.get('window').width * 0.9}
        height={220}
        chartConfig={{
          backgroundGradientFrom: '#6b90ff',
          backgroundGradientTo: '#b7ceff',
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        }}
        style={styles.chartStyle}
        bezier
      />
    </View>
  );
}
