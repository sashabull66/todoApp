import React from "react";
import {StyleSheet, View, Text, Button} from 'react-native';
import {THEME} from "../theme.js";
import AppCard from "../components/UI/AppCard.js";
import {EditModal} from "../components/EditModal.js";

export const TodoScreen = (props) => {
    const [modal, setModal] = React.useState(false);
    const hideModal = () => {
        setModal(false)
    }
    return (
        <View style={styles.TodoScreen}>
            <EditModal visible={modal} hide={hideModal}/>
            <AppCard>
                <Text style={styles.title}>{props.todo.title}</Text>
                <Button
                    title={'Ред.'}
                    onPress={() => {
                        setModal(true)
                    }}/>
            </AppCard>
            <View style={styles.btnWrapper}>
                <View style={styles.btn}>
                    <Button
                        title={'Назад'}
                        onPress={props.back}
                        color={THEME.GREY_COLOR}/></View>
                <View style={styles.btn}>
                    <Button
                        title={'Удалить'}
                        onPress={() => {
                            props.remove(props.todo.id)
                        }}
                        color={THEME.DANGER_COLOR}/></View>
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
        width: '44%'
    }
})