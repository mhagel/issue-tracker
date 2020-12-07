import { IIssue } from "../models/IIssue";

export async function getIssues(): Promise<IIssue[]> {
    const response = await fetch('https://api.github.com/repos/cosmos/cosmos-sdk/issues?state=open', {
    method: 'get',
  });
  return await response.json();
}