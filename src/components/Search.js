
import React, { Component } from "react";
import { bindActionCreators } from "redux"
import { connect } from "react-redux";
import { search } from "./actions/cartActions";
var debounce = require('lodash.debounce');

class Search extends Component {
    handleChange = debounce((e) => {
        this.props.search(e.target.value);
    }, 1000);

    render() {
        return (
            <>
                <input
                    type="search"
                    name="search"
                    placeholder="Search"
                    onChange={this.handleChange}
                    value={this.props.value}
                />
            </>
        );
    }
}

const mapStateToProps = (state) => ({
    value: state.value

});
const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        {
            search
        },
        dispatch
    )

export default connect(mapStateToProps, mapDispatchToProps)(Search);