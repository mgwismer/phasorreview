import { IContext, Input, MathJaxUnknown } from '.';
import React from 'react';

const loadScript = require('load-script');


export const defaultContext = {
  input: 'ascii' as Input,
  get MathJax() { return (window as any).MathJax; },
};

export const { Provider, Consumer } = React.createContext<IContext>(defaultContext);

interface IProps {
    children: React.ReactNode;
    didFinishTypeset?: (...args: any[]) => any;
    script?: string | false;
    input?: Input;
    delay?: number;
    options?: {};
    loading?: React.ReactNode;
    noGate?: boolean;

    onLoad: (...args: any[]) => any;
    onError: (MathJax: MathJaxUnknown, error: any) => any;
}

interface IState {
    loaded: boolean;
}

class Context extends React.Component<IProps, IState> {

  public static defaultProps = {
    script: 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.1/MathJax.js?config=TeX-MML-AM_CHTML',
    input: 'asciimath',
    delay: 0,
    options: {},
    loading: null,
    noGate: false
  };

  constructor(props: any) {
    super(props);
    this.state = { loaded: false };
    this.onLoad = this.onLoad.bind(this);
  }

  public componentDidMount() {
    const script = this.props.script;

    if (!script) {
      return this.onLoad();
    }

    loadScript(script, this.onLoad);
  }

  public onLoad() {
    const options = this.props.options;
    const MathJax = (window as any).MathJax;

    MathJax.Hub.Config(options);

    MathJax.Hub.Register.StartupHook('End', () => {
      MathJax.Hub.processSectionDelay = this.props.delay;

      if (this.props.didFinishTypeset) {
        this.props.didFinishTypeset();
      }

      if (this.props.onLoad) {
        this.props.onLoad();
      }

      this.setState({
        loaded: true
      });
    });

    MathJax.Hub.Register.MessageHook((message: string = 'Math Processing Error') => {
      if (this.props.onError) {
        this.props.onError(MathJax, message);
      }
    });
  }

  public render() {
    if (!this.state.loaded && !this.props.noGate) {
      return this.props.loading;
    }

    return <Provider value={{
      input: 'ascii',
      MathJax: (window as any).MathJax
    }}>
      {this.props.children}
    </Provider>;
  }
}

export default Context;
