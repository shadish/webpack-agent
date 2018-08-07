import * as React from "react";

export interface FooterProps {
    content: string,
    swivel: boolean
}

export class Footer extends React.Component<FooterProps, {}> {
    render(){
        // let doesSwivel: number = this.props.swivel ? 5 : 0;
        return <div>{this.props.content}</div>;
    }
}