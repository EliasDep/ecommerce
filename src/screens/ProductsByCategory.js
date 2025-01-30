import { FlatList, StyleSheet, View, Text } from 'react-native'
import { useEffect, useState } from 'react'
import Search from '../components/Search'
import CardProduct from '../components/CardProduct'
import { useGetProductsQuery } from '../services/shop'
import LoadingSpinner from '../components/LoadingSpinner'

const ProductsByCategory = ({ route }) => {
  const { category } = route.params
  const { data, isSuccess, isError, error, isLoading } = useGetProductsQuery(category)
  const [keyword, setKeyword] = useState("")
  const [products, setProducts] = useState([])

  useEffect(() => {
    if (isSuccess && Array.isArray(data)) {
      console.log("Productos recibidos:", data)
      setProducts(data)
    }
  }, [isSuccess, data])

  useEffect(() => {
    console.log("Productos filtrados:", products)
  }, [products])
  
  useEffect(() => {
    if (isSuccess && data) {
      setProducts(Object.values(data))
    }
  }, [isSuccess, data])

  useEffect(() => {
    if (isError) {
      console.log(error)
    }
  }, [isError, error])

  useEffect(() => {
    if (isSuccess && Array.isArray(data)) {
      setProducts(data.filter(product => 
        product.name.toLowerCase().includes(keyword.toLowerCase())
      ))
    }
  }, [keyword, isSuccess, data])

  if (isLoading) return <LoadingSpinner />
  if (isError) return <View style={styles.errorContainer}><Text style={styles.errorText}>{error.message}</Text></View>

  return (
    <View style={styles.container}>
      <Search onSearch={(text) => setKeyword(text)} />
      <FlatList
        data={products}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <CardProduct product={item} />}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  )
}

export default ProductsByCategory

const styles = StyleSheet.create({
  
})