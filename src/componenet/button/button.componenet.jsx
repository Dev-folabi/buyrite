import "./button.styles.scss";

const Button_Types_Classes = {
    google: 'google-sign-in',
    inverted: 'inverted'
};

const Button = ({children, buttonType, ...otherprops}) =>{
    return(
        <button className={`button-container ${Button_Types_Classes[buttonType]}`} 
        {...otherprops}>

            {children}
        </button>
    )
}

export default Button