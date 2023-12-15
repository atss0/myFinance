import { View, Text, TouchableOpacity, Modal } from 'react-native'
import React, { useState } from 'react'
import styles from './TabBar.style'
import { House, HouseOutline, Plus, SettingsIcon } from '../Icons'
import Colors from '../../styles/Colors'

interface TabBarProps {
  state: any,
  descriptors: any,
  navigation: any
}

const TabBar: React.FC<TabBarProps> = ({ state, descriptors, navigation }) => {
  const [visible, setvisible] = useState(false);
  return (
    <View style={styles.container}>
      {state.routes.map((route: any, index: number) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const addOnPress = ({ type }: { type: any }) => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!event.defaultPrevented) {
            navigation.navigate({ name: route.name, merge: true, params: { type } });
            setvisible(!visible);
          }
        };

        return label === 'Add' ? (
          isFocused ? (
            <View key={label} style={styles.assistant}>
              <TouchableOpacity onPress={() => setvisible(!visible)} style={styles.assistantButton}>
                <Plus />
              </TouchableOpacity>

              <Modal
                animationType="slide"
                transparent={true}
                visible={visible}
                onRequestClose={() => {
                  setvisible(!visible);
                }}
              >
                <View style={styles.centeredView}>
                  <View style={styles.modalView}>
                    <TouchableOpacity onPress={() => addOnPress({type: 'money'})}>
                      <Text style={styles.modalText}>Nakit Ekle</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => addOnPress({type: 'gold'})}>
                      <Text style={styles.modalText}>Altın Ekle</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => addOnPress({type: 'stock'})}>
                      <Text style={styles.modalText}>Hisse Senedi Ekle</Text>
                    </TouchableOpacity>

                    <View style={{ position: 'absolute', bottom: 50 }}>
                      <TouchableOpacity onPress={() => {
                        setvisible(!visible);
                      }} style={styles.modalButton}>
                        <Plus />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </Modal>
            </View>
          ) : (
            <View key={label} style={styles.assistant}>
              <TouchableOpacity onPress={() => setvisible(!visible)} style={styles.assistantButton}>
                <Plus />
              </TouchableOpacity>

              <Modal
                animationType="slide"
                transparent={true}
                visible={visible}
                onRequestClose={() => {
                  setvisible(!visible);
                }}
              >
                <View style={styles.centeredView}>
                  <View style={styles.modalView}>
                    <TouchableOpacity onPress={() => addOnPress({type: 'money'})}>
                      <Text style={styles.modalText}>Nakit Ekle</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => addOnPress({type: 'gold'})}>
                      <Text style={styles.modalText}>Altın Ekle</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => addOnPress({type: 'stock'})}>
                      <Text style={styles.modalText}>Hisse Senedi Ekle</Text>
                    </TouchableOpacity>

                    <View style={{ position: 'absolute', bottom: 50 }}>
                      <TouchableOpacity onPress={() => {
                        setvisible(!visible);
                      }} style={styles.modalButton}>
                        <Plus />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </Modal>
            </View>
          )
        ) : (
          <TouchableOpacity key={label} style={styles.menuButtons} onPress={onPress}>
            {label === 'Home' && isFocused && <House fill={Colors.dark} />}
            {label === 'Home' && !isFocused && <HouseOutline stroke={Colors.dark} fill='transparent' />}

            {label === 'Settings' && isFocused && <SettingsIcon />}
            {label === 'Settings' && !isFocused && <SettingsIcon />}
          </TouchableOpacity>
        );
      })}
    </View>
  )
}

export default TabBar