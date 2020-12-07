import React from 'react';
import './Issue.css';
import  { IIssue } from '../../models/IIssue';
import Link from '../Link/Link';
import moment from 'moment';

type IssueProps = {
    issue: IIssue;
};

const Issue: React.FC<IssueProps> = ({ issue }) => {
  return (
        <div className="issue">
            <div className="issue-row">
                <Link className="title" url={issue.html_url}>
                    {issue.title}
                </Link>
                <Link className="issue-number" url={issue.html_url}>
                    #{issue.number}
                </Link>
            </div>
            <div className="issue-row">
                <div className="text">
                    opened {moment(issue.created_at).clone().format('MMM D YYYY')}
                </div>
                <div className="text">
                    last updated {moment(issue.updated_at).clone().fromNow()}
                </div>
            </div>
        </div>
  );
}

export default Issue;
