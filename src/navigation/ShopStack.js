import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/Home'
import ProductsByCategory from '../screens/ProductsByCategory'
import ProductDetail from '../screens/ProductDetail'
import Header from '../components/Header'


const ShopStack = () => {

     const Stack = createNativeStackNavigator()

  return (
        <Stack.Navigator
        screenOptions={({route})=> ({
                header: () => {
                return <Header title={
                    route.name === "Home" ? "Categorias":
                    route.name === "ProductsByCategory" ? route.params.category :
                    route.params.product.brand
                }
                />
                }
            })}
        >
            <Stack.Screen name='Home' component={Home}/>
            <Stack.Screen name='ProductsByCategory' component={ProductsByCategory}/>
            <Stack.Screen name='ProductDetail' component={ProductDetail}/>
        </Stack.Navigator>
  )
}

export default ShopStack
