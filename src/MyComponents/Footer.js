import React from 'react'


export const Footer = () => {

    let footerstyle={position:"relative",width:"100%",top:"100vh"}
    return (
        <footer className="bg-dark text-light py-3" style={footerstyle}>
            <p className="text-center">
            Copyright &copy; groupstudyme.com
            </p>
        </footer>
    )
}
