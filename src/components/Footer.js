import React, {Compnent} from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    render() {
        return(
            <div className='footer_container'>
                <Link to='/contact'>Contact</Link>
                <Link to='/codeofconduct'>Code of Conduct</Link>
                <Link to='/donate'>Donate</Link>
            </div>
        )
    }
}