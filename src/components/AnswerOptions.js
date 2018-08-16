import React from 'react';

const AnswerOption = (props) => {
    return (
        <div className="mb-4">
            <form>
                <p>{props.questions}</p>
                {props.answers.map((answer, i) => 
                    <div key={i} className="form-check ml-3">
                        <label className="form-check-label">
                            <input type="checkbox" className="form-check-input" value={i} /><p>{answer.content}</p>
                        </label>
                    </div> 
                )}
            </form> 
        </div>
    )
}

export default AnswerOption;
