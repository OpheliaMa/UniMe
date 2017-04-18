import React from "react";

class InputField extends React.Component {

    render() {
        const { ph } = this.props;
        return <input type="text" placeholder={ph}/>
    }
}

InputField.propTypes = {
    ph: React.PropTypes.string
}

InputField.defaultProps = {
    ph: "请输入"
}

export default InputField;