import React, { Component } from 'react';
import { connect } from 'react-redux';
// import axios from 'axios';

class App extends Component {
    AddNew() {
        this.props.onAddNews(this.newsInput.value);
        // const text = this.newsInput.value;
        // axios.post('http://localhost:3000/news', { 
        //     text: text
        //  })
        // .then(res => {
        // this.newsLi.id = res.data.newNews._id;
        //   console.log(this.newsLi.id);
        // })
        this.newsInput.value = '';
        console.log(this.props.news )
    }

    FindNew() {
        console.log('find',  this.searchInput.value );
        this.props.onFindNew(this.searchInput.value);
    }


    DeleteNew() {
        console.log(this.newsLi.id);
    }

    render() {
        return (
            <div>
                <div>
                    <input type='text' ref={(input) => {this.newsInput = input}}></input>
                    <button onClick={this.AddNew.bind(this)}>Add news</button>
                </div>
                <div>
                    <input type='text' ref={(input) => {this.searchInput = input}}></input>
                    <button onClick={this.FindNew.bind(this)}>Find news</button>
                </div>

            <ul>
                {this.props.stateNews.map((textNews, index) =>
                <>
                <li key={index} ref={(li) => {this.newsLi = li}} >
                    {textNews.newNews}
                    <button ref={(button) => {this.newsButton = button}}  onClick={this.DeleteNew.bind(this)}> 'delete' </button>
                </li>
                </>
                )}
            </ul>
            </div>
        )
    }
}

export default connect (
    state => ({
        stateNews: state.news.filter(news => news.newNews.includes(state.filterNews))
    }),
    dispatch =>({
        onAddNews: (newNews) => {
            const payload = {
                id: Date.now().toString(),
                newNews
            }
            dispatch({type: 'ADD_NEW', payload})
        },
        DeleteNew: (newNews) => {
            dispatch({type: 'DELETE', payload: this.newsLi.id})
        },
        onFindNew: (findWord) => {
            dispatch({ type: "FIND_KEYWORD", payload: findWord})

        }
    })
)(App);