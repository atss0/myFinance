import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { setUser } from '../redux/UserSlice'
import axios from 'axios'
import storage from '../storage'

const Settings = () => {
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch()

    const handleLogOut = () => {
        setIsLoading(true);
        axios({
            method: "POST",
            url: `${process.env.API}/user/logout`,
            headers: {
                'Authorization': 'Bearer ' + storage.getString('token')
            }
        })
            .then(() => {
                dispatch(setUser({ user: null, token: null }));
                storage.clearAll()
            })
            .catch((e) => {
                console.error(e?.response?.data?.message);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }

    return (
        <View>
            <TouchableOpacity onPress={handleLogOut}>
                <View>
                    <Text style={{ color: '#000' }}>ÇIKIŞ</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default Settings