import Container, {IContainerProps, IContainerState} from "../Container";
import {ReactNode} from "react";
import * as React from "react";
import {View, Text} from "react-native";
import {ImageOptionComponent} from "../../components/ImageOptionComponent";


export default class TestScreen extends Container<ITestScreenProps, ITestScreenState> {
	public render(): ReactNode {
		return (
			<View>
				<Text>Test Screen 1</Text>
				<ImageOptionComponent
					renderElement={[{label: "something", image: "https://facebook.github.io/react-native/docs/assets/favicon.png"},{label: "something", image: "https://facebook.github.io/react-native/docs/assets/favicon.png"}]}
				/>
			</View>
		);
	}
}

export interface ITestScreenProps extends IContainerProps {

}

export interface ITestScreenState extends IContainerState {

}
