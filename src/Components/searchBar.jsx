import React, { Component } from 'react';
import getDeps from 'get-dependencies';

export default class SearchBar extends Component {

    handleSubmit() {
        // let package = 'react'
        getDeps.getByName('react')
            .then(function (result) {
                // result is an array of dependencies of the npm package
            });
    }
    render() {
        return (
            <div>
                <input type="text" />
            </div>
        );
    }
    handleSubmit();
}
