import { Constants } from 'expo';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text
} from 'react-native';
import { NavigationScreenProp, NavigationScreenProps } from 'react-navigation';
import { connect, MapStateToProps } from 'react-redux';
import { fetchSampleList } from '../actions/sample';
import { AppState, Sample } from '../store';

interface NavParams { }

interface OwnProps {
  navigation: NavigationScreenProp<{params: NavParams}>;
}

interface StateProps {
  samples: Array<Sample>;
}

interface DispatchProps {
  fetchSampleList: typeof fetchSampleList;
}

type Props = OwnProps & StateProps & DispatchProps;

interface State { }

export class HomeInner extends React.PureComponent<Props, State> {

  public static navigationOptions = (_: NavigationScreenProps) => {
    return {
      headerTitle: 'Home'
    };
  }

  public componentDidMount(): void {
    this.props.fetchSampleList(undefined);
  }

  public render(): JSX.Element {
    const payload = {
      props: this.props,
      config: Constants.manifest.extra
    };
    return (
      <SafeAreaView style={styles.container}>
        <Text>{JSON.stringify(payload, undefined, 2)}</Text>
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

export const Home = connect<StateProps, DispatchProps, OwnProps>(
  mapStateToProps, {
    fetchSampleList
  })(HomeInner);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
