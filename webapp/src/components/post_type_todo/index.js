// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {remove, complete, accept} from '../../actions';

import PostTypeTodo from './post_type_todo';

function mapStateToProps(state, ownProps) {
    return {
        ...ownProps,
        pendingAnswer: state['plugins-com.mattermost.plugin-todo'].inIssues.some((issue) => issue.id === ownProps.post.props.issueId),
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            remove,
            complete,
            accept,
        }, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostTypeTodo);
