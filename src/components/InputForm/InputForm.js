import React from 'react';
import {v4 as uuid} from 'uuid';

export default class InputForm extends React.Component {
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
                    <span className='App-alert'>{errorMessage}</span>
                </div>
                <form onSubmit={this.submitHandler} className='App-form'>
                    <input name='answer' value={userAnswer} onChange={this.inputChange} className='form-input--answer'/>
                    <input type='submit' value='Add' className='form-input--submit' />
                </form>
                <button className='App-button--clear' onClick={this.clearList}>Clear</button>
                <ul className='App-list'>{this.renderAnswersList()}</ul>
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
            return <li key={uuid()} className='App-item'>{answer}</li>
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