/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import './Translations';
import {useTranslation} from 'react-i18next';

const App = () => {
  const {t, i18n} = useTranslation();

  const changeLangToTr = () => {
    i18n.changeLanguage('tr');
  };
  const changeLangToEn = () => {
    i18n.changeLanguage('en');
  };
  return (
    <SafeAreaView>
      <View style={styles.baseContainer}>
        <Text style={styles.title}>{t('home.title')}</Text>
        <Text style={styles.desc}>{t('home.description')}</Text>
        <Button title={t('home.buttonTr')} onPress={() => changeLangToTr()} />
        <Button title={t('home.buttonEn')} onPress={() => changeLangToEn()} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  baseContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  desc: {
    fontSize: 18,
    color: 'black',
  },
});
export default App;
