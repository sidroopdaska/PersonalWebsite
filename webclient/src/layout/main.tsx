import * as React from 'react';
import { MuiThemeProvider } from "material-ui/styles";
import { RaisedButton } from 'material-ui';

export class Main extends React.Component<any, any> {
	public render() {
		return (
			<MuiThemeProvider>
				<RaisedButton label="hello" />
			</MuiThemeProvider>
		);
	}
}