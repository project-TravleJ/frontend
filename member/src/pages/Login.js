import style from '../components/mainPageComponents/usecomponents.module.css';
import Footer from '../components/mainPageComponents/Footer';
import ModalLogin from '../components/mainPageComponents/ModalLogin';


function Login() {

    return(
        <div className={ style.container}>
            <ModalLogin/>
            <Footer/>
        </div>
    )
}

export default Login;