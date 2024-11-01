import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import Markdown from 'react-native-markdown-display';
import { styles, markdownStyles } from './MarkDow.Style';

const MarkdownDisplay = ({ children }) => {
  return (
    <ScrollView endFillColor={'pink'} style={[styles.page]} contentInsetAdjustmentBehavior="automatic" contentContainerStyle={{paddingBottom: 10}} showsVerticalScrollIndicator={false}>
      <Markdown  style={markdownStyles}>{children}</Markdown>
    </ScrollView>
  );
};

export default MarkdownDisplay