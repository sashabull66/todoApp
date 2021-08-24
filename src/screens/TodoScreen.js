import React from "react";
import {StyleSheet, View, Dimensions} from 'react-native';
import {FontAwesome, AntDesign} from '@expo/vector-icons';

import {THEME} from "../theme.js";
import AppCard from "../components/UI/AppCard.js";
import {EditModal} from "../components/EditModal.js";
import AppTextBold from "../components/UI/AppTextBold.js";
import {AppButton} from "../components/UI/AppButton.js";

export const TodoScreen = ({todo, onSave, remove, back}) => {
    const [modal, setModal] = React.useState(false);

    const hideModal = () => {
        setModal(false)
    }

    const saveHandler = title => {
        onSave(todo.id, title)
        hideModal()
    }

    return (
        <View style={styles.TodoScreen}>
            <EditModal
                visible={modal}
                hide={hideModal}
                inputValue={todo.title}
                onSave={saveHandler}
            />
            <AppCard>
                <AppTextBold style={styles.title}>{todo.title}</AppTextBold>
                <AppButton onPress={() => {setModal(true)}}>
                    <FontAwesome name={'edit'} size={20}/>
                </AppButton>
            </AppCard>
            <View style={styles.btnWrapper}>
                <View style={styles.btn}>
                    <AppButton onPress={back} color={THEME.GREY_COLOR}>
                        <AntDesign name={'back'} size={20} color={'white'}/>
                    </AppButton>
                </View>
                <View style={styles.btn}>
                    <AppButton onPress={() => {
                        remove(todo.id)
                    }} color={THEME.DANGER_COLOR}>
                        <FontAwesome name={'remove'} size={20} color={'white'}/>
                    </AppButton>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    TodoScreen: {},
    title: {
        fontSize: 23,
    },
    btnWrapper: {
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    btn: {
        width: Dimensions.get('window').width * 0.25
    }
})