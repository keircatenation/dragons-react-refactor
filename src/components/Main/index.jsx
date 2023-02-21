import React from "react";
import Dragon from "../Dragon"
class Main extends React.Component{
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <main className={this.props.theme}>
            <h1>Dragon Arena</h1>
            <section className='dragons'>
                {
                    this.props.dragons.map( (dragon, index) =>{

                        return (
                            <Dragon fill1={dragon.fill1} fill2={dragon.fill2} fill3={dragon.fill3} key={index} name={dragon.name} />
                        )
                    } )
                }
            </section>
        </main>
        )
    }
}
export default Main;