import * as actions from '../../actions/index';
import * as React from 'react';
import Hello, { IProps } from '../../components/Hello/Hello';
import { connect, Dispatch } from 'react-redux';
import { IStoreState } from '../../types/index';

export function mapStateToProps({ enthusiasmLevel, languageName }: IStoreState) {
  console.info(languageName, enthusiasmLevel, 'state');
  return {
    enthusiasmLevel,
    name: languageName,
  }
}

export function mapDispatchToProps(dispatch: Dispatch<actions.EnthusiasmAction>) {
  return {
    onIncrement: () => dispatch(actions.incrementEnthusiasm()),
    onDecrement: () => dispatch(actions.decrementEnthusiasm()),
  }
}

export function mergeProps(stateProps: object, dispatchProps: object, ownProps: object) {
  return Object.assign({}, ownProps, stateProps, dispatchProps);
}

@(connect((state: { enthusiasm: IStoreState }): Pick<IProps, 'enthusiasmLevel' | 'name'> => ({
  name: state.enthusiasm.languageName,
  enthusiasmLevel: state.enthusiasm.enthusiasmLevel,
}), (dispatch: Dispatch): Pick<IProps, 'onIncrement' | 'onDecrement'> => ({
  onIncrement: () => dispatch(actions.incrementEnthusiasm()),
  onDecrement: () => dispatch(actions.decrementEnthusiasm()),
})) as any)
export default class HelloContainer extends React.Component<IProps, {}> {
  public render() {
    return (
      <Hello { ...this.props } />
    );
  }
}
// export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Hello);
