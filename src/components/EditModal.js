import React from "react";
import {Modal, View, StyleSheet, TextInput, Button, Alert} from "react-native";
import {THEME} from "../theme.js";
import {AppButton} from "./UI/AppButton.js";

export const EditModal = ({inputValue, hide, visible, onSave}) => {
    const [inputVal, setInputVal] = React.useState(inputValue)
    const saveNewTodoValue = () => {
        if (inputVal.trim().length < 3) {
            Alert.alert('Ошибка', `Минимальная длина вводимого значения 3 символа. Длина текущего значения: ${inputVal.trim().length} символов`)
        } else {
            onSave(inputVal)
        }
    }
    return (
        <Modal
            visible={visible}
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
                    value={inputVal}
                    onChangeText={setInputVal}
                />
                <View style={styles.btnWrapper}>
                    <AppButton onPress={() => {hide()}} color={THEME.DANGER_COLOR}>Отмена</AppButton>
                    <AppButton onPress={() => {saveNewTodoValue()}}>Сохранить</AppButton>
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
