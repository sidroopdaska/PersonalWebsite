import * as React from "react";
import * as ReactDOM from "react-dom";
import { Main } from "./main";
import * as injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
injectTapEventPlugin();

let mainAppContainer = document.getElementById("appMain");

ReactDOM.render(<Main/>, mainAppContainer);