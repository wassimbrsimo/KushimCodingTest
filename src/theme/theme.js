import {StyleSheet} from 'react-native';
export const colors = {
  background: '#222',
  lightBackground: '#6b6b6b',
  accent: '#7F95FD',
  forground: '#F3F6FF',
  secondary: '#20c944',
  error: 'red',
};
export const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'space-between'},
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: '10%',
  },
  resultView: {flex: 1, justifyContent: 'center'},
  inputsView: {
    flex: 2,
    justifyContent: 'flex-end',
    backgroundColor: colors.background,
  },
  input: {
    backgroundColor: colors.forground,
    borderRadius: 20,
    padding: 20,
    margin: 20,
    borderWidth: 1,
    color: colors.background,
  },
  result: {
    fontSize: 40,
    fontWeight: 'bold',
    color: colors.forground,
    alignSelf: 'center',
  },
  activityIndicator: {
    height: '28%',
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
    borderRadius: 20,
    backgroundColor: colors.lightBackground,
    width: '25%',
    height: 30,
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
      margin: 10,
      padding: 10,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: selected ? colors.accent : colors.forground,
    },
    currencyCardText: {
      fontSize: 14,
      color: selected ? colors.forground : colors.lightBackground,
      fontWeight: 'bold',
    },
  });
