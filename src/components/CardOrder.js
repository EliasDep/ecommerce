import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../globals/colors'

const CardOrder = ({order}) => {

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>{order.createdAt}</Text>
        <Text style={styles.text}>Total: {order.total} $ ARG</Text>
      </View>
    </View>
  )
}

export default CardOrder

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        backgroundColor:colors.accent,
        margin:10,
        padding:20,
        justifyContent:"space-between",
        alignItems:"center",
        borderRadius:5
    },
    content:{
        gap:10
    },
    text:{
        color:colors.lightGray,
        fontSize:16
    }
})