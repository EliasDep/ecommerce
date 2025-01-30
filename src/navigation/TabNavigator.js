import { StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ShopStack from './ShopStack'
import CartStack from './CartStack'
import OrdersStack from './OrdersStack'
import { colors } from '../globals/colors';
import TabBarIcon from '../components/TabBarIcon';
import MyProfile from '../screens/MyProfile';
import MyProfileStack from './MyProfileStack';

const Tab = createBottomTabNavigator();

const TapNavigator = () => {


  return (
       <Tab.Navigator
        screenOptions={{
            headerShown:false,
            tabBarShowLabel:false,
            tabBarStyle : styles.tabBar,
            tabBarLabelPosition:"beside-icon"
        }}
       >
            <Tab.Screen 
                name='ShopStack' 
                component={ShopStack}
                options={{
                    tabBarIcon:({focused}) => <TabBarIcon text="Tienda" icon="shop" focused={focused}/>
                }}
            />
            <Tab.Screen 
                name='CartStack' 
                component={CartStack}
                options={{ 
                    tabBarIcon:({focused}) => <TabBarIcon text="Carrito" icon="shopping-cart" focused={focused}/>
                }}
            />
            <Tab.Screen 
                name='OrdersStack' 
                component={OrdersStack}
                options={{ 
                    tabBarIcon:({focused}) => <TabBarIcon text="Ordenes" icon="list" focused={focused}/>
                }}
            />
               <Tab.Screen 
                name='MyProfileStack' 
                component={MyProfileStack}
                options={{ 
                    tabBarIcon:({focused}) => <TabBarIcon text="Perfil" icon="user" focused={focused}/>
                }}
            />
       </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
    tabBar:{
        backgroundColor:colors.primary,
        height:70
    }
})
export default TapNavigator
