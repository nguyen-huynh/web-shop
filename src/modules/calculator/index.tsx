//src/containers/calculator.tsx
import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import * as calculatorActions from "../../actions/calculatorActions";
import { RootState } from "../../reducers";
import { CalculatorModel } from "../../interfaces/calculatorModels";
import InputHolder from './components/inputHolder'
import OutputHolder from './components/outputHolder'
interface Props {
    calculatorState: CalculatorModel;
    actions: any;
}
const calculatorStyle = {
    marginLeft: '30%',
    marginTop: '20px',
    display: 'grid'
}
const divStyle = {
    color: 'indigo',
    fontSize: 'xx-large'
}
export class Calculator extends React.Component<Props> {
    render() {
        return (
            <div style={calculatorStyle}>
                <div style={divStyle}>This is a simple calculator</div>
                <InputHolder
                    actions={this.props.actions}
                    calculatorState={this.props.calculatorState}
                />
                <OutputHolder
                    calculatorState={this.props.calculatorState}
                />
            </div>
        );
    }
}
const actions: any = Object.assign({}, calculatorActions);
function mapStateToProps(state: RootState) {
    return {
        calculatorState: state.calculatorReducer
    };
}
function mapDispatchToProps(dispatch: Dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

const ConnectedCalculator = connect(
    mapStateToProps,
    mapDispatchToProps
)(Calculator);

export default ConnectedCalculator;

export const CalculatorRouter = {
    path: 'calculator',
    element: <ConnectedCalculator />,
    children: []
}