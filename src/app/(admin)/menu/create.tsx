import { StyleSheet, Text, View } from 'react-native'

import React from 'react'

const CreateProduct = () => {
  return (
    <View style={styles.container}>
      <Text>create</Text>
    </View>
  )
}

export default CreateProduct

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 10
  }
})