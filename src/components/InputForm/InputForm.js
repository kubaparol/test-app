import React from 'react';
import {v4 as uuid} from 'uuid';

import classes from './styles.module.css'

export class InputForm extends React.Component {
    state = {
        errorMessage: '',
        userAnswer: '',
        answers: [],
    }

    render() {
        const {userAnswer, errorMessage} = this.state;
        return (
            <section>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <span>{this.props.text}</span>
                    <span className={classes.form__alert}>{errorMessage}</span>
                </div>
                <form onSubmit={this.submitHandler} className={classes.form}>
                    <input name='answer' value={userAnswer} onChange={this.inputChange} className={classes.form__input_answer}/>
                    <input type='submit' value='Add' className={classes.form__input_submit} />
                </form>
                <button className={classes.button__clear} onClick={this.clearList}>Clear</button>
                <ul className={classes.list}>{this.renderAnswersList()}</ul>
            </section>
        )
    }
    
    componentDidMount() {
        if(localStorage.length > 0) {
            this.showLocalStorage();
        };
    }
    
    renderAnswersList() {
        const {answers} = this.state;
        return answers.map(answer => {
            return <li key={uuid()} className={classes.form__item}>{answer}</li>
        });  
    }

    addAnswer(value) {
        this.setState({
            answers: [...this.state.answers, value],
        }, () => this.saveInLocalStorage());
    }


    saveInLocalStorage() {
        localStorage.setItem('answers', this.state.answers);
    }

    showLocalStorage() {
        const savedAnswers = localStorage.getItem('answers');
        if(savedAnswers) {
            const savedAnswersArr = savedAnswers.split(',');
                this.setState({
                    answers: [...this.state.answers, ...savedAnswersArr],
                });
        }
    }

    deleteFromLocalStorage() {
        localStorage.removeItem('answers');
    }

    clearList = e => {
        e.preventDefault();
        this.setState({
            answers: [],
        });
        this.deleteFromLocalStorage();
    }

    inputChange = e => {
        this.setState({
            userAnswer: e.target.value,
        });
    }

    submitHandler = e => {
        e.preventDefault();

        const {userAnswer} = this.state;
        if(userAnswer.length < 3 || userAnswer.length > 20) {

            if(userAnswer.length < 3) {
                this.displayError('Entered data are to short!');
            };

            if(userAnswer.length > 20) {
                this.displayError('Entered data are to long!');
            };

        } else {
            this.addAnswer(userAnswer);
            this.setState({
                errorMessage: '',
                userAnswer: '',
            });
        };
    }

    displayError(message) {
        this.setState({
            errorMessage: message,
        });
    }
}