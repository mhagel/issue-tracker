import React, { useEffect, useState } from 'react';
import './IssueList.css';
import  { getIssues } from '../actions/issue';
import  { IIssue } from '../models/IIssue';
import Issue from '../components/Issue/Issue';

const IssueList = () => {
  const [issues, setIssues] = useState<IIssue[]>([]);

  useEffect(() => {
    getIssues().then(apiIssues => {
      return setIssues(apiIssues);
    });
  }, [])

  return (
    <div className="issues">
      {issues.map(issue => <Issue key={issue.id} issue={issue} />)}
    </div>
  );
}

export default IssueList;
