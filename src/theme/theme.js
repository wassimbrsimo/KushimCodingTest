import {StyleSheet} from 'react-native';
export const colors = {
  background: 'black',
  lightBackground: '#6b6b6b',
  accent: '#7F95FD',
  forground: '#F3F6FF',
  secondary: '#20c944',
  error: 'red',
};
export const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'flex-end'},
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: '10%',
    height: 100,
  },
  input: {
    backgroundColor: colors.forground,
    borderRadius: 20,
    height: 60,
    margin: 20,
    borderWidth: 1,
    padding: 10,
  },
  result: {
    flex: 1,
    fontSize: 40,
    fontWeight: 'bold',
    color: colors.forground,
    alignSelf: 'center',
  },
  activityIndicator: {
    height: 220,
  },
  error: {
    fontSize: 12,
    margin: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: colors.error,
    alignSelf: 'center',
  },
  conversionView: {
    alignSelf: 'center',
    height: 30,
    borderRadius: 20,
    backgroundColor: colors.forground,
    width: '25%',
    margin: 20,
    justifyContent: 'center',
  },
  lightText: {alignSelf: 'center', color: colors.lightBackground},
  conversion: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.secondary,
    alignSelf: 'center',
  },
  chartStyle: {
    borderRadius: 20,
    alignSelf: 'center',
  },
});
export const ButtonStyle = active =>
  StyleSheet.create({
    button: {
      backgroundColor: active ? colors.secondary : colors.lightBackground,
      padding: 20,
      margin: 20,
      borderRadius: 20,
      alignItems: 'center',
    },
    buttonText: {
      fontWeight: active ? 'bold' : 'normal',
      color: colors.forground,
    },
  });

export const cardStyle = (selected, disabled) =>
  StyleSheet.create({
    currencyCard: {
      flex: 1,
      borderRadius: 20,
      opacity: disabled ? 0.2 : 1,
      margin: 20,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: selected ? colors.accent : colors.forground,
    },
    currencyCardText: {
      fontSize: 20,
      color: selected ? colors.forground : colors.lightBackground,
      fontWeight: 'bold',
    },
  });
