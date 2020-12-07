import { IIssue } from "../models/IIssue";

export function getIssues(): Promise<IIssue[]> {
    return fetch('https://api.github.com/repos/cosmos/cosmos-sdk/issues?', {
        method: 'get',
      }).then(response => response.json());
}