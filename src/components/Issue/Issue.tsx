import React from 'react';
import './Issue.css';
import  { IIssue } from '../../models/IIssue';

type IssueProps = {
    issue: IIssue;
};

const Issue: React.FC<IssueProps> = ({ issue }) => {


  return (
        <div className="issue">
            <div className="issue-row title-row">
                <a className="title" href={issue.html_url}>
                    {issue.title}
                </a>
            </div>
            <div className="issue-row">
                #{issue.number}
            </div>
        </div>
  );
}

export default Issue;
