import React, {useState, useEffect} from 'react';
import {Dimensions} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import {styles} from '../theme/theme';

export default function Chart(props) {
  const [Labels, setLabels] = useState([]);

  useEffect(() => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    // Reorder days label so it becomes synchronized with today's date
    let temp = days
      .slice(new Date().getDay())
      .concat(days.slice(0, new Date().getDay()));
    setLabels(temp.reverse());
  }, []);

  return (
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
      width={Dimensions.get('window').width}
      height={Dimensions.get('window').height * 0.25}
      chartConfig={{
        backgroundGradientFrom: '#222',
        backgroundGradientTo: '#222',
        decimalPlaces: 2,
        color: (opacity = 1) => `rgba(32, 201, 68, ${opacity})`,
      }}
      withHorizontalLines={false}
      withVerticalLines={false}
      style={styles.chartStyle}
      bezier
    />
  );
}
