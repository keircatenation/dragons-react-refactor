import React from "react";

class Footer extends React.Component {
    constructor(props) {
        super(props)
        this.date = new Date()
    }
    render() {
        return(
            <footer>Copyright {this.date.getFullYear()}</footer>
        )
    }
}

export default Footer;