import React from 'react'
import '../app/app.css'
import Header from '../header/header'
import ResultsContainer from '../ResultsContainer/ResultsContainer';
import SearchBox from '../searchbox/searchbox';

const name = require('@rstacruz/startup-name-generator');


class App extends React.Component{
    state={
        headTitle:'Nomenclature!',
        headerExpanded: true,
        suggestedNames:[],
    };

    handleInputChange= (inputText)=>{

        this.setState({headerExpanded: !inputText , 
                       suggestedNames: inputText? name(inputText): []});
    };
    render(){
  
        return(
            <div>
                <Header headTitle={this.state.headTitle}
                        headerExpanded={this.state.headerExpanded}/>
                <SearchBox onInputChange={this.handleInputChange} />
                <ResultsContainer suggestedNames={this.state.suggestedNames} />
            </div>
        );
    }
}

export default App;
