import React from 'react';
import ClassNames from 'classnames';
import './dialog.less';
 
class DialogFooter extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
        	classes: ClassNames(
                'e-dialog-actions',
                this.props.classes,
                this.props.className
            )
        };
    }

	render() {
		return (
            <div {...this.props} className={this.state.classes}>
                {this.props.children}
            </div>
        );
	}
}

export default DialogFooter;