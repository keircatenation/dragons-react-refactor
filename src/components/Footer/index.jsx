import {Component} from "react";

class Footer extends Component {
    constructor(props) {
        super(props)
        this.date = new Date();
    }
    render() {
        return (
            <footer className={this.props.theme}>Copyright {this.date.getFullYear()}</footer>
        )
    }
}
export default Footer;

// export default function Footer(props) {
//     // just returning the copyright text
//     const date = new Date();
//     const {theme} = props;
//     return (
//         <footer className={theme}>Copyright {date.getFullYear()}</footer>
//     )
// }