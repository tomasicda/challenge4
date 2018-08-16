import React, { Component } from 'react';
import AnswerOptions from '../src/components/AnswerOptions';
import MatrixQuestions from '../src/Data/MatrixQuestions';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">          
          <div>
            <h5 className="pb-3 pt-3">Matrix Q's</h5>
            {MatrixQuestions.map((questionData, i) =>           
              <AnswerOptions
                key={i}
                questions={MatrixQuestions[i].question}
                answers={MatrixQuestions[i].answers}
              />
            )}
          </div>
          <button className="btn btn-primary btnStyle mb-3">Submit</button>
        </div>
      </div>
    );
  }
}

export default App;
