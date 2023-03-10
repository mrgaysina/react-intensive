import React from "react";

import Input from '../Input/Input'
import Button from '../Button/Button'
import Textarea from "../Textarea/Textarea";
import Header from "../Header/Header"

import styles from './Form.module.css';



class Form extends React.Component {
    render() {
        return (
            <>
                <form id="form" name="Создание анкеты" className={styles.form}>
                    <Header />
                    <Input name="Имя" type="text"/>
                    <Input name="Фамилия" type="text"/>
                    <Input name="Дата рождения" type="date"/>
                    <Input name="Телефон" type="tel" pattern="[0-9]|-|[(]|[)]|[+]"/>
                    <Input name="Сайт" type="text"/>
                    <Textarea name="О себе"/>
                    <Textarea name="Стек технологий" />
                    <Textarea name="Описание последнего проекта"/>
                    <div className={styles.buttonbox}>
                        <Button text='Отмена' name="cancel"/>
                        <Button text='Сохранить' name="submit"/>
                    </div>
                </form>
            </>
        )
    }
}

export default Form;