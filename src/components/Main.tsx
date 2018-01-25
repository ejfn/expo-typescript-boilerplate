import { Constants } from 'expo';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text
} from 'react-native';
import { connect, MapStateToProps } from 'react-redux';
import { fetchSampleList } from '../actions/sample';
import { AppState, Sample } from '../store';

interface OwnProps { }

interface StateProps {
  samples: Array<Sample>;
}

interface DispatchProps {
  fetchSampleList: typeof fetchSampleList;
}

type Props = OwnProps & StateProps & DispatchProps;

interface State { }

export class InnerMain extends React.PureComponent<Props, State> {

  public componentDidMount(): void {
    this.props.fetchSampleList(undefined);
  }

  public render(): JSX.Element {
    return (
      <SafeAreaView style={styles.container}>
        <Text>props: {JSON.stringify(this.props)}</Text>
        <Text>extra: {JSON.stringify(Constants.manifest.extra)}</Text>
      </SafeAreaView>
    );
  }
}

const mapStateToProps: MapStateToProps<StateProps, OwnProps, AppState> = (state: AppState) => {
  const samples = state.samples;
  return {
    samples
  };
};

// tslint:disable-next-line:variable-name
export const Main = connect<StateProps, DispatchProps, OwnProps>(
  mapStateToProps, {
    fetchSampleList
  })(InnerMain);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
