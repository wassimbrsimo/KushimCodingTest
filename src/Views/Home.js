import React, {useState} from 'react';
import {
  View,
  TextInput,
  Text,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import {Convert, getWeeklyConversions} from '../api/API';
import Chart from '../components/Chart';
import {ButtonStyle, cardStyle, colors, styles} from '../theme/theme';

export default function Home() {
  const [selectedFromCurrency, setSelectedFromCurrency] = useState('EUR');
  const [selectedToCurrency, setSelectedToCurrency] = useState('USD');
  const [Value, setValue] = useState(null);
  const [Result, setResult] = useState(0);
  const [Data, setData] = useState(null);
  const [Loading, setLoading] = useState(false);
  const [Error, setError] = useState(null);
  const Currencies = ['USD', 'EUR', 'RSD'];

  const onConvert = () => {
    // init conversion weekly data first then the actual result
    setLoading(true);
    setError(null);
    getWeeklyConversions(
      selectedFromCurrency,
      selectedToCurrency,
      ({err, res}) => {
        if (err) {
          setLoading(false);
          return setError(err);
        }
        populateData(res.rates);

        Convert(
          selectedFromCurrency,
          selectedToCurrency,
          Value,
          ({error, response}) => {
            if (error) {
              setLoading(false);
              return setError(err);
            }

            setResult(response.result.toFixed(2));
            setLoading(false);
          },
        );
      },
    );
  };

  const populateData = rates => {
    let temp = [];
    Object.values(rates).forEach(val => {
      // push the data reversed so it can be displayed on graph
      temp.unshift(val[selectedToCurrency]);
    });
    setData(temp);
  };
  const selectCurrency = item => {
    // remove the output currency if it is picked as an input
    if (item === selectedToCurrency) {
      setSelectedToCurrency(null);
    }
    setSelectedFromCurrency(item);
  };
  return (
    <View style={styles.container}>
      {Data && !Loading && <Chart data={Data} />}
      {Loading && (
        <ActivityIndicator
          style={styles.activityIndicator}
          color={colors.accent}
          size={30}
        />
      )}
      <View style={styles.conversionView}>
        <Text style={styles.conversion}>
          {selectedFromCurrency} {'>'} {selectedToCurrency}
        </Text>
      </View>
      <Text style={styles.conversion}>
        {Value} {selectedFromCurrency}
      </Text>
      {Error && <Text style={styles.error}>{Error.info}</Text>}
      {!Error && (
        <Text style={styles.result}>
          {Result} {selectedToCurrency}
        </Text>
      )}
      <Text style={styles.lightText}>From</Text>
      <View style={styles.row}>
        {
          // Selecting the currency to convert from
          Currencies.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => selectCurrency(item)}
              style={
                cardStyle(item === selectedFromCurrency, false).currencyCard
              }>
              <Text
                style={
                  cardStyle(item === selectedFromCurrency, false)
                    .currencyCardText
                }>
                {item}
              </Text>
            </TouchableOpacity>
          ))
        }
      </View>
      <Text style={styles.lightText}>To</Text>
      <View style={styles.row}>
        {
          // Selecting the currency to convert to
          Currencies.map((item, index) => (
            <TouchableOpacity
              key={index}
              disabled={item === selectedFromCurrency}
              onPress={() => setSelectedToCurrency(item)}
              style={
                cardStyle(
                  item === selectedToCurrency,
                  item === selectedFromCurrency,
                ).currencyCard
              }>
              <Text
                style={
                  cardStyle(
                    item === selectedToCurrency,
                    item === selectedFromCurrency,
                  ).currencyCardText
                }>
                {item}
              </Text>
            </TouchableOpacity>
          ))
        }
      </View>
      <TextInput
        placeholder="Enter a value to convert"
        style={styles.input}
        placeholderTextColor={colors.lightBackground}
        onChangeText={setValue}
        value={Value}
      />
      <TouchableOpacity
        disabled={!selectedToCurrency}
        onPress={onConvert}
        style={ButtonStyle(Value && selectedToCurrency).button}>
        <Text style={ButtonStyle(Value && selectedToCurrency).buttonText}>
          Convert
        </Text>
      </TouchableOpacity>
    </View>
  );
}
