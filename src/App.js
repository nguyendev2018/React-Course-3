import React, { Component } from "react";
import DemoBugger from "./Bugger/DemoBugger";
import BuggerCyber from "./BuggerCyber/BuggerCyber";
import DemoHookUseEffect from "./Hook/DemoHookUseEffect";
import DemoHookUseState from "./Hook/DemoHookUseState";
import DemoUseEffect from "./Hook/DemoUseEffect";
import DemoUseReducer from "./Hook/DemoUseReducer";
import LifeCy from "./LifeCycle/LifeCy";
export default class App extends Component {
  render() {
    return <DemoUseReducer></DemoUseReducer>;
  }
}
