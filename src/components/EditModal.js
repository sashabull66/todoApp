import React from "react";
import {Modal, View, StyleSheet, TextInput, Button} from "react-native";
import {THEME} from "../theme.js";

export const EditModal = (props) => {
    return (
        <Modal
            visible={props.visible}
            animationType={'slide'}
            transparent={false}
        >
            <View style={styles.wrapper}>
                <TextInput
                    style={styles.input}
                    placeholder={'Введите название'}
                    autoCapitalize={'none'}
                    autoCorrect={false}
                    maxLength={64}
                />
                <View style={styles.btnWrapper}>
                    <Button title={'Отмена'} onPress={() => {
                        props.hide()
                    }} color={THEME.DANGER_COLOR}/>
                    <Button title={'Сохранить'} onPress={() => {
                    }}/>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        padding: 10,
        borderBottomColor: THEME.MAIN_COLOR,
        borderBottomWidth: 2,
        width: '80%',
    },
    btnWrapper: {
        width: '100%',
        marginTop:10,
        flexDirection:'row',
        justifyContent: 'space-around'
    }
})
