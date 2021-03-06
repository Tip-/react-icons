
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdAspectRatio extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m35 31.7v-23.4h-30v23.4h30z m0-26.7c1.8 0 3.4 1.6 3.4 3.4v23.2c0 1.8-1.6 3.4-3.4 3.4h-30c-1.8 0-3.4-1.6-3.4-3.4v-23.2c0-1.8 1.6-3.4 3.4-3.4h30z m-23.4 10v5h-3.2v-8.4h8.2v3.4h-5z m20 5v8.4h-8.2v-3.4h5v-5h3.2z"/></g>
            </IconBase>
        );
    }
}
