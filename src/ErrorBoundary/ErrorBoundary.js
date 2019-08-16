import React ,{Component} from 'react';
class ErrorBoundary extends Component {
    state ={
        hasError : false,
        errorMessage : ''
    }
    componentDidCatch = (error , info) => {
        this.setState({hasError : true , errorMessage : error});

    }
    render(){
        console.log('state in error boundary',this.state);
        if(this.state.hasError){
            console.log('inside errorboundary');
            return <h1>{this.state.errorMessage}</h1>;
        }else{
            console.log('inside else errorboundary');
            return this.props.childern;
        }
    }
}
export default ErrorBoundary;