/** Long type */
export declare type Long = any;
/** Filter Input Type for Issue */
export interface _IssueFilter {
    /** AND */
    AND?: _IssueFilter[] | null;
    /** OR */
    OR?: _IssueFilter[] | null;
    /** atmTeamId */
    atmTeamId?: string | null;
    /** atmTeamId_not */
    atmTeamId_not?: string | null;
    /** atmTeamId_in */
    atmTeamId_in?: string[] | null;
    /** atmTeamId_not_in */
    atmTeamId_not_in?: string[] | null;
    /** atmTeamId_lt */
    atmTeamId_lt?: string | null;
    /** atmTeamId_lte */
    atmTeamId_lte?: string | null;
    /** atmTeamId_gt */
    atmTeamId_gt?: string | null;
    /** atmTeamId_gte */
    atmTeamId_gte?: string | null;
    /** atmTeamId_contains */
    atmTeamId_contains?: string | null;
    /** atmTeamId_not_contains */
    atmTeamId_not_contains?: string | null;
    /** atmTeamId_starts_with */
    atmTeamId_starts_with?: string | null;
    /** atmTeamId_not_starts_with */
    atmTeamId_not_starts_with?: string | null;
    /** atmTeamId_ends_with */
    atmTeamId_ends_with?: string | null;
    /** atmTeamId_not_ends_with */
    atmTeamId_not_ends_with?: string | null;
    /** id */
    id?: string | null;
    /** id_not */
    id_not?: string | null;
    /** id_in */
    id_in?: string[] | null;
    /** id_not_in */
    id_not_in?: string[] | null;
    /** id_lt */
    id_lt?: string | null;
    /** id_lte */
    id_lte?: string | null;
    /** id_gt */
    id_gt?: string | null;
    /** id_gte */
    id_gte?: string | null;
    /** id_contains */
    id_contains?: string | null;
    /** id_not_contains */
    id_not_contains?: string | null;
    /** id_starts_with */
    id_starts_with?: string | null;
    /** id_not_starts_with */
    id_not_starts_with?: string | null;
    /** id_ends_with */
    id_ends_with?: string | null;
    /** id_not_ends_with */
    id_not_ends_with?: string | null;
    /** number */
    number?: number | null;
    /** number_not */
    number_not?: number | null;
    /** number_in */
    number_in?: number[] | null;
    /** number_not_in */
    number_not_in?: number[] | null;
    /** number_lt */
    number_lt?: number | null;
    /** number_lte */
    number_lte?: number | null;
    /** number_gt */
    number_gt?: number | null;
    /** number_gte */
    number_gte?: number | null;
    /** name */
    name?: string | null;
    /** name_not */
    name_not?: string | null;
    /** name_in */
    name_in?: string[] | null;
    /** name_not_in */
    name_not_in?: string[] | null;
    /** name_lt */
    name_lt?: string | null;
    /** name_lte */
    name_lte?: string | null;
    /** name_gt */
    name_gt?: string | null;
    /** name_gte */
    name_gte?: string | null;
    /** name_contains */
    name_contains?: string | null;
    /** name_not_contains */
    name_not_contains?: string | null;
    /** name_starts_with */
    name_starts_with?: string | null;
    /** name_not_starts_with */
    name_not_starts_with?: string | null;
    /** name_ends_with */
    name_ends_with?: string | null;
    /** name_not_ends_with */
    name_not_ends_with?: string | null;
    /** title */
    title?: string | null;
    /** title_not */
    title_not?: string | null;
    /** title_in */
    title_in?: string[] | null;
    /** title_not_in */
    title_not_in?: string[] | null;
    /** title_lt */
    title_lt?: string | null;
    /** title_lte */
    title_lte?: string | null;
    /** title_gt */
    title_gt?: string | null;
    /** title_gte */
    title_gte?: string | null;
    /** title_contains */
    title_contains?: string | null;
    /** title_not_contains */
    title_not_contains?: string | null;
    /** title_starts_with */
    title_starts_with?: string | null;
    /** title_not_starts_with */
    title_not_starts_with?: string | null;
    /** title_ends_with */
    title_ends_with?: string | null;
    /** title_not_ends_with */
    title_not_ends_with?: string | null;
    /** body */
    body?: string | null;
    /** body_not */
    body_not?: string | null;
    /** body_in */
    body_in?: string[] | null;
    /** body_not_in */
    body_not_in?: string[] | null;
    /** body_lt */
    body_lt?: string | null;
    /** body_lte */
    body_lte?: string | null;
    /** body_gt */
    body_gt?: string | null;
    /** body_gte */
    body_gte?: string | null;
    /** body_contains */
    body_contains?: string | null;
    /** body_not_contains */
    body_not_contains?: string | null;
    /** body_starts_with */
    body_starts_with?: string | null;
    /** body_not_starts_with */
    body_not_starts_with?: string | null;
    /** body_ends_with */
    body_ends_with?: string | null;
    /** body_not_ends_with */
    body_not_ends_with?: string | null;
    /** state */
    state?: IssueState | null;
    /** state_not */
    state_not?: IssueState | null;
    /** state_in */
    state_in?: IssueState[] | null;
    /** state_not_in */
    state_not_in?: IssueState[] | null;
    /** timestamp */
    timestamp?: string | null;
    /** timestamp_not */
    timestamp_not?: string | null;
    /** timestamp_in */
    timestamp_in?: string[] | null;
    /** timestamp_not_in */
    timestamp_not_in?: string[] | null;
    /** timestamp_lt */
    timestamp_lt?: string | null;
    /** timestamp_lte */
    timestamp_lte?: string | null;
    /** timestamp_gt */
    timestamp_gt?: string | null;
    /** timestamp_gte */
    timestamp_gte?: string | null;
    /** timestamp_contains */
    timestamp_contains?: string | null;
    /** timestamp_not_contains */
    timestamp_not_contains?: string | null;
    /** timestamp_starts_with */
    timestamp_starts_with?: string | null;
    /** timestamp_not_starts_with */
    timestamp_not_starts_with?: string | null;
    /** timestamp_ends_with */
    timestamp_ends_with?: string | null;
    /** timestamp_not_ends_with */
    timestamp_not_ends_with?: string | null;
    /** action */
    action?: string | null;
    /** action_not */
    action_not?: string | null;
    /** action_in */
    action_in?: string[] | null;
    /** action_not_in */
    action_not_in?: string[] | null;
    /** action_lt */
    action_lt?: string | null;
    /** action_lte */
    action_lte?: string | null;
    /** action_gt */
    action_gt?: string | null;
    /** action_gte */
    action_gte?: string | null;
    /** action_contains */
    action_contains?: string | null;
    /** action_not_contains */
    action_not_contains?: string | null;
    /** action_starts_with */
    action_starts_with?: string | null;
    /** action_not_starts_with */
    action_not_starts_with?: string | null;
    /** action_ends_with */
    action_ends_with?: string | null;
    /** action_not_ends_with */
    action_not_ends_with?: string | null;
    /** createdAt */
    createdAt?: string | null;
    /** createdAt_not */
    createdAt_not?: string | null;
    /** createdAt_in */
    createdAt_in?: string[] | null;
    /** createdAt_not_in */
    createdAt_not_in?: string[] | null;
    /** createdAt_lt */
    createdAt_lt?: string | null;
    /** createdAt_lte */
    createdAt_lte?: string | null;
    /** createdAt_gt */
    createdAt_gt?: string | null;
    /** createdAt_gte */
    createdAt_gte?: string | null;
    /** createdAt_contains */
    createdAt_contains?: string | null;
    /** createdAt_not_contains */
    createdAt_not_contains?: string | null;
    /** createdAt_starts_with */
    createdAt_starts_with?: string | null;
    /** createdAt_not_starts_with */
    createdAt_not_starts_with?: string | null;
    /** createdAt_ends_with */
    createdAt_ends_with?: string | null;
    /** createdAt_not_ends_with */
    createdAt_not_ends_with?: string | null;
    /** updatedAt */
    updatedAt?: string | null;
    /** updatedAt_not */
    updatedAt_not?: string | null;
    /** updatedAt_in */
    updatedAt_in?: string[] | null;
    /** updatedAt_not_in */
    updatedAt_not_in?: string[] | null;
    /** updatedAt_lt */
    updatedAt_lt?: string | null;
    /** updatedAt_lte */
    updatedAt_lte?: string | null;
    /** updatedAt_gt */
    updatedAt_gt?: string | null;
    /** updatedAt_gte */
    updatedAt_gte?: string | null;
    /** updatedAt_contains */
    updatedAt_contains?: string | null;
    /** updatedAt_not_contains */
    updatedAt_not_contains?: string | null;
    /** updatedAt_starts_with */
    updatedAt_starts_with?: string | null;
    /** updatedAt_not_starts_with */
    updatedAt_not_starts_with?: string | null;
    /** updatedAt_ends_with */
    updatedAt_ends_with?: string | null;
    /** updatedAt_not_ends_with */
    updatedAt_not_ends_with?: string | null;
    /** closedAt */
    closedAt?: string | null;
    /** closedAt_not */
    closedAt_not?: string | null;
    /** closedAt_in */
    closedAt_in?: string[] | null;
    /** closedAt_not_in */
    closedAt_not_in?: string[] | null;
    /** closedAt_lt */
    closedAt_lt?: string | null;
    /** closedAt_lte */
    closedAt_lte?: string | null;
    /** closedAt_gt */
    closedAt_gt?: string | null;
    /** closedAt_gte */
    closedAt_gte?: string | null;
    /** closedAt_contains */
    closedAt_contains?: string | null;
    /** closedAt_not_contains */
    closedAt_not_contains?: string | null;
    /** closedAt_starts_with */
    closedAt_starts_with?: string | null;
    /** closedAt_not_starts_with */
    closedAt_not_starts_with?: string | null;
    /** closedAt_ends_with */
    closedAt_ends_with?: string | null;
    /** closedAt_not_ends_with */
    closedAt_not_ends_with?: string | null;
    /** repo */
    repo?: _RepoFilter | null;
    /** repo_not */
    repo_not?: _RepoFilter | null;
    /** repo_in */
    repo_in?: _RepoFilter | null;
    /** repo_not_in */
    repo_not_in?: _RepoFilter | null;
    /** resolvingCommits */
    resolvingCommits?: _CommitFilter | null;
    /** resolvingCommits_not */
    resolvingCommits_not?: _CommitFilter | null;
    /** resolvingCommits_in */
    resolvingCommits_in?: _CommitFilter | null;
    /** resolvingCommits_not_in */
    resolvingCommits_not_in?: _CommitFilter | null;
    /** resolvingCommits_some */
    resolvingCommits_some?: _CommitFilter | null;
    /** resolvingCommits_none */
    resolvingCommits_none?: _CommitFilter | null;
    /** resolvingCommits_single */
    resolvingCommits_single?: _CommitFilter | null;
    /** resolvingCommits_every */
    resolvingCommits_every?: _CommitFilter | null;
    /** openedBy */
    openedBy?: _ScmIdFilter | null;
    /** openedBy_not */
    openedBy_not?: _ScmIdFilter | null;
    /** openedBy_in */
    openedBy_in?: _ScmIdFilter | null;
    /** openedBy_not_in */
    openedBy_not_in?: _ScmIdFilter | null;
    /** closedBy */
    closedBy?: _ScmIdFilter | null;
    /** closedBy_not */
    closedBy_not?: _ScmIdFilter | null;
    /** closedBy_in */
    closedBy_in?: _ScmIdFilter | null;
    /** closedBy_not_in */
    closedBy_not_in?: _ScmIdFilter | null;
    /** labels */
    labels?: _LabelFilter | null;
    /** labels_not */
    labels_not?: _LabelFilter | null;
    /** labels_in */
    labels_in?: _LabelFilter | null;
    /** labels_not_in */
    labels_not_in?: _LabelFilter | null;
    /** labels_some */
    labels_some?: _LabelFilter | null;
    /** labels_none */
    labels_none?: _LabelFilter | null;
    /** labels_single */
    labels_single?: _LabelFilter | null;
    /** labels_every */
    labels_every?: _LabelFilter | null;
    /** assignees */
    assignees?: _ScmIdFilter | null;
    /** assignees_not */
    assignees_not?: _ScmIdFilter | null;
    /** assignees_in */
    assignees_in?: _ScmIdFilter | null;
    /** assignees_not_in */
    assignees_not_in?: _ScmIdFilter | null;
    /** assignees_some */
    assignees_some?: _ScmIdFilter | null;
    /** assignees_none */
    assignees_none?: _ScmIdFilter | null;
    /** assignees_single */
    assignees_single?: _ScmIdFilter | null;
    /** assignees_every */
    assignees_every?: _ScmIdFilter | null;
    /** lastAssignedBy */
    lastAssignedBy?: _ScmIdFilter | null;
    /** lastAssignedBy_not */
    lastAssignedBy_not?: _ScmIdFilter | null;
    /** lastAssignedBy_in */
    lastAssignedBy_in?: _ScmIdFilter | null;
    /** lastAssignedBy_not_in */
    lastAssignedBy_not_in?: _ScmIdFilter | null;
    /** comments */
    comments?: _CommentFilter | null;
    /** comments_not */
    comments_not?: _CommentFilter | null;
    /** comments_in */
    comments_in?: _CommentFilter | null;
    /** comments_not_in */
    comments_not_in?: _CommentFilter | null;
    /** comments_some */
    comments_some?: _CommentFilter | null;
    /** comments_none */
    comments_none?: _CommentFilter | null;
    /** comments_single */
    comments_single?: _CommentFilter | null;
    /** comments_every */
    comments_every?: _CommentFilter | null;
}
/** Filter Input Type for Repo */
export interface _RepoFilter {
    /** AND */
    AND?: _RepoFilter[] | null;
    /** OR */
    OR?: _RepoFilter[] | null;
    /** atmTeamId */
    atmTeamId?: string | null;
    /** atmTeamId_not */
    atmTeamId_not?: string | null;
    /** atmTeamId_in */
    atmTeamId_in?: string[] | null;
    /** atmTeamId_not_in */
    atmTeamId_not_in?: string[] | null;
    /** atmTeamId_lt */
    atmTeamId_lt?: string | null;
    /** atmTeamId_lte */
    atmTeamId_lte?: string | null;
    /** atmTeamId_gt */
    atmTeamId_gt?: string | null;
    /** atmTeamId_gte */
    atmTeamId_gte?: string | null;
    /** atmTeamId_contains */
    atmTeamId_contains?: string | null;
    /** atmTeamId_not_contains */
    atmTeamId_not_contains?: string | null;
    /** atmTeamId_starts_with */
    atmTeamId_starts_with?: string | null;
    /** atmTeamId_not_starts_with */
    atmTeamId_not_starts_with?: string | null;
    /** atmTeamId_ends_with */
    atmTeamId_ends_with?: string | null;
    /** atmTeamId_not_ends_with */
    atmTeamId_not_ends_with?: string | null;
    /** id */
    id?: string | null;
    /** id_not */
    id_not?: string | null;
    /** id_in */
    id_in?: string[] | null;
    /** id_not_in */
    id_not_in?: string[] | null;
    /** id_lt */
    id_lt?: string | null;
    /** id_lte */
    id_lte?: string | null;
    /** id_gt */
    id_gt?: string | null;
    /** id_gte */
    id_gte?: string | null;
    /** id_contains */
    id_contains?: string | null;
    /** id_not_contains */
    id_not_contains?: string | null;
    /** id_starts_with */
    id_starts_with?: string | null;
    /** id_not_starts_with */
    id_not_starts_with?: string | null;
    /** id_ends_with */
    id_ends_with?: string | null;
    /** id_not_ends_with */
    id_not_ends_with?: string | null;
    /** owner */
    owner?: string | null;
    /** owner_not */
    owner_not?: string | null;
    /** owner_in */
    owner_in?: string[] | null;
    /** owner_not_in */
    owner_not_in?: string[] | null;
    /** owner_lt */
    owner_lt?: string | null;
    /** owner_lte */
    owner_lte?: string | null;
    /** owner_gt */
    owner_gt?: string | null;
    /** owner_gte */
    owner_gte?: string | null;
    /** owner_contains */
    owner_contains?: string | null;
    /** owner_not_contains */
    owner_not_contains?: string | null;
    /** owner_starts_with */
    owner_starts_with?: string | null;
    /** owner_not_starts_with */
    owner_not_starts_with?: string | null;
    /** owner_ends_with */
    owner_ends_with?: string | null;
    /** owner_not_ends_with */
    owner_not_ends_with?: string | null;
    /** name */
    name?: string | null;
    /** name_not */
    name_not?: string | null;
    /** name_in */
    name_in?: string[] | null;
    /** name_not_in */
    name_not_in?: string[] | null;
    /** name_lt */
    name_lt?: string | null;
    /** name_lte */
    name_lte?: string | null;
    /** name_gt */
    name_gt?: string | null;
    /** name_gte */
    name_gte?: string | null;
    /** name_contains */
    name_contains?: string | null;
    /** name_not_contains */
    name_not_contains?: string | null;
    /** name_starts_with */
    name_starts_with?: string | null;
    /** name_not_starts_with */
    name_not_starts_with?: string | null;
    /** name_ends_with */
    name_ends_with?: string | null;
    /** name_not_ends_with */
    name_not_ends_with?: string | null;
    /** allowRebaseMerge */
    allowRebaseMerge?: boolean | null;
    /** allowRebaseMerge_not */
    allowRebaseMerge_not?: boolean | null;
    /** allowSquashMerge */
    allowSquashMerge?: boolean | null;
    /** allowSquashMerge_not */
    allowSquashMerge_not?: boolean | null;
    /** allowMergeCommit */
    allowMergeCommit?: boolean | null;
    /** allowMergeCommit_not */
    allowMergeCommit_not?: boolean | null;
    /** repoId */
    repoId?: string | null;
    /** repoId_not */
    repoId_not?: string | null;
    /** repoId_in */
    repoId_in?: string[] | null;
    /** repoId_not_in */
    repoId_not_in?: string[] | null;
    /** repoId_lt */
    repoId_lt?: string | null;
    /** repoId_lte */
    repoId_lte?: string | null;
    /** repoId_gt */
    repoId_gt?: string | null;
    /** repoId_gte */
    repoId_gte?: string | null;
    /** repoId_contains */
    repoId_contains?: string | null;
    /** repoId_not_contains */
    repoId_not_contains?: string | null;
    /** repoId_starts_with */
    repoId_starts_with?: string | null;
    /** repoId_not_starts_with */
    repoId_not_starts_with?: string | null;
    /** repoId_ends_with */
    repoId_ends_with?: string | null;
    /** repoId_not_ends_with */
    repoId_not_ends_with?: string | null;
    /** gitHubId */
    gitHubId?: string | null;
    /** gitHubId_not */
    gitHubId_not?: string | null;
    /** gitHubId_in */
    gitHubId_in?: string[] | null;
    /** gitHubId_not_in */
    gitHubId_not_in?: string[] | null;
    /** gitHubId_lt */
    gitHubId_lt?: string | null;
    /** gitHubId_lte */
    gitHubId_lte?: string | null;
    /** gitHubId_gt */
    gitHubId_gt?: string | null;
    /** gitHubId_gte */
    gitHubId_gte?: string | null;
    /** gitHubId_contains */
    gitHubId_contains?: string | null;
    /** gitHubId_not_contains */
    gitHubId_not_contains?: string | null;
    /** gitHubId_starts_with */
    gitHubId_starts_with?: string | null;
    /** gitHubId_not_starts_with */
    gitHubId_not_starts_with?: string | null;
    /** gitHubId_ends_with */
    gitHubId_ends_with?: string | null;
    /** gitHubId_not_ends_with */
    gitHubId_not_ends_with?: string | null;
    /** defaultBranch */
    defaultBranch?: string | null;
    /** defaultBranch_not */
    defaultBranch_not?: string | null;
    /** defaultBranch_in */
    defaultBranch_in?: string[] | null;
    /** defaultBranch_not_in */
    defaultBranch_not_in?: string[] | null;
    /** defaultBranch_lt */
    defaultBranch_lt?: string | null;
    /** defaultBranch_lte */
    defaultBranch_lte?: string | null;
    /** defaultBranch_gt */
    defaultBranch_gt?: string | null;
    /** defaultBranch_gte */
    defaultBranch_gte?: string | null;
    /** defaultBranch_contains */
    defaultBranch_contains?: string | null;
    /** defaultBranch_not_contains */
    defaultBranch_not_contains?: string | null;
    /** defaultBranch_starts_with */
    defaultBranch_starts_with?: string | null;
    /** defaultBranch_not_starts_with */
    defaultBranch_not_starts_with?: string | null;
    /** defaultBranch_ends_with */
    defaultBranch_ends_with?: string | null;
    /** defaultBranch_not_ends_with */
    defaultBranch_not_ends_with?: string | null;
    /** labels */
    labels?: _LabelFilter | null;
    /** labels_not */
    labels_not?: _LabelFilter | null;
    /** labels_in */
    labels_in?: _LabelFilter | null;
    /** labels_not_in */
    labels_not_in?: _LabelFilter | null;
    /** labels_some */
    labels_some?: _LabelFilter | null;
    /** labels_none */
    labels_none?: _LabelFilter | null;
    /** labels_single */
    labels_single?: _LabelFilter | null;
    /** labels_every */
    labels_every?: _LabelFilter | null;
    /** channels */
    channels?: _ChatChannelFilter | null;
    /** channels_not */
    channels_not?: _ChatChannelFilter | null;
    /** channels_in */
    channels_in?: _ChatChannelFilter | null;
    /** channels_not_in */
    channels_not_in?: _ChatChannelFilter | null;
    /** channels_some */
    channels_some?: _ChatChannelFilter | null;
    /** channels_none */
    channels_none?: _ChatChannelFilter | null;
    /** channels_single */
    channels_single?: _ChatChannelFilter | null;
    /** channels_every */
    channels_every?: _ChatChannelFilter | null;
    /** org */
    org?: _OrgFilter | null;
    /** org_not */
    org_not?: _OrgFilter | null;
    /** org_in */
    org_in?: _OrgFilter | null;
    /** org_not_in */
    org_not_in?: _OrgFilter | null;
    /** issue */
    issue?: _IssueFilter | null;
    /** issue_not */
    issue_not?: _IssueFilter | null;
    /** issue_in */
    issue_in?: _IssueFilter | null;
    /** issue_not_in */
    issue_not_in?: _IssueFilter | null;
    /** issue_some */
    issue_some?: _IssueFilter | null;
    /** issue_none */
    issue_none?: _IssueFilter | null;
    /** issue_single */
    issue_single?: _IssueFilter | null;
    /** issue_every */
    issue_every?: _IssueFilter | null;
    /** issues */
    issues?: _IssueFilter | null;
    /** issues_not */
    issues_not?: _IssueFilter | null;
    /** issues_in */
    issues_in?: _IssueFilter | null;
    /** issues_not_in */
    issues_not_in?: _IssueFilter | null;
    /** issues_some */
    issues_some?: _IssueFilter | null;
    /** issues_none */
    issues_none?: _IssueFilter | null;
    /** issues_single */
    issues_single?: _IssueFilter | null;
    /** issues_every */
    issues_every?: _IssueFilter | null;
    /** pullRequest */
    pullRequest?: _PullRequestFilter | null;
    /** pullRequest_not */
    pullRequest_not?: _PullRequestFilter | null;
    /** pullRequest_in */
    pullRequest_in?: _PullRequestFilter | null;
    /** pullRequest_not_in */
    pullRequest_not_in?: _PullRequestFilter | null;
    /** pullRequest_some */
    pullRequest_some?: _PullRequestFilter | null;
    /** pullRequest_none */
    pullRequest_none?: _PullRequestFilter | null;
    /** pullRequest_single */
    pullRequest_single?: _PullRequestFilter | null;
    /** pullRequest_every */
    pullRequest_every?: _PullRequestFilter | null;
    /** pullRequests */
    pullRequests?: _PullRequestFilter | null;
    /** pullRequests_not */
    pullRequests_not?: _PullRequestFilter | null;
    /** pullRequests_in */
    pullRequests_in?: _PullRequestFilter | null;
    /** pullRequests_not_in */
    pullRequests_not_in?: _PullRequestFilter | null;
    /** pullRequests_some */
    pullRequests_some?: _PullRequestFilter | null;
    /** pullRequests_none */
    pullRequests_none?: _PullRequestFilter | null;
    /** pullRequests_single */
    pullRequests_single?: _PullRequestFilter | null;
    /** pullRequests_every */
    pullRequests_every?: _PullRequestFilter | null;
    /** branches */
    branches?: _BranchFilter | null;
    /** branches_not */
    branches_not?: _BranchFilter | null;
    /** branches_in */
    branches_in?: _BranchFilter | null;
    /** branches_not_in */
    branches_not_in?: _BranchFilter | null;
    /** branches_some */
    branches_some?: _BranchFilter | null;
    /** branches_none */
    branches_none?: _BranchFilter | null;
    /** branches_single */
    branches_single?: _BranchFilter | null;
    /** branches_every */
    branches_every?: _BranchFilter | null;
    /** links */
    links?: _ChannelLinkFilter | null;
    /** links_not */
    links_not?: _ChannelLinkFilter | null;
    /** links_in */
    links_in?: _ChannelLinkFilter | null;
    /** links_not_in */
    links_not_in?: _ChannelLinkFilter | null;
    /** links_some */
    links_some?: _ChannelLinkFilter | null;
    /** links_none */
    links_none?: _ChannelLinkFilter | null;
    /** links_single */
    links_single?: _ChannelLinkFilter | null;
    /** links_every */
    links_every?: _ChannelLinkFilter | null;
    /** webhook */
    webhook?: _WebhookFilter | null;
    /** webhook_not */
    webhook_not?: _WebhookFilter | null;
    /** webhook_in */
    webhook_in?: _WebhookFilter | null;
    /** webhook_not_in */
    webhook_not_in?: _WebhookFilter | null;
}
/** Filter Input Type for Label */
export interface _LabelFilter {
    /** AND */
    AND?: _LabelFilter[] | null;
    /** OR */
    OR?: _LabelFilter[] | null;
    /** atmTeamId */
    atmTeamId?: string | null;
    /** atmTeamId_not */
    atmTeamId_not?: string | null;
    /** atmTeamId_in */
    atmTeamId_in?: string[] | null;
    /** atmTeamId_not_in */
    atmTeamId_not_in?: string[] | null;
    /** atmTeamId_lt */
    atmTeamId_lt?: string | null;
    /** atmTeamId_lte */
    atmTeamId_lte?: string | null;
    /** atmTeamId_gt */
    atmTeamId_gt?: string | null;
    /** atmTeamId_gte */
    atmTeamId_gte?: string | null;
    /** atmTeamId_contains */
    atmTeamId_contains?: string | null;
    /** atmTeamId_not_contains */
    atmTeamId_not_contains?: string | null;
    /** atmTeamId_starts_with */
    atmTeamId_starts_with?: string | null;
    /** atmTeamId_not_starts_with */
    atmTeamId_not_starts_with?: string | null;
    /** atmTeamId_ends_with */
    atmTeamId_ends_with?: string | null;
    /** atmTeamId_not_ends_with */
    atmTeamId_not_ends_with?: string | null;
    /** id */
    id?: string | null;
    /** id_not */
    id_not?: string | null;
    /** id_in */
    id_in?: string[] | null;
    /** id_not_in */
    id_not_in?: string[] | null;
    /** id_lt */
    id_lt?: string | null;
    /** id_lte */
    id_lte?: string | null;
    /** id_gt */
    id_gt?: string | null;
    /** id_gte */
    id_gte?: string | null;
    /** id_contains */
    id_contains?: string | null;
    /** id_not_contains */
    id_not_contains?: string | null;
    /** id_starts_with */
    id_starts_with?: string | null;
    /** id_not_starts_with */
    id_not_starts_with?: string | null;
    /** id_ends_with */
    id_ends_with?: string | null;
    /** id_not_ends_with */
    id_not_ends_with?: string | null;
    /** name */
    name?: string | null;
    /** name_not */
    name_not?: string | null;
    /** name_in */
    name_in?: string[] | null;
    /** name_not_in */
    name_not_in?: string[] | null;
    /** name_lt */
    name_lt?: string | null;
    /** name_lte */
    name_lte?: string | null;
    /** name_gt */
    name_gt?: string | null;
    /** name_gte */
    name_gte?: string | null;
    /** name_contains */
    name_contains?: string | null;
    /** name_not_contains */
    name_not_contains?: string | null;
    /** name_starts_with */
    name_starts_with?: string | null;
    /** name_not_starts_with */
    name_not_starts_with?: string | null;
    /** name_ends_with */
    name_ends_with?: string | null;
    /** name_not_ends_with */
    name_not_ends_with?: string | null;
    /** default */
    default?: string | null;
    /** default_not */
    default_not?: string | null;
    /** default_in */
    default_in?: string[] | null;
    /** default_not_in */
    default_not_in?: string[] | null;
    /** default_lt */
    default_lt?: string | null;
    /** default_lte */
    default_lte?: string | null;
    /** default_gt */
    default_gt?: string | null;
    /** default_gte */
    default_gte?: string | null;
    /** default_contains */
    default_contains?: string | null;
    /** default_not_contains */
    default_not_contains?: string | null;
    /** default_starts_with */
    default_starts_with?: string | null;
    /** default_not_starts_with */
    default_not_starts_with?: string | null;
    /** default_ends_with */
    default_ends_with?: string | null;
    /** default_not_ends_with */
    default_not_ends_with?: string | null;
    /** color */
    color?: string | null;
    /** color_not */
    color_not?: string | null;
    /** color_in */
    color_in?: string[] | null;
    /** color_not_in */
    color_not_in?: string[] | null;
    /** color_lt */
    color_lt?: string | null;
    /** color_lte */
    color_lte?: string | null;
    /** color_gt */
    color_gt?: string | null;
    /** color_gte */
    color_gte?: string | null;
    /** color_contains */
    color_contains?: string | null;
    /** color_not_contains */
    color_not_contains?: string | null;
    /** color_starts_with */
    color_starts_with?: string | null;
    /** color_not_starts_with */
    color_not_starts_with?: string | null;
    /** color_ends_with */
    color_ends_with?: string | null;
    /** color_not_ends_with */
    color_not_ends_with?: string | null;
    /** repo */
    repo?: _RepoFilter | null;
    /** repo_not */
    repo_not?: _RepoFilter | null;
    /** repo_in */
    repo_in?: _RepoFilter | null;
    /** repo_not_in */
    repo_not_in?: _RepoFilter | null;
}
/** Filter Input Type for ChatChannel */
export interface _ChatChannelFilter {
    /** AND */
    AND?: _ChatChannelFilter[] | null;
    /** OR */
    OR?: _ChatChannelFilter[] | null;
    /** atmTeamId */
    atmTeamId?: string | null;
    /** atmTeamId_not */
    atmTeamId_not?: string | null;
    /** atmTeamId_in */
    atmTeamId_in?: string[] | null;
    /** atmTeamId_not_in */
    atmTeamId_not_in?: string[] | null;
    /** atmTeamId_lt */
    atmTeamId_lt?: string | null;
    /** atmTeamId_lte */
    atmTeamId_lte?: string | null;
    /** atmTeamId_gt */
    atmTeamId_gt?: string | null;
    /** atmTeamId_gte */
    atmTeamId_gte?: string | null;
    /** atmTeamId_contains */
    atmTeamId_contains?: string | null;
    /** atmTeamId_not_contains */
    atmTeamId_not_contains?: string | null;
    /** atmTeamId_starts_with */
    atmTeamId_starts_with?: string | null;
    /** atmTeamId_not_starts_with */
    atmTeamId_not_starts_with?: string | null;
    /** atmTeamId_ends_with */
    atmTeamId_ends_with?: string | null;
    /** atmTeamId_not_ends_with */
    atmTeamId_not_ends_with?: string | null;
    /** id */
    id?: string | null;
    /** id_not */
    id_not?: string | null;
    /** id_in */
    id_in?: string[] | null;
    /** id_not_in */
    id_not_in?: string[] | null;
    /** id_lt */
    id_lt?: string | null;
    /** id_lte */
    id_lte?: string | null;
    /** id_gt */
    id_gt?: string | null;
    /** id_gte */
    id_gte?: string | null;
    /** id_contains */
    id_contains?: string | null;
    /** id_not_contains */
    id_not_contains?: string | null;
    /** id_starts_with */
    id_starts_with?: string | null;
    /** id_not_starts_with */
    id_not_starts_with?: string | null;
    /** id_ends_with */
    id_ends_with?: string | null;
    /** id_not_ends_with */
    id_not_ends_with?: string | null;
    /** name */
    name?: string | null;
    /** name_not */
    name_not?: string | null;
    /** name_in */
    name_in?: string[] | null;
    /** name_not_in */
    name_not_in?: string[] | null;
    /** name_lt */
    name_lt?: string | null;
    /** name_lte */
    name_lte?: string | null;
    /** name_gt */
    name_gt?: string | null;
    /** name_gte */
    name_gte?: string | null;
    /** name_contains */
    name_contains?: string | null;
    /** name_not_contains */
    name_not_contains?: string | null;
    /** name_starts_with */
    name_starts_with?: string | null;
    /** name_not_starts_with */
    name_not_starts_with?: string | null;
    /** name_ends_with */
    name_ends_with?: string | null;
    /** name_not_ends_with */
    name_not_ends_with?: string | null;
    /** provider */
    provider?: string | null;
    /** provider_not */
    provider_not?: string | null;
    /** provider_in */
    provider_in?: string[] | null;
    /** provider_not_in */
    provider_not_in?: string[] | null;
    /** provider_lt */
    provider_lt?: string | null;
    /** provider_lte */
    provider_lte?: string | null;
    /** provider_gt */
    provider_gt?: string | null;
    /** provider_gte */
    provider_gte?: string | null;
    /** provider_contains */
    provider_contains?: string | null;
    /** provider_not_contains */
    provider_not_contains?: string | null;
    /** provider_starts_with */
    provider_starts_with?: string | null;
    /** provider_not_starts_with */
    provider_not_starts_with?: string | null;
    /** provider_ends_with */
    provider_ends_with?: string | null;
    /** provider_not_ends_with */
    provider_not_ends_with?: string | null;
    /** normalizedName */
    normalizedName?: string | null;
    /** normalizedName_not */
    normalizedName_not?: string | null;
    /** normalizedName_in */
    normalizedName_in?: string[] | null;
    /** normalizedName_not_in */
    normalizedName_not_in?: string[] | null;
    /** normalizedName_lt */
    normalizedName_lt?: string | null;
    /** normalizedName_lte */
    normalizedName_lte?: string | null;
    /** normalizedName_gt */
    normalizedName_gt?: string | null;
    /** normalizedName_gte */
    normalizedName_gte?: string | null;
    /** normalizedName_contains */
    normalizedName_contains?: string | null;
    /** normalizedName_not_contains */
    normalizedName_not_contains?: string | null;
    /** normalizedName_starts_with */
    normalizedName_starts_with?: string | null;
    /** normalizedName_not_starts_with */
    normalizedName_not_starts_with?: string | null;
    /** normalizedName_ends_with */
    normalizedName_ends_with?: string | null;
    /** normalizedName_not_ends_with */
    normalizedName_not_ends_with?: string | null;
    /** channelId */
    channelId?: string | null;
    /** channelId_not */
    channelId_not?: string | null;
    /** channelId_in */
    channelId_in?: string[] | null;
    /** channelId_not_in */
    channelId_not_in?: string[] | null;
    /** channelId_lt */
    channelId_lt?: string | null;
    /** channelId_lte */
    channelId_lte?: string | null;
    /** channelId_gt */
    channelId_gt?: string | null;
    /** channelId_gte */
    channelId_gte?: string | null;
    /** channelId_contains */
    channelId_contains?: string | null;
    /** channelId_not_contains */
    channelId_not_contains?: string | null;
    /** channelId_starts_with */
    channelId_starts_with?: string | null;
    /** channelId_not_starts_with */
    channelId_not_starts_with?: string | null;
    /** channelId_ends_with */
    channelId_ends_with?: string | null;
    /** channelId_not_ends_with */
    channelId_not_ends_with?: string | null;
    /** isDefault */
    isDefault?: boolean | null;
    /** isDefault_not */
    isDefault_not?: boolean | null;
    /** botInvitedSelf */
    botInvitedSelf?: boolean | null;
    /** botInvitedSelf_not */
    botInvitedSelf_not?: boolean | null;
    /** archived */
    archived?: boolean | null;
    /** archived_not */
    archived_not?: boolean | null;
    /** createdBy */
    createdBy?: _ChatIdFilter | null;
    /** createdBy_not */
    createdBy_not?: _ChatIdFilter | null;
    /** createdBy_in */
    createdBy_in?: _ChatIdFilter | null;
    /** createdBy_not_in */
    createdBy_not_in?: _ChatIdFilter | null;
    /** repos */
    repos?: _RepoFilter | null;
    /** repos_not */
    repos_not?: _RepoFilter | null;
    /** repos_in */
    repos_in?: _RepoFilter | null;
    /** repos_not_in */
    repos_not_in?: _RepoFilter | null;
    /** repos_some */
    repos_some?: _RepoFilter | null;
    /** repos_none */
    repos_none?: _RepoFilter | null;
    /** repos_single */
    repos_single?: _RepoFilter | null;
    /** repos_every */
    repos_every?: _RepoFilter | null;
    /** links */
    links?: _ChannelLinkFilter | null;
    /** links_not */
    links_not?: _ChannelLinkFilter | null;
    /** links_in */
    links_in?: _ChannelLinkFilter | null;
    /** links_not_in */
    links_not_in?: _ChannelLinkFilter | null;
    /** links_some */
    links_some?: _ChannelLinkFilter | null;
    /** links_none */
    links_none?: _ChannelLinkFilter | null;
    /** links_single */
    links_single?: _ChannelLinkFilter | null;
    /** links_every */
    links_every?: _ChannelLinkFilter | null;
    /** members */
    members?: _ChatIdFilter | null;
    /** members_not */
    members_not?: _ChatIdFilter | null;
    /** members_in */
    members_in?: _ChatIdFilter | null;
    /** members_not_in */
    members_not_in?: _ChatIdFilter | null;
    /** members_some */
    members_some?: _ChatIdFilter | null;
    /** members_none */
    members_none?: _ChatIdFilter | null;
    /** members_single */
    members_single?: _ChatIdFilter | null;
    /** members_every */
    members_every?: _ChatIdFilter | null;
    /** team */
    team?: _ChatTeamFilter | null;
    /** team_not */
    team_not?: _ChatTeamFilter | null;
    /** team_in */
    team_in?: _ChatTeamFilter | null;
    /** team_not_in */
    team_not_in?: _ChatTeamFilter | null;
}
/** Filter Input Type for ChatId */
export interface _ChatIdFilter {
    /** AND */
    AND?: _ChatIdFilter[] | null;
    /** OR */
    OR?: _ChatIdFilter[] | null;
    /** atmTeamId */
    atmTeamId?: string | null;
    /** atmTeamId_not */
    atmTeamId_not?: string | null;
    /** atmTeamId_in */
    atmTeamId_in?: string[] | null;
    /** atmTeamId_not_in */
    atmTeamId_not_in?: string[] | null;
    /** atmTeamId_lt */
    atmTeamId_lt?: string | null;
    /** atmTeamId_lte */
    atmTeamId_lte?: string | null;
    /** atmTeamId_gt */
    atmTeamId_gt?: string | null;
    /** atmTeamId_gte */
    atmTeamId_gte?: string | null;
    /** atmTeamId_contains */
    atmTeamId_contains?: string | null;
    /** atmTeamId_not_contains */
    atmTeamId_not_contains?: string | null;
    /** atmTeamId_starts_with */
    atmTeamId_starts_with?: string | null;
    /** atmTeamId_not_starts_with */
    atmTeamId_not_starts_with?: string | null;
    /** atmTeamId_ends_with */
    atmTeamId_ends_with?: string | null;
    /** atmTeamId_not_ends_with */
    atmTeamId_not_ends_with?: string | null;
    /** id */
    id?: string | null;
    /** id_not */
    id_not?: string | null;
    /** id_in */
    id_in?: string[] | null;
    /** id_not_in */
    id_not_in?: string[] | null;
    /** id_lt */
    id_lt?: string | null;
    /** id_lte */
    id_lte?: string | null;
    /** id_gt */
    id_gt?: string | null;
    /** id_gte */
    id_gte?: string | null;
    /** id_contains */
    id_contains?: string | null;
    /** id_not_contains */
    id_not_contains?: string | null;
    /** id_starts_with */
    id_starts_with?: string | null;
    /** id_not_starts_with */
    id_not_starts_with?: string | null;
    /** id_ends_with */
    id_ends_with?: string | null;
    /** id_not_ends_with */
    id_not_ends_with?: string | null;
    /** screenName */
    screenName?: string | null;
    /** screenName_not */
    screenName_not?: string | null;
    /** screenName_in */
    screenName_in?: string[] | null;
    /** screenName_not_in */
    screenName_not_in?: string[] | null;
    /** screenName_lt */
    screenName_lt?: string | null;
    /** screenName_lte */
    screenName_lte?: string | null;
    /** screenName_gt */
    screenName_gt?: string | null;
    /** screenName_gte */
    screenName_gte?: string | null;
    /** screenName_contains */
    screenName_contains?: string | null;
    /** screenName_not_contains */
    screenName_not_contains?: string | null;
    /** screenName_starts_with */
    screenName_starts_with?: string | null;
    /** screenName_not_starts_with */
    screenName_not_starts_with?: string | null;
    /** screenName_ends_with */
    screenName_ends_with?: string | null;
    /** screenName_not_ends_with */
    screenName_not_ends_with?: string | null;
    /** userId */
    userId?: string | null;
    /** userId_not */
    userId_not?: string | null;
    /** userId_in */
    userId_in?: string[] | null;
    /** userId_not_in */
    userId_not_in?: string[] | null;
    /** userId_lt */
    userId_lt?: string | null;
    /** userId_lte */
    userId_lte?: string | null;
    /** userId_gt */
    userId_gt?: string | null;
    /** userId_gte */
    userId_gte?: string | null;
    /** userId_contains */
    userId_contains?: string | null;
    /** userId_not_contains */
    userId_not_contains?: string | null;
    /** userId_starts_with */
    userId_starts_with?: string | null;
    /** userId_not_starts_with */
    userId_not_starts_with?: string | null;
    /** userId_ends_with */
    userId_ends_with?: string | null;
    /** userId_not_ends_with */
    userId_not_ends_with?: string | null;
    /** provider */
    provider?: string | null;
    /** provider_not */
    provider_not?: string | null;
    /** provider_in */
    provider_in?: string[] | null;
    /** provider_not_in */
    provider_not_in?: string[] | null;
    /** provider_lt */
    provider_lt?: string | null;
    /** provider_lte */
    provider_lte?: string | null;
    /** provider_gt */
    provider_gt?: string | null;
    /** provider_gte */
    provider_gte?: string | null;
    /** provider_contains */
    provider_contains?: string | null;
    /** provider_not_contains */
    provider_not_contains?: string | null;
    /** provider_starts_with */
    provider_starts_with?: string | null;
    /** provider_not_starts_with */
    provider_not_starts_with?: string | null;
    /** provider_ends_with */
    provider_ends_with?: string | null;
    /** provider_not_ends_with */
    provider_not_ends_with?: string | null;
    /** isAtomistBot */
    isAtomistBot?: string | null;
    /** isAtomistBot_not */
    isAtomistBot_not?: string | null;
    /** isAtomistBot_in */
    isAtomistBot_in?: string[] | null;
    /** isAtomistBot_not_in */
    isAtomistBot_not_in?: string[] | null;
    /** isAtomistBot_lt */
    isAtomistBot_lt?: string | null;
    /** isAtomistBot_lte */
    isAtomistBot_lte?: string | null;
    /** isAtomistBot_gt */
    isAtomistBot_gt?: string | null;
    /** isAtomistBot_gte */
    isAtomistBot_gte?: string | null;
    /** isAtomistBot_contains */
    isAtomistBot_contains?: string | null;
    /** isAtomistBot_not_contains */
    isAtomistBot_not_contains?: string | null;
    /** isAtomistBot_starts_with */
    isAtomistBot_starts_with?: string | null;
    /** isAtomistBot_not_starts_with */
    isAtomistBot_not_starts_with?: string | null;
    /** isAtomistBot_ends_with */
    isAtomistBot_ends_with?: string | null;
    /** isAtomistBot_not_ends_with */
    isAtomistBot_not_ends_with?: string | null;
    /** isOwner */
    isOwner?: string | null;
    /** isOwner_not */
    isOwner_not?: string | null;
    /** isOwner_in */
    isOwner_in?: string[] | null;
    /** isOwner_not_in */
    isOwner_not_in?: string[] | null;
    /** isOwner_lt */
    isOwner_lt?: string | null;
    /** isOwner_lte */
    isOwner_lte?: string | null;
    /** isOwner_gt */
    isOwner_gt?: string | null;
    /** isOwner_gte */
    isOwner_gte?: string | null;
    /** isOwner_contains */
    isOwner_contains?: string | null;
    /** isOwner_not_contains */
    isOwner_not_contains?: string | null;
    /** isOwner_starts_with */
    isOwner_starts_with?: string | null;
    /** isOwner_not_starts_with */
    isOwner_not_starts_with?: string | null;
    /** isOwner_ends_with */
    isOwner_ends_with?: string | null;
    /** isOwner_not_ends_with */
    isOwner_not_ends_with?: string | null;
    /** isPrimaryOwner */
    isPrimaryOwner?: string | null;
    /** isPrimaryOwner_not */
    isPrimaryOwner_not?: string | null;
    /** isPrimaryOwner_in */
    isPrimaryOwner_in?: string[] | null;
    /** isPrimaryOwner_not_in */
    isPrimaryOwner_not_in?: string[] | null;
    /** isPrimaryOwner_lt */
    isPrimaryOwner_lt?: string | null;
    /** isPrimaryOwner_lte */
    isPrimaryOwner_lte?: string | null;
    /** isPrimaryOwner_gt */
    isPrimaryOwner_gt?: string | null;
    /** isPrimaryOwner_gte */
    isPrimaryOwner_gte?: string | null;
    /** isPrimaryOwner_contains */
    isPrimaryOwner_contains?: string | null;
    /** isPrimaryOwner_not_contains */
    isPrimaryOwner_not_contains?: string | null;
    /** isPrimaryOwner_starts_with */
    isPrimaryOwner_starts_with?: string | null;
    /** isPrimaryOwner_not_starts_with */
    isPrimaryOwner_not_starts_with?: string | null;
    /** isPrimaryOwner_ends_with */
    isPrimaryOwner_ends_with?: string | null;
    /** isPrimaryOwner_not_ends_with */
    isPrimaryOwner_not_ends_with?: string | null;
    /** isAdmin */
    isAdmin?: string | null;
    /** isAdmin_not */
    isAdmin_not?: string | null;
    /** isAdmin_in */
    isAdmin_in?: string[] | null;
    /** isAdmin_not_in */
    isAdmin_not_in?: string[] | null;
    /** isAdmin_lt */
    isAdmin_lt?: string | null;
    /** isAdmin_lte */
    isAdmin_lte?: string | null;
    /** isAdmin_gt */
    isAdmin_gt?: string | null;
    /** isAdmin_gte */
    isAdmin_gte?: string | null;
    /** isAdmin_contains */
    isAdmin_contains?: string | null;
    /** isAdmin_not_contains */
    isAdmin_not_contains?: string | null;
    /** isAdmin_starts_with */
    isAdmin_starts_with?: string | null;
    /** isAdmin_not_starts_with */
    isAdmin_not_starts_with?: string | null;
    /** isAdmin_ends_with */
    isAdmin_ends_with?: string | null;
    /** isAdmin_not_ends_with */
    isAdmin_not_ends_with?: string | null;
    /** isBot */
    isBot?: string | null;
    /** isBot_not */
    isBot_not?: string | null;
    /** isBot_in */
    isBot_in?: string[] | null;
    /** isBot_not_in */
    isBot_not_in?: string[] | null;
    /** isBot_lt */
    isBot_lt?: string | null;
    /** isBot_lte */
    isBot_lte?: string | null;
    /** isBot_gt */
    isBot_gt?: string | null;
    /** isBot_gte */
    isBot_gte?: string | null;
    /** isBot_contains */
    isBot_contains?: string | null;
    /** isBot_not_contains */
    isBot_not_contains?: string | null;
    /** isBot_starts_with */
    isBot_starts_with?: string | null;
    /** isBot_not_starts_with */
    isBot_not_starts_with?: string | null;
    /** isBot_ends_with */
    isBot_ends_with?: string | null;
    /** isBot_not_ends_with */
    isBot_not_ends_with?: string | null;
    /** timezoneLabel */
    timezoneLabel?: string | null;
    /** timezoneLabel_not */
    timezoneLabel_not?: string | null;
    /** timezoneLabel_in */
    timezoneLabel_in?: string[] | null;
    /** timezoneLabel_not_in */
    timezoneLabel_not_in?: string[] | null;
    /** timezoneLabel_lt */
    timezoneLabel_lt?: string | null;
    /** timezoneLabel_lte */
    timezoneLabel_lte?: string | null;
    /** timezoneLabel_gt */
    timezoneLabel_gt?: string | null;
    /** timezoneLabel_gte */
    timezoneLabel_gte?: string | null;
    /** timezoneLabel_contains */
    timezoneLabel_contains?: string | null;
    /** timezoneLabel_not_contains */
    timezoneLabel_not_contains?: string | null;
    /** timezoneLabel_starts_with */
    timezoneLabel_starts_with?: string | null;
    /** timezoneLabel_not_starts_with */
    timezoneLabel_not_starts_with?: string | null;
    /** timezoneLabel_ends_with */
    timezoneLabel_ends_with?: string | null;
    /** timezoneLabel_not_ends_with */
    timezoneLabel_not_ends_with?: string | null;
    /** channels */
    channels?: _ChatChannelFilter | null;
    /** channels_not */
    channels_not?: _ChatChannelFilter | null;
    /** channels_in */
    channels_in?: _ChatChannelFilter | null;
    /** channels_not_in */
    channels_not_in?: _ChatChannelFilter | null;
    /** channels_some */
    channels_some?: _ChatChannelFilter | null;
    /** channels_none */
    channels_none?: _ChatChannelFilter | null;
    /** channels_single */
    channels_single?: _ChatChannelFilter | null;
    /** channels_every */
    channels_every?: _ChatChannelFilter | null;
    /** emails */
    emails?: _EmailFilter | null;
    /** emails_not */
    emails_not?: _EmailFilter | null;
    /** emails_in */
    emails_in?: _EmailFilter | null;
    /** emails_not_in */
    emails_not_in?: _EmailFilter | null;
    /** emails_some */
    emails_some?: _EmailFilter | null;
    /** emails_none */
    emails_none?: _EmailFilter | null;
    /** emails_single */
    emails_single?: _EmailFilter | null;
    /** emails_every */
    emails_every?: _EmailFilter | null;
    /** chatTeam */
    chatTeam?: _ChatTeamFilter | null;
    /** chatTeam_not */
    chatTeam_not?: _ChatTeamFilter | null;
    /** chatTeam_in */
    chatTeam_in?: _ChatTeamFilter | null;
    /** chatTeam_not_in */
    chatTeam_not_in?: _ChatTeamFilter | null;
    /** channelsCreated */
    channelsCreated?: _ChatChannelFilter | null;
    /** channelsCreated_not */
    channelsCreated_not?: _ChatChannelFilter | null;
    /** channelsCreated_in */
    channelsCreated_in?: _ChatChannelFilter | null;
    /** channelsCreated_not_in */
    channelsCreated_not_in?: _ChatChannelFilter | null;
    /** channelsCreated_some */
    channelsCreated_some?: _ChatChannelFilter | null;
    /** channelsCreated_none */
    channelsCreated_none?: _ChatChannelFilter | null;
    /** channelsCreated_single */
    channelsCreated_single?: _ChatChannelFilter | null;
    /** channelsCreated_every */
    channelsCreated_every?: _ChatChannelFilter | null;
    /** person */
    person?: _PersonFilter | null;
    /** person_not */
    person_not?: _PersonFilter | null;
    /** person_in */
    person_in?: _PersonFilter | null;
    /** person_not_in */
    person_not_in?: _PersonFilter | null;
}
/** Filter Input Type for Email */
export interface _EmailFilter {
    /** AND */
    AND?: _EmailFilter[] | null;
    /** OR */
    OR?: _EmailFilter[] | null;
    /** atmTeamId */
    atmTeamId?: string | null;
    /** atmTeamId_not */
    atmTeamId_not?: string | null;
    /** atmTeamId_in */
    atmTeamId_in?: string[] | null;
    /** atmTeamId_not_in */
    atmTeamId_not_in?: string[] | null;
    /** atmTeamId_lt */
    atmTeamId_lt?: string | null;
    /** atmTeamId_lte */
    atmTeamId_lte?: string | null;
    /** atmTeamId_gt */
    atmTeamId_gt?: string | null;
    /** atmTeamId_gte */
    atmTeamId_gte?: string | null;
    /** atmTeamId_contains */
    atmTeamId_contains?: string | null;
    /** atmTeamId_not_contains */
    atmTeamId_not_contains?: string | null;
    /** atmTeamId_starts_with */
    atmTeamId_starts_with?: string | null;
    /** atmTeamId_not_starts_with */
    atmTeamId_not_starts_with?: string | null;
    /** atmTeamId_ends_with */
    atmTeamId_ends_with?: string | null;
    /** atmTeamId_not_ends_with */
    atmTeamId_not_ends_with?: string | null;
    /** address */
    address?: string | null;
    /** address_not */
    address_not?: string | null;
    /** address_in */
    address_in?: string[] | null;
    /** address_not_in */
    address_not_in?: string[] | null;
    /** address_lt */
    address_lt?: string | null;
    /** address_lte */
    address_lte?: string | null;
    /** address_gt */
    address_gt?: string | null;
    /** address_gte */
    address_gte?: string | null;
    /** address_contains */
    address_contains?: string | null;
    /** address_not_contains */
    address_not_contains?: string | null;
    /** address_starts_with */
    address_starts_with?: string | null;
    /** address_not_starts_with */
    address_not_starts_with?: string | null;
    /** address_ends_with */
    address_ends_with?: string | null;
    /** address_not_ends_with */
    address_not_ends_with?: string | null;
    /** scmId */
    scmId?: _ScmIdFilter | null;
    /** scmId_not */
    scmId_not?: _ScmIdFilter | null;
    /** scmId_in */
    scmId_in?: _ScmIdFilter | null;
    /** scmId_not_in */
    scmId_not_in?: _ScmIdFilter | null;
    /** gitHubId */
    gitHubId?: _GitHubIdFilter | null;
    /** gitHubId_not */
    gitHubId_not?: _GitHubIdFilter | null;
    /** gitHubId_in */
    gitHubId_in?: _GitHubIdFilter | null;
    /** gitHubId_not_in */
    gitHubId_not_in?: _GitHubIdFilter | null;
    /** chatId */
    chatId?: _ChatIdFilter | null;
    /** chatId_not */
    chatId_not?: _ChatIdFilter | null;
    /** chatId_in */
    chatId_in?: _ChatIdFilter | null;
    /** chatId_not_in */
    chatId_not_in?: _ChatIdFilter | null;
    /** person */
    person?: _PersonFilter | null;
    /** person_not */
    person_not?: _PersonFilter | null;
    /** person_in */
    person_in?: _PersonFilter | null;
    /** person_not_in */
    person_not_in?: _PersonFilter | null;
}
/** Filter Input Type for SCMId */
export interface _ScmIdFilter {
    /** AND */
    AND?: _ScmIdFilter[] | null;
    /** OR */
    OR?: _ScmIdFilter[] | null;
    /** atmTeamId */
    atmTeamId?: string | null;
    /** atmTeamId_not */
    atmTeamId_not?: string | null;
    /** atmTeamId_in */
    atmTeamId_in?: string[] | null;
    /** atmTeamId_not_in */
    atmTeamId_not_in?: string[] | null;
    /** atmTeamId_lt */
    atmTeamId_lt?: string | null;
    /** atmTeamId_lte */
    atmTeamId_lte?: string | null;
    /** atmTeamId_gt */
    atmTeamId_gt?: string | null;
    /** atmTeamId_gte */
    atmTeamId_gte?: string | null;
    /** atmTeamId_contains */
    atmTeamId_contains?: string | null;
    /** atmTeamId_not_contains */
    atmTeamId_not_contains?: string | null;
    /** atmTeamId_starts_with */
    atmTeamId_starts_with?: string | null;
    /** atmTeamId_not_starts_with */
    atmTeamId_not_starts_with?: string | null;
    /** atmTeamId_ends_with */
    atmTeamId_ends_with?: string | null;
    /** atmTeamId_not_ends_with */
    atmTeamId_not_ends_with?: string | null;
    /** login */
    login?: string | null;
    /** login_not */
    login_not?: string | null;
    /** login_in */
    login_in?: string[] | null;
    /** login_not_in */
    login_not_in?: string[] | null;
    /** login_lt */
    login_lt?: string | null;
    /** login_lte */
    login_lte?: string | null;
    /** login_gt */
    login_gt?: string | null;
    /** login_gte */
    login_gte?: string | null;
    /** login_contains */
    login_contains?: string | null;
    /** login_not_contains */
    login_not_contains?: string | null;
    /** login_starts_with */
    login_starts_with?: string | null;
    /** login_not_starts_with */
    login_not_starts_with?: string | null;
    /** login_ends_with */
    login_ends_with?: string | null;
    /** login_not_ends_with */
    login_not_ends_with?: string | null;
    /** name */
    name?: string | null;
    /** name_not */
    name_not?: string | null;
    /** name_in */
    name_in?: string[] | null;
    /** name_not_in */
    name_not_in?: string[] | null;
    /** name_lt */
    name_lt?: string | null;
    /** name_lte */
    name_lte?: string | null;
    /** name_gt */
    name_gt?: string | null;
    /** name_gte */
    name_gte?: string | null;
    /** name_contains */
    name_contains?: string | null;
    /** name_not_contains */
    name_not_contains?: string | null;
    /** name_starts_with */
    name_starts_with?: string | null;
    /** name_not_starts_with */
    name_not_starts_with?: string | null;
    /** name_ends_with */
    name_ends_with?: string | null;
    /** name_not_ends_with */
    name_not_ends_with?: string | null;
    /** avatar */
    avatar?: string | null;
    /** avatar_not */
    avatar_not?: string | null;
    /** avatar_in */
    avatar_in?: string[] | null;
    /** avatar_not_in */
    avatar_not_in?: string[] | null;
    /** avatar_lt */
    avatar_lt?: string | null;
    /** avatar_lte */
    avatar_lte?: string | null;
    /** avatar_gt */
    avatar_gt?: string | null;
    /** avatar_gte */
    avatar_gte?: string | null;
    /** avatar_contains */
    avatar_contains?: string | null;
    /** avatar_not_contains */
    avatar_not_contains?: string | null;
    /** avatar_starts_with */
    avatar_starts_with?: string | null;
    /** avatar_not_starts_with */
    avatar_not_starts_with?: string | null;
    /** avatar_ends_with */
    avatar_ends_with?: string | null;
    /** avatar_not_ends_with */
    avatar_not_ends_with?: string | null;
    /** provider */
    provider?: _GitHubProviderFilter | null;
    /** provider_not */
    provider_not?: _GitHubProviderFilter | null;
    /** provider_in */
    provider_in?: _GitHubProviderFilter | null;
    /** provider_not_in */
    provider_not_in?: _GitHubProviderFilter | null;
    /** provider_some */
    provider_some?: _GitHubProviderFilter | null;
    /** provider_none */
    provider_none?: _GitHubProviderFilter | null;
    /** provider_single */
    provider_single?: _GitHubProviderFilter | null;
    /** provider_every */
    provider_every?: _GitHubProviderFilter | null;
    /** scmProvider */
    scmProvider?: _ScmProviderFilter | null;
    /** scmProvider_not */
    scmProvider_not?: _ScmProviderFilter | null;
    /** scmProvider_in */
    scmProvider_in?: _ScmProviderFilter | null;
    /** scmProvider_not_in */
    scmProvider_not_in?: _ScmProviderFilter | null;
    /** emails */
    emails?: _EmailFilter | null;
    /** emails_not */
    emails_not?: _EmailFilter | null;
    /** emails_in */
    emails_in?: _EmailFilter | null;
    /** emails_not_in */
    emails_not_in?: _EmailFilter | null;
    /** emails_some */
    emails_some?: _EmailFilter | null;
    /** emails_none */
    emails_none?: _EmailFilter | null;
    /** emails_single */
    emails_single?: _EmailFilter | null;
    /** emails_every */
    emails_every?: _EmailFilter | null;
    /** person */
    person?: _PersonFilter | null;
    /** person_not */
    person_not?: _PersonFilter | null;
    /** person_in */
    person_in?: _PersonFilter | null;
    /** person_not_in */
    person_not_in?: _PersonFilter | null;
}
/** Filter Input Type for GitHubProvider */
export interface _GitHubProviderFilter {
    /** AND */
    AND?: _GitHubProviderFilter[] | null;
    /** OR */
    OR?: _GitHubProviderFilter[] | null;
    /** atmTeamId */
    atmTeamId?: string | null;
    /** atmTeamId_not */
    atmTeamId_not?: string | null;
    /** atmTeamId_in */
    atmTeamId_in?: string[] | null;
    /** atmTeamId_not_in */
    atmTeamId_not_in?: string[] | null;
    /** atmTeamId_lt */
    atmTeamId_lt?: string | null;
    /** atmTeamId_lte */
    atmTeamId_lte?: string | null;
    /** atmTeamId_gt */
    atmTeamId_gt?: string | null;
    /** atmTeamId_gte */
    atmTeamId_gte?: string | null;
    /** atmTeamId_contains */
    atmTeamId_contains?: string | null;
    /** atmTeamId_not_contains */
    atmTeamId_not_contains?: string | null;
    /** atmTeamId_starts_with */
    atmTeamId_starts_with?: string | null;
    /** atmTeamId_not_starts_with */
    atmTeamId_not_starts_with?: string | null;
    /** atmTeamId_ends_with */
    atmTeamId_ends_with?: string | null;
    /** atmTeamId_not_ends_with */
    atmTeamId_not_ends_with?: string | null;
    /** id */
    id?: string | null;
    /** id_not */
    id_not?: string | null;
    /** id_in */
    id_in?: string[] | null;
    /** id_not_in */
    id_not_in?: string[] | null;
    /** id_lt */
    id_lt?: string | null;
    /** id_lte */
    id_lte?: string | null;
    /** id_gt */
    id_gt?: string | null;
    /** id_gte */
    id_gte?: string | null;
    /** id_contains */
    id_contains?: string | null;
    /** id_not_contains */
    id_not_contains?: string | null;
    /** id_starts_with */
    id_starts_with?: string | null;
    /** id_not_starts_with */
    id_not_starts_with?: string | null;
    /** id_ends_with */
    id_ends_with?: string | null;
    /** id_not_ends_with */
    id_not_ends_with?: string | null;
    /** url */
    url?: string | null;
    /** url_not */
    url_not?: string | null;
    /** url_in */
    url_in?: string[] | null;
    /** url_not_in */
    url_not_in?: string[] | null;
    /** url_lt */
    url_lt?: string | null;
    /** url_lte */
    url_lte?: string | null;
    /** url_gt */
    url_gt?: string | null;
    /** url_gte */
    url_gte?: string | null;
    /** url_contains */
    url_contains?: string | null;
    /** url_not_contains */
    url_not_contains?: string | null;
    /** url_starts_with */
    url_starts_with?: string | null;
    /** url_not_starts_with */
    url_not_starts_with?: string | null;
    /** url_ends_with */
    url_ends_with?: string | null;
    /** url_not_ends_with */
    url_not_ends_with?: string | null;
    /** providerId */
    providerId?: string | null;
    /** providerId_not */
    providerId_not?: string | null;
    /** providerId_in */
    providerId_in?: string[] | null;
    /** providerId_not_in */
    providerId_not_in?: string[] | null;
    /** providerId_lt */
    providerId_lt?: string | null;
    /** providerId_lte */
    providerId_lte?: string | null;
    /** providerId_gt */
    providerId_gt?: string | null;
    /** providerId_gte */
    providerId_gte?: string | null;
    /** providerId_contains */
    providerId_contains?: string | null;
    /** providerId_not_contains */
    providerId_not_contains?: string | null;
    /** providerId_starts_with */
    providerId_starts_with?: string | null;
    /** providerId_not_starts_with */
    providerId_not_starts_with?: string | null;
    /** providerId_ends_with */
    providerId_ends_with?: string | null;
    /** providerId_not_ends_with */
    providerId_not_ends_with?: string | null;
    /** apiUrl */
    apiUrl?: string | null;
    /** apiUrl_not */
    apiUrl_not?: string | null;
    /** apiUrl_in */
    apiUrl_in?: string[] | null;
    /** apiUrl_not_in */
    apiUrl_not_in?: string[] | null;
    /** apiUrl_lt */
    apiUrl_lt?: string | null;
    /** apiUrl_lte */
    apiUrl_lte?: string | null;
    /** apiUrl_gt */
    apiUrl_gt?: string | null;
    /** apiUrl_gte */
    apiUrl_gte?: string | null;
    /** apiUrl_contains */
    apiUrl_contains?: string | null;
    /** apiUrl_not_contains */
    apiUrl_not_contains?: string | null;
    /** apiUrl_starts_with */
    apiUrl_starts_with?: string | null;
    /** apiUrl_not_starts_with */
    apiUrl_not_starts_with?: string | null;
    /** apiUrl_ends_with */
    apiUrl_ends_with?: string | null;
    /** apiUrl_not_ends_with */
    apiUrl_not_ends_with?: string | null;
    /** gitUrl */
    gitUrl?: string | null;
    /** gitUrl_not */
    gitUrl_not?: string | null;
    /** gitUrl_in */
    gitUrl_in?: string[] | null;
    /** gitUrl_not_in */
    gitUrl_not_in?: string[] | null;
    /** gitUrl_lt */
    gitUrl_lt?: string | null;
    /** gitUrl_lte */
    gitUrl_lte?: string | null;
    /** gitUrl_gt */
    gitUrl_gt?: string | null;
    /** gitUrl_gte */
    gitUrl_gte?: string | null;
    /** gitUrl_contains */
    gitUrl_contains?: string | null;
    /** gitUrl_not_contains */
    gitUrl_not_contains?: string | null;
    /** gitUrl_starts_with */
    gitUrl_starts_with?: string | null;
    /** gitUrl_not_starts_with */
    gitUrl_not_starts_with?: string | null;
    /** gitUrl_ends_with */
    gitUrl_ends_with?: string | null;
    /** gitUrl_not_ends_with */
    gitUrl_not_ends_with?: string | null;
    /** providerType */
    providerType?: ProviderType | null;
    /** providerType_not */
    providerType_not?: ProviderType | null;
    /** providerType_in */
    providerType_in?: ProviderType[] | null;
    /** providerType_not_in */
    providerType_not_in?: ProviderType[] | null;
    /** private */
    private?: boolean | null;
    /** private_not */
    private_not?: boolean | null;
    /** team */
    team?: _TeamFilter | null;
    /** team_not */
    team_not?: _TeamFilter | null;
    /** team_in */
    team_in?: _TeamFilter | null;
    /** team_not_in */
    team_not_in?: _TeamFilter | null;
}
/** Filter Input Type for Team */
export interface _TeamFilter {
    /** AND */
    AND?: _TeamFilter[] | null;
    /** OR */
    OR?: _TeamFilter[] | null;
    /** atmTeamId */
    atmTeamId?: string | null;
    /** atmTeamId_not */
    atmTeamId_not?: string | null;
    /** atmTeamId_in */
    atmTeamId_in?: string[] | null;
    /** atmTeamId_not_in */
    atmTeamId_not_in?: string[] | null;
    /** atmTeamId_lt */
    atmTeamId_lt?: string | null;
    /** atmTeamId_lte */
    atmTeamId_lte?: string | null;
    /** atmTeamId_gt */
    atmTeamId_gt?: string | null;
    /** atmTeamId_gte */
    atmTeamId_gte?: string | null;
    /** atmTeamId_contains */
    atmTeamId_contains?: string | null;
    /** atmTeamId_not_contains */
    atmTeamId_not_contains?: string | null;
    /** atmTeamId_starts_with */
    atmTeamId_starts_with?: string | null;
    /** atmTeamId_not_starts_with */
    atmTeamId_not_starts_with?: string | null;
    /** atmTeamId_ends_with */
    atmTeamId_ends_with?: string | null;
    /** atmTeamId_not_ends_with */
    atmTeamId_not_ends_with?: string | null;
    /** id */
    id?: string | null;
    /** id_not */
    id_not?: string | null;
    /** id_in */
    id_in?: string[] | null;
    /** id_not_in */
    id_not_in?: string[] | null;
    /** id_lt */
    id_lt?: string | null;
    /** id_lte */
    id_lte?: string | null;
    /** id_gt */
    id_gt?: string | null;
    /** id_gte */
    id_gte?: string | null;
    /** id_contains */
    id_contains?: string | null;
    /** id_not_contains */
    id_not_contains?: string | null;
    /** id_starts_with */
    id_starts_with?: string | null;
    /** id_not_starts_with */
    id_not_starts_with?: string | null;
    /** id_ends_with */
    id_ends_with?: string | null;
    /** id_not_ends_with */
    id_not_ends_with?: string | null;
    /** name */
    name?: string | null;
    /** name_not */
    name_not?: string | null;
    /** name_in */
    name_in?: string[] | null;
    /** name_not_in */
    name_not_in?: string[] | null;
    /** name_lt */
    name_lt?: string | null;
    /** name_lte */
    name_lte?: string | null;
    /** name_gt */
    name_gt?: string | null;
    /** name_gte */
    name_gte?: string | null;
    /** name_contains */
    name_contains?: string | null;
    /** name_not_contains */
    name_not_contains?: string | null;
    /** name_starts_with */
    name_starts_with?: string | null;
    /** name_not_starts_with */
    name_not_starts_with?: string | null;
    /** name_ends_with */
    name_ends_with?: string | null;
    /** name_not_ends_with */
    name_not_ends_with?: string | null;
    /** description */
    description?: string | null;
    /** description_not */
    description_not?: string | null;
    /** description_in */
    description_in?: string[] | null;
    /** description_not_in */
    description_not_in?: string[] | null;
    /** description_lt */
    description_lt?: string | null;
    /** description_lte */
    description_lte?: string | null;
    /** description_gt */
    description_gt?: string | null;
    /** description_gte */
    description_gte?: string | null;
    /** description_contains */
    description_contains?: string | null;
    /** description_not_contains */
    description_not_contains?: string | null;
    /** description_starts_with */
    description_starts_with?: string | null;
    /** description_not_starts_with */
    description_not_starts_with?: string | null;
    /** description_ends_with */
    description_ends_with?: string | null;
    /** description_not_ends_with */
    description_not_ends_with?: string | null;
    /** iconUrl */
    iconUrl?: string | null;
    /** iconUrl_not */
    iconUrl_not?: string | null;
    /** iconUrl_in */
    iconUrl_in?: string[] | null;
    /** iconUrl_not_in */
    iconUrl_not_in?: string[] | null;
    /** iconUrl_lt */
    iconUrl_lt?: string | null;
    /** iconUrl_lte */
    iconUrl_lte?: string | null;
    /** iconUrl_gt */
    iconUrl_gt?: string | null;
    /** iconUrl_gte */
    iconUrl_gte?: string | null;
    /** iconUrl_contains */
    iconUrl_contains?: string | null;
    /** iconUrl_not_contains */
    iconUrl_not_contains?: string | null;
    /** iconUrl_starts_with */
    iconUrl_starts_with?: string | null;
    /** iconUrl_not_starts_with */
    iconUrl_not_starts_with?: string | null;
    /** iconUrl_ends_with */
    iconUrl_ends_with?: string | null;
    /** iconUrl_not_ends_with */
    iconUrl_not_ends_with?: string | null;
    /** createdAt */
    createdAt?: string | null;
    /** createdAt_not */
    createdAt_not?: string | null;
    /** createdAt_in */
    createdAt_in?: string[] | null;
    /** createdAt_not_in */
    createdAt_not_in?: string[] | null;
    /** createdAt_lt */
    createdAt_lt?: string | null;
    /** createdAt_lte */
    createdAt_lte?: string | null;
    /** createdAt_gt */
    createdAt_gt?: string | null;
    /** createdAt_gte */
    createdAt_gte?: string | null;
    /** createdAt_contains */
    createdAt_contains?: string | null;
    /** createdAt_not_contains */
    createdAt_not_contains?: string | null;
    /** createdAt_starts_with */
    createdAt_starts_with?: string | null;
    /** createdAt_not_starts_with */
    createdAt_not_starts_with?: string | null;
    /** createdAt_ends_with */
    createdAt_ends_with?: string | null;
    /** createdAt_not_ends_with */
    createdAt_not_ends_with?: string | null;
    /** persons */
    persons?: _PersonFilter | null;
    /** persons_not */
    persons_not?: _PersonFilter | null;
    /** persons_in */
    persons_in?: _PersonFilter | null;
    /** persons_not_in */
    persons_not_in?: _PersonFilter | null;
    /** persons_some */
    persons_some?: _PersonFilter | null;
    /** persons_none */
    persons_none?: _PersonFilter | null;
    /** persons_single */
    persons_single?: _PersonFilter | null;
    /** persons_every */
    persons_every?: _PersonFilter | null;
    /** orgs */
    orgs?: _OrgFilter | null;
    /** orgs_not */
    orgs_not?: _OrgFilter | null;
    /** orgs_in */
    orgs_in?: _OrgFilter | null;
    /** orgs_not_in */
    orgs_not_in?: _OrgFilter | null;
    /** orgs_some */
    orgs_some?: _OrgFilter | null;
    /** orgs_none */
    orgs_none?: _OrgFilter | null;
    /** orgs_single */
    orgs_single?: _OrgFilter | null;
    /** orgs_every */
    orgs_every?: _OrgFilter | null;
    /** providers */
    providers?: _GitHubProviderFilter | null;
    /** providers_not */
    providers_not?: _GitHubProviderFilter | null;
    /** providers_in */
    providers_in?: _GitHubProviderFilter | null;
    /** providers_not_in */
    providers_not_in?: _GitHubProviderFilter | null;
    /** providers_some */
    providers_some?: _GitHubProviderFilter | null;
    /** providers_none */
    providers_none?: _GitHubProviderFilter | null;
    /** providers_single */
    providers_single?: _GitHubProviderFilter | null;
    /** providers_every */
    providers_every?: _GitHubProviderFilter | null;
    /** scmProviders */
    scmProviders?: _ScmProviderFilter | null;
    /** scmProviders_not */
    scmProviders_not?: _ScmProviderFilter | null;
    /** scmProviders_in */
    scmProviders_in?: _ScmProviderFilter | null;
    /** scmProviders_not_in */
    scmProviders_not_in?: _ScmProviderFilter | null;
    /** scmProviders_some */
    scmProviders_some?: _ScmProviderFilter | null;
    /** scmProviders_none */
    scmProviders_none?: _ScmProviderFilter | null;
    /** scmProviders_single */
    scmProviders_single?: _ScmProviderFilter | null;
    /** scmProviders_every */
    scmProviders_every?: _ScmProviderFilter | null;
    /** chatTeams */
    chatTeams?: _ChatTeamFilter | null;
    /** chatTeams_not */
    chatTeams_not?: _ChatTeamFilter | null;
    /** chatTeams_in */
    chatTeams_in?: _ChatTeamFilter | null;
    /** chatTeams_not_in */
    chatTeams_not_in?: _ChatTeamFilter | null;
    /** chatTeams_some */
    chatTeams_some?: _ChatTeamFilter | null;
    /** chatTeams_none */
    chatTeams_none?: _ChatTeamFilter | null;
    /** chatTeams_single */
    chatTeams_single?: _ChatTeamFilter | null;
    /** chatTeams_every */
    chatTeams_every?: _ChatTeamFilter | null;
}
/** Filter Input Type for Person */
export interface _PersonFilter {
    /** AND */
    AND?: _PersonFilter[] | null;
    /** OR */
    OR?: _PersonFilter[] | null;
    /** atmTeamId */
    atmTeamId?: string | null;
    /** atmTeamId_not */
    atmTeamId_not?: string | null;
    /** atmTeamId_in */
    atmTeamId_in?: string[] | null;
    /** atmTeamId_not_in */
    atmTeamId_not_in?: string[] | null;
    /** atmTeamId_lt */
    atmTeamId_lt?: string | null;
    /** atmTeamId_lte */
    atmTeamId_lte?: string | null;
    /** atmTeamId_gt */
    atmTeamId_gt?: string | null;
    /** atmTeamId_gte */
    atmTeamId_gte?: string | null;
    /** atmTeamId_contains */
    atmTeamId_contains?: string | null;
    /** atmTeamId_not_contains */
    atmTeamId_not_contains?: string | null;
    /** atmTeamId_starts_with */
    atmTeamId_starts_with?: string | null;
    /** atmTeamId_not_starts_with */
    atmTeamId_not_starts_with?: string | null;
    /** atmTeamId_ends_with */
    atmTeamId_ends_with?: string | null;
    /** atmTeamId_not_ends_with */
    atmTeamId_not_ends_with?: string | null;
    /** id */
    id?: string | null;
    /** id_not */
    id_not?: string | null;
    /** id_in */
    id_in?: string[] | null;
    /** id_not_in */
    id_not_in?: string[] | null;
    /** id_lt */
    id_lt?: string | null;
    /** id_lte */
    id_lte?: string | null;
    /** id_gt */
    id_gt?: string | null;
    /** id_gte */
    id_gte?: string | null;
    /** id_contains */
    id_contains?: string | null;
    /** id_not_contains */
    id_not_contains?: string | null;
    /** id_starts_with */
    id_starts_with?: string | null;
    /** id_not_starts_with */
    id_not_starts_with?: string | null;
    /** id_ends_with */
    id_ends_with?: string | null;
    /** id_not_ends_with */
    id_not_ends_with?: string | null;
    /** forename */
    forename?: string | null;
    /** forename_not */
    forename_not?: string | null;
    /** forename_in */
    forename_in?: string[] | null;
    /** forename_not_in */
    forename_not_in?: string[] | null;
    /** forename_lt */
    forename_lt?: string | null;
    /** forename_lte */
    forename_lte?: string | null;
    /** forename_gt */
    forename_gt?: string | null;
    /** forename_gte */
    forename_gte?: string | null;
    /** forename_contains */
    forename_contains?: string | null;
    /** forename_not_contains */
    forename_not_contains?: string | null;
    /** forename_starts_with */
    forename_starts_with?: string | null;
    /** forename_not_starts_with */
    forename_not_starts_with?: string | null;
    /** forename_ends_with */
    forename_ends_with?: string | null;
    /** forename_not_ends_with */
    forename_not_ends_with?: string | null;
    /** surname */
    surname?: string | null;
    /** surname_not */
    surname_not?: string | null;
    /** surname_in */
    surname_in?: string[] | null;
    /** surname_not_in */
    surname_not_in?: string[] | null;
    /** surname_lt */
    surname_lt?: string | null;
    /** surname_lte */
    surname_lte?: string | null;
    /** surname_gt */
    surname_gt?: string | null;
    /** surname_gte */
    surname_gte?: string | null;
    /** surname_contains */
    surname_contains?: string | null;
    /** surname_not_contains */
    surname_not_contains?: string | null;
    /** surname_starts_with */
    surname_starts_with?: string | null;
    /** surname_not_starts_with */
    surname_not_starts_with?: string | null;
    /** surname_ends_with */
    surname_ends_with?: string | null;
    /** surname_not_ends_with */
    surname_not_ends_with?: string | null;
    /** name */
    name?: string | null;
    /** name_not */
    name_not?: string | null;
    /** name_in */
    name_in?: string[] | null;
    /** name_not_in */
    name_not_in?: string[] | null;
    /** name_lt */
    name_lt?: string | null;
    /** name_lte */
    name_lte?: string | null;
    /** name_gt */
    name_gt?: string | null;
    /** name_gte */
    name_gte?: string | null;
    /** name_contains */
    name_contains?: string | null;
    /** name_not_contains */
    name_not_contains?: string | null;
    /** name_starts_with */
    name_starts_with?: string | null;
    /** name_not_starts_with */
    name_not_starts_with?: string | null;
    /** name_ends_with */
    name_ends_with?: string | null;
    /** name_not_ends_with */
    name_not_ends_with?: string | null;
    /** scmId */
    scmId?: _ScmIdFilter | null;
    /** scmId_not */
    scmId_not?: _ScmIdFilter | null;
    /** scmId_in */
    scmId_in?: _ScmIdFilter | null;
    /** scmId_not_in */
    scmId_not_in?: _ScmIdFilter | null;
    /** gitHubId */
    gitHubId?: _GitHubIdFilter | null;
    /** gitHubId_not */
    gitHubId_not?: _GitHubIdFilter | null;
    /** gitHubId_in */
    gitHubId_in?: _GitHubIdFilter | null;
    /** gitHubId_not_in */
    gitHubId_not_in?: _GitHubIdFilter | null;
    /** chatId */
    chatId?: _ChatIdFilter | null;
    /** chatId_not */
    chatId_not?: _ChatIdFilter | null;
    /** chatId_in */
    chatId_in?: _ChatIdFilter | null;
    /** chatId_not_in */
    chatId_not_in?: _ChatIdFilter | null;
    /** emails */
    emails?: _EmailFilter | null;
    /** emails_not */
    emails_not?: _EmailFilter | null;
    /** emails_in */
    emails_in?: _EmailFilter | null;
    /** emails_not_in */
    emails_not_in?: _EmailFilter | null;
    /** emails_some */
    emails_some?: _EmailFilter | null;
    /** emails_none */
    emails_none?: _EmailFilter | null;
    /** emails_single */
    emails_single?: _EmailFilter | null;
    /** emails_every */
    emails_every?: _EmailFilter | null;
    /** team */
    team?: _TeamFilter | null;
    /** team_not */
    team_not?: _TeamFilter | null;
    /** team_in */
    team_in?: _TeamFilter | null;
    /** team_not_in */
    team_not_in?: _TeamFilter | null;
}
/** Filter Input Type for GitHubId */
export interface _GitHubIdFilter {
    /** AND */
    AND?: _GitHubIdFilter[] | null;
    /** OR */
    OR?: _GitHubIdFilter[] | null;
    /** atmTeamId */
    atmTeamId?: string | null;
    /** atmTeamId_not */
    atmTeamId_not?: string | null;
    /** atmTeamId_in */
    atmTeamId_in?: string[] | null;
    /** atmTeamId_not_in */
    atmTeamId_not_in?: string[] | null;
    /** atmTeamId_lt */
    atmTeamId_lt?: string | null;
    /** atmTeamId_lte */
    atmTeamId_lte?: string | null;
    /** atmTeamId_gt */
    atmTeamId_gt?: string | null;
    /** atmTeamId_gte */
    atmTeamId_gte?: string | null;
    /** atmTeamId_contains */
    atmTeamId_contains?: string | null;
    /** atmTeamId_not_contains */
    atmTeamId_not_contains?: string | null;
    /** atmTeamId_starts_with */
    atmTeamId_starts_with?: string | null;
    /** atmTeamId_not_starts_with */
    atmTeamId_not_starts_with?: string | null;
    /** atmTeamId_ends_with */
    atmTeamId_ends_with?: string | null;
    /** atmTeamId_not_ends_with */
    atmTeamId_not_ends_with?: string | null;
    /** login */
    login?: string | null;
    /** login_not */
    login_not?: string | null;
    /** login_in */
    login_in?: string[] | null;
    /** login_not_in */
    login_not_in?: string[] | null;
    /** login_lt */
    login_lt?: string | null;
    /** login_lte */
    login_lte?: string | null;
    /** login_gt */
    login_gt?: string | null;
    /** login_gte */
    login_gte?: string | null;
    /** login_contains */
    login_contains?: string | null;
    /** login_not_contains */
    login_not_contains?: string | null;
    /** login_starts_with */
    login_starts_with?: string | null;
    /** login_not_starts_with */
    login_not_starts_with?: string | null;
    /** login_ends_with */
    login_ends_with?: string | null;
    /** login_not_ends_with */
    login_not_ends_with?: string | null;
    /** name */
    name?: string | null;
    /** name_not */
    name_not?: string | null;
    /** name_in */
    name_in?: string[] | null;
    /** name_not_in */
    name_not_in?: string[] | null;
    /** name_lt */
    name_lt?: string | null;
    /** name_lte */
    name_lte?: string | null;
    /** name_gt */
    name_gt?: string | null;
    /** name_gte */
    name_gte?: string | null;
    /** name_contains */
    name_contains?: string | null;
    /** name_not_contains */
    name_not_contains?: string | null;
    /** name_starts_with */
    name_starts_with?: string | null;
    /** name_not_starts_with */
    name_not_starts_with?: string | null;
    /** name_ends_with */
    name_ends_with?: string | null;
    /** name_not_ends_with */
    name_not_ends_with?: string | null;
    /** provider */
    provider?: _GitHubProviderFilter | null;
    /** provider_not */
    provider_not?: _GitHubProviderFilter | null;
    /** provider_in */
    provider_in?: _GitHubProviderFilter | null;
    /** provider_not_in */
    provider_not_in?: _GitHubProviderFilter | null;
    /** provider_some */
    provider_some?: _GitHubProviderFilter | null;
    /** provider_none */
    provider_none?: _GitHubProviderFilter | null;
    /** provider_single */
    provider_single?: _GitHubProviderFilter | null;
    /** provider_every */
    provider_every?: _GitHubProviderFilter | null;
    /** scmProvider */
    scmProvider?: _ScmProviderFilter | null;
    /** scmProvider_not */
    scmProvider_not?: _ScmProviderFilter | null;
    /** scmProvider_in */
    scmProvider_in?: _ScmProviderFilter | null;
    /** scmProvider_not_in */
    scmProvider_not_in?: _ScmProviderFilter | null;
    /** emails */
    emails?: _EmailFilter | null;
    /** emails_not */
    emails_not?: _EmailFilter | null;
    /** emails_in */
    emails_in?: _EmailFilter | null;
    /** emails_not_in */
    emails_not_in?: _EmailFilter | null;
    /** emails_some */
    emails_some?: _EmailFilter | null;
    /** emails_none */
    emails_none?: _EmailFilter | null;
    /** emails_single */
    emails_single?: _EmailFilter | null;
    /** emails_every */
    emails_every?: _EmailFilter | null;
    /** person */
    person?: _PersonFilter | null;
    /** person_not */
    person_not?: _PersonFilter | null;
    /** person_in */
    person_in?: _PersonFilter | null;
    /** person_not_in */
    person_not_in?: _PersonFilter | null;
}
/** Filter Input Type for SCMProvider */
export interface _ScmProviderFilter {
    /** AND */
    AND?: _ScmProviderFilter[] | null;
    /** OR */
    OR?: _ScmProviderFilter[] | null;
    /** atmTeamId */
    atmTeamId?: string | null;
    /** atmTeamId_not */
    atmTeamId_not?: string | null;
    /** atmTeamId_in */
    atmTeamId_in?: string[] | null;
    /** atmTeamId_not_in */
    atmTeamId_not_in?: string[] | null;
    /** atmTeamId_lt */
    atmTeamId_lt?: string | null;
    /** atmTeamId_lte */
    atmTeamId_lte?: string | null;
    /** atmTeamId_gt */
    atmTeamId_gt?: string | null;
    /** atmTeamId_gte */
    atmTeamId_gte?: string | null;
    /** atmTeamId_contains */
    atmTeamId_contains?: string | null;
    /** atmTeamId_not_contains */
    atmTeamId_not_contains?: string | null;
    /** atmTeamId_starts_with */
    atmTeamId_starts_with?: string | null;
    /** atmTeamId_not_starts_with */
    atmTeamId_not_starts_with?: string | null;
    /** atmTeamId_ends_with */
    atmTeamId_ends_with?: string | null;
    /** atmTeamId_not_ends_with */
    atmTeamId_not_ends_with?: string | null;
    /** id */
    id?: string | null;
    /** id_not */
    id_not?: string | null;
    /** id_in */
    id_in?: string[] | null;
    /** id_not_in */
    id_not_in?: string[] | null;
    /** id_lt */
    id_lt?: string | null;
    /** id_lte */
    id_lte?: string | null;
    /** id_gt */
    id_gt?: string | null;
    /** id_gte */
    id_gte?: string | null;
    /** id_contains */
    id_contains?: string | null;
    /** id_not_contains */
    id_not_contains?: string | null;
    /** id_starts_with */
    id_starts_with?: string | null;
    /** id_not_starts_with */
    id_not_starts_with?: string | null;
    /** id_ends_with */
    id_ends_with?: string | null;
    /** id_not_ends_with */
    id_not_ends_with?: string | null;
    /** url */
    url?: string | null;
    /** url_not */
    url_not?: string | null;
    /** url_in */
    url_in?: string[] | null;
    /** url_not_in */
    url_not_in?: string[] | null;
    /** url_lt */
    url_lt?: string | null;
    /** url_lte */
    url_lte?: string | null;
    /** url_gt */
    url_gt?: string | null;
    /** url_gte */
    url_gte?: string | null;
    /** url_contains */
    url_contains?: string | null;
    /** url_not_contains */
    url_not_contains?: string | null;
    /** url_starts_with */
    url_starts_with?: string | null;
    /** url_not_starts_with */
    url_not_starts_with?: string | null;
    /** url_ends_with */
    url_ends_with?: string | null;
    /** url_not_ends_with */
    url_not_ends_with?: string | null;
    /** providerId */
    providerId?: string | null;
    /** providerId_not */
    providerId_not?: string | null;
    /** providerId_in */
    providerId_in?: string[] | null;
    /** providerId_not_in */
    providerId_not_in?: string[] | null;
    /** providerId_lt */
    providerId_lt?: string | null;
    /** providerId_lte */
    providerId_lte?: string | null;
    /** providerId_gt */
    providerId_gt?: string | null;
    /** providerId_gte */
    providerId_gte?: string | null;
    /** providerId_contains */
    providerId_contains?: string | null;
    /** providerId_not_contains */
    providerId_not_contains?: string | null;
    /** providerId_starts_with */
    providerId_starts_with?: string | null;
    /** providerId_not_starts_with */
    providerId_not_starts_with?: string | null;
    /** providerId_ends_with */
    providerId_ends_with?: string | null;
    /** providerId_not_ends_with */
    providerId_not_ends_with?: string | null;
    /** apiUrl */
    apiUrl?: string | null;
    /** apiUrl_not */
    apiUrl_not?: string | null;
    /** apiUrl_in */
    apiUrl_in?: string[] | null;
    /** apiUrl_not_in */
    apiUrl_not_in?: string[] | null;
    /** apiUrl_lt */
    apiUrl_lt?: string | null;
    /** apiUrl_lte */
    apiUrl_lte?: string | null;
    /** apiUrl_gt */
    apiUrl_gt?: string | null;
    /** apiUrl_gte */
    apiUrl_gte?: string | null;
    /** apiUrl_contains */
    apiUrl_contains?: string | null;
    /** apiUrl_not_contains */
    apiUrl_not_contains?: string | null;
    /** apiUrl_starts_with */
    apiUrl_starts_with?: string | null;
    /** apiUrl_not_starts_with */
    apiUrl_not_starts_with?: string | null;
    /** apiUrl_ends_with */
    apiUrl_ends_with?: string | null;
    /** apiUrl_not_ends_with */
    apiUrl_not_ends_with?: string | null;
    /** gitUrl */
    gitUrl?: string | null;
    /** gitUrl_not */
    gitUrl_not?: string | null;
    /** gitUrl_in */
    gitUrl_in?: string[] | null;
    /** gitUrl_not_in */
    gitUrl_not_in?: string[] | null;
    /** gitUrl_lt */
    gitUrl_lt?: string | null;
    /** gitUrl_lte */
    gitUrl_lte?: string | null;
    /** gitUrl_gt */
    gitUrl_gt?: string | null;
    /** gitUrl_gte */
    gitUrl_gte?: string | null;
    /** gitUrl_contains */
    gitUrl_contains?: string | null;
    /** gitUrl_not_contains */
    gitUrl_not_contains?: string | null;
    /** gitUrl_starts_with */
    gitUrl_starts_with?: string | null;
    /** gitUrl_not_starts_with */
    gitUrl_not_starts_with?: string | null;
    /** gitUrl_ends_with */
    gitUrl_ends_with?: string | null;
    /** gitUrl_not_ends_with */
    gitUrl_not_ends_with?: string | null;
    /** providerType */
    providerType?: ProviderType | null;
    /** providerType_not */
    providerType_not?: ProviderType | null;
    /** providerType_in */
    providerType_in?: ProviderType[] | null;
    /** providerType_not_in */
    providerType_not_in?: ProviderType[] | null;
    /** private */
    private?: boolean | null;
    /** private_not */
    private_not?: boolean | null;
    /** team */
    team?: _TeamFilter | null;
    /** team_not */
    team_not?: _TeamFilter | null;
    /** team_in */
    team_in?: _TeamFilter | null;
    /** team_not_in */
    team_not_in?: _TeamFilter | null;
}
/** Filter Input Type for Org */
export interface _OrgFilter {
    /** AND */
    AND?: _OrgFilter[] | null;
    /** OR */
    OR?: _OrgFilter[] | null;
    /** atmTeamId */
    atmTeamId?: string | null;
    /** atmTeamId_not */
    atmTeamId_not?: string | null;
    /** atmTeamId_in */
    atmTeamId_in?: string[] | null;
    /** atmTeamId_not_in */
    atmTeamId_not_in?: string[] | null;
    /** atmTeamId_lt */
    atmTeamId_lt?: string | null;
    /** atmTeamId_lte */
    atmTeamId_lte?: string | null;
    /** atmTeamId_gt */
    atmTeamId_gt?: string | null;
    /** atmTeamId_gte */
    atmTeamId_gte?: string | null;
    /** atmTeamId_contains */
    atmTeamId_contains?: string | null;
    /** atmTeamId_not_contains */
    atmTeamId_not_contains?: string | null;
    /** atmTeamId_starts_with */
    atmTeamId_starts_with?: string | null;
    /** atmTeamId_not_starts_with */
    atmTeamId_not_starts_with?: string | null;
    /** atmTeamId_ends_with */
    atmTeamId_ends_with?: string | null;
    /** atmTeamId_not_ends_with */
    atmTeamId_not_ends_with?: string | null;
    /** id */
    id?: string | null;
    /** id_not */
    id_not?: string | null;
    /** id_in */
    id_in?: string[] | null;
    /** id_not_in */
    id_not_in?: string[] | null;
    /** id_lt */
    id_lt?: string | null;
    /** id_lte */
    id_lte?: string | null;
    /** id_gt */
    id_gt?: string | null;
    /** id_gte */
    id_gte?: string | null;
    /** id_contains */
    id_contains?: string | null;
    /** id_not_contains */
    id_not_contains?: string | null;
    /** id_starts_with */
    id_starts_with?: string | null;
    /** id_not_starts_with */
    id_not_starts_with?: string | null;
    /** id_ends_with */
    id_ends_with?: string | null;
    /** id_not_ends_with */
    id_not_ends_with?: string | null;
    /** owner */
    owner?: string | null;
    /** owner_not */
    owner_not?: string | null;
    /** owner_in */
    owner_in?: string[] | null;
    /** owner_not_in */
    owner_not_in?: string[] | null;
    /** owner_lt */
    owner_lt?: string | null;
    /** owner_lte */
    owner_lte?: string | null;
    /** owner_gt */
    owner_gt?: string | null;
    /** owner_gte */
    owner_gte?: string | null;
    /** owner_contains */
    owner_contains?: string | null;
    /** owner_not_contains */
    owner_not_contains?: string | null;
    /** owner_starts_with */
    owner_starts_with?: string | null;
    /** owner_not_starts_with */
    owner_not_starts_with?: string | null;
    /** owner_ends_with */
    owner_ends_with?: string | null;
    /** owner_not_ends_with */
    owner_not_ends_with?: string | null;
    /** ownerType */
    ownerType?: OwnerType | null;
    /** ownerType_not */
    ownerType_not?: OwnerType | null;
    /** ownerType_in */
    ownerType_in?: OwnerType[] | null;
    /** ownerType_not_in */
    ownerType_not_in?: OwnerType[] | null;
    /** provider */
    provider?: _GitHubProviderFilter | null;
    /** provider_not */
    provider_not?: _GitHubProviderFilter | null;
    /** provider_in */
    provider_in?: _GitHubProviderFilter | null;
    /** provider_not_in */
    provider_not_in?: _GitHubProviderFilter | null;
    /** scmProvider */
    scmProvider?: _ScmProviderFilter | null;
    /** scmProvider_not */
    scmProvider_not?: _ScmProviderFilter | null;
    /** scmProvider_in */
    scmProvider_in?: _ScmProviderFilter | null;
    /** scmProvider_not_in */
    scmProvider_not_in?: _ScmProviderFilter | null;
    /** repo */
    repo?: _RepoFilter | null;
    /** repo_not */
    repo_not?: _RepoFilter | null;
    /** repo_in */
    repo_in?: _RepoFilter | null;
    /** repo_not_in */
    repo_not_in?: _RepoFilter | null;
    /** repo_some */
    repo_some?: _RepoFilter | null;
    /** repo_none */
    repo_none?: _RepoFilter | null;
    /** repo_single */
    repo_single?: _RepoFilter | null;
    /** repo_every */
    repo_every?: _RepoFilter | null;
    /** repos */
    repos?: _RepoFilter | null;
    /** repos_not */
    repos_not?: _RepoFilter | null;
    /** repos_in */
    repos_in?: _RepoFilter | null;
    /** repos_not_in */
    repos_not_in?: _RepoFilter | null;
    /** repos_some */
    repos_some?: _RepoFilter | null;
    /** repos_none */
    repos_none?: _RepoFilter | null;
    /** repos_single */
    repos_single?: _RepoFilter | null;
    /** repos_every */
    repos_every?: _RepoFilter | null;
    /** webhook */
    webhook?: _GitHubOrgWebhookFilter | null;
    /** webhook_not */
    webhook_not?: _GitHubOrgWebhookFilter | null;
    /** webhook_in */
    webhook_in?: _GitHubOrgWebhookFilter | null;
    /** webhook_not_in */
    webhook_not_in?: _GitHubOrgWebhookFilter | null;
    /** webhook_some */
    webhook_some?: _GitHubOrgWebhookFilter | null;
    /** webhook_none */
    webhook_none?: _GitHubOrgWebhookFilter | null;
    /** webhook_single */
    webhook_single?: _GitHubOrgWebhookFilter | null;
    /** webhook_every */
    webhook_every?: _GitHubOrgWebhookFilter | null;
    /** webhooks */
    webhooks?: _WebhookFilter | null;
    /** webhooks_not */
    webhooks_not?: _WebhookFilter | null;
    /** webhooks_in */
    webhooks_in?: _WebhookFilter | null;
    /** webhooks_not_in */
    webhooks_not_in?: _WebhookFilter | null;
    /** webhooks_some */
    webhooks_some?: _WebhookFilter | null;
    /** webhooks_none */
    webhooks_none?: _WebhookFilter | null;
    /** webhooks_single */
    webhooks_single?: _WebhookFilter | null;
    /** webhooks_every */
    webhooks_every?: _WebhookFilter | null;
    /** chatTeam */
    chatTeam?: _ChatTeamFilter | null;
    /** chatTeam_not */
    chatTeam_not?: _ChatTeamFilter | null;
    /** chatTeam_in */
    chatTeam_in?: _ChatTeamFilter | null;
    /** chatTeam_not_in */
    chatTeam_not_in?: _ChatTeamFilter | null;
    /** team */
    team?: _TeamFilter | null;
    /** team_not */
    team_not?: _TeamFilter | null;
    /** team_in */
    team_in?: _TeamFilter | null;
    /** team_not_in */
    team_not_in?: _TeamFilter | null;
}
/** Filter Input Type for GitHubOrgWebhook */
export interface _GitHubOrgWebhookFilter {
    /** AND */
    AND?: _GitHubOrgWebhookFilter[] | null;
    /** OR */
    OR?: _GitHubOrgWebhookFilter[] | null;
    /** atmTeamId */
    atmTeamId?: string | null;
    /** atmTeamId_not */
    atmTeamId_not?: string | null;
    /** atmTeamId_in */
    atmTeamId_in?: string[] | null;
    /** atmTeamId_not_in */
    atmTeamId_not_in?: string[] | null;
    /** atmTeamId_lt */
    atmTeamId_lt?: string | null;
    /** atmTeamId_lte */
    atmTeamId_lte?: string | null;
    /** atmTeamId_gt */
    atmTeamId_gt?: string | null;
    /** atmTeamId_gte */
    atmTeamId_gte?: string | null;
    /** atmTeamId_contains */
    atmTeamId_contains?: string | null;
    /** atmTeamId_not_contains */
    atmTeamId_not_contains?: string | null;
    /** atmTeamId_starts_with */
    atmTeamId_starts_with?: string | null;
    /** atmTeamId_not_starts_with */
    atmTeamId_not_starts_with?: string | null;
    /** atmTeamId_ends_with */
    atmTeamId_ends_with?: string | null;
    /** atmTeamId_not_ends_with */
    atmTeamId_not_ends_with?: string | null;
    /** id */
    id?: string | null;
    /** id_not */
    id_not?: string | null;
    /** id_in */
    id_in?: string[] | null;
    /** id_not_in */
    id_not_in?: string[] | null;
    /** id_lt */
    id_lt?: string | null;
    /** id_lte */
    id_lte?: string | null;
    /** id_gt */
    id_gt?: string | null;
    /** id_gte */
    id_gte?: string | null;
    /** id_contains */
    id_contains?: string | null;
    /** id_not_contains */
    id_not_contains?: string | null;
    /** id_starts_with */
    id_starts_with?: string | null;
    /** id_not_starts_with */
    id_not_starts_with?: string | null;
    /** id_ends_with */
    id_ends_with?: string | null;
    /** id_not_ends_with */
    id_not_ends_with?: string | null;
    /** url */
    url?: string | null;
    /** url_not */
    url_not?: string | null;
    /** url_in */
    url_in?: string[] | null;
    /** url_not_in */
    url_not_in?: string[] | null;
    /** url_lt */
    url_lt?: string | null;
    /** url_lte */
    url_lte?: string | null;
    /** url_gt */
    url_gt?: string | null;
    /** url_gte */
    url_gte?: string | null;
    /** url_contains */
    url_contains?: string | null;
    /** url_not_contains */
    url_not_contains?: string | null;
    /** url_starts_with */
    url_starts_with?: string | null;
    /** url_not_starts_with */
    url_not_starts_with?: string | null;
    /** url_ends_with */
    url_ends_with?: string | null;
    /** url_not_ends_with */
    url_not_ends_with?: string | null;
    /** webhookType */
    webhookType?: WebhookType | null;
    /** webhookType_not */
    webhookType_not?: WebhookType | null;
    /** webhookType_in */
    webhookType_in?: WebhookType[] | null;
    /** webhookType_not_in */
    webhookType_not_in?: WebhookType[] | null;
    /** org */
    org?: _OrgFilter | null;
    /** org_not */
    org_not?: _OrgFilter | null;
    /** org_in */
    org_in?: _OrgFilter | null;
    /** org_not_in */
    org_not_in?: _OrgFilter | null;
}
/** Filter Input Type for Webhook */
export interface _WebhookFilter {
    /** AND */
    AND?: _WebhookFilter[] | null;
    /** OR */
    OR?: _WebhookFilter[] | null;
    /** atmTeamId */
    atmTeamId?: string | null;
    /** atmTeamId_not */
    atmTeamId_not?: string | null;
    /** atmTeamId_in */
    atmTeamId_in?: string[] | null;
    /** atmTeamId_not_in */
    atmTeamId_not_in?: string[] | null;
    /** atmTeamId_lt */
    atmTeamId_lt?: string | null;
    /** atmTeamId_lte */
    atmTeamId_lte?: string | null;
    /** atmTeamId_gt */
    atmTeamId_gt?: string | null;
    /** atmTeamId_gte */
    atmTeamId_gte?: string | null;
    /** atmTeamId_contains */
    atmTeamId_contains?: string | null;
    /** atmTeamId_not_contains */
    atmTeamId_not_contains?: string | null;
    /** atmTeamId_starts_with */
    atmTeamId_starts_with?: string | null;
    /** atmTeamId_not_starts_with */
    atmTeamId_not_starts_with?: string | null;
    /** atmTeamId_ends_with */
    atmTeamId_ends_with?: string | null;
    /** atmTeamId_not_ends_with */
    atmTeamId_not_ends_with?: string | null;
    /** id */
    id?: string | null;
    /** id_not */
    id_not?: string | null;
    /** id_in */
    id_in?: string[] | null;
    /** id_not_in */
    id_not_in?: string[] | null;
    /** id_lt */
    id_lt?: string | null;
    /** id_lte */
    id_lte?: string | null;
    /** id_gt */
    id_gt?: string | null;
    /** id_gte */
    id_gte?: string | null;
    /** id_contains */
    id_contains?: string | null;
    /** id_not_contains */
    id_not_contains?: string | null;
    /** id_starts_with */
    id_starts_with?: string | null;
    /** id_not_starts_with */
    id_not_starts_with?: string | null;
    /** id_ends_with */
    id_ends_with?: string | null;
    /** id_not_ends_with */
    id_not_ends_with?: string | null;
    /** url */
    url?: string | null;
    /** url_not */
    url_not?: string | null;
    /** url_in */
    url_in?: string[] | null;
    /** url_not_in */
    url_not_in?: string[] | null;
    /** url_lt */
    url_lt?: string | null;
    /** url_lte */
    url_lte?: string | null;
    /** url_gt */
    url_gt?: string | null;
    /** url_gte */
    url_gte?: string | null;
    /** url_contains */
    url_contains?: string | null;
    /** url_not_contains */
    url_not_contains?: string | null;
    /** url_starts_with */
    url_starts_with?: string | null;
    /** url_not_starts_with */
    url_not_starts_with?: string | null;
    /** url_ends_with */
    url_ends_with?: string | null;
    /** url_not_ends_with */
    url_not_ends_with?: string | null;
    /** webhookType */
    webhookType?: WebhookType | null;
    /** webhookType_not */
    webhookType_not?: WebhookType | null;
    /** webhookType_in */
    webhookType_in?: WebhookType[] | null;
    /** webhookType_not_in */
    webhookType_not_in?: WebhookType[] | null;
    /** org */
    org?: _OrgFilter | null;
    /** org_not */
    org_not?: _OrgFilter | null;
    /** org_in */
    org_in?: _OrgFilter | null;
    /** org_not_in */
    org_not_in?: _OrgFilter | null;
    /** repo */
    repo?: _RepoFilter | null;
    /** repo_not */
    repo_not?: _RepoFilter | null;
    /** repo_in */
    repo_in?: _RepoFilter | null;
    /** repo_not_in */
    repo_not_in?: _RepoFilter | null;
}
/** Filter Input Type for ChatTeam */
export interface _ChatTeamFilter {
    /** AND */
    AND?: _ChatTeamFilter[] | null;
    /** OR */
    OR?: _ChatTeamFilter[] | null;
    /** atmTeamId */
    atmTeamId?: string | null;
    /** atmTeamId_not */
    atmTeamId_not?: string | null;
    /** atmTeamId_in */
    atmTeamId_in?: string[] | null;
    /** atmTeamId_not_in */
    atmTeamId_not_in?: string[] | null;
    /** atmTeamId_lt */
    atmTeamId_lt?: string | null;
    /** atmTeamId_lte */
    atmTeamId_lte?: string | null;
    /** atmTeamId_gt */
    atmTeamId_gt?: string | null;
    /** atmTeamId_gte */
    atmTeamId_gte?: string | null;
    /** atmTeamId_contains */
    atmTeamId_contains?: string | null;
    /** atmTeamId_not_contains */
    atmTeamId_not_contains?: string | null;
    /** atmTeamId_starts_with */
    atmTeamId_starts_with?: string | null;
    /** atmTeamId_not_starts_with */
    atmTeamId_not_starts_with?: string | null;
    /** atmTeamId_ends_with */
    atmTeamId_ends_with?: string | null;
    /** atmTeamId_not_ends_with */
    atmTeamId_not_ends_with?: string | null;
    /** id */
    id?: string | null;
    /** id_not */
    id_not?: string | null;
    /** id_in */
    id_in?: string[] | null;
    /** id_not_in */
    id_not_in?: string[] | null;
    /** id_lt */
    id_lt?: string | null;
    /** id_lte */
    id_lte?: string | null;
    /** id_gt */
    id_gt?: string | null;
    /** id_gte */
    id_gte?: string | null;
    /** id_contains */
    id_contains?: string | null;
    /** id_not_contains */
    id_not_contains?: string | null;
    /** id_starts_with */
    id_starts_with?: string | null;
    /** id_not_starts_with */
    id_not_starts_with?: string | null;
    /** id_ends_with */
    id_ends_with?: string | null;
    /** id_not_ends_with */
    id_not_ends_with?: string | null;
    /** name */
    name?: string | null;
    /** name_not */
    name_not?: string | null;
    /** name_in */
    name_in?: string[] | null;
    /** name_not_in */
    name_not_in?: string[] | null;
    /** name_lt */
    name_lt?: string | null;
    /** name_lte */
    name_lte?: string | null;
    /** name_gt */
    name_gt?: string | null;
    /** name_gte */
    name_gte?: string | null;
    /** name_contains */
    name_contains?: string | null;
    /** name_not_contains */
    name_not_contains?: string | null;
    /** name_starts_with */
    name_starts_with?: string | null;
    /** name_not_starts_with */
    name_not_starts_with?: string | null;
    /** name_ends_with */
    name_ends_with?: string | null;
    /** name_not_ends_with */
    name_not_ends_with?: string | null;
    /** provider */
    provider?: string | null;
    /** provider_not */
    provider_not?: string | null;
    /** provider_in */
    provider_in?: string[] | null;
    /** provider_not_in */
    provider_not_in?: string[] | null;
    /** provider_lt */
    provider_lt?: string | null;
    /** provider_lte */
    provider_lte?: string | null;
    /** provider_gt */
    provider_gt?: string | null;
    /** provider_gte */
    provider_gte?: string | null;
    /** provider_contains */
    provider_contains?: string | null;
    /** provider_not_contains */
    provider_not_contains?: string | null;
    /** provider_starts_with */
    provider_starts_with?: string | null;
    /** provider_not_starts_with */
    provider_not_starts_with?: string | null;
    /** provider_ends_with */
    provider_ends_with?: string | null;
    /** provider_not_ends_with */
    provider_not_ends_with?: string | null;
    /** domain */
    domain?: string | null;
    /** domain_not */
    domain_not?: string | null;
    /** domain_in */
    domain_in?: string[] | null;
    /** domain_not_in */
    domain_not_in?: string[] | null;
    /** domain_lt */
    domain_lt?: string | null;
    /** domain_lte */
    domain_lte?: string | null;
    /** domain_gt */
    domain_gt?: string | null;
    /** domain_gte */
    domain_gte?: string | null;
    /** domain_contains */
    domain_contains?: string | null;
    /** domain_not_contains */
    domain_not_contains?: string | null;
    /** domain_starts_with */
    domain_starts_with?: string | null;
    /** domain_not_starts_with */
    domain_not_starts_with?: string | null;
    /** domain_ends_with */
    domain_ends_with?: string | null;
    /** domain_not_ends_with */
    domain_not_ends_with?: string | null;
    /** messageCount */
    messageCount?: number | null;
    /** messageCount_not */
    messageCount_not?: number | null;
    /** messageCount_in */
    messageCount_in?: number[] | null;
    /** messageCount_not_in */
    messageCount_not_in?: number[] | null;
    /** messageCount_lt */
    messageCount_lt?: number | null;
    /** messageCount_lte */
    messageCount_lte?: number | null;
    /** messageCount_gt */
    messageCount_gt?: number | null;
    /** messageCount_gte */
    messageCount_gte?: number | null;
    /** emailDomain */
    emailDomain?: string | null;
    /** emailDomain_not */
    emailDomain_not?: string | null;
    /** emailDomain_in */
    emailDomain_in?: string[] | null;
    /** emailDomain_not_in */
    emailDomain_not_in?: string[] | null;
    /** emailDomain_lt */
    emailDomain_lt?: string | null;
    /** emailDomain_lte */
    emailDomain_lte?: string | null;
    /** emailDomain_gt */
    emailDomain_gt?: string | null;
    /** emailDomain_gte */
    emailDomain_gte?: string | null;
    /** emailDomain_contains */
    emailDomain_contains?: string | null;
    /** emailDomain_not_contains */
    emailDomain_not_contains?: string | null;
    /** emailDomain_starts_with */
    emailDomain_starts_with?: string | null;
    /** emailDomain_not_starts_with */
    emailDomain_not_starts_with?: string | null;
    /** emailDomain_ends_with */
    emailDomain_ends_with?: string | null;
    /** emailDomain_not_ends_with */
    emailDomain_not_ends_with?: string | null;
    /** orgs */
    orgs?: _OrgFilter | null;
    /** orgs_not */
    orgs_not?: _OrgFilter | null;
    /** orgs_in */
    orgs_in?: _OrgFilter | null;
    /** orgs_not_in */
    orgs_not_in?: _OrgFilter | null;
    /** orgs_some */
    orgs_some?: _OrgFilter | null;
    /** orgs_none */
    orgs_none?: _OrgFilter | null;
    /** orgs_single */
    orgs_single?: _OrgFilter | null;
    /** orgs_every */
    orgs_every?: _OrgFilter | null;
    /** providers */
    providers?: _GitHubProviderFilter | null;
    /** providers_not */
    providers_not?: _GitHubProviderFilter | null;
    /** providers_in */
    providers_in?: _GitHubProviderFilter | null;
    /** providers_not_in */
    providers_not_in?: _GitHubProviderFilter | null;
    /** providers_some */
    providers_some?: _GitHubProviderFilter | null;
    /** providers_none */
    providers_none?: _GitHubProviderFilter | null;
    /** providers_single */
    providers_single?: _GitHubProviderFilter | null;
    /** providers_every */
    providers_every?: _GitHubProviderFilter | null;
    /** scmProviders */
    scmProviders?: _ScmProviderFilter | null;
    /** scmProviders_not */
    scmProviders_not?: _ScmProviderFilter | null;
    /** scmProviders_in */
    scmProviders_in?: _ScmProviderFilter | null;
    /** scmProviders_not_in */
    scmProviders_not_in?: _ScmProviderFilter | null;
    /** scmProviders_some */
    scmProviders_some?: _ScmProviderFilter | null;
    /** scmProviders_none */
    scmProviders_none?: _ScmProviderFilter | null;
    /** scmProviders_single */
    scmProviders_single?: _ScmProviderFilter | null;
    /** scmProviders_every */
    scmProviders_every?: _ScmProviderFilter | null;
    /** channels */
    channels?: _ChatChannelFilter | null;
    /** channels_not */
    channels_not?: _ChatChannelFilter | null;
    /** channels_in */
    channels_in?: _ChatChannelFilter | null;
    /** channels_not_in */
    channels_not_in?: _ChatChannelFilter | null;
    /** channels_some */
    channels_some?: _ChatChannelFilter | null;
    /** channels_none */
    channels_none?: _ChatChannelFilter | null;
    /** channels_single */
    channels_single?: _ChatChannelFilter | null;
    /** channels_every */
    channels_every?: _ChatChannelFilter | null;
    /** members */
    members?: _ChatIdFilter | null;
    /** members_not */
    members_not?: _ChatIdFilter | null;
    /** members_in */
    members_in?: _ChatIdFilter | null;
    /** members_not_in */
    members_not_in?: _ChatIdFilter | null;
    /** members_some */
    members_some?: _ChatIdFilter | null;
    /** members_none */
    members_none?: _ChatIdFilter | null;
    /** members_single */
    members_single?: _ChatIdFilter | null;
    /** members_every */
    members_every?: _ChatIdFilter | null;
    /** team */
    team?: _TeamFilter | null;
    /** team_not */
    team_not?: _TeamFilter | null;
    /** team_in */
    team_in?: _TeamFilter | null;
    /** team_not_in */
    team_not_in?: _TeamFilter | null;
}
/** Filter Input Type for ChannelLink */
export interface _ChannelLinkFilter {
    /** AND */
    AND?: _ChannelLinkFilter[] | null;
    /** OR */
    OR?: _ChannelLinkFilter[] | null;
    /** atmTeamId */
    atmTeamId?: string | null;
    /** atmTeamId_not */
    atmTeamId_not?: string | null;
    /** atmTeamId_in */
    atmTeamId_in?: string[] | null;
    /** atmTeamId_not_in */
    atmTeamId_not_in?: string[] | null;
    /** atmTeamId_lt */
    atmTeamId_lt?: string | null;
    /** atmTeamId_lte */
    atmTeamId_lte?: string | null;
    /** atmTeamId_gt */
    atmTeamId_gt?: string | null;
    /** atmTeamId_gte */
    atmTeamId_gte?: string | null;
    /** atmTeamId_contains */
    atmTeamId_contains?: string | null;
    /** atmTeamId_not_contains */
    atmTeamId_not_contains?: string | null;
    /** atmTeamId_starts_with */
    atmTeamId_starts_with?: string | null;
    /** atmTeamId_not_starts_with */
    atmTeamId_not_starts_with?: string | null;
    /** atmTeamId_ends_with */
    atmTeamId_ends_with?: string | null;
    /** atmTeamId_not_ends_with */
    atmTeamId_not_ends_with?: string | null;
    /** id */
    id?: string | null;
    /** id_not */
    id_not?: string | null;
    /** id_in */
    id_in?: string[] | null;
    /** id_not_in */
    id_not_in?: string[] | null;
    /** id_lt */
    id_lt?: string | null;
    /** id_lte */
    id_lte?: string | null;
    /** id_gt */
    id_gt?: string | null;
    /** id_gte */
    id_gte?: string | null;
    /** id_contains */
    id_contains?: string | null;
    /** id_not_contains */
    id_not_contains?: string | null;
    /** id_starts_with */
    id_starts_with?: string | null;
    /** id_not_starts_with */
    id_not_starts_with?: string | null;
    /** id_ends_with */
    id_ends_with?: string | null;
    /** id_not_ends_with */
    id_not_ends_with?: string | null;
    /** channel */
    channel?: _ChatChannelFilter | null;
    /** channel_not */
    channel_not?: _ChatChannelFilter | null;
    /** channel_in */
    channel_in?: _ChatChannelFilter | null;
    /** channel_not_in */
    channel_not_in?: _ChatChannelFilter | null;
    /** repo */
    repo?: _RepoFilter | null;
    /** repo_not */
    repo_not?: _RepoFilter | null;
    /** repo_in */
    repo_in?: _RepoFilter | null;
    /** repo_not_in */
    repo_not_in?: _RepoFilter | null;
}
/** Filter Input Type for PullRequest */
export interface _PullRequestFilter {
    /** AND */
    AND?: _PullRequestFilter[] | null;
    /** OR */
    OR?: _PullRequestFilter[] | null;
    /** atmTeamId */
    atmTeamId?: string | null;
    /** atmTeamId_not */
    atmTeamId_not?: string | null;
    /** atmTeamId_in */
    atmTeamId_in?: string[] | null;
    /** atmTeamId_not_in */
    atmTeamId_not_in?: string[] | null;
    /** atmTeamId_lt */
    atmTeamId_lt?: string | null;
    /** atmTeamId_lte */
    atmTeamId_lte?: string | null;
    /** atmTeamId_gt */
    atmTeamId_gt?: string | null;
    /** atmTeamId_gte */
    atmTeamId_gte?: string | null;
    /** atmTeamId_contains */
    atmTeamId_contains?: string | null;
    /** atmTeamId_not_contains */
    atmTeamId_not_contains?: string | null;
    /** atmTeamId_starts_with */
    atmTeamId_starts_with?: string | null;
    /** atmTeamId_not_starts_with */
    atmTeamId_not_starts_with?: string | null;
    /** atmTeamId_ends_with */
    atmTeamId_ends_with?: string | null;
    /** atmTeamId_not_ends_with */
    atmTeamId_not_ends_with?: string | null;
    /** id */
    id?: string | null;
    /** id_not */
    id_not?: string | null;
    /** id_in */
    id_in?: string[] | null;
    /** id_not_in */
    id_not_in?: string[] | null;
    /** id_lt */
    id_lt?: string | null;
    /** id_lte */
    id_lte?: string | null;
    /** id_gt */
    id_gt?: string | null;
    /** id_gte */
    id_gte?: string | null;
    /** id_contains */
    id_contains?: string | null;
    /** id_not_contains */
    id_not_contains?: string | null;
    /** id_starts_with */
    id_starts_with?: string | null;
    /** id_not_starts_with */
    id_not_starts_with?: string | null;
    /** id_ends_with */
    id_ends_with?: string | null;
    /** id_not_ends_with */
    id_not_ends_with?: string | null;
    /** number */
    number?: number | null;
    /** number_not */
    number_not?: number | null;
    /** number_in */
    number_in?: number[] | null;
    /** number_not_in */
    number_not_in?: number[] | null;
    /** number_lt */
    number_lt?: number | null;
    /** number_lte */
    number_lte?: number | null;
    /** number_gt */
    number_gt?: number | null;
    /** number_gte */
    number_gte?: number | null;
    /** prId */
    prId?: string | null;
    /** prId_not */
    prId_not?: string | null;
    /** prId_in */
    prId_in?: string[] | null;
    /** prId_not_in */
    prId_not_in?: string[] | null;
    /** prId_lt */
    prId_lt?: string | null;
    /** prId_lte */
    prId_lte?: string | null;
    /** prId_gt */
    prId_gt?: string | null;
    /** prId_gte */
    prId_gte?: string | null;
    /** prId_contains */
    prId_contains?: string | null;
    /** prId_not_contains */
    prId_not_contains?: string | null;
    /** prId_starts_with */
    prId_starts_with?: string | null;
    /** prId_not_starts_with */
    prId_not_starts_with?: string | null;
    /** prId_ends_with */
    prId_ends_with?: string | null;
    /** prId_not_ends_with */
    prId_not_ends_with?: string | null;
    /** name */
    name?: string | null;
    /** name_not */
    name_not?: string | null;
    /** name_in */
    name_in?: string[] | null;
    /** name_not_in */
    name_not_in?: string[] | null;
    /** name_lt */
    name_lt?: string | null;
    /** name_lte */
    name_lte?: string | null;
    /** name_gt */
    name_gt?: string | null;
    /** name_gte */
    name_gte?: string | null;
    /** name_contains */
    name_contains?: string | null;
    /** name_not_contains */
    name_not_contains?: string | null;
    /** name_starts_with */
    name_starts_with?: string | null;
    /** name_not_starts_with */
    name_not_starts_with?: string | null;
    /** name_ends_with */
    name_ends_with?: string | null;
    /** name_not_ends_with */
    name_not_ends_with?: string | null;
    /** body */
    body?: string | null;
    /** body_not */
    body_not?: string | null;
    /** body_in */
    body_in?: string[] | null;
    /** body_not_in */
    body_not_in?: string[] | null;
    /** body_lt */
    body_lt?: string | null;
    /** body_lte */
    body_lte?: string | null;
    /** body_gt */
    body_gt?: string | null;
    /** body_gte */
    body_gte?: string | null;
    /** body_contains */
    body_contains?: string | null;
    /** body_not_contains */
    body_not_contains?: string | null;
    /** body_starts_with */
    body_starts_with?: string | null;
    /** body_not_starts_with */
    body_not_starts_with?: string | null;
    /** body_ends_with */
    body_ends_with?: string | null;
    /** body_not_ends_with */
    body_not_ends_with?: string | null;
    /** state */
    state?: string | null;
    /** state_not */
    state_not?: string | null;
    /** state_in */
    state_in?: string[] | null;
    /** state_not_in */
    state_not_in?: string[] | null;
    /** state_lt */
    state_lt?: string | null;
    /** state_lte */
    state_lte?: string | null;
    /** state_gt */
    state_gt?: string | null;
    /** state_gte */
    state_gte?: string | null;
    /** state_contains */
    state_contains?: string | null;
    /** state_not_contains */
    state_not_contains?: string | null;
    /** state_starts_with */
    state_starts_with?: string | null;
    /** state_not_starts_with */
    state_not_starts_with?: string | null;
    /** state_ends_with */
    state_ends_with?: string | null;
    /** state_not_ends_with */
    state_not_ends_with?: string | null;
    /** action */
    action?: PullRequestAction | null;
    /** action_not */
    action_not?: PullRequestAction | null;
    /** action_in */
    action_in?: PullRequestAction[] | null;
    /** action_not_in */
    action_not_in?: PullRequestAction[] | null;
    /** merged */
    merged?: boolean | null;
    /** merged_not */
    merged_not?: boolean | null;
    /** timestamp */
    timestamp?: string | null;
    /** timestamp_not */
    timestamp_not?: string | null;
    /** timestamp_in */
    timestamp_in?: string[] | null;
    /** timestamp_not_in */
    timestamp_not_in?: string[] | null;
    /** timestamp_lt */
    timestamp_lt?: string | null;
    /** timestamp_lte */
    timestamp_lte?: string | null;
    /** timestamp_gt */
    timestamp_gt?: string | null;
    /** timestamp_gte */
    timestamp_gte?: string | null;
    /** timestamp_contains */
    timestamp_contains?: string | null;
    /** timestamp_not_contains */
    timestamp_not_contains?: string | null;
    /** timestamp_starts_with */
    timestamp_starts_with?: string | null;
    /** timestamp_not_starts_with */
    timestamp_not_starts_with?: string | null;
    /** timestamp_ends_with */
    timestamp_ends_with?: string | null;
    /** timestamp_not_ends_with */
    timestamp_not_ends_with?: string | null;
    /** baseBranchName */
    baseBranchName?: string | null;
    /** baseBranchName_not */
    baseBranchName_not?: string | null;
    /** baseBranchName_in */
    baseBranchName_in?: string[] | null;
    /** baseBranchName_not_in */
    baseBranchName_not_in?: string[] | null;
    /** baseBranchName_lt */
    baseBranchName_lt?: string | null;
    /** baseBranchName_lte */
    baseBranchName_lte?: string | null;
    /** baseBranchName_gt */
    baseBranchName_gt?: string | null;
    /** baseBranchName_gte */
    baseBranchName_gte?: string | null;
    /** baseBranchName_contains */
    baseBranchName_contains?: string | null;
    /** baseBranchName_not_contains */
    baseBranchName_not_contains?: string | null;
    /** baseBranchName_starts_with */
    baseBranchName_starts_with?: string | null;
    /** baseBranchName_not_starts_with */
    baseBranchName_not_starts_with?: string | null;
    /** baseBranchName_ends_with */
    baseBranchName_ends_with?: string | null;
    /** baseBranchName_not_ends_with */
    baseBranchName_not_ends_with?: string | null;
    /** branchName */
    branchName?: string | null;
    /** branchName_not */
    branchName_not?: string | null;
    /** branchName_in */
    branchName_in?: string[] | null;
    /** branchName_not_in */
    branchName_not_in?: string[] | null;
    /** branchName_lt */
    branchName_lt?: string | null;
    /** branchName_lte */
    branchName_lte?: string | null;
    /** branchName_gt */
    branchName_gt?: string | null;
    /** branchName_gte */
    branchName_gte?: string | null;
    /** branchName_contains */
    branchName_contains?: string | null;
    /** branchName_not_contains */
    branchName_not_contains?: string | null;
    /** branchName_starts_with */
    branchName_starts_with?: string | null;
    /** branchName_not_starts_with */
    branchName_not_starts_with?: string | null;
    /** branchName_ends_with */
    branchName_ends_with?: string | null;
    /** branchName_not_ends_with */
    branchName_not_ends_with?: string | null;
    /** title */
    title?: string | null;
    /** title_not */
    title_not?: string | null;
    /** title_in */
    title_in?: string[] | null;
    /** title_not_in */
    title_not_in?: string[] | null;
    /** title_lt */
    title_lt?: string | null;
    /** title_lte */
    title_lte?: string | null;
    /** title_gt */
    title_gt?: string | null;
    /** title_gte */
    title_gte?: string | null;
    /** title_contains */
    title_contains?: string | null;
    /** title_not_contains */
    title_not_contains?: string | null;
    /** title_starts_with */
    title_starts_with?: string | null;
    /** title_not_starts_with */
    title_not_starts_with?: string | null;
    /** title_ends_with */
    title_ends_with?: string | null;
    /** title_not_ends_with */
    title_not_ends_with?: string | null;
    /** createdAt */
    createdAt?: string | null;
    /** createdAt_not */
    createdAt_not?: string | null;
    /** createdAt_in */
    createdAt_in?: string[] | null;
    /** createdAt_not_in */
    createdAt_not_in?: string[] | null;
    /** createdAt_lt */
    createdAt_lt?: string | null;
    /** createdAt_lte */
    createdAt_lte?: string | null;
    /** createdAt_gt */
    createdAt_gt?: string | null;
    /** createdAt_gte */
    createdAt_gte?: string | null;
    /** createdAt_contains */
    createdAt_contains?: string | null;
    /** createdAt_not_contains */
    createdAt_not_contains?: string | null;
    /** createdAt_starts_with */
    createdAt_starts_with?: string | null;
    /** createdAt_not_starts_with */
    createdAt_not_starts_with?: string | null;
    /** createdAt_ends_with */
    createdAt_ends_with?: string | null;
    /** createdAt_not_ends_with */
    createdAt_not_ends_with?: string | null;
    /** updatedAt */
    updatedAt?: string | null;
    /** updatedAt_not */
    updatedAt_not?: string | null;
    /** updatedAt_in */
    updatedAt_in?: string[] | null;
    /** updatedAt_not_in */
    updatedAt_not_in?: string[] | null;
    /** updatedAt_lt */
    updatedAt_lt?: string | null;
    /** updatedAt_lte */
    updatedAt_lte?: string | null;
    /** updatedAt_gt */
    updatedAt_gt?: string | null;
    /** updatedAt_gte */
    updatedAt_gte?: string | null;
    /** updatedAt_contains */
    updatedAt_contains?: string | null;
    /** updatedAt_not_contains */
    updatedAt_not_contains?: string | null;
    /** updatedAt_starts_with */
    updatedAt_starts_with?: string | null;
    /** updatedAt_not_starts_with */
    updatedAt_not_starts_with?: string | null;
    /** updatedAt_ends_with */
    updatedAt_ends_with?: string | null;
    /** updatedAt_not_ends_with */
    updatedAt_not_ends_with?: string | null;
    /** closedAt */
    closedAt?: string | null;
    /** closedAt_not */
    closedAt_not?: string | null;
    /** closedAt_in */
    closedAt_in?: string[] | null;
    /** closedAt_not_in */
    closedAt_not_in?: string[] | null;
    /** closedAt_lt */
    closedAt_lt?: string | null;
    /** closedAt_lte */
    closedAt_lte?: string | null;
    /** closedAt_gt */
    closedAt_gt?: string | null;
    /** closedAt_gte */
    closedAt_gte?: string | null;
    /** closedAt_contains */
    closedAt_contains?: string | null;
    /** closedAt_not_contains */
    closedAt_not_contains?: string | null;
    /** closedAt_starts_with */
    closedAt_starts_with?: string | null;
    /** closedAt_not_starts_with */
    closedAt_not_starts_with?: string | null;
    /** closedAt_ends_with */
    closedAt_ends_with?: string | null;
    /** closedAt_not_ends_with */
    closedAt_not_ends_with?: string | null;
    /** mergedAt */
    mergedAt?: string | null;
    /** mergedAt_not */
    mergedAt_not?: string | null;
    /** mergedAt_in */
    mergedAt_in?: string[] | null;
    /** mergedAt_not_in */
    mergedAt_not_in?: string[] | null;
    /** mergedAt_lt */
    mergedAt_lt?: string | null;
    /** mergedAt_lte */
    mergedAt_lte?: string | null;
    /** mergedAt_gt */
    mergedAt_gt?: string | null;
    /** mergedAt_gte */
    mergedAt_gte?: string | null;
    /** mergedAt_contains */
    mergedAt_contains?: string | null;
    /** mergedAt_not_contains */
    mergedAt_not_contains?: string | null;
    /** mergedAt_starts_with */
    mergedAt_starts_with?: string | null;
    /** mergedAt_not_starts_with */
    mergedAt_not_starts_with?: string | null;
    /** mergedAt_ends_with */
    mergedAt_ends_with?: string | null;
    /** mergedAt_not_ends_with */
    mergedAt_not_ends_with?: string | null;
    /** mergeStatus */
    mergeStatus?: MergeStatus | null;
    /** mergeStatus_not */
    mergeStatus_not?: MergeStatus | null;
    /** mergeStatus_in */
    mergeStatus_in?: MergeStatus[] | null;
    /** mergeStatus_not_in */
    mergeStatus_not_in?: MergeStatus[] | null;
    /** repo */
    repo?: _RepoFilter | null;
    /** repo_not */
    repo_not?: _RepoFilter | null;
    /** repo_in */
    repo_in?: _RepoFilter | null;
    /** repo_not_in */
    repo_not_in?: _RepoFilter | null;
    /** head */
    head?: _CommitFilter | null;
    /** head_not */
    head_not?: _CommitFilter | null;
    /** head_in */
    head_in?: _CommitFilter | null;
    /** head_not_in */
    head_not_in?: _CommitFilter | null;
    /** base */
    base?: _CommitFilter | null;
    /** base_not */
    base_not?: _CommitFilter | null;
    /** base_in */
    base_in?: _CommitFilter | null;
    /** base_not_in */
    base_not_in?: _CommitFilter | null;
    /** mergeCommit */
    mergeCommit?: _CommitFilter | null;
    /** mergeCommit_not */
    mergeCommit_not?: _CommitFilter | null;
    /** mergeCommit_in */
    mergeCommit_in?: _CommitFilter | null;
    /** mergeCommit_not_in */
    mergeCommit_not_in?: _CommitFilter | null;
    /** author */
    author?: _ScmIdFilter | null;
    /** author_not */
    author_not?: _ScmIdFilter | null;
    /** author_in */
    author_in?: _ScmIdFilter | null;
    /** author_not_in */
    author_not_in?: _ScmIdFilter | null;
    /** merger */
    merger?: _ScmIdFilter | null;
    /** merger_not */
    merger_not?: _ScmIdFilter | null;
    /** merger_in */
    merger_in?: _ScmIdFilter | null;
    /** merger_not_in */
    merger_not_in?: _ScmIdFilter | null;
    /** assignees */
    assignees?: _ScmIdFilter | null;
    /** assignees_not */
    assignees_not?: _ScmIdFilter | null;
    /** assignees_in */
    assignees_in?: _ScmIdFilter | null;
    /** assignees_not_in */
    assignees_not_in?: _ScmIdFilter | null;
    /** assignees_some */
    assignees_some?: _ScmIdFilter | null;
    /** assignees_none */
    assignees_none?: _ScmIdFilter | null;
    /** assignees_single */
    assignees_single?: _ScmIdFilter | null;
    /** assignees_every */
    assignees_every?: _ScmIdFilter | null;
    /** commits */
    commits?: _CommitFilter | null;
    /** commits_not */
    commits_not?: _CommitFilter | null;
    /** commits_in */
    commits_in?: _CommitFilter | null;
    /** commits_not_in */
    commits_not_in?: _CommitFilter | null;
    /** commits_some */
    commits_some?: _CommitFilter | null;
    /** commits_none */
    commits_none?: _CommitFilter | null;
    /** commits_single */
    commits_single?: _CommitFilter | null;
    /** commits_every */
    commits_every?: _CommitFilter | null;
    /** branch */
    branch?: _BranchFilter | null;
    /** branch_not */
    branch_not?: _BranchFilter | null;
    /** branch_in */
    branch_in?: _BranchFilter | null;
    /** branch_not_in */
    branch_not_in?: _BranchFilter | null;
    /** sourceBranch */
    sourceBranch?: _BranchFilter | null;
    /** sourceBranch_not */
    sourceBranch_not?: _BranchFilter | null;
    /** sourceBranch_in */
    sourceBranch_in?: _BranchFilter | null;
    /** sourceBranch_not_in */
    sourceBranch_not_in?: _BranchFilter | null;
    /** destinationBranch */
    destinationBranch?: _BranchFilter | null;
    /** destinationBranch_not */
    destinationBranch_not?: _BranchFilter | null;
    /** destinationBranch_in */
    destinationBranch_in?: _BranchFilter | null;
    /** destinationBranch_not_in */
    destinationBranch_not_in?: _BranchFilter | null;
    /** labels */
    labels?: _LabelFilter | null;
    /** labels_not */
    labels_not?: _LabelFilter | null;
    /** labels_in */
    labels_in?: _LabelFilter | null;
    /** labels_not_in */
    labels_not_in?: _LabelFilter | null;
    /** labels_some */
    labels_some?: _LabelFilter | null;
    /** labels_none */
    labels_none?: _LabelFilter | null;
    /** labels_single */
    labels_single?: _LabelFilter | null;
    /** labels_every */
    labels_every?: _LabelFilter | null;
    /** reviews */
    reviews?: _ReviewFilter | null;
    /** reviews_not */
    reviews_not?: _ReviewFilter | null;
    /** reviews_in */
    reviews_in?: _ReviewFilter | null;
    /** reviews_not_in */
    reviews_not_in?: _ReviewFilter | null;
    /** reviews_some */
    reviews_some?: _ReviewFilter | null;
    /** reviews_none */
    reviews_none?: _ReviewFilter | null;
    /** reviews_single */
    reviews_single?: _ReviewFilter | null;
    /** reviews_every */
    reviews_every?: _ReviewFilter | null;
    /** reviewers */
    reviewers?: _ScmIdFilter | null;
    /** reviewers_not */
    reviewers_not?: _ScmIdFilter | null;
    /** reviewers_in */
    reviewers_in?: _ScmIdFilter | null;
    /** reviewers_not_in */
    reviewers_not_in?: _ScmIdFilter | null;
    /** reviewers_some */
    reviewers_some?: _ScmIdFilter | null;
    /** reviewers_none */
    reviewers_none?: _ScmIdFilter | null;
    /** reviewers_single */
    reviewers_single?: _ScmIdFilter | null;
    /** reviewers_every */
    reviewers_every?: _ScmIdFilter | null;
    /** lastAssignedBy */
    lastAssignedBy?: _ScmIdFilter | null;
    /** lastAssignedBy_not */
    lastAssignedBy_not?: _ScmIdFilter | null;
    /** lastAssignedBy_in */
    lastAssignedBy_in?: _ScmIdFilter | null;
    /** lastAssignedBy_not_in */
    lastAssignedBy_not_in?: _ScmIdFilter | null;
    /** comments */
    comments?: _CommentFilter | null;
    /** comments_not */
    comments_not?: _CommentFilter | null;
    /** comments_in */
    comments_in?: _CommentFilter | null;
    /** comments_not_in */
    comments_not_in?: _CommentFilter | null;
    /** comments_some */
    comments_some?: _CommentFilter | null;
    /** comments_none */
    comments_none?: _CommentFilter | null;
    /** comments_single */
    comments_single?: _CommentFilter | null;
    /** comments_every */
    comments_every?: _CommentFilter | null;
    /** builds */
    builds?: _BuildFilter | null;
    /** builds_not */
    builds_not?: _BuildFilter | null;
    /** builds_in */
    builds_in?: _BuildFilter | null;
    /** builds_not_in */
    builds_not_in?: _BuildFilter | null;
    /** builds_some */
    builds_some?: _BuildFilter | null;
    /** builds_none */
    builds_none?: _BuildFilter | null;
    /** builds_single */
    builds_single?: _BuildFilter | null;
    /** builds_every */
    builds_every?: _BuildFilter | null;
}
/** Filter Input Type for Commit */
export interface _CommitFilter {
    /** AND */
    AND?: _CommitFilter[] | null;
    /** OR */
    OR?: _CommitFilter[] | null;
    /** atmTeamId */
    atmTeamId?: string | null;
    /** atmTeamId_not */
    atmTeamId_not?: string | null;
    /** atmTeamId_in */
    atmTeamId_in?: string[] | null;
    /** atmTeamId_not_in */
    atmTeamId_not_in?: string[] | null;
    /** atmTeamId_lt */
    atmTeamId_lt?: string | null;
    /** atmTeamId_lte */
    atmTeamId_lte?: string | null;
    /** atmTeamId_gt */
    atmTeamId_gt?: string | null;
    /** atmTeamId_gte */
    atmTeamId_gte?: string | null;
    /** atmTeamId_contains */
    atmTeamId_contains?: string | null;
    /** atmTeamId_not_contains */
    atmTeamId_not_contains?: string | null;
    /** atmTeamId_starts_with */
    atmTeamId_starts_with?: string | null;
    /** atmTeamId_not_starts_with */
    atmTeamId_not_starts_with?: string | null;
    /** atmTeamId_ends_with */
    atmTeamId_ends_with?: string | null;
    /** atmTeamId_not_ends_with */
    atmTeamId_not_ends_with?: string | null;
    /** sha */
    sha?: string | null;
    /** sha_not */
    sha_not?: string | null;
    /** sha_in */
    sha_in?: string[] | null;
    /** sha_not_in */
    sha_not_in?: string[] | null;
    /** sha_lt */
    sha_lt?: string | null;
    /** sha_lte */
    sha_lte?: string | null;
    /** sha_gt */
    sha_gt?: string | null;
    /** sha_gte */
    sha_gte?: string | null;
    /** sha_contains */
    sha_contains?: string | null;
    /** sha_not_contains */
    sha_not_contains?: string | null;
    /** sha_starts_with */
    sha_starts_with?: string | null;
    /** sha_not_starts_with */
    sha_not_starts_with?: string | null;
    /** sha_ends_with */
    sha_ends_with?: string | null;
    /** sha_not_ends_with */
    sha_not_ends_with?: string | null;
    /** message */
    message?: string | null;
    /** message_not */
    message_not?: string | null;
    /** message_in */
    message_in?: string[] | null;
    /** message_not_in */
    message_not_in?: string[] | null;
    /** message_lt */
    message_lt?: string | null;
    /** message_lte */
    message_lte?: string | null;
    /** message_gt */
    message_gt?: string | null;
    /** message_gte */
    message_gte?: string | null;
    /** message_contains */
    message_contains?: string | null;
    /** message_not_contains */
    message_not_contains?: string | null;
    /** message_starts_with */
    message_starts_with?: string | null;
    /** message_not_starts_with */
    message_not_starts_with?: string | null;
    /** message_ends_with */
    message_ends_with?: string | null;
    /** message_not_ends_with */
    message_not_ends_with?: string | null;
    /** timestamp */
    timestamp?: string | null;
    /** timestamp_not */
    timestamp_not?: string | null;
    /** timestamp_in */
    timestamp_in?: string[] | null;
    /** timestamp_not_in */
    timestamp_not_in?: string[] | null;
    /** timestamp_lt */
    timestamp_lt?: string | null;
    /** timestamp_lte */
    timestamp_lte?: string | null;
    /** timestamp_gt */
    timestamp_gt?: string | null;
    /** timestamp_gte */
    timestamp_gte?: string | null;
    /** timestamp_contains */
    timestamp_contains?: string | null;
    /** timestamp_not_contains */
    timestamp_not_contains?: string | null;
    /** timestamp_starts_with */
    timestamp_starts_with?: string | null;
    /** timestamp_not_starts_with */
    timestamp_not_starts_with?: string | null;
    /** timestamp_ends_with */
    timestamp_ends_with?: string | null;
    /** timestamp_not_ends_with */
    timestamp_not_ends_with?: string | null;
    /** email */
    email?: _EmailFilter | null;
    /** email_not */
    email_not?: _EmailFilter | null;
    /** email_in */
    email_in?: _EmailFilter | null;
    /** email_not_in */
    email_not_in?: _EmailFilter | null;
    /** builds */
    builds?: _BuildFilter | null;
    /** builds_not */
    builds_not?: _BuildFilter | null;
    /** builds_in */
    builds_in?: _BuildFilter | null;
    /** builds_not_in */
    builds_not_in?: _BuildFilter | null;
    /** builds_some */
    builds_some?: _BuildFilter | null;
    /** builds_none */
    builds_none?: _BuildFilter | null;
    /** builds_single */
    builds_single?: _BuildFilter | null;
    /** builds_every */
    builds_every?: _BuildFilter | null;
    /** pipelines */
    pipelines?: _PipelineFilter | null;
    /** pipelines_not */
    pipelines_not?: _PipelineFilter | null;
    /** pipelines_in */
    pipelines_in?: _PipelineFilter | null;
    /** pipelines_not_in */
    pipelines_not_in?: _PipelineFilter | null;
    /** pipelines_some */
    pipelines_some?: _PipelineFilter | null;
    /** pipelines_none */
    pipelines_none?: _PipelineFilter | null;
    /** pipelines_single */
    pipelines_single?: _PipelineFilter | null;
    /** pipelines_every */
    pipelines_every?: _PipelineFilter | null;
    /** repo */
    repo?: _RepoFilter | null;
    /** repo_not */
    repo_not?: _RepoFilter | null;
    /** repo_in */
    repo_in?: _RepoFilter | null;
    /** repo_not_in */
    repo_not_in?: _RepoFilter | null;
    /** author */
    author?: _ScmIdFilter | null;
    /** author_not */
    author_not?: _ScmIdFilter | null;
    /** author_in */
    author_in?: _ScmIdFilter | null;
    /** author_not_in */
    author_not_in?: _ScmIdFilter | null;
    /** committer */
    committer?: _ScmIdFilter | null;
    /** committer_not */
    committer_not?: _ScmIdFilter | null;
    /** committer_in */
    committer_in?: _ScmIdFilter | null;
    /** committer_not_in */
    committer_not_in?: _ScmIdFilter | null;
    /** tags */
    tags?: _TagFilter | null;
    /** tags_not */
    tags_not?: _TagFilter | null;
    /** tags_in */
    tags_in?: _TagFilter | null;
    /** tags_not_in */
    tags_not_in?: _TagFilter | null;
    /** tags_some */
    tags_some?: _TagFilter | null;
    /** tags_none */
    tags_none?: _TagFilter | null;
    /** tags_single */
    tags_single?: _TagFilter | null;
    /** tags_every */
    tags_every?: _TagFilter | null;
    /** resolves */
    resolves?: _IssueFilter | null;
    /** resolves_not */
    resolves_not?: _IssueFilter | null;
    /** resolves_in */
    resolves_in?: _IssueFilter | null;
    /** resolves_not_in */
    resolves_not_in?: _IssueFilter | null;
    /** resolves_some */
    resolves_some?: _IssueFilter | null;
    /** resolves_none */
    resolves_none?: _IssueFilter | null;
    /** resolves_single */
    resolves_single?: _IssueFilter | null;
    /** resolves_every */
    resolves_every?: _IssueFilter | null;
    /** statuses */
    statuses?: _StatusFilter | null;
    /** statuses_not */
    statuses_not?: _StatusFilter | null;
    /** statuses_in */
    statuses_in?: _StatusFilter | null;
    /** statuses_not_in */
    statuses_not_in?: _StatusFilter | null;
    /** statuses_some */
    statuses_some?: _StatusFilter | null;
    /** statuses_none */
    statuses_none?: _StatusFilter | null;
    /** statuses_single */
    statuses_single?: _StatusFilter | null;
    /** statuses_every */
    statuses_every?: _StatusFilter | null;
    /** pushes */
    pushes?: _PushFilter | null;
    /** pushes_not */
    pushes_not?: _PushFilter | null;
    /** pushes_in */
    pushes_in?: _PushFilter | null;
    /** pushes_not_in */
    pushes_not_in?: _PushFilter | null;
    /** pushes_some */
    pushes_some?: _PushFilter | null;
    /** pushes_none */
    pushes_none?: _PushFilter | null;
    /** pushes_single */
    pushes_single?: _PushFilter | null;
    /** pushes_every */
    pushes_every?: _PushFilter | null;
    /** pullRequests */
    pullRequests?: _PullRequestFilter | null;
    /** pullRequests_not */
    pullRequests_not?: _PullRequestFilter | null;
    /** pullRequests_in */
    pullRequests_in?: _PullRequestFilter | null;
    /** pullRequests_not_in */
    pullRequests_not_in?: _PullRequestFilter | null;
    /** pullRequests_some */
    pullRequests_some?: _PullRequestFilter | null;
    /** pullRequests_none */
    pullRequests_none?: _PullRequestFilter | null;
    /** pullRequests_single */
    pullRequests_single?: _PullRequestFilter | null;
    /** pullRequests_every */
    pullRequests_every?: _PullRequestFilter | null;
    /** herokuApps */
    herokuApps?: _HerokuAppFilter | null;
    /** herokuApps_not */
    herokuApps_not?: _HerokuAppFilter | null;
    /** herokuApps_in */
    herokuApps_in?: _HerokuAppFilter | null;
    /** herokuApps_not_in */
    herokuApps_not_in?: _HerokuAppFilter | null;
    /** herokuApps_some */
    herokuApps_some?: _HerokuAppFilter | null;
    /** herokuApps_none */
    herokuApps_none?: _HerokuAppFilter | null;
    /** herokuApps_single */
    herokuApps_single?: _HerokuAppFilter | null;
    /** herokuApps_every */
    herokuApps_every?: _HerokuAppFilter | null;
    /** apps */
    apps?: _ApplicationFilter | null;
    /** apps_not */
    apps_not?: _ApplicationFilter | null;
    /** apps_in */
    apps_in?: _ApplicationFilter | null;
    /** apps_not_in */
    apps_not_in?: _ApplicationFilter | null;
    /** apps_some */
    apps_some?: _ApplicationFilter | null;
    /** apps_none */
    apps_none?: _ApplicationFilter | null;
    /** apps_single */
    apps_single?: _ApplicationFilter | null;
    /** apps_every */
    apps_every?: _ApplicationFilter | null;
    /** fingerprints */
    fingerprints?: _FingerprintFilter | null;
    /** fingerprints_not */
    fingerprints_not?: _FingerprintFilter | null;
    /** fingerprints_in */
    fingerprints_in?: _FingerprintFilter | null;
    /** fingerprints_not_in */
    fingerprints_not_in?: _FingerprintFilter | null;
    /** fingerprints_some */
    fingerprints_some?: _FingerprintFilter | null;
    /** fingerprints_none */
    fingerprints_none?: _FingerprintFilter | null;
    /** fingerprints_single */
    fingerprints_single?: _FingerprintFilter | null;
    /** fingerprints_every */
    fingerprints_every?: _FingerprintFilter | null;
    /** impact */
    impact?: _ParentImpactFilter | null;
    /** impact_not */
    impact_not?: _ParentImpactFilter | null;
    /** impact_in */
    impact_in?: _ParentImpactFilter | null;
    /** impact_not_in */
    impact_not_in?: _ParentImpactFilter | null;
    /** image */
    image?: _DockerImageFilter | null;
    /** image_not */
    image_not?: _DockerImageFilter | null;
    /** image_in */
    image_in?: _DockerImageFilter | null;
    /** image_not_in */
    image_not_in?: _DockerImageFilter | null;
    /** images */
    images?: _DockerImageFilter | null;
    /** images_not */
    images_not?: _DockerImageFilter | null;
    /** images_in */
    images_in?: _DockerImageFilter | null;
    /** images_not_in */
    images_not_in?: _DockerImageFilter | null;
    /** images_some */
    images_some?: _DockerImageFilter | null;
    /** images_none */
    images_none?: _DockerImageFilter | null;
    /** images_single */
    images_single?: _DockerImageFilter | null;
    /** images_every */
    images_every?: _DockerImageFilter | null;
}
/** Filter Input Type for Build */
export interface _BuildFilter {
    /** AND */
    AND?: _BuildFilter[] | null;
    /** OR */
    OR?: _BuildFilter[] | null;
    /** atmTeamId */
    atmTeamId?: string | null;
    /** atmTeamId_not */
    atmTeamId_not?: string | null;
    /** atmTeamId_in */
    atmTeamId_in?: string[] | null;
    /** atmTeamId_not_in */
    atmTeamId_not_in?: string[] | null;
    /** atmTeamId_lt */
    atmTeamId_lt?: string | null;
    /** atmTeamId_lte */
    atmTeamId_lte?: string | null;
    /** atmTeamId_gt */
    atmTeamId_gt?: string | null;
    /** atmTeamId_gte */
    atmTeamId_gte?: string | null;
    /** atmTeamId_contains */
    atmTeamId_contains?: string | null;
    /** atmTeamId_not_contains */
    atmTeamId_not_contains?: string | null;
    /** atmTeamId_starts_with */
    atmTeamId_starts_with?: string | null;
    /** atmTeamId_not_starts_with */
    atmTeamId_not_starts_with?: string | null;
    /** atmTeamId_ends_with */
    atmTeamId_ends_with?: string | null;
    /** atmTeamId_not_ends_with */
    atmTeamId_not_ends_with?: string | null;
    /** id */
    id?: string | null;
    /** id_not */
    id_not?: string | null;
    /** id_in */
    id_in?: string[] | null;
    /** id_not_in */
    id_not_in?: string[] | null;
    /** id_lt */
    id_lt?: string | null;
    /** id_lte */
    id_lte?: string | null;
    /** id_gt */
    id_gt?: string | null;
    /** id_gte */
    id_gte?: string | null;
    /** id_contains */
    id_contains?: string | null;
    /** id_not_contains */
    id_not_contains?: string | null;
    /** id_starts_with */
    id_starts_with?: string | null;
    /** id_not_starts_with */
    id_not_starts_with?: string | null;
    /** id_ends_with */
    id_ends_with?: string | null;
    /** id_not_ends_with */
    id_not_ends_with?: string | null;
    /** buildId */
    buildId?: string | null;
    /** buildId_not */
    buildId_not?: string | null;
    /** buildId_in */
    buildId_in?: string[] | null;
    /** buildId_not_in */
    buildId_not_in?: string[] | null;
    /** buildId_lt */
    buildId_lt?: string | null;
    /** buildId_lte */
    buildId_lte?: string | null;
    /** buildId_gt */
    buildId_gt?: string | null;
    /** buildId_gte */
    buildId_gte?: string | null;
    /** buildId_contains */
    buildId_contains?: string | null;
    /** buildId_not_contains */
    buildId_not_contains?: string | null;
    /** buildId_starts_with */
    buildId_starts_with?: string | null;
    /** buildId_not_starts_with */
    buildId_not_starts_with?: string | null;
    /** buildId_ends_with */
    buildId_ends_with?: string | null;
    /** buildId_not_ends_with */
    buildId_not_ends_with?: string | null;
    /** number */
    number?: number | null;
    /** number_not */
    number_not?: number | null;
    /** number_in */
    number_in?: number[] | null;
    /** number_not_in */
    number_not_in?: number[] | null;
    /** number_lt */
    number_lt?: number | null;
    /** number_lte */
    number_lte?: number | null;
    /** number_gt */
    number_gt?: number | null;
    /** number_gte */
    number_gte?: number | null;
    /** name */
    name?: string | null;
    /** name_not */
    name_not?: string | null;
    /** name_in */
    name_in?: string[] | null;
    /** name_not_in */
    name_not_in?: string[] | null;
    /** name_lt */
    name_lt?: string | null;
    /** name_lte */
    name_lte?: string | null;
    /** name_gt */
    name_gt?: string | null;
    /** name_gte */
    name_gte?: string | null;
    /** name_contains */
    name_contains?: string | null;
    /** name_not_contains */
    name_not_contains?: string | null;
    /** name_starts_with */
    name_starts_with?: string | null;
    /** name_not_starts_with */
    name_not_starts_with?: string | null;
    /** name_ends_with */
    name_ends_with?: string | null;
    /** name_not_ends_with */
    name_not_ends_with?: string | null;
    /** status */
    status?: BuildStatus | null;
    /** status_not */
    status_not?: BuildStatus | null;
    /** status_in */
    status_in?: BuildStatus[] | null;
    /** status_not_in */
    status_not_in?: BuildStatus[] | null;
    /** buildUrl */
    buildUrl?: string | null;
    /** buildUrl_not */
    buildUrl_not?: string | null;
    /** buildUrl_in */
    buildUrl_in?: string[] | null;
    /** buildUrl_not_in */
    buildUrl_not_in?: string[] | null;
    /** buildUrl_lt */
    buildUrl_lt?: string | null;
    /** buildUrl_lte */
    buildUrl_lte?: string | null;
    /** buildUrl_gt */
    buildUrl_gt?: string | null;
    /** buildUrl_gte */
    buildUrl_gte?: string | null;
    /** buildUrl_contains */
    buildUrl_contains?: string | null;
    /** buildUrl_not_contains */
    buildUrl_not_contains?: string | null;
    /** buildUrl_starts_with */
    buildUrl_starts_with?: string | null;
    /** buildUrl_not_starts_with */
    buildUrl_not_starts_with?: string | null;
    /** buildUrl_ends_with */
    buildUrl_ends_with?: string | null;
    /** buildUrl_not_ends_with */
    buildUrl_not_ends_with?: string | null;
    /** compareUrl */
    compareUrl?: string | null;
    /** compareUrl_not */
    compareUrl_not?: string | null;
    /** compareUrl_in */
    compareUrl_in?: string[] | null;
    /** compareUrl_not_in */
    compareUrl_not_in?: string[] | null;
    /** compareUrl_lt */
    compareUrl_lt?: string | null;
    /** compareUrl_lte */
    compareUrl_lte?: string | null;
    /** compareUrl_gt */
    compareUrl_gt?: string | null;
    /** compareUrl_gte */
    compareUrl_gte?: string | null;
    /** compareUrl_contains */
    compareUrl_contains?: string | null;
    /** compareUrl_not_contains */
    compareUrl_not_contains?: string | null;
    /** compareUrl_starts_with */
    compareUrl_starts_with?: string | null;
    /** compareUrl_not_starts_with */
    compareUrl_not_starts_with?: string | null;
    /** compareUrl_ends_with */
    compareUrl_ends_with?: string | null;
    /** compareUrl_not_ends_with */
    compareUrl_not_ends_with?: string | null;
    /** trigger */
    trigger?: BuildTrigger | null;
    /** trigger_not */
    trigger_not?: BuildTrigger | null;
    /** trigger_in */
    trigger_in?: BuildTrigger[] | null;
    /** trigger_not_in */
    trigger_not_in?: BuildTrigger[] | null;
    /** provider */
    provider?: string | null;
    /** provider_not */
    provider_not?: string | null;
    /** provider_in */
    provider_in?: string[] | null;
    /** provider_not_in */
    provider_not_in?: string[] | null;
    /** provider_lt */
    provider_lt?: string | null;
    /** provider_lte */
    provider_lte?: string | null;
    /** provider_gt */
    provider_gt?: string | null;
    /** provider_gte */
    provider_gte?: string | null;
    /** provider_contains */
    provider_contains?: string | null;
    /** provider_not_contains */
    provider_not_contains?: string | null;
    /** provider_starts_with */
    provider_starts_with?: string | null;
    /** provider_not_starts_with */
    provider_not_starts_with?: string | null;
    /** provider_ends_with */
    provider_ends_with?: string | null;
    /** provider_not_ends_with */
    provider_not_ends_with?: string | null;
    /** pullRequestNumber */
    pullRequestNumber?: number | null;
    /** pullRequestNumber_not */
    pullRequestNumber_not?: number | null;
    /** pullRequestNumber_in */
    pullRequestNumber_in?: number[] | null;
    /** pullRequestNumber_not_in */
    pullRequestNumber_not_in?: number[] | null;
    /** pullRequestNumber_lt */
    pullRequestNumber_lt?: number | null;
    /** pullRequestNumber_lte */
    pullRequestNumber_lte?: number | null;
    /** pullRequestNumber_gt */
    pullRequestNumber_gt?: number | null;
    /** pullRequestNumber_gte */
    pullRequestNumber_gte?: number | null;
    /** startedAt */
    startedAt?: string | null;
    /** startedAt_not */
    startedAt_not?: string | null;
    /** startedAt_in */
    startedAt_in?: string[] | null;
    /** startedAt_not_in */
    startedAt_not_in?: string[] | null;
    /** startedAt_lt */
    startedAt_lt?: string | null;
    /** startedAt_lte */
    startedAt_lte?: string | null;
    /** startedAt_gt */
    startedAt_gt?: string | null;
    /** startedAt_gte */
    startedAt_gte?: string | null;
    /** startedAt_contains */
    startedAt_contains?: string | null;
    /** startedAt_not_contains */
    startedAt_not_contains?: string | null;
    /** startedAt_starts_with */
    startedAt_starts_with?: string | null;
    /** startedAt_not_starts_with */
    startedAt_not_starts_with?: string | null;
    /** startedAt_ends_with */
    startedAt_ends_with?: string | null;
    /** startedAt_not_ends_with */
    startedAt_not_ends_with?: string | null;
    /** finishedAt */
    finishedAt?: string | null;
    /** finishedAt_not */
    finishedAt_not?: string | null;
    /** finishedAt_in */
    finishedAt_in?: string[] | null;
    /** finishedAt_not_in */
    finishedAt_not_in?: string[] | null;
    /** finishedAt_lt */
    finishedAt_lt?: string | null;
    /** finishedAt_lte */
    finishedAt_lte?: string | null;
    /** finishedAt_gt */
    finishedAt_gt?: string | null;
    /** finishedAt_gte */
    finishedAt_gte?: string | null;
    /** finishedAt_contains */
    finishedAt_contains?: string | null;
    /** finishedAt_not_contains */
    finishedAt_not_contains?: string | null;
    /** finishedAt_starts_with */
    finishedAt_starts_with?: string | null;
    /** finishedAt_not_starts_with */
    finishedAt_not_starts_with?: string | null;
    /** finishedAt_ends_with */
    finishedAt_ends_with?: string | null;
    /** finishedAt_not_ends_with */
    finishedAt_not_ends_with?: string | null;
    /** timestamp */
    timestamp?: string | null;
    /** timestamp_not */
    timestamp_not?: string | null;
    /** timestamp_in */
    timestamp_in?: string[] | null;
    /** timestamp_not_in */
    timestamp_not_in?: string[] | null;
    /** timestamp_lt */
    timestamp_lt?: string | null;
    /** timestamp_lte */
    timestamp_lte?: string | null;
    /** timestamp_gt */
    timestamp_gt?: string | null;
    /** timestamp_gte */
    timestamp_gte?: string | null;
    /** timestamp_contains */
    timestamp_contains?: string | null;
    /** timestamp_not_contains */
    timestamp_not_contains?: string | null;
    /** timestamp_starts_with */
    timestamp_starts_with?: string | null;
    /** timestamp_not_starts_with */
    timestamp_not_starts_with?: string | null;
    /** timestamp_ends_with */
    timestamp_ends_with?: string | null;
    /** timestamp_not_ends_with */
    timestamp_not_ends_with?: string | null;
    /** workflowId */
    workflowId?: string | null;
    /** workflowId_not */
    workflowId_not?: string | null;
    /** workflowId_in */
    workflowId_in?: string[] | null;
    /** workflowId_not_in */
    workflowId_not_in?: string[] | null;
    /** workflowId_lt */
    workflowId_lt?: string | null;
    /** workflowId_lte */
    workflowId_lte?: string | null;
    /** workflowId_gt */
    workflowId_gt?: string | null;
    /** workflowId_gte */
    workflowId_gte?: string | null;
    /** workflowId_contains */
    workflowId_contains?: string | null;
    /** workflowId_not_contains */
    workflowId_not_contains?: string | null;
    /** workflowId_starts_with */
    workflowId_starts_with?: string | null;
    /** workflowId_not_starts_with */
    workflowId_not_starts_with?: string | null;
    /** workflowId_ends_with */
    workflowId_ends_with?: string | null;
    /** workflowId_not_ends_with */
    workflowId_not_ends_with?: string | null;
    /** jobName */
    jobName?: string | null;
    /** jobName_not */
    jobName_not?: string | null;
    /** jobName_in */
    jobName_in?: string[] | null;
    /** jobName_not_in */
    jobName_not_in?: string[] | null;
    /** jobName_lt */
    jobName_lt?: string | null;
    /** jobName_lte */
    jobName_lte?: string | null;
    /** jobName_gt */
    jobName_gt?: string | null;
    /** jobName_gte */
    jobName_gte?: string | null;
    /** jobName_contains */
    jobName_contains?: string | null;
    /** jobName_not_contains */
    jobName_not_contains?: string | null;
    /** jobName_starts_with */
    jobName_starts_with?: string | null;
    /** jobName_not_starts_with */
    jobName_not_starts_with?: string | null;
    /** jobName_ends_with */
    jobName_ends_with?: string | null;
    /** jobName_not_ends_with */
    jobName_not_ends_with?: string | null;
    /** jobId */
    jobId?: string | null;
    /** jobId_not */
    jobId_not?: string | null;
    /** jobId_in */
    jobId_in?: string[] | null;
    /** jobId_not_in */
    jobId_not_in?: string[] | null;
    /** jobId_lt */
    jobId_lt?: string | null;
    /** jobId_lte */
    jobId_lte?: string | null;
    /** jobId_gt */
    jobId_gt?: string | null;
    /** jobId_gte */
    jobId_gte?: string | null;
    /** jobId_contains */
    jobId_contains?: string | null;
    /** jobId_not_contains */
    jobId_not_contains?: string | null;
    /** jobId_starts_with */
    jobId_starts_with?: string | null;
    /** jobId_not_starts_with */
    jobId_not_starts_with?: string | null;
    /** jobId_ends_with */
    jobId_ends_with?: string | null;
    /** jobId_not_ends_with */
    jobId_not_ends_with?: string | null;
    /** data */
    data?: string | null;
    /** data_not */
    data_not?: string | null;
    /** data_in */
    data_in?: string[] | null;
    /** data_not_in */
    data_not_in?: string[] | null;
    /** data_lt */
    data_lt?: string | null;
    /** data_lte */
    data_lte?: string | null;
    /** data_gt */
    data_gt?: string | null;
    /** data_gte */
    data_gte?: string | null;
    /** data_contains */
    data_contains?: string | null;
    /** data_not_contains */
    data_not_contains?: string | null;
    /** data_starts_with */
    data_starts_with?: string | null;
    /** data_not_starts_with */
    data_not_starts_with?: string | null;
    /** data_ends_with */
    data_ends_with?: string | null;
    /** data_not_ends_with */
    data_not_ends_with?: string | null;
    /** repo */
    repo?: _RepoFilter | null;
    /** repo_not */
    repo_not?: _RepoFilter | null;
    /** repo_in */
    repo_in?: _RepoFilter | null;
    /** repo_not_in */
    repo_not_in?: _RepoFilter | null;
    /** push */
    push?: _PushFilter | null;
    /** push_not */
    push_not?: _PushFilter | null;
    /** push_in */
    push_in?: _PushFilter | null;
    /** push_not_in */
    push_not_in?: _PushFilter | null;
    /** pullRequest */
    pullRequest?: _PullRequestFilter | null;
    /** pullRequest_not */
    pullRequest_not?: _PullRequestFilter | null;
    /** pullRequest_in */
    pullRequest_in?: _PullRequestFilter | null;
    /** pullRequest_not_in */
    pullRequest_not_in?: _PullRequestFilter | null;
    /** tag */
    tag?: _TagFilter | null;
    /** tag_not */
    tag_not?: _TagFilter | null;
    /** tag_in */
    tag_in?: _TagFilter | null;
    /** tag_not_in */
    tag_not_in?: _TagFilter | null;
    /** commit */
    commit?: _CommitFilter | null;
    /** commit_not */
    commit_not?: _CommitFilter | null;
    /** commit_in */
    commit_in?: _CommitFilter | null;
    /** commit_not_in */
    commit_not_in?: _CommitFilter | null;
    /** workflow */
    workflow?: _WorkflowFilter | null;
    /** workflow_not */
    workflow_not?: _WorkflowFilter | null;
    /** workflow_in */
    workflow_in?: _WorkflowFilter | null;
    /** workflow_not_in */
    workflow_not_in?: _WorkflowFilter | null;
}
/** Filter Input Type for Push */
export interface _PushFilter {
    /** AND */
    AND?: _PushFilter[] | null;
    /** OR */
    OR?: _PushFilter[] | null;
    /** atmTeamId */
    atmTeamId?: string | null;
    /** atmTeamId_not */
    atmTeamId_not?: string | null;
    /** atmTeamId_in */
    atmTeamId_in?: string[] | null;
    /** atmTeamId_not_in */
    atmTeamId_not_in?: string[] | null;
    /** atmTeamId_lt */
    atmTeamId_lt?: string | null;
    /** atmTeamId_lte */
    atmTeamId_lte?: string | null;
    /** atmTeamId_gt */
    atmTeamId_gt?: string | null;
    /** atmTeamId_gte */
    atmTeamId_gte?: string | null;
    /** atmTeamId_contains */
    atmTeamId_contains?: string | null;
    /** atmTeamId_not_contains */
    atmTeamId_not_contains?: string | null;
    /** atmTeamId_starts_with */
    atmTeamId_starts_with?: string | null;
    /** atmTeamId_not_starts_with */
    atmTeamId_not_starts_with?: string | null;
    /** atmTeamId_ends_with */
    atmTeamId_ends_with?: string | null;
    /** atmTeamId_not_ends_with */
    atmTeamId_not_ends_with?: string | null;
    /** id */
    id?: string | null;
    /** id_not */
    id_not?: string | null;
    /** id_in */
    id_in?: string[] | null;
    /** id_not_in */
    id_not_in?: string[] | null;
    /** id_lt */
    id_lt?: string | null;
    /** id_lte */
    id_lte?: string | null;
    /** id_gt */
    id_gt?: string | null;
    /** id_gte */
    id_gte?: string | null;
    /** id_contains */
    id_contains?: string | null;
    /** id_not_contains */
    id_not_contains?: string | null;
    /** id_starts_with */
    id_starts_with?: string | null;
    /** id_not_starts_with */
    id_not_starts_with?: string | null;
    /** id_ends_with */
    id_ends_with?: string | null;
    /** id_not_ends_with */
    id_not_ends_with?: string | null;
    /** timestamp */
    timestamp?: string | null;
    /** timestamp_not */
    timestamp_not?: string | null;
    /** timestamp_in */
    timestamp_in?: string[] | null;
    /** timestamp_not_in */
    timestamp_not_in?: string[] | null;
    /** timestamp_lt */
    timestamp_lt?: string | null;
    /** timestamp_lte */
    timestamp_lte?: string | null;
    /** timestamp_gt */
    timestamp_gt?: string | null;
    /** timestamp_gte */
    timestamp_gte?: string | null;
    /** timestamp_contains */
    timestamp_contains?: string | null;
    /** timestamp_not_contains */
    timestamp_not_contains?: string | null;
    /** timestamp_starts_with */
    timestamp_starts_with?: string | null;
    /** timestamp_not_starts_with */
    timestamp_not_starts_with?: string | null;
    /** timestamp_ends_with */
    timestamp_ends_with?: string | null;
    /** timestamp_not_ends_with */
    timestamp_not_ends_with?: string | null;
    /** branch */
    branch?: string | null;
    /** branch_not */
    branch_not?: string | null;
    /** branch_in */
    branch_in?: string[] | null;
    /** branch_not_in */
    branch_not_in?: string[] | null;
    /** branch_lt */
    branch_lt?: string | null;
    /** branch_lte */
    branch_lte?: string | null;
    /** branch_gt */
    branch_gt?: string | null;
    /** branch_gte */
    branch_gte?: string | null;
    /** branch_contains */
    branch_contains?: string | null;
    /** branch_not_contains */
    branch_not_contains?: string | null;
    /** branch_starts_with */
    branch_starts_with?: string | null;
    /** branch_not_starts_with */
    branch_not_starts_with?: string | null;
    /** branch_ends_with */
    branch_ends_with?: string | null;
    /** branch_not_ends_with */
    branch_not_ends_with?: string | null;
    /** after */
    after?: _CommitFilter | null;
    /** after_not */
    after_not?: _CommitFilter | null;
    /** after_in */
    after_in?: _CommitFilter | null;
    /** after_not_in */
    after_not_in?: _CommitFilter | null;
    /** before */
    before?: _CommitFilter | null;
    /** before_not */
    before_not?: _CommitFilter | null;
    /** before_in */
    before_in?: _CommitFilter | null;
    /** before_not_in */
    before_not_in?: _CommitFilter | null;
    /** commits */
    commits?: _CommitFilter | null;
    /** commits_not */
    commits_not?: _CommitFilter | null;
    /** commits_in */
    commits_in?: _CommitFilter | null;
    /** commits_not_in */
    commits_not_in?: _CommitFilter | null;
    /** commits_some */
    commits_some?: _CommitFilter | null;
    /** commits_none */
    commits_none?: _CommitFilter | null;
    /** commits_single */
    commits_single?: _CommitFilter | null;
    /** commits_every */
    commits_every?: _CommitFilter | null;
    /** repo */
    repo?: _RepoFilter | null;
    /** repo_not */
    repo_not?: _RepoFilter | null;
    /** repo_in */
    repo_in?: _RepoFilter | null;
    /** repo_not_in */
    repo_not_in?: _RepoFilter | null;
    /** builds */
    builds?: _BuildFilter | null;
    /** builds_not */
    builds_not?: _BuildFilter | null;
    /** builds_in */
    builds_in?: _BuildFilter | null;
    /** builds_not_in */
    builds_not_in?: _BuildFilter | null;
    /** builds_some */
    builds_some?: _BuildFilter | null;
    /** builds_none */
    builds_none?: _BuildFilter | null;
    /** builds_single */
    builds_single?: _BuildFilter | null;
    /** builds_every */
    builds_every?: _BuildFilter | null;
    /** pipelines */
    pipelines?: _PipelineFilter | null;
    /** pipelines_not */
    pipelines_not?: _PipelineFilter | null;
    /** pipelines_in */
    pipelines_in?: _PipelineFilter | null;
    /** pipelines_not_in */
    pipelines_not_in?: _PipelineFilter | null;
    /** pipelines_some */
    pipelines_some?: _PipelineFilter | null;
    /** pipelines_none */
    pipelines_none?: _PipelineFilter | null;
    /** pipelines_single */
    pipelines_single?: _PipelineFilter | null;
    /** pipelines_every */
    pipelines_every?: _PipelineFilter | null;
}
/** Filter Input Type for Pipeline */
export interface _PipelineFilter {
    /** AND */
    AND?: _PipelineFilter[] | null;
    /** OR */
    OR?: _PipelineFilter[] | null;
    /** atmTeamId */
    atmTeamId?: string | null;
    /** atmTeamId_not */
    atmTeamId_not?: string | null;
    /** atmTeamId_in */
    atmTeamId_in?: string[] | null;
    /** atmTeamId_not_in */
    atmTeamId_not_in?: string[] | null;
    /** atmTeamId_lt */
    atmTeamId_lt?: string | null;
    /** atmTeamId_lte */
    atmTeamId_lte?: string | null;
    /** atmTeamId_gt */
    atmTeamId_gt?: string | null;
    /** atmTeamId_gte */
    atmTeamId_gte?: string | null;
    /** atmTeamId_contains */
    atmTeamId_contains?: string | null;
    /** atmTeamId_not_contains */
    atmTeamId_not_contains?: string | null;
    /** atmTeamId_starts_with */
    atmTeamId_starts_with?: string | null;
    /** atmTeamId_not_starts_with */
    atmTeamId_not_starts_with?: string | null;
    /** atmTeamId_ends_with */
    atmTeamId_ends_with?: string | null;
    /** atmTeamId_not_ends_with */
    atmTeamId_not_ends_with?: string | null;
    /** status */
    status?: PipelineStatus | null;
    /** status_not */
    status_not?: PipelineStatus | null;
    /** status_in */
    status_in?: PipelineStatus[] | null;
    /** status_not_in */
    status_not_in?: PipelineStatus[] | null;
    /** provider */
    provider?: PipelineProvider | null;
    /** provider_not */
    provider_not?: PipelineProvider | null;
    /** provider_in */
    provider_in?: PipelineProvider[] | null;
    /** provider_not_in */
    provider_not_in?: PipelineProvider[] | null;
    /** pipelineId */
    pipelineId?: string | null;
    /** pipelineId_not */
    pipelineId_not?: string | null;
    /** pipelineId_in */
    pipelineId_in?: string[] | null;
    /** pipelineId_not_in */
    pipelineId_not_in?: string[] | null;
    /** pipelineId_lt */
    pipelineId_lt?: string | null;
    /** pipelineId_lte */
    pipelineId_lte?: string | null;
    /** pipelineId_gt */
    pipelineId_gt?: string | null;
    /** pipelineId_gte */
    pipelineId_gte?: string | null;
    /** pipelineId_contains */
    pipelineId_contains?: string | null;
    /** pipelineId_not_contains */
    pipelineId_not_contains?: string | null;
    /** pipelineId_starts_with */
    pipelineId_starts_with?: string | null;
    /** pipelineId_not_starts_with */
    pipelineId_not_starts_with?: string | null;
    /** pipelineId_ends_with */
    pipelineId_ends_with?: string | null;
    /** pipelineId_not_ends_with */
    pipelineId_not_ends_with?: string | null;
    /** createdAt */
    createdAt?: string | null;
    /** createdAt_not */
    createdAt_not?: string | null;
    /** createdAt_in */
    createdAt_in?: string[] | null;
    /** createdAt_not_in */
    createdAt_not_in?: string[] | null;
    /** createdAt_lt */
    createdAt_lt?: string | null;
    /** createdAt_lte */
    createdAt_lte?: string | null;
    /** createdAt_gt */
    createdAt_gt?: string | null;
    /** createdAt_gte */
    createdAt_gte?: string | null;
    /** createdAt_contains */
    createdAt_contains?: string | null;
    /** createdAt_not_contains */
    createdAt_not_contains?: string | null;
    /** createdAt_starts_with */
    createdAt_starts_with?: string | null;
    /** createdAt_not_starts_with */
    createdAt_not_starts_with?: string | null;
    /** createdAt_ends_with */
    createdAt_ends_with?: string | null;
    /** createdAt_not_ends_with */
    createdAt_not_ends_with?: string | null;
    /** finishedAt */
    finishedAt?: string | null;
    /** finishedAt_not */
    finishedAt_not?: string | null;
    /** finishedAt_in */
    finishedAt_in?: string[] | null;
    /** finishedAt_not_in */
    finishedAt_not_in?: string[] | null;
    /** finishedAt_lt */
    finishedAt_lt?: string | null;
    /** finishedAt_lte */
    finishedAt_lte?: string | null;
    /** finishedAt_gt */
    finishedAt_gt?: string | null;
    /** finishedAt_gte */
    finishedAt_gte?: string | null;
    /** finishedAt_contains */
    finishedAt_contains?: string | null;
    /** finishedAt_not_contains */
    finishedAt_not_contains?: string | null;
    /** finishedAt_starts_with */
    finishedAt_starts_with?: string | null;
    /** finishedAt_not_starts_with */
    finishedAt_not_starts_with?: string | null;
    /** finishedAt_ends_with */
    finishedAt_ends_with?: string | null;
    /** finishedAt_not_ends_with */
    finishedAt_not_ends_with?: string | null;
    /** repo */
    repo?: _RepoFilter | null;
    /** repo_not */
    repo_not?: _RepoFilter | null;
    /** repo_in */
    repo_in?: _RepoFilter | null;
    /** repo_not_in */
    repo_not_in?: _RepoFilter | null;
    /** push */
    push?: _PushFilter | null;
    /** push_not */
    push_not?: _PushFilter | null;
    /** push_in */
    push_in?: _PushFilter | null;
    /** push_not_in */
    push_not_in?: _PushFilter | null;
    /** commit */
    commit?: _CommitFilter | null;
    /** commit_not */
    commit_not?: _CommitFilter | null;
    /** commit_in */
    commit_in?: _CommitFilter | null;
    /** commit_not_in */
    commit_not_in?: _CommitFilter | null;
    /** stages */
    stages?: _StageFilter | null;
    /** stages_not */
    stages_not?: _StageFilter | null;
    /** stages_in */
    stages_in?: _StageFilter | null;
    /** stages_not_in */
    stages_not_in?: _StageFilter | null;
    /** stages_some */
    stages_some?: _StageFilter | null;
    /** stages_none */
    stages_none?: _StageFilter | null;
    /** stages_single */
    stages_single?: _StageFilter | null;
    /** stages_every */
    stages_every?: _StageFilter | null;
}
/** Filter Input Type for Stage */
export interface _StageFilter {
    /** AND */
    AND?: _StageFilter[] | null;
    /** OR */
    OR?: _StageFilter[] | null;
    /** atmTeamId */
    atmTeamId?: string | null;
    /** atmTeamId_not */
    atmTeamId_not?: string | null;
    /** atmTeamId_in */
    atmTeamId_in?: string[] | null;
    /** atmTeamId_not_in */
    atmTeamId_not_in?: string[] | null;
    /** atmTeamId_lt */
    atmTeamId_lt?: string | null;
    /** atmTeamId_lte */
    atmTeamId_lte?: string | null;
    /** atmTeamId_gt */
    atmTeamId_gt?: string | null;
    /** atmTeamId_gte */
    atmTeamId_gte?: string | null;
    /** atmTeamId_contains */
    atmTeamId_contains?: string | null;
    /** atmTeamId_not_contains */
    atmTeamId_not_contains?: string | null;
    /** atmTeamId_starts_with */
    atmTeamId_starts_with?: string | null;
    /** atmTeamId_not_starts_with */
    atmTeamId_not_starts_with?: string | null;
    /** atmTeamId_ends_with */
    atmTeamId_ends_with?: string | null;
    /** atmTeamId_not_ends_with */
    atmTeamId_not_ends_with?: string | null;
    /** name */
    name?: string | null;
    /** name_not */
    name_not?: string | null;
    /** name_in */
    name_in?: string[] | null;
    /** name_not_in */
    name_not_in?: string[] | null;
    /** name_lt */
    name_lt?: string | null;
    /** name_lte */
    name_lte?: string | null;
    /** name_gt */
    name_gt?: string | null;
    /** name_gte */
    name_gte?: string | null;
    /** name_contains */
    name_contains?: string | null;
    /** name_not_contains */
    name_not_contains?: string | null;
    /** name_starts_with */
    name_starts_with?: string | null;
    /** name_not_starts_with */
    name_not_starts_with?: string | null;
    /** name_ends_with */
    name_ends_with?: string | null;
    /** name_not_ends_with */
    name_not_ends_with?: string | null;
    /** pipeline */
    pipeline?: _PipelineFilter | null;
    /** pipeline_not */
    pipeline_not?: _PipelineFilter | null;
    /** pipeline_in */
    pipeline_in?: _PipelineFilter | null;
    /** pipeline_not_in */
    pipeline_not_in?: _PipelineFilter | null;
    /** jobs */
    jobs?: _JobFilter | null;
    /** jobs_not */
    jobs_not?: _JobFilter | null;
    /** jobs_in */
    jobs_in?: _JobFilter | null;
    /** jobs_not_in */
    jobs_not_in?: _JobFilter | null;
    /** jobs_some */
    jobs_some?: _JobFilter | null;
    /** jobs_none */
    jobs_none?: _JobFilter | null;
    /** jobs_single */
    jobs_single?: _JobFilter | null;
    /** jobs_every */
    jobs_every?: _JobFilter | null;
}
/** Filter Input Type for Job */
export interface _JobFilter {
    /** AND */
    AND?: _JobFilter[] | null;
    /** OR */
    OR?: _JobFilter[] | null;
    /** atmTeamId */
    atmTeamId?: string | null;
    /** atmTeamId_not */
    atmTeamId_not?: string | null;
    /** atmTeamId_in */
    atmTeamId_in?: string[] | null;
    /** atmTeamId_not_in */
    atmTeamId_not_in?: string[] | null;
    /** atmTeamId_lt */
    atmTeamId_lt?: string | null;
    /** atmTeamId_lte */
    atmTeamId_lte?: string | null;
    /** atmTeamId_gt */
    atmTeamId_gt?: string | null;
    /** atmTeamId_gte */
    atmTeamId_gte?: string | null;
    /** atmTeamId_contains */
    atmTeamId_contains?: string | null;
    /** atmTeamId_not_contains */
    atmTeamId_not_contains?: string | null;
    /** atmTeamId_starts_with */
    atmTeamId_starts_with?: string | null;
    /** atmTeamId_not_starts_with */
    atmTeamId_not_starts_with?: string | null;
    /** atmTeamId_ends_with */
    atmTeamId_ends_with?: string | null;
    /** atmTeamId_not_ends_with */
    atmTeamId_not_ends_with?: string | null;
    /** when */
    when?: string | null;
    /** when_not */
    when_not?: string | null;
    /** when_in */
    when_in?: string[] | null;
    /** when_not_in */
    when_not_in?: string[] | null;
    /** when_lt */
    when_lt?: string | null;
    /** when_lte */
    when_lte?: string | null;
    /** when_gt */
    when_gt?: string | null;
    /** when_gte */
    when_gte?: string | null;
    /** when_contains */
    when_contains?: string | null;
    /** when_not_contains */
    when_not_contains?: string | null;
    /** when_starts_with */
    when_starts_with?: string | null;
    /** when_not_starts_with */
    when_not_starts_with?: string | null;
    /** when_ends_with */
    when_ends_with?: string | null;
    /** when_not_ends_with */
    when_not_ends_with?: string | null;
    /** manual */
    manual?: boolean | null;
    /** manual_not */
    manual_not?: boolean | null;
    /** name */
    name?: string | null;
    /** name_not */
    name_not?: string | null;
    /** name_in */
    name_in?: string[] | null;
    /** name_not_in */
    name_not_in?: string[] | null;
    /** name_lt */
    name_lt?: string | null;
    /** name_lte */
    name_lte?: string | null;
    /** name_gt */
    name_gt?: string | null;
    /** name_gte */
    name_gte?: string | null;
    /** name_contains */
    name_contains?: string | null;
    /** name_not_contains */
    name_not_contains?: string | null;
    /** name_starts_with */
    name_starts_with?: string | null;
    /** name_not_starts_with */
    name_not_starts_with?: string | null;
    /** name_ends_with */
    name_ends_with?: string | null;
    /** name_not_ends_with */
    name_not_ends_with?: string | null;
    /** jobId */
    jobId?: string | null;
    /** jobId_not */
    jobId_not?: string | null;
    /** jobId_in */
    jobId_in?: string[] | null;
    /** jobId_not_in */
    jobId_not_in?: string[] | null;
    /** jobId_lt */
    jobId_lt?: string | null;
    /** jobId_lte */
    jobId_lte?: string | null;
    /** jobId_gt */
    jobId_gt?: string | null;
    /** jobId_gte */
    jobId_gte?: string | null;
    /** jobId_contains */
    jobId_contains?: string | null;
    /** jobId_not_contains */
    jobId_not_contains?: string | null;
    /** jobId_starts_with */
    jobId_starts_with?: string | null;
    /** jobId_not_starts_with */
    jobId_not_starts_with?: string | null;
    /** jobId_ends_with */
    jobId_ends_with?: string | null;
    /** jobId_not_ends_with */
    jobId_not_ends_with?: string | null;
    /** startedAt */
    startedAt?: string | null;
    /** startedAt_not */
    startedAt_not?: string | null;
    /** startedAt_in */
    startedAt_in?: string[] | null;
    /** startedAt_not_in */
    startedAt_not_in?: string[] | null;
    /** startedAt_lt */
    startedAt_lt?: string | null;
    /** startedAt_lte */
    startedAt_lte?: string | null;
    /** startedAt_gt */
    startedAt_gt?: string | null;
    /** startedAt_gte */
    startedAt_gte?: string | null;
    /** startedAt_contains */
    startedAt_contains?: string | null;
    /** startedAt_not_contains */
    startedAt_not_contains?: string | null;
    /** startedAt_starts_with */
    startedAt_starts_with?: string | null;
    /** startedAt_not_starts_with */
    startedAt_not_starts_with?: string | null;
    /** startedAt_ends_with */
    startedAt_ends_with?: string | null;
    /** startedAt_not_ends_with */
    startedAt_not_ends_with?: string | null;
    /** finishedAt */
    finishedAt?: string | null;
    /** finishedAt_not */
    finishedAt_not?: string | null;
    /** finishedAt_in */
    finishedAt_in?: string[] | null;
    /** finishedAt_not_in */
    finishedAt_not_in?: string[] | null;
    /** finishedAt_lt */
    finishedAt_lt?: string | null;
    /** finishedAt_lte */
    finishedAt_lte?: string | null;
    /** finishedAt_gt */
    finishedAt_gt?: string | null;
    /** finishedAt_gte */
    finishedAt_gte?: string | null;
    /** finishedAt_contains */
    finishedAt_contains?: string | null;
    /** finishedAt_not_contains */
    finishedAt_not_contains?: string | null;
    /** finishedAt_starts_with */
    finishedAt_starts_with?: string | null;
    /** finishedAt_not_starts_with */
    finishedAt_not_starts_with?: string | null;
    /** finishedAt_ends_with */
    finishedAt_ends_with?: string | null;
    /** finishedAt_not_ends_with */
    finishedAt_not_ends_with?: string | null;
    /** status */
    status?: JobStatus | null;
    /** status_not */
    status_not?: JobStatus | null;
    /** status_in */
    status_in?: JobStatus[] | null;
    /** status_not_in */
    status_not_in?: JobStatus[] | null;
    /** runner */
    runner?: string | null;
    /** runner_not */
    runner_not?: string | null;
    /** runner_in */
    runner_in?: string[] | null;
    /** runner_not_in */
    runner_not_in?: string[] | null;
    /** runner_lt */
    runner_lt?: string | null;
    /** runner_lte */
    runner_lte?: string | null;
    /** runner_gt */
    runner_gt?: string | null;
    /** runner_gte */
    runner_gte?: string | null;
    /** runner_contains */
    runner_contains?: string | null;
    /** runner_not_contains */
    runner_not_contains?: string | null;
    /** runner_starts_with */
    runner_starts_with?: string | null;
    /** runner_not_starts_with */
    runner_not_starts_with?: string | null;
    /** runner_ends_with */
    runner_ends_with?: string | null;
    /** runner_not_ends_with */
    runner_not_ends_with?: string | null;
    /** stage */
    stage?: _StageFilter | null;
    /** stage_not */
    stage_not?: _StageFilter | null;
    /** stage_in */
    stage_in?: _StageFilter | null;
    /** stage_not_in */
    stage_not_in?: _StageFilter | null;
}
/** Filter Input Type for Tag */
export interface _TagFilter {
    /** AND */
    AND?: _TagFilter[] | null;
    /** OR */
    OR?: _TagFilter[] | null;
    /** atmTeamId */
    atmTeamId?: string | null;
    /** atmTeamId_not */
    atmTeamId_not?: string | null;
    /** atmTeamId_in */
    atmTeamId_in?: string[] | null;
    /** atmTeamId_not_in */
    atmTeamId_not_in?: string[] | null;
    /** atmTeamId_lt */
    atmTeamId_lt?: string | null;
    /** atmTeamId_lte */
    atmTeamId_lte?: string | null;
    /** atmTeamId_gt */
    atmTeamId_gt?: string | null;
    /** atmTeamId_gte */
    atmTeamId_gte?: string | null;
    /** atmTeamId_contains */
    atmTeamId_contains?: string | null;
    /** atmTeamId_not_contains */
    atmTeamId_not_contains?: string | null;
    /** atmTeamId_starts_with */
    atmTeamId_starts_with?: string | null;
    /** atmTeamId_not_starts_with */
    atmTeamId_not_starts_with?: string | null;
    /** atmTeamId_ends_with */
    atmTeamId_ends_with?: string | null;
    /** atmTeamId_not_ends_with */
    atmTeamId_not_ends_with?: string | null;
    /** id */
    id?: string | null;
    /** id_not */
    id_not?: string | null;
    /** id_in */
    id_in?: string[] | null;
    /** id_not_in */
    id_not_in?: string[] | null;
    /** id_lt */
    id_lt?: string | null;
    /** id_lte */
    id_lte?: string | null;
    /** id_gt */
    id_gt?: string | null;
    /** id_gte */
    id_gte?: string | null;
    /** id_contains */
    id_contains?: string | null;
    /** id_not_contains */
    id_not_contains?: string | null;
    /** id_starts_with */
    id_starts_with?: string | null;
    /** id_not_starts_with */
    id_not_starts_with?: string | null;
    /** id_ends_with */
    id_ends_with?: string | null;
    /** id_not_ends_with */
    id_not_ends_with?: string | null;
    /** name */
    name?: string | null;
    /** name_not */
    name_not?: string | null;
    /** name_in */
    name_in?: string[] | null;
    /** name_not_in */
    name_not_in?: string[] | null;
    /** name_lt */
    name_lt?: string | null;
    /** name_lte */
    name_lte?: string | null;
    /** name_gt */
    name_gt?: string | null;
    /** name_gte */
    name_gte?: string | null;
    /** name_contains */
    name_contains?: string | null;
    /** name_not_contains */
    name_not_contains?: string | null;
    /** name_starts_with */
    name_starts_with?: string | null;
    /** name_not_starts_with */
    name_not_starts_with?: string | null;
    /** name_ends_with */
    name_ends_with?: string | null;
    /** name_not_ends_with */
    name_not_ends_with?: string | null;
    /** description */
    description?: string | null;
    /** description_not */
    description_not?: string | null;
    /** description_in */
    description_in?: string[] | null;
    /** description_not_in */
    description_not_in?: string[] | null;
    /** description_lt */
    description_lt?: string | null;
    /** description_lte */
    description_lte?: string | null;
    /** description_gt */
    description_gt?: string | null;
    /** description_gte */
    description_gte?: string | null;
    /** description_contains */
    description_contains?: string | null;
    /** description_not_contains */
    description_not_contains?: string | null;
    /** description_starts_with */
    description_starts_with?: string | null;
    /** description_not_starts_with */
    description_not_starts_with?: string | null;
    /** description_ends_with */
    description_ends_with?: string | null;
    /** description_not_ends_with */
    description_not_ends_with?: string | null;
    /** ref */
    ref?: string | null;
    /** ref_not */
    ref_not?: string | null;
    /** ref_in */
    ref_in?: string[] | null;
    /** ref_not_in */
    ref_not_in?: string[] | null;
    /** ref_lt */
    ref_lt?: string | null;
    /** ref_lte */
    ref_lte?: string | null;
    /** ref_gt */
    ref_gt?: string | null;
    /** ref_gte */
    ref_gte?: string | null;
    /** ref_contains */
    ref_contains?: string | null;
    /** ref_not_contains */
    ref_not_contains?: string | null;
    /** ref_starts_with */
    ref_starts_with?: string | null;
    /** ref_not_starts_with */
    ref_not_starts_with?: string | null;
    /** ref_ends_with */
    ref_ends_with?: string | null;
    /** ref_not_ends_with */
    ref_not_ends_with?: string | null;
    /** timestamp */
    timestamp?: string | null;
    /** timestamp_not */
    timestamp_not?: string | null;
    /** timestamp_in */
    timestamp_in?: string[] | null;
    /** timestamp_not_in */
    timestamp_not_in?: string[] | null;
    /** timestamp_lt */
    timestamp_lt?: string | null;
    /** timestamp_lte */
    timestamp_lte?: string | null;
    /** timestamp_gt */
    timestamp_gt?: string | null;
    /** timestamp_gte */
    timestamp_gte?: string | null;
    /** timestamp_contains */
    timestamp_contains?: string | null;
    /** timestamp_not_contains */
    timestamp_not_contains?: string | null;
    /** timestamp_starts_with */
    timestamp_starts_with?: string | null;
    /** timestamp_not_starts_with */
    timestamp_not_starts_with?: string | null;
    /** timestamp_ends_with */
    timestamp_ends_with?: string | null;
    /** timestamp_not_ends_with */
    timestamp_not_ends_with?: string | null;
    /** release */
    release?: _ReleaseFilter | null;
    /** release_not */
    release_not?: _ReleaseFilter | null;
    /** release_in */
    release_in?: _ReleaseFilter | null;
    /** release_not_in */
    release_not_in?: _ReleaseFilter | null;
    /** commit */
    commit?: _CommitFilter | null;
    /** commit_not */
    commit_not?: _CommitFilter | null;
    /** commit_in */
    commit_in?: _CommitFilter | null;
    /** commit_not_in */
    commit_not_in?: _CommitFilter | null;
    /** containers */
    containers?: _DockerImageFilter | null;
    /** containers_not */
    containers_not?: _DockerImageFilter | null;
    /** containers_in */
    containers_in?: _DockerImageFilter | null;
    /** containers_not_in */
    containers_not_in?: _DockerImageFilter | null;
    /** containers_some */
    containers_some?: _DockerImageFilter | null;
    /** containers_none */
    containers_none?: _DockerImageFilter | null;
    /** containers_single */
    containers_single?: _DockerImageFilter | null;
    /** containers_every */
    containers_every?: _DockerImageFilter | null;
    /** builds */
    builds?: _BuildFilter | null;
    /** builds_not */
    builds_not?: _BuildFilter | null;
    /** builds_in */
    builds_in?: _BuildFilter | null;
    /** builds_not_in */
    builds_not_in?: _BuildFilter | null;
    /** builds_some */
    builds_some?: _BuildFilter | null;
    /** builds_none */
    builds_none?: _BuildFilter | null;
    /** builds_single */
    builds_single?: _BuildFilter | null;
    /** builds_every */
    builds_every?: _BuildFilter | null;
}
/** Filter Input Type for Release */
export interface _ReleaseFilter {
    /** AND */
    AND?: _ReleaseFilter[] | null;
    /** OR */
    OR?: _ReleaseFilter[] | null;
    /** atmTeamId */
    atmTeamId?: string | null;
    /** atmTeamId_not */
    atmTeamId_not?: string | null;
    /** atmTeamId_in */
    atmTeamId_in?: string[] | null;
    /** atmTeamId_not_in */
    atmTeamId_not_in?: string[] | null;
    /** atmTeamId_lt */
    atmTeamId_lt?: string | null;
    /** atmTeamId_lte */
    atmTeamId_lte?: string | null;
    /** atmTeamId_gt */
    atmTeamId_gt?: string | null;
    /** atmTeamId_gte */
    atmTeamId_gte?: string | null;
    /** atmTeamId_contains */
    atmTeamId_contains?: string | null;
    /** atmTeamId_not_contains */
    atmTeamId_not_contains?: string | null;
    /** atmTeamId_starts_with */
    atmTeamId_starts_with?: string | null;
    /** atmTeamId_not_starts_with */
    atmTeamId_not_starts_with?: string | null;
    /** atmTeamId_ends_with */
    atmTeamId_ends_with?: string | null;
    /** atmTeamId_not_ends_with */
    atmTeamId_not_ends_with?: string | null;
    /** id */
    id?: string | null;
    /** id_not */
    id_not?: string | null;
    /** id_in */
    id_in?: string[] | null;
    /** id_not_in */
    id_not_in?: string[] | null;
    /** id_lt */
    id_lt?: string | null;
    /** id_lte */
    id_lte?: string | null;
    /** id_gt */
    id_gt?: string | null;
    /** id_gte */
    id_gte?: string | null;
    /** id_contains */
    id_contains?: string | null;
    /** id_not_contains */
    id_not_contains?: string | null;
    /** id_starts_with */
    id_starts_with?: string | null;
    /** id_not_starts_with */
    id_not_starts_with?: string | null;
    /** id_ends_with */
    id_ends_with?: string | null;
    /** id_not_ends_with */
    id_not_ends_with?: string | null;
    /** name */
    name?: string | null;
    /** name_not */
    name_not?: string | null;
    /** name_in */
    name_in?: string[] | null;
    /** name_not_in */
    name_not_in?: string[] | null;
    /** name_lt */
    name_lt?: string | null;
    /** name_lte */
    name_lte?: string | null;
    /** name_gt */
    name_gt?: string | null;
    /** name_gte */
    name_gte?: string | null;
    /** name_contains */
    name_contains?: string | null;
    /** name_not_contains */
    name_not_contains?: string | null;
    /** name_starts_with */
    name_starts_with?: string | null;
    /** name_not_starts_with */
    name_not_starts_with?: string | null;
    /** name_ends_with */
    name_ends_with?: string | null;
    /** name_not_ends_with */
    name_not_ends_with?: string | null;
    /** timestamp */
    timestamp?: string | null;
    /** timestamp_not */
    timestamp_not?: string | null;
    /** timestamp_in */
    timestamp_in?: string[] | null;
    /** timestamp_not_in */
    timestamp_not_in?: string[] | null;
    /** timestamp_lt */
    timestamp_lt?: string | null;
    /** timestamp_lte */
    timestamp_lte?: string | null;
    /** timestamp_gt */
    timestamp_gt?: string | null;
    /** timestamp_gte */
    timestamp_gte?: string | null;
    /** timestamp_contains */
    timestamp_contains?: string | null;
    /** timestamp_not_contains */
    timestamp_not_contains?: string | null;
    /** timestamp_starts_with */
    timestamp_starts_with?: string | null;
    /** timestamp_not_starts_with */
    timestamp_not_starts_with?: string | null;
    /** timestamp_ends_with */
    timestamp_ends_with?: string | null;
    /** timestamp_not_ends_with */
    timestamp_not_ends_with?: string | null;
    /** tag */
    tag?: _TagFilter | null;
    /** tag_not */
    tag_not?: _TagFilter | null;
    /** tag_in */
    tag_in?: _TagFilter | null;
    /** tag_not_in */
    tag_not_in?: _TagFilter | null;
}
/** Filter Input Type for DockerImage */
export interface _DockerImageFilter {
    /** AND */
    AND?: _DockerImageFilter[] | null;
    /** OR */
    OR?: _DockerImageFilter[] | null;
    /** atmTeamId */
    atmTeamId?: string | null;
    /** atmTeamId_not */
    atmTeamId_not?: string | null;
    /** atmTeamId_in */
    atmTeamId_in?: string[] | null;
    /** atmTeamId_not_in */
    atmTeamId_not_in?: string[] | null;
    /** atmTeamId_lt */
    atmTeamId_lt?: string | null;
    /** atmTeamId_lte */
    atmTeamId_lte?: string | null;
    /** atmTeamId_gt */
    atmTeamId_gt?: string | null;
    /** atmTeamId_gte */
    atmTeamId_gte?: string | null;
    /** atmTeamId_contains */
    atmTeamId_contains?: string | null;
    /** atmTeamId_not_contains */
    atmTeamId_not_contains?: string | null;
    /** atmTeamId_starts_with */
    atmTeamId_starts_with?: string | null;
    /** atmTeamId_not_starts_with */
    atmTeamId_not_starts_with?: string | null;
    /** atmTeamId_ends_with */
    atmTeamId_ends_with?: string | null;
    /** atmTeamId_not_ends_with */
    atmTeamId_not_ends_with?: string | null;
    /** image */
    image?: string | null;
    /** image_not */
    image_not?: string | null;
    /** image_in */
    image_in?: string[] | null;
    /** image_not_in */
    image_not_in?: string[] | null;
    /** image_lt */
    image_lt?: string | null;
    /** image_lte */
    image_lte?: string | null;
    /** image_gt */
    image_gt?: string | null;
    /** image_gte */
    image_gte?: string | null;
    /** image_contains */
    image_contains?: string | null;
    /** image_not_contains */
    image_not_contains?: string | null;
    /** image_starts_with */
    image_starts_with?: string | null;
    /** image_not_starts_with */
    image_not_starts_with?: string | null;
    /** image_ends_with */
    image_ends_with?: string | null;
    /** image_not_ends_with */
    image_not_ends_with?: string | null;
    /** imageName */
    imageName?: string | null;
    /** imageName_not */
    imageName_not?: string | null;
    /** imageName_in */
    imageName_in?: string[] | null;
    /** imageName_not_in */
    imageName_not_in?: string[] | null;
    /** imageName_lt */
    imageName_lt?: string | null;
    /** imageName_lte */
    imageName_lte?: string | null;
    /** imageName_gt */
    imageName_gt?: string | null;
    /** imageName_gte */
    imageName_gte?: string | null;
    /** imageName_contains */
    imageName_contains?: string | null;
    /** imageName_not_contains */
    imageName_not_contains?: string | null;
    /** imageName_starts_with */
    imageName_starts_with?: string | null;
    /** imageName_not_starts_with */
    imageName_not_starts_with?: string | null;
    /** imageName_ends_with */
    imageName_ends_with?: string | null;
    /** imageName_not_ends_with */
    imageName_not_ends_with?: string | null;
    /** timestamp */
    timestamp?: string | null;
    /** timestamp_not */
    timestamp_not?: string | null;
    /** timestamp_in */
    timestamp_in?: string[] | null;
    /** timestamp_not_in */
    timestamp_not_in?: string[] | null;
    /** timestamp_lt */
    timestamp_lt?: string | null;
    /** timestamp_lte */
    timestamp_lte?: string | null;
    /** timestamp_gt */
    timestamp_gt?: string | null;
    /** timestamp_gte */
    timestamp_gte?: string | null;
    /** timestamp_contains */
    timestamp_contains?: string | null;
    /** timestamp_not_contains */
    timestamp_not_contains?: string | null;
    /** timestamp_starts_with */
    timestamp_starts_with?: string | null;
    /** timestamp_not_starts_with */
    timestamp_not_starts_with?: string | null;
    /** timestamp_ends_with */
    timestamp_ends_with?: string | null;
    /** timestamp_not_ends_with */
    timestamp_not_ends_with?: string | null;
    /** pods */
    pods?: _K8PodFilter | null;
    /** pods_not */
    pods_not?: _K8PodFilter | null;
    /** pods_in */
    pods_in?: _K8PodFilter | null;
    /** pods_not_in */
    pods_not_in?: _K8PodFilter | null;
    /** pods_some */
    pods_some?: _K8PodFilter | null;
    /** pods_none */
    pods_none?: _K8PodFilter | null;
    /** pods_single */
    pods_single?: _K8PodFilter | null;
    /** pods_every */
    pods_every?: _K8PodFilter | null;
    /** commits */
    commits?: _CommitFilter | null;
    /** commits_not */
    commits_not?: _CommitFilter | null;
    /** commits_in */
    commits_in?: _CommitFilter | null;
    /** commits_not_in */
    commits_not_in?: _CommitFilter | null;
    /** commits_some */
    commits_some?: _CommitFilter | null;
    /** commits_none */
    commits_none?: _CommitFilter | null;
    /** commits_single */
    commits_single?: _CommitFilter | null;
    /** commits_every */
    commits_every?: _CommitFilter | null;
    /** containers */
    containers?: _K8ContainerFilter | null;
    /** containers_not */
    containers_not?: _K8ContainerFilter | null;
    /** containers_in */
    containers_in?: _K8ContainerFilter | null;
    /** containers_not_in */
    containers_not_in?: _K8ContainerFilter | null;
    /** containers_some */
    containers_some?: _K8ContainerFilter | null;
    /** containers_none */
    containers_none?: _K8ContainerFilter | null;
    /** containers_single */
    containers_single?: _K8ContainerFilter | null;
    /** containers_every */
    containers_every?: _K8ContainerFilter | null;
}
/** Filter Input Type for K8Pod */
export interface _K8PodFilter {
    /** AND */
    AND?: _K8PodFilter[] | null;
    /** OR */
    OR?: _K8PodFilter[] | null;
    /** atmTeamId */
    atmTeamId?: string | null;
    /** atmTeamId_not */
    atmTeamId_not?: string | null;
    /** atmTeamId_in */
    atmTeamId_in?: string[] | null;
    /** atmTeamId_not_in */
    atmTeamId_not_in?: string[] | null;
    /** atmTeamId_lt */
    atmTeamId_lt?: string | null;
    /** atmTeamId_lte */
    atmTeamId_lte?: string | null;
    /** atmTeamId_gt */
    atmTeamId_gt?: string | null;
    /** atmTeamId_gte */
    atmTeamId_gte?: string | null;
    /** atmTeamId_contains */
    atmTeamId_contains?: string | null;
    /** atmTeamId_not_contains */
    atmTeamId_not_contains?: string | null;
    /** atmTeamId_starts_with */
    atmTeamId_starts_with?: string | null;
    /** atmTeamId_not_starts_with */
    atmTeamId_not_starts_with?: string | null;
    /** atmTeamId_ends_with */
    atmTeamId_ends_with?: string | null;
    /** atmTeamId_not_ends_with */
    atmTeamId_not_ends_with?: string | null;
    /** name */
    name?: string | null;
    /** name_not */
    name_not?: string | null;
    /** name_in */
    name_in?: string[] | null;
    /** name_not_in */
    name_not_in?: string[] | null;
    /** name_lt */
    name_lt?: string | null;
    /** name_lte */
    name_lte?: string | null;
    /** name_gt */
    name_gt?: string | null;
    /** name_gte */
    name_gte?: string | null;
    /** name_contains */
    name_contains?: string | null;
    /** name_not_contains */
    name_not_contains?: string | null;
    /** name_starts_with */
    name_starts_with?: string | null;
    /** name_not_starts_with */
    name_not_starts_with?: string | null;
    /** name_ends_with */
    name_ends_with?: string | null;
    /** name_not_ends_with */
    name_not_ends_with?: string | null;
    /** phase */
    phase?: string | null;
    /** phase_not */
    phase_not?: string | null;
    /** phase_in */
    phase_in?: string[] | null;
    /** phase_not_in */
    phase_not_in?: string[] | null;
    /** phase_lt */
    phase_lt?: string | null;
    /** phase_lte */
    phase_lte?: string | null;
    /** phase_gt */
    phase_gt?: string | null;
    /** phase_gte */
    phase_gte?: string | null;
    /** phase_contains */
    phase_contains?: string | null;
    /** phase_not_contains */
    phase_not_contains?: string | null;
    /** phase_starts_with */
    phase_starts_with?: string | null;
    /** phase_not_starts_with */
    phase_not_starts_with?: string | null;
    /** phase_ends_with */
    phase_ends_with?: string | null;
    /** phase_not_ends_with */
    phase_not_ends_with?: string | null;
    /** environment */
    environment?: string | null;
    /** environment_not */
    environment_not?: string | null;
    /** environment_in */
    environment_in?: string[] | null;
    /** environment_not_in */
    environment_not_in?: string[] | null;
    /** environment_lt */
    environment_lt?: string | null;
    /** environment_lte */
    environment_lte?: string | null;
    /** environment_gt */
    environment_gt?: string | null;
    /** environment_gte */
    environment_gte?: string | null;
    /** environment_contains */
    environment_contains?: string | null;
    /** environment_not_contains */
    environment_not_contains?: string | null;
    /** environment_starts_with */
    environment_starts_with?: string | null;
    /** environment_not_starts_with */
    environment_not_starts_with?: string | null;
    /** environment_ends_with */
    environment_ends_with?: string | null;
    /** environment_not_ends_with */
    environment_not_ends_with?: string | null;
    /** timestamp */
    timestamp?: string | null;
    /** timestamp_not */
    timestamp_not?: string | null;
    /** timestamp_in */
    timestamp_in?: string[] | null;
    /** timestamp_not_in */
    timestamp_not_in?: string[] | null;
    /** timestamp_lt */
    timestamp_lt?: string | null;
    /** timestamp_lte */
    timestamp_lte?: string | null;
    /** timestamp_gt */
    timestamp_gt?: string | null;
    /** timestamp_gte */
    timestamp_gte?: string | null;
    /** timestamp_contains */
    timestamp_contains?: string | null;
    /** timestamp_not_contains */
    timestamp_not_contains?: string | null;
    /** timestamp_starts_with */
    timestamp_starts_with?: string | null;
    /** timestamp_not_starts_with */
    timestamp_not_starts_with?: string | null;
    /** timestamp_ends_with */
    timestamp_ends_with?: string | null;
    /** timestamp_not_ends_with */
    timestamp_not_ends_with?: string | null;
    /** baseName */
    baseName?: string | null;
    /** baseName_not */
    baseName_not?: string | null;
    /** baseName_in */
    baseName_in?: string[] | null;
    /** baseName_not_in */
    baseName_not_in?: string[] | null;
    /** baseName_lt */
    baseName_lt?: string | null;
    /** baseName_lte */
    baseName_lte?: string | null;
    /** baseName_gt */
    baseName_gt?: string | null;
    /** baseName_gte */
    baseName_gte?: string | null;
    /** baseName_contains */
    baseName_contains?: string | null;
    /** baseName_not_contains */
    baseName_not_contains?: string | null;
    /** baseName_starts_with */
    baseName_starts_with?: string | null;
    /** baseName_not_starts_with */
    baseName_not_starts_with?: string | null;
    /** baseName_ends_with */
    baseName_ends_with?: string | null;
    /** baseName_not_ends_with */
    baseName_not_ends_with?: string | null;
    /** namespace */
    namespace?: string | null;
    /** namespace_not */
    namespace_not?: string | null;
    /** namespace_in */
    namespace_in?: string[] | null;
    /** namespace_not_in */
    namespace_not_in?: string[] | null;
    /** namespace_lt */
    namespace_lt?: string | null;
    /** namespace_lte */
    namespace_lte?: string | null;
    /** namespace_gt */
    namespace_gt?: string | null;
    /** namespace_gte */
    namespace_gte?: string | null;
    /** namespace_contains */
    namespace_contains?: string | null;
    /** namespace_not_contains */
    namespace_not_contains?: string | null;
    /** namespace_starts_with */
    namespace_starts_with?: string | null;
    /** namespace_not_starts_with */
    namespace_not_starts_with?: string | null;
    /** namespace_ends_with */
    namespace_ends_with?: string | null;
    /** namespace_not_ends_with */
    namespace_not_ends_with?: string | null;
    /** statusJSON */
    statusJSON?: string | null;
    /** statusJSON_not */
    statusJSON_not?: string | null;
    /** statusJSON_in */
    statusJSON_in?: string[] | null;
    /** statusJSON_not_in */
    statusJSON_not_in?: string[] | null;
    /** statusJSON_lt */
    statusJSON_lt?: string | null;
    /** statusJSON_lte */
    statusJSON_lte?: string | null;
    /** statusJSON_gt */
    statusJSON_gt?: string | null;
    /** statusJSON_gte */
    statusJSON_gte?: string | null;
    /** statusJSON_contains */
    statusJSON_contains?: string | null;
    /** statusJSON_not_contains */
    statusJSON_not_contains?: string | null;
    /** statusJSON_starts_with */
    statusJSON_starts_with?: string | null;
    /** statusJSON_not_starts_with */
    statusJSON_not_starts_with?: string | null;
    /** statusJSON_ends_with */
    statusJSON_ends_with?: string | null;
    /** statusJSON_not_ends_with */
    statusJSON_not_ends_with?: string | null;
    /** host */
    host?: string | null;
    /** host_not */
    host_not?: string | null;
    /** host_in */
    host_in?: string[] | null;
    /** host_not_in */
    host_not_in?: string[] | null;
    /** host_lt */
    host_lt?: string | null;
    /** host_lte */
    host_lte?: string | null;
    /** host_gt */
    host_gt?: string | null;
    /** host_gte */
    host_gte?: string | null;
    /** host_contains */
    host_contains?: string | null;
    /** host_not_contains */
    host_not_contains?: string | null;
    /** host_starts_with */
    host_starts_with?: string | null;
    /** host_not_starts_with */
    host_not_starts_with?: string | null;
    /** host_ends_with */
    host_ends_with?: string | null;
    /** host_not_ends_with */
    host_not_ends_with?: string | null;
    /** state */
    state?: string | null;
    /** state_not */
    state_not?: string | null;
    /** state_in */
    state_in?: string[] | null;
    /** state_not_in */
    state_not_in?: string[] | null;
    /** state_lt */
    state_lt?: string | null;
    /** state_lte */
    state_lte?: string | null;
    /** state_gt */
    state_gt?: string | null;
    /** state_gte */
    state_gte?: string | null;
    /** state_contains */
    state_contains?: string | null;
    /** state_not_contains */
    state_not_contains?: string | null;
    /** state_starts_with */
    state_starts_with?: string | null;
    /** state_not_starts_with */
    state_not_starts_with?: string | null;
    /** state_ends_with */
    state_ends_with?: string | null;
    /** state_not_ends_with */
    state_not_ends_with?: string | null;
    /** specsJSON */
    specsJSON?: string | null;
    /** specsJSON_not */
    specsJSON_not?: string | null;
    /** specsJSON_in */
    specsJSON_in?: string[] | null;
    /** specsJSON_not_in */
    specsJSON_not_in?: string[] | null;
    /** specsJSON_lt */
    specsJSON_lt?: string | null;
    /** specsJSON_lte */
    specsJSON_lte?: string | null;
    /** specsJSON_gt */
    specsJSON_gt?: string | null;
    /** specsJSON_gte */
    specsJSON_gte?: string | null;
    /** specsJSON_contains */
    specsJSON_contains?: string | null;
    /** specsJSON_not_contains */
    specsJSON_not_contains?: string | null;
    /** specsJSON_starts_with */
    specsJSON_starts_with?: string | null;
    /** specsJSON_not_starts_with */
    specsJSON_not_starts_with?: string | null;
    /** specsJSON_ends_with */
    specsJSON_ends_with?: string | null;
    /** specsJSON_not_ends_with */
    specsJSON_not_ends_with?: string | null;
    /** envJSON */
    envJSON?: string | null;
    /** envJSON_not */
    envJSON_not?: string | null;
    /** envJSON_in */
    envJSON_in?: string[] | null;
    /** envJSON_not_in */
    envJSON_not_in?: string[] | null;
    /** envJSON_lt */
    envJSON_lt?: string | null;
    /** envJSON_lte */
    envJSON_lte?: string | null;
    /** envJSON_gt */
    envJSON_gt?: string | null;
    /** envJSON_gte */
    envJSON_gte?: string | null;
    /** envJSON_contains */
    envJSON_contains?: string | null;
    /** envJSON_not_contains */
    envJSON_not_contains?: string | null;
    /** envJSON_starts_with */
    envJSON_starts_with?: string | null;
    /** envJSON_not_starts_with */
    envJSON_not_starts_with?: string | null;
    /** envJSON_ends_with */
    envJSON_ends_with?: string | null;
    /** envJSON_not_ends_with */
    envJSON_not_ends_with?: string | null;
    /** metadataJSON */
    metadataJSON?: string | null;
    /** metadataJSON_not */
    metadataJSON_not?: string | null;
    /** metadataJSON_in */
    metadataJSON_in?: string[] | null;
    /** metadataJSON_not_in */
    metadataJSON_not_in?: string[] | null;
    /** metadataJSON_lt */
    metadataJSON_lt?: string | null;
    /** metadataJSON_lte */
    metadataJSON_lte?: string | null;
    /** metadataJSON_gt */
    metadataJSON_gt?: string | null;
    /** metadataJSON_gte */
    metadataJSON_gte?: string | null;
    /** metadataJSON_contains */
    metadataJSON_contains?: string | null;
    /** metadataJSON_not_contains */
    metadataJSON_not_contains?: string | null;
    /** metadataJSON_starts_with */
    metadataJSON_starts_with?: string | null;
    /** metadataJSON_not_starts_with */
    metadataJSON_not_starts_with?: string | null;
    /** metadataJSON_ends_with */
    metadataJSON_ends_with?: string | null;
    /** metadataJSON_not_ends_with */
    metadataJSON_not_ends_with?: string | null;
    /** containersCrashLoopBackOff */
    containersCrashLoopBackOff?: boolean | null;
    /** containersCrashLoopBackOff_not */
    containersCrashLoopBackOff_not?: boolean | null;
    /** resourceVersion */
    resourceVersion?: number | null;
    /** resourceVersion_not */
    resourceVersion_not?: number | null;
    /** resourceVersion_in */
    resourceVersion_in?: number[] | null;
    /** resourceVersion_not_in */
    resourceVersion_not_in?: number[] | null;
    /** resourceVersion_lt */
    resourceVersion_lt?: number | null;
    /** resourceVersion_lte */
    resourceVersion_lte?: number | null;
    /** resourceVersion_gt */
    resourceVersion_gt?: number | null;
    /** resourceVersion_gte */
    resourceVersion_gte?: number | null;
    /** images */
    images?: _DockerImageFilter | null;
    /** images_not */
    images_not?: _DockerImageFilter | null;
    /** images_in */
    images_in?: _DockerImageFilter | null;
    /** images_not_in */
    images_not_in?: _DockerImageFilter | null;
    /** images_some */
    images_some?: _DockerImageFilter | null;
    /** images_none */
    images_none?: _DockerImageFilter | null;
    /** images_single */
    images_single?: _DockerImageFilter | null;
    /** images_every */
    images_every?: _DockerImageFilter | null;
    /** containers */
    containers?: _K8ContainerFilter | null;
    /** containers_not */
    containers_not?: _K8ContainerFilter | null;
    /** containers_in */
    containers_in?: _K8ContainerFilter | null;
    /** containers_not_in */
    containers_not_in?: _K8ContainerFilter | null;
    /** containers_some */
    containers_some?: _K8ContainerFilter | null;
    /** containers_none */
    containers_none?: _K8ContainerFilter | null;
    /** containers_single */
    containers_single?: _K8ContainerFilter | null;
    /** containers_every */
    containers_every?: _K8ContainerFilter | null;
}
/** Filter Input Type for K8Container */
export interface _K8ContainerFilter {
    /** AND */
    AND?: _K8ContainerFilter[] | null;
    /** OR */
    OR?: _K8ContainerFilter[] | null;
    /** atmTeamId */
    atmTeamId?: string | null;
    /** atmTeamId_not */
    atmTeamId_not?: string | null;
    /** atmTeamId_in */
    atmTeamId_in?: string[] | null;
    /** atmTeamId_not_in */
    atmTeamId_not_in?: string[] | null;
    /** atmTeamId_lt */
    atmTeamId_lt?: string | null;
    /** atmTeamId_lte */
    atmTeamId_lte?: string | null;
    /** atmTeamId_gt */
    atmTeamId_gt?: string | null;
    /** atmTeamId_gte */
    atmTeamId_gte?: string | null;
    /** atmTeamId_contains */
    atmTeamId_contains?: string | null;
    /** atmTeamId_not_contains */
    atmTeamId_not_contains?: string | null;
    /** atmTeamId_starts_with */
    atmTeamId_starts_with?: string | null;
    /** atmTeamId_not_starts_with */
    atmTeamId_not_starts_with?: string | null;
    /** atmTeamId_ends_with */
    atmTeamId_ends_with?: string | null;
    /** atmTeamId_not_ends_with */
    atmTeamId_not_ends_with?: string | null;
    /** name */
    name?: string | null;
    /** name_not */
    name_not?: string | null;
    /** name_in */
    name_in?: string[] | null;
    /** name_not_in */
    name_not_in?: string[] | null;
    /** name_lt */
    name_lt?: string | null;
    /** name_lte */
    name_lte?: string | null;
    /** name_gt */
    name_gt?: string | null;
    /** name_gte */
    name_gte?: string | null;
    /** name_contains */
    name_contains?: string | null;
    /** name_not_contains */
    name_not_contains?: string | null;
    /** name_starts_with */
    name_starts_with?: string | null;
    /** name_not_starts_with */
    name_not_starts_with?: string | null;
    /** name_ends_with */
    name_ends_with?: string | null;
    /** name_not_ends_with */
    name_not_ends_with?: string | null;
    /** imageName */
    imageName?: string | null;
    /** imageName_not */
    imageName_not?: string | null;
    /** imageName_in */
    imageName_in?: string[] | null;
    /** imageName_not_in */
    imageName_not_in?: string[] | null;
    /** imageName_lt */
    imageName_lt?: string | null;
    /** imageName_lte */
    imageName_lte?: string | null;
    /** imageName_gt */
    imageName_gt?: string | null;
    /** imageName_gte */
    imageName_gte?: string | null;
    /** imageName_contains */
    imageName_contains?: string | null;
    /** imageName_not_contains */
    imageName_not_contains?: string | null;
    /** imageName_starts_with */
    imageName_starts_with?: string | null;
    /** imageName_not_starts_with */
    imageName_not_starts_with?: string | null;
    /** imageName_ends_with */
    imageName_ends_with?: string | null;
    /** imageName_not_ends_with */
    imageName_not_ends_with?: string | null;
    /** timestamp */
    timestamp?: string | null;
    /** timestamp_not */
    timestamp_not?: string | null;
    /** timestamp_in */
    timestamp_in?: string[] | null;
    /** timestamp_not_in */
    timestamp_not_in?: string[] | null;
    /** timestamp_lt */
    timestamp_lt?: string | null;
    /** timestamp_lte */
    timestamp_lte?: string | null;
    /** timestamp_gt */
    timestamp_gt?: string | null;
    /** timestamp_gte */
    timestamp_gte?: string | null;
    /** timestamp_contains */
    timestamp_contains?: string | null;
    /** timestamp_not_contains */
    timestamp_not_contains?: string | null;
    /** timestamp_starts_with */
    timestamp_starts_with?: string | null;
    /** timestamp_not_starts_with */
    timestamp_not_starts_with?: string | null;
    /** timestamp_ends_with */
    timestamp_ends_with?: string | null;
    /** timestamp_not_ends_with */
    timestamp_not_ends_with?: string | null;
    /** environment */
    environment?: string | null;
    /** environment_not */
    environment_not?: string | null;
    /** environment_in */
    environment_in?: string[] | null;
    /** environment_not_in */
    environment_not_in?: string[] | null;
    /** environment_lt */
    environment_lt?: string | null;
    /** environment_lte */
    environment_lte?: string | null;
    /** environment_gt */
    environment_gt?: string | null;
    /** environment_gte */
    environment_gte?: string | null;
    /** environment_contains */
    environment_contains?: string | null;
    /** environment_not_contains */
    environment_not_contains?: string | null;
    /** environment_starts_with */
    environment_starts_with?: string | null;
    /** environment_not_starts_with */
    environment_not_starts_with?: string | null;
    /** environment_ends_with */
    environment_ends_with?: string | null;
    /** environment_not_ends_with */
    environment_not_ends_with?: string | null;
    /** containerJSON */
    containerJSON?: string | null;
    /** containerJSON_not */
    containerJSON_not?: string | null;
    /** containerJSON_in */
    containerJSON_in?: string[] | null;
    /** containerJSON_not_in */
    containerJSON_not_in?: string[] | null;
    /** containerJSON_lt */
    containerJSON_lt?: string | null;
    /** containerJSON_lte */
    containerJSON_lte?: string | null;
    /** containerJSON_gt */
    containerJSON_gt?: string | null;
    /** containerJSON_gte */
    containerJSON_gte?: string | null;
    /** containerJSON_contains */
    containerJSON_contains?: string | null;
    /** containerJSON_not_contains */
    containerJSON_not_contains?: string | null;
    /** containerJSON_starts_with */
    containerJSON_starts_with?: string | null;
    /** containerJSON_not_starts_with */
    containerJSON_not_starts_with?: string | null;
    /** containerJSON_ends_with */
    containerJSON_ends_with?: string | null;
    /** containerJSON_not_ends_with */
    containerJSON_not_ends_with?: string | null;
    /** state */
    state?: string | null;
    /** state_not */
    state_not?: string | null;
    /** state_in */
    state_in?: string[] | null;
    /** state_not_in */
    state_not_in?: string[] | null;
    /** state_lt */
    state_lt?: string | null;
    /** state_lte */
    state_lte?: string | null;
    /** state_gt */
    state_gt?: string | null;
    /** state_gte */
    state_gte?: string | null;
    /** state_contains */
    state_contains?: string | null;
    /** state_not_contains */
    state_not_contains?: string | null;
    /** state_starts_with */
    state_starts_with?: string | null;
    /** state_not_starts_with */
    state_not_starts_with?: string | null;
    /** state_ends_with */
    state_ends_with?: string | null;
    /** state_not_ends_with */
    state_not_ends_with?: string | null;
    /** stateReason */
    stateReason?: string | null;
    /** stateReason_not */
    stateReason_not?: string | null;
    /** stateReason_in */
    stateReason_in?: string[] | null;
    /** stateReason_not_in */
    stateReason_not_in?: string[] | null;
    /** stateReason_lt */
    stateReason_lt?: string | null;
    /** stateReason_lte */
    stateReason_lte?: string | null;
    /** stateReason_gt */
    stateReason_gt?: string | null;
    /** stateReason_gte */
    stateReason_gte?: string | null;
    /** stateReason_contains */
    stateReason_contains?: string | null;
    /** stateReason_not_contains */
    stateReason_not_contains?: string | null;
    /** stateReason_starts_with */
    stateReason_starts_with?: string | null;
    /** stateReason_not_starts_with */
    stateReason_not_starts_with?: string | null;
    /** stateReason_ends_with */
    stateReason_ends_with?: string | null;
    /** stateReason_not_ends_with */
    stateReason_not_ends_with?: string | null;
    /** ready */
    ready?: boolean | null;
    /** ready_not */
    ready_not?: boolean | null;
    /** restartCount */
    restartCount?: number | null;
    /** restartCount_not */
    restartCount_not?: number | null;
    /** restartCount_in */
    restartCount_in?: number[] | null;
    /** restartCount_not_in */
    restartCount_not_in?: number[] | null;
    /** restartCount_lt */
    restartCount_lt?: number | null;
    /** restartCount_lte */
    restartCount_lte?: number | null;
    /** restartCount_gt */
    restartCount_gt?: number | null;
    /** restartCount_gte */
    restartCount_gte?: number | null;
    /** statusJSON */
    statusJSON?: string | null;
    /** statusJSON_not */
    statusJSON_not?: string | null;
    /** statusJSON_in */
    statusJSON_in?: string[] | null;
    /** statusJSON_not_in */
    statusJSON_not_in?: string[] | null;
    /** statusJSON_lt */
    statusJSON_lt?: string | null;
    /** statusJSON_lte */
    statusJSON_lte?: string | null;
    /** statusJSON_gt */
    statusJSON_gt?: string | null;
    /** statusJSON_gte */
    statusJSON_gte?: string | null;
    /** statusJSON_contains */
    statusJSON_contains?: string | null;
    /** statusJSON_not_contains */
    statusJSON_not_contains?: string | null;
    /** statusJSON_starts_with */
    statusJSON_starts_with?: string | null;
    /** statusJSON_not_starts_with */
    statusJSON_not_starts_with?: string | null;
    /** statusJSON_ends_with */
    statusJSON_ends_with?: string | null;
    /** statusJSON_not_ends_with */
    statusJSON_not_ends_with?: string | null;
    /** resourceVersion */
    resourceVersion?: number | null;
    /** resourceVersion_not */
    resourceVersion_not?: number | null;
    /** resourceVersion_in */
    resourceVersion_in?: number[] | null;
    /** resourceVersion_not_in */
    resourceVersion_not_in?: number[] | null;
    /** resourceVersion_lt */
    resourceVersion_lt?: number | null;
    /** resourceVersion_lte */
    resourceVersion_lte?: number | null;
    /** resourceVersion_gt */
    resourceVersion_gt?: number | null;
    /** resourceVersion_gte */
    resourceVersion_gte?: number | null;
    /** containerID */
    containerID?: string | null;
    /** containerID_not */
    containerID_not?: string | null;
    /** containerID_in */
    containerID_in?: string[] | null;
    /** containerID_not_in */
    containerID_not_in?: string[] | null;
    /** containerID_lt */
    containerID_lt?: string | null;
    /** containerID_lte */
    containerID_lte?: string | null;
    /** containerID_gt */
    containerID_gt?: string | null;
    /** containerID_gte */
    containerID_gte?: string | null;
    /** containerID_contains */
    containerID_contains?: string | null;
    /** containerID_not_contains */
    containerID_not_contains?: string | null;
    /** containerID_starts_with */
    containerID_starts_with?: string | null;
    /** containerID_not_starts_with */
    containerID_not_starts_with?: string | null;
    /** containerID_ends_with */
    containerID_ends_with?: string | null;
    /** containerID_not_ends_with */
    containerID_not_ends_with?: string | null;
    /** image */
    image?: _DockerImageFilter | null;
    /** image_not */
    image_not?: _DockerImageFilter | null;
    /** image_in */
    image_in?: _DockerImageFilter | null;
    /** image_not_in */
    image_not_in?: _DockerImageFilter | null;
    /** pod */
    pod?: _K8PodFilter | null;
    /** pod_not */
    pod_not?: _K8PodFilter | null;
    /** pod_in */
    pod_in?: _K8PodFilter | null;
    /** pod_not_in */
    pod_not_in?: _K8PodFilter | null;
}
/** Filter Input Type for Workflow */
export interface _WorkflowFilter {
    /** AND */
    AND?: _WorkflowFilter[] | null;
    /** OR */
    OR?: _WorkflowFilter[] | null;
    /** atmTeamId */
    atmTeamId?: string | null;
    /** atmTeamId_not */
    atmTeamId_not?: string | null;
    /** atmTeamId_in */
    atmTeamId_in?: string[] | null;
    /** atmTeamId_not_in */
    atmTeamId_not_in?: string[] | null;
    /** atmTeamId_lt */
    atmTeamId_lt?: string | null;
    /** atmTeamId_lte */
    atmTeamId_lte?: string | null;
    /** atmTeamId_gt */
    atmTeamId_gt?: string | null;
    /** atmTeamId_gte */
    atmTeamId_gte?: string | null;
    /** atmTeamId_contains */
    atmTeamId_contains?: string | null;
    /** atmTeamId_not_contains */
    atmTeamId_not_contains?: string | null;
    /** atmTeamId_starts_with */
    atmTeamId_starts_with?: string | null;
    /** atmTeamId_not_starts_with */
    atmTeamId_not_starts_with?: string | null;
    /** atmTeamId_ends_with */
    atmTeamId_ends_with?: string | null;
    /** atmTeamId_not_ends_with */
    atmTeamId_not_ends_with?: string | null;
    /** id */
    id?: string | null;
    /** id_not */
    id_not?: string | null;
    /** id_in */
    id_in?: string[] | null;
    /** id_not_in */
    id_not_in?: string[] | null;
    /** id_lt */
    id_lt?: string | null;
    /** id_lte */
    id_lte?: string | null;
    /** id_gt */
    id_gt?: string | null;
    /** id_gte */
    id_gte?: string | null;
    /** id_contains */
    id_contains?: string | null;
    /** id_not_contains */
    id_not_contains?: string | null;
    /** id_starts_with */
    id_starts_with?: string | null;
    /** id_not_starts_with */
    id_not_starts_with?: string | null;
    /** id_ends_with */
    id_ends_with?: string | null;
    /** id_not_ends_with */
    id_not_ends_with?: string | null;
    /** name */
    name?: string | null;
    /** name_not */
    name_not?: string | null;
    /** name_in */
    name_in?: string[] | null;
    /** name_not_in */
    name_not_in?: string[] | null;
    /** name_lt */
    name_lt?: string | null;
    /** name_lte */
    name_lte?: string | null;
    /** name_gt */
    name_gt?: string | null;
    /** name_gte */
    name_gte?: string | null;
    /** name_contains */
    name_contains?: string | null;
    /** name_not_contains */
    name_not_contains?: string | null;
    /** name_starts_with */
    name_starts_with?: string | null;
    /** name_not_starts_with */
    name_not_starts_with?: string | null;
    /** name_ends_with */
    name_ends_with?: string | null;
    /** name_not_ends_with */
    name_not_ends_with?: string | null;
    /** workflowId */
    workflowId?: string | null;
    /** workflowId_not */
    workflowId_not?: string | null;
    /** workflowId_in */
    workflowId_in?: string[] | null;
    /** workflowId_not_in */
    workflowId_not_in?: string[] | null;
    /** workflowId_lt */
    workflowId_lt?: string | null;
    /** workflowId_lte */
    workflowId_lte?: string | null;
    /** workflowId_gt */
    workflowId_gt?: string | null;
    /** workflowId_gte */
    workflowId_gte?: string | null;
    /** workflowId_contains */
    workflowId_contains?: string | null;
    /** workflowId_not_contains */
    workflowId_not_contains?: string | null;
    /** workflowId_starts_with */
    workflowId_starts_with?: string | null;
    /** workflowId_not_starts_with */
    workflowId_not_starts_with?: string | null;
    /** workflowId_ends_with */
    workflowId_ends_with?: string | null;
    /** workflowId_not_ends_with */
    workflowId_not_ends_with?: string | null;
    /** provider */
    provider?: string | null;
    /** provider_not */
    provider_not?: string | null;
    /** provider_in */
    provider_in?: string[] | null;
    /** provider_not_in */
    provider_not_in?: string[] | null;
    /** provider_lt */
    provider_lt?: string | null;
    /** provider_lte */
    provider_lte?: string | null;
    /** provider_gt */
    provider_gt?: string | null;
    /** provider_gte */
    provider_gte?: string | null;
    /** provider_contains */
    provider_contains?: string | null;
    /** provider_not_contains */
    provider_not_contains?: string | null;
    /** provider_starts_with */
    provider_starts_with?: string | null;
    /** provider_not_starts_with */
    provider_not_starts_with?: string | null;
    /** provider_ends_with */
    provider_ends_with?: string | null;
    /** provider_not_ends_with */
    provider_not_ends_with?: string | null;
    /** config */
    config?: string | null;
    /** config_not */
    config_not?: string | null;
    /** config_in */
    config_in?: string[] | null;
    /** config_not_in */
    config_not_in?: string[] | null;
    /** config_lt */
    config_lt?: string | null;
    /** config_lte */
    config_lte?: string | null;
    /** config_gt */
    config_gt?: string | null;
    /** config_gte */
    config_gte?: string | null;
    /** config_contains */
    config_contains?: string | null;
    /** config_not_contains */
    config_not_contains?: string | null;
    /** config_starts_with */
    config_starts_with?: string | null;
    /** config_not_starts_with */
    config_not_starts_with?: string | null;
    /** config_ends_with */
    config_ends_with?: string | null;
    /** config_not_ends_with */
    config_not_ends_with?: string | null;
    /** builds */
    builds?: _BuildFilter | null;
    /** builds_not */
    builds_not?: _BuildFilter | null;
    /** builds_in */
    builds_in?: _BuildFilter | null;
    /** builds_not_in */
    builds_not_in?: _BuildFilter | null;
    /** builds_some */
    builds_some?: _BuildFilter | null;
    /** builds_none */
    builds_none?: _BuildFilter | null;
    /** builds_single */
    builds_single?: _BuildFilter | null;
    /** builds_every */
    builds_every?: _BuildFilter | null;
}
/** Filter Input Type for Status */
export interface _StatusFilter {
    /** AND */
    AND?: _StatusFilter[] | null;
    /** OR */
    OR?: _StatusFilter[] | null;
    /** atmTeamId */
    atmTeamId?: string | null;
    /** atmTeamId_not */
    atmTeamId_not?: string | null;
    /** atmTeamId_in */
    atmTeamId_in?: string[] | null;
    /** atmTeamId_not_in */
    atmTeamId_not_in?: string[] | null;
    /** atmTeamId_lt */
    atmTeamId_lt?: string | null;
    /** atmTeamId_lte */
    atmTeamId_lte?: string | null;
    /** atmTeamId_gt */
    atmTeamId_gt?: string | null;
    /** atmTeamId_gte */
    atmTeamId_gte?: string | null;
    /** atmTeamId_contains */
    atmTeamId_contains?: string | null;
    /** atmTeamId_not_contains */
    atmTeamId_not_contains?: string | null;
    /** atmTeamId_starts_with */
    atmTeamId_starts_with?: string | null;
    /** atmTeamId_not_starts_with */
    atmTeamId_not_starts_with?: string | null;
    /** atmTeamId_ends_with */
    atmTeamId_ends_with?: string | null;
    /** atmTeamId_not_ends_with */
    atmTeamId_not_ends_with?: string | null;
    /** id */
    id?: string | null;
    /** id_not */
    id_not?: string | null;
    /** id_in */
    id_in?: string[] | null;
    /** id_not_in */
    id_not_in?: string[] | null;
    /** id_lt */
    id_lt?: string | null;
    /** id_lte */
    id_lte?: string | null;
    /** id_gt */
    id_gt?: string | null;
    /** id_gte */
    id_gte?: string | null;
    /** id_contains */
    id_contains?: string | null;
    /** id_not_contains */
    id_not_contains?: string | null;
    /** id_starts_with */
    id_starts_with?: string | null;
    /** id_not_starts_with */
    id_not_starts_with?: string | null;
    /** id_ends_with */
    id_ends_with?: string | null;
    /** id_not_ends_with */
    id_not_ends_with?: string | null;
    /** state */
    state?: StatusState | null;
    /** state_not */
    state_not?: StatusState | null;
    /** state_in */
    state_in?: StatusState[] | null;
    /** state_not_in */
    state_not_in?: StatusState[] | null;
    /** description */
    description?: string | null;
    /** description_not */
    description_not?: string | null;
    /** description_in */
    description_in?: string[] | null;
    /** description_not_in */
    description_not_in?: string[] | null;
    /** description_lt */
    description_lt?: string | null;
    /** description_lte */
    description_lte?: string | null;
    /** description_gt */
    description_gt?: string | null;
    /** description_gte */
    description_gte?: string | null;
    /** description_contains */
    description_contains?: string | null;
    /** description_not_contains */
    description_not_contains?: string | null;
    /** description_starts_with */
    description_starts_with?: string | null;
    /** description_not_starts_with */
    description_not_starts_with?: string | null;
    /** description_ends_with */
    description_ends_with?: string | null;
    /** description_not_ends_with */
    description_not_ends_with?: string | null;
    /** targetUrl */
    targetUrl?: string | null;
    /** targetUrl_not */
    targetUrl_not?: string | null;
    /** targetUrl_in */
    targetUrl_in?: string[] | null;
    /** targetUrl_not_in */
    targetUrl_not_in?: string[] | null;
    /** targetUrl_lt */
    targetUrl_lt?: string | null;
    /** targetUrl_lte */
    targetUrl_lte?: string | null;
    /** targetUrl_gt */
    targetUrl_gt?: string | null;
    /** targetUrl_gte */
    targetUrl_gte?: string | null;
    /** targetUrl_contains */
    targetUrl_contains?: string | null;
    /** targetUrl_not_contains */
    targetUrl_not_contains?: string | null;
    /** targetUrl_starts_with */
    targetUrl_starts_with?: string | null;
    /** targetUrl_not_starts_with */
    targetUrl_not_starts_with?: string | null;
    /** targetUrl_ends_with */
    targetUrl_ends_with?: string | null;
    /** targetUrl_not_ends_with */
    targetUrl_not_ends_with?: string | null;
    /** context */
    context?: string | null;
    /** context_not */
    context_not?: string | null;
    /** context_in */
    context_in?: string[] | null;
    /** context_not_in */
    context_not_in?: string[] | null;
    /** context_lt */
    context_lt?: string | null;
    /** context_lte */
    context_lte?: string | null;
    /** context_gt */
    context_gt?: string | null;
    /** context_gte */
    context_gte?: string | null;
    /** context_contains */
    context_contains?: string | null;
    /** context_not_contains */
    context_not_contains?: string | null;
    /** context_starts_with */
    context_starts_with?: string | null;
    /** context_not_starts_with */
    context_not_starts_with?: string | null;
    /** context_ends_with */
    context_ends_with?: string | null;
    /** context_not_ends_with */
    context_not_ends_with?: string | null;
    /** timestamp */
    timestamp?: string | null;
    /** timestamp_not */
    timestamp_not?: string | null;
    /** timestamp_in */
    timestamp_in?: string[] | null;
    /** timestamp_not_in */
    timestamp_not_in?: string[] | null;
    /** timestamp_lt */
    timestamp_lt?: string | null;
    /** timestamp_lte */
    timestamp_lte?: string | null;
    /** timestamp_gt */
    timestamp_gt?: string | null;
    /** timestamp_gte */
    timestamp_gte?: string | null;
    /** timestamp_contains */
    timestamp_contains?: string | null;
    /** timestamp_not_contains */
    timestamp_not_contains?: string | null;
    /** timestamp_starts_with */
    timestamp_starts_with?: string | null;
    /** timestamp_not_starts_with */
    timestamp_not_starts_with?: string | null;
    /** timestamp_ends_with */
    timestamp_ends_with?: string | null;
    /** timestamp_not_ends_with */
    timestamp_not_ends_with?: string | null;
    /** commit */
    commit?: _CommitFilter | null;
    /** commit_not */
    commit_not?: _CommitFilter | null;
    /** commit_in */
    commit_in?: _CommitFilter | null;
    /** commit_not_in */
    commit_not_in?: _CommitFilter | null;
}
/** Filter Input Type for HerokuApp */
export interface _HerokuAppFilter {
    /** AND */
    AND?: _HerokuAppFilter[] | null;
    /** OR */
    OR?: _HerokuAppFilter[] | null;
    /** atmTeamId */
    atmTeamId?: string | null;
    /** atmTeamId_not */
    atmTeamId_not?: string | null;
    /** atmTeamId_in */
    atmTeamId_in?: string[] | null;
    /** atmTeamId_not_in */
    atmTeamId_not_in?: string[] | null;
    /** atmTeamId_lt */
    atmTeamId_lt?: string | null;
    /** atmTeamId_lte */
    atmTeamId_lte?: string | null;
    /** atmTeamId_gt */
    atmTeamId_gt?: string | null;
    /** atmTeamId_gte */
    atmTeamId_gte?: string | null;
    /** atmTeamId_contains */
    atmTeamId_contains?: string | null;
    /** atmTeamId_not_contains */
    atmTeamId_not_contains?: string | null;
    /** atmTeamId_starts_with */
    atmTeamId_starts_with?: string | null;
    /** atmTeamId_not_starts_with */
    atmTeamId_not_starts_with?: string | null;
    /** atmTeamId_ends_with */
    atmTeamId_ends_with?: string | null;
    /** atmTeamId_not_ends_with */
    atmTeamId_not_ends_with?: string | null;
    /** app */
    app?: string | null;
    /** app_not */
    app_not?: string | null;
    /** app_in */
    app_in?: string[] | null;
    /** app_not_in */
    app_not_in?: string[] | null;
    /** app_lt */
    app_lt?: string | null;
    /** app_lte */
    app_lte?: string | null;
    /** app_gt */
    app_gt?: string | null;
    /** app_gte */
    app_gte?: string | null;
    /** app_contains */
    app_contains?: string | null;
    /** app_not_contains */
    app_not_contains?: string | null;
    /** app_starts_with */
    app_starts_with?: string | null;
    /** app_not_starts_with */
    app_not_starts_with?: string | null;
    /** app_ends_with */
    app_ends_with?: string | null;
    /** app_not_ends_with */
    app_not_ends_with?: string | null;
    /** url */
    url?: string | null;
    /** url_not */
    url_not?: string | null;
    /** url_in */
    url_in?: string[] | null;
    /** url_not_in */
    url_not_in?: string[] | null;
    /** url_lt */
    url_lt?: string | null;
    /** url_lte */
    url_lte?: string | null;
    /** url_gt */
    url_gt?: string | null;
    /** url_gte */
    url_gte?: string | null;
    /** url_contains */
    url_contains?: string | null;
    /** url_not_contains */
    url_not_contains?: string | null;
    /** url_starts_with */
    url_starts_with?: string | null;
    /** url_not_starts_with */
    url_not_starts_with?: string | null;
    /** url_ends_with */
    url_ends_with?: string | null;
    /** url_not_ends_with */
    url_not_ends_with?: string | null;
    /** timestamp */
    timestamp?: string | null;
    /** timestamp_not */
    timestamp_not?: string | null;
    /** timestamp_in */
    timestamp_in?: string[] | null;
    /** timestamp_not_in */
    timestamp_not_in?: string[] | null;
    /** timestamp_lt */
    timestamp_lt?: string | null;
    /** timestamp_lte */
    timestamp_lte?: string | null;
    /** timestamp_gt */
    timestamp_gt?: string | null;
    /** timestamp_gte */
    timestamp_gte?: string | null;
    /** timestamp_contains */
    timestamp_contains?: string | null;
    /** timestamp_not_contains */
    timestamp_not_contains?: string | null;
    /** timestamp_starts_with */
    timestamp_starts_with?: string | null;
    /** timestamp_not_starts_with */
    timestamp_not_starts_with?: string | null;
    /** timestamp_ends_with */
    timestamp_ends_with?: string | null;
    /** timestamp_not_ends_with */
    timestamp_not_ends_with?: string | null;
    /** user */
    user?: string | null;
    /** user_not */
    user_not?: string | null;
    /** user_in */
    user_in?: string[] | null;
    /** user_not_in */
    user_not_in?: string[] | null;
    /** user_lt */
    user_lt?: string | null;
    /** user_lte */
    user_lte?: string | null;
    /** user_gt */
    user_gt?: string | null;
    /** user_gte */
    user_gte?: string | null;
    /** user_contains */
    user_contains?: string | null;
    /** user_not_contains */
    user_not_contains?: string | null;
    /** user_starts_with */
    user_starts_with?: string | null;
    /** user_not_starts_with */
    user_not_starts_with?: string | null;
    /** user_ends_with */
    user_ends_with?: string | null;
    /** user_not_ends_with */
    user_not_ends_with?: string | null;
    /** appId */
    appId?: string | null;
    /** appId_not */
    appId_not?: string | null;
    /** appId_in */
    appId_in?: string[] | null;
    /** appId_not_in */
    appId_not_in?: string[] | null;
    /** appId_lt */
    appId_lt?: string | null;
    /** appId_lte */
    appId_lte?: string | null;
    /** appId_gt */
    appId_gt?: string | null;
    /** appId_gte */
    appId_gte?: string | null;
    /** appId_contains */
    appId_contains?: string | null;
    /** appId_not_contains */
    appId_not_contains?: string | null;
    /** appId_starts_with */
    appId_starts_with?: string | null;
    /** appId_not_starts_with */
    appId_not_starts_with?: string | null;
    /** appId_ends_with */
    appId_ends_with?: string | null;
    /** appId_not_ends_with */
    appId_not_ends_with?: string | null;
    /** release */
    release?: string | null;
    /** release_not */
    release_not?: string | null;
    /** release_in */
    release_in?: string[] | null;
    /** release_not_in */
    release_not_in?: string[] | null;
    /** release_lt */
    release_lt?: string | null;
    /** release_lte */
    release_lte?: string | null;
    /** release_gt */
    release_gt?: string | null;
    /** release_gte */
    release_gte?: string | null;
    /** release_contains */
    release_contains?: string | null;
    /** release_not_contains */
    release_not_contains?: string | null;
    /** release_starts_with */
    release_starts_with?: string | null;
    /** release_not_starts_with */
    release_not_starts_with?: string | null;
    /** release_ends_with */
    release_ends_with?: string | null;
    /** release_not_ends_with */
    release_not_ends_with?: string | null;
    /** commits */
    commits?: _CommitFilter | null;
    /** commits_not */
    commits_not?: _CommitFilter | null;
    /** commits_in */
    commits_in?: _CommitFilter | null;
    /** commits_not_in */
    commits_not_in?: _CommitFilter | null;
    /** commits_some */
    commits_some?: _CommitFilter | null;
    /** commits_none */
    commits_none?: _CommitFilter | null;
    /** commits_single */
    commits_single?: _CommitFilter | null;
    /** commits_every */
    commits_every?: _CommitFilter | null;
}
/** Filter Input Type for Application */
export interface _ApplicationFilter {
    /** AND */
    AND?: _ApplicationFilter[] | null;
    /** OR */
    OR?: _ApplicationFilter[] | null;
    /** atmTeamId */
    atmTeamId?: string | null;
    /** atmTeamId_not */
    atmTeamId_not?: string | null;
    /** atmTeamId_in */
    atmTeamId_in?: string[] | null;
    /** atmTeamId_not_in */
    atmTeamId_not_in?: string[] | null;
    /** atmTeamId_lt */
    atmTeamId_lt?: string | null;
    /** atmTeamId_lte */
    atmTeamId_lte?: string | null;
    /** atmTeamId_gt */
    atmTeamId_gt?: string | null;
    /** atmTeamId_gte */
    atmTeamId_gte?: string | null;
    /** atmTeamId_contains */
    atmTeamId_contains?: string | null;
    /** atmTeamId_not_contains */
    atmTeamId_not_contains?: string | null;
    /** atmTeamId_starts_with */
    atmTeamId_starts_with?: string | null;
    /** atmTeamId_not_starts_with */
    atmTeamId_not_starts_with?: string | null;
    /** atmTeamId_ends_with */
    atmTeamId_ends_with?: string | null;
    /** atmTeamId_not_ends_with */
    atmTeamId_not_ends_with?: string | null;
    /** id */
    id?: string | null;
    /** id_not */
    id_not?: string | null;
    /** id_in */
    id_in?: string[] | null;
    /** id_not_in */
    id_not_in?: string[] | null;
    /** id_lt */
    id_lt?: string | null;
    /** id_lte */
    id_lte?: string | null;
    /** id_gt */
    id_gt?: string | null;
    /** id_gte */
    id_gte?: string | null;
    /** id_contains */
    id_contains?: string | null;
    /** id_not_contains */
    id_not_contains?: string | null;
    /** id_starts_with */
    id_starts_with?: string | null;
    /** id_not_starts_with */
    id_not_starts_with?: string | null;
    /** id_ends_with */
    id_ends_with?: string | null;
    /** id_not_ends_with */
    id_not_ends_with?: string | null;
    /** state */
    state?: string | null;
    /** state_not */
    state_not?: string | null;
    /** state_in */
    state_in?: string[] | null;
    /** state_not_in */
    state_not_in?: string[] | null;
    /** state_lt */
    state_lt?: string | null;
    /** state_lte */
    state_lte?: string | null;
    /** state_gt */
    state_gt?: string | null;
    /** state_gte */
    state_gte?: string | null;
    /** state_contains */
    state_contains?: string | null;
    /** state_not_contains */
    state_not_contains?: string | null;
    /** state_starts_with */
    state_starts_with?: string | null;
    /** state_not_starts_with */
    state_not_starts_with?: string | null;
    /** state_ends_with */
    state_ends_with?: string | null;
    /** state_not_ends_with */
    state_not_ends_with?: string | null;
    /** host */
    host?: string | null;
    /** host_not */
    host_not?: string | null;
    /** host_in */
    host_in?: string[] | null;
    /** host_not_in */
    host_not_in?: string[] | null;
    /** host_lt */
    host_lt?: string | null;
    /** host_lte */
    host_lte?: string | null;
    /** host_gt */
    host_gt?: string | null;
    /** host_gte */
    host_gte?: string | null;
    /** host_contains */
    host_contains?: string | null;
    /** host_not_contains */
    host_not_contains?: string | null;
    /** host_starts_with */
    host_starts_with?: string | null;
    /** host_not_starts_with */
    host_not_starts_with?: string | null;
    /** host_ends_with */
    host_ends_with?: string | null;
    /** host_not_ends_with */
    host_not_ends_with?: string | null;
    /** timestamp */
    timestamp?: string | null;
    /** timestamp_not */
    timestamp_not?: string | null;
    /** timestamp_in */
    timestamp_in?: string[] | null;
    /** timestamp_not_in */
    timestamp_not_in?: string[] | null;
    /** timestamp_lt */
    timestamp_lt?: string | null;
    /** timestamp_lte */
    timestamp_lte?: string | null;
    /** timestamp_gt */
    timestamp_gt?: string | null;
    /** timestamp_gte */
    timestamp_gte?: string | null;
    /** timestamp_contains */
    timestamp_contains?: string | null;
    /** timestamp_not_contains */
    timestamp_not_contains?: string | null;
    /** timestamp_starts_with */
    timestamp_starts_with?: string | null;
    /** timestamp_not_starts_with */
    timestamp_not_starts_with?: string | null;
    /** timestamp_ends_with */
    timestamp_ends_with?: string | null;
    /** timestamp_not_ends_with */
    timestamp_not_ends_with?: string | null;
    /** domain */
    domain?: string | null;
    /** domain_not */
    domain_not?: string | null;
    /** domain_in */
    domain_in?: string[] | null;
    /** domain_not_in */
    domain_not_in?: string[] | null;
    /** domain_lt */
    domain_lt?: string | null;
    /** domain_lte */
    domain_lte?: string | null;
    /** domain_gt */
    domain_gt?: string | null;
    /** domain_gte */
    domain_gte?: string | null;
    /** domain_contains */
    domain_contains?: string | null;
    /** domain_not_contains */
    domain_not_contains?: string | null;
    /** domain_starts_with */
    domain_starts_with?: string | null;
    /** domain_not_starts_with */
    domain_not_starts_with?: string | null;
    /** domain_ends_with */
    domain_ends_with?: string | null;
    /** domain_not_ends_with */
    domain_not_ends_with?: string | null;
    /** data */
    data?: string | null;
    /** data_not */
    data_not?: string | null;
    /** data_in */
    data_in?: string[] | null;
    /** data_not_in */
    data_not_in?: string[] | null;
    /** data_lt */
    data_lt?: string | null;
    /** data_lte */
    data_lte?: string | null;
    /** data_gt */
    data_gt?: string | null;
    /** data_gte */
    data_gte?: string | null;
    /** data_contains */
    data_contains?: string | null;
    /** data_not_contains */
    data_not_contains?: string | null;
    /** data_starts_with */
    data_starts_with?: string | null;
    /** data_not_starts_with */
    data_not_starts_with?: string | null;
    /** data_ends_with */
    data_ends_with?: string | null;
    /** data_not_ends_with */
    data_not_ends_with?: string | null;
    /** commits */
    commits?: _CommitFilter | null;
    /** commits_not */
    commits_not?: _CommitFilter | null;
    /** commits_in */
    commits_in?: _CommitFilter | null;
    /** commits_not_in */
    commits_not_in?: _CommitFilter | null;
    /** commits_some */
    commits_some?: _CommitFilter | null;
    /** commits_none */
    commits_none?: _CommitFilter | null;
    /** commits_single */
    commits_single?: _CommitFilter | null;
    /** commits_every */
    commits_every?: _CommitFilter | null;
}
/** Filter Input Type for Fingerprint */
export interface _FingerprintFilter {
    /** AND */
    AND?: _FingerprintFilter[] | null;
    /** OR */
    OR?: _FingerprintFilter[] | null;
    /** atmTeamId */
    atmTeamId?: string | null;
    /** atmTeamId_not */
    atmTeamId_not?: string | null;
    /** atmTeamId_in */
    atmTeamId_in?: string[] | null;
    /** atmTeamId_not_in */
    atmTeamId_not_in?: string[] | null;
    /** atmTeamId_lt */
    atmTeamId_lt?: string | null;
    /** atmTeamId_lte */
    atmTeamId_lte?: string | null;
    /** atmTeamId_gt */
    atmTeamId_gt?: string | null;
    /** atmTeamId_gte */
    atmTeamId_gte?: string | null;
    /** atmTeamId_contains */
    atmTeamId_contains?: string | null;
    /** atmTeamId_not_contains */
    atmTeamId_not_contains?: string | null;
    /** atmTeamId_starts_with */
    atmTeamId_starts_with?: string | null;
    /** atmTeamId_not_starts_with */
    atmTeamId_not_starts_with?: string | null;
    /** atmTeamId_ends_with */
    atmTeamId_ends_with?: string | null;
    /** atmTeamId_not_ends_with */
    atmTeamId_not_ends_with?: string | null;
    /** name */
    name?: string | null;
    /** name_not */
    name_not?: string | null;
    /** name_in */
    name_in?: string[] | null;
    /** name_not_in */
    name_not_in?: string[] | null;
    /** name_lt */
    name_lt?: string | null;
    /** name_lte */
    name_lte?: string | null;
    /** name_gt */
    name_gt?: string | null;
    /** name_gte */
    name_gte?: string | null;
    /** name_contains */
    name_contains?: string | null;
    /** name_not_contains */
    name_not_contains?: string | null;
    /** name_starts_with */
    name_starts_with?: string | null;
    /** name_not_starts_with */
    name_not_starts_with?: string | null;
    /** name_ends_with */
    name_ends_with?: string | null;
    /** name_not_ends_with */
    name_not_ends_with?: string | null;
    /** sha */
    sha?: string | null;
    /** sha_not */
    sha_not?: string | null;
    /** sha_in */
    sha_in?: string[] | null;
    /** sha_not_in */
    sha_not_in?: string[] | null;
    /** sha_lt */
    sha_lt?: string | null;
    /** sha_lte */
    sha_lte?: string | null;
    /** sha_gt */
    sha_gt?: string | null;
    /** sha_gte */
    sha_gte?: string | null;
    /** sha_contains */
    sha_contains?: string | null;
    /** sha_not_contains */
    sha_not_contains?: string | null;
    /** sha_starts_with */
    sha_starts_with?: string | null;
    /** sha_not_starts_with */
    sha_not_starts_with?: string | null;
    /** sha_ends_with */
    sha_ends_with?: string | null;
    /** sha_not_ends_with */
    sha_not_ends_with?: string | null;
    /** data */
    data?: string | null;
    /** data_not */
    data_not?: string | null;
    /** data_in */
    data_in?: string[] | null;
    /** data_not_in */
    data_not_in?: string[] | null;
    /** data_lt */
    data_lt?: string | null;
    /** data_lte */
    data_lte?: string | null;
    /** data_gt */
    data_gt?: string | null;
    /** data_gte */
    data_gte?: string | null;
    /** data_contains */
    data_contains?: string | null;
    /** data_not_contains */
    data_not_contains?: string | null;
    /** data_starts_with */
    data_starts_with?: string | null;
    /** data_not_starts_with */
    data_not_starts_with?: string | null;
    /** data_ends_with */
    data_ends_with?: string | null;
    /** data_not_ends_with */
    data_not_ends_with?: string | null;
    /** commit */
    commit?: _CommitFilter | null;
    /** commit_not */
    commit_not?: _CommitFilter | null;
    /** commit_in */
    commit_in?: _CommitFilter | null;
    /** commit_not_in */
    commit_not_in?: _CommitFilter | null;
}
/** Filter Input Type for ParentImpact */
export interface _ParentImpactFilter {
    /** AND */
    AND?: _ParentImpactFilter[] | null;
    /** OR */
    OR?: _ParentImpactFilter[] | null;
    /** atmTeamId */
    atmTeamId?: string | null;
    /** atmTeamId_not */
    atmTeamId_not?: string | null;
    /** atmTeamId_in */
    atmTeamId_in?: string[] | null;
    /** atmTeamId_not_in */
    atmTeamId_not_in?: string[] | null;
    /** atmTeamId_lt */
    atmTeamId_lt?: string | null;
    /** atmTeamId_lte */
    atmTeamId_lte?: string | null;
    /** atmTeamId_gt */
    atmTeamId_gt?: string | null;
    /** atmTeamId_gte */
    atmTeamId_gte?: string | null;
    /** atmTeamId_contains */
    atmTeamId_contains?: string | null;
    /** atmTeamId_not_contains */
    atmTeamId_not_contains?: string | null;
    /** atmTeamId_starts_with */
    atmTeamId_starts_with?: string | null;
    /** atmTeamId_not_starts_with */
    atmTeamId_not_starts_with?: string | null;
    /** atmTeamId_ends_with */
    atmTeamId_ends_with?: string | null;
    /** atmTeamId_not_ends_with */
    atmTeamId_not_ends_with?: string | null;
    /** id */
    id?: string | null;
    /** id_not */
    id_not?: string | null;
    /** id_in */
    id_in?: string[] | null;
    /** id_not_in */
    id_not_in?: string[] | null;
    /** id_lt */
    id_lt?: string | null;
    /** id_lte */
    id_lte?: string | null;
    /** id_gt */
    id_gt?: string | null;
    /** id_gte */
    id_gte?: string | null;
    /** id_contains */
    id_contains?: string | null;
    /** id_not_contains */
    id_not_contains?: string | null;
    /** id_starts_with */
    id_starts_with?: string | null;
    /** id_not_starts_with */
    id_not_starts_with?: string | null;
    /** id_ends_with */
    id_ends_with?: string | null;
    /** id_not_ends_with */
    id_not_ends_with?: string | null;
    /** url */
    url?: string | null;
    /** url_not */
    url_not?: string | null;
    /** url_in */
    url_in?: string[] | null;
    /** url_not_in */
    url_not_in?: string[] | null;
    /** url_lt */
    url_lt?: string | null;
    /** url_lte */
    url_lte?: string | null;
    /** url_gt */
    url_gt?: string | null;
    /** url_gte */
    url_gte?: string | null;
    /** url_contains */
    url_contains?: string | null;
    /** url_not_contains */
    url_not_contains?: string | null;
    /** url_starts_with */
    url_starts_with?: string | null;
    /** url_not_starts_with */
    url_not_starts_with?: string | null;
    /** url_ends_with */
    url_ends_with?: string | null;
    /** url_not_ends_with */
    url_not_ends_with?: string | null;
    /** data */
    data?: string | null;
    /** data_not */
    data_not?: string | null;
    /** data_in */
    data_in?: string[] | null;
    /** data_not_in */
    data_not_in?: string[] | null;
    /** data_lt */
    data_lt?: string | null;
    /** data_lte */
    data_lte?: string | null;
    /** data_gt */
    data_gt?: string | null;
    /** data_gte */
    data_gte?: string | null;
    /** data_contains */
    data_contains?: string | null;
    /** data_not_contains */
    data_not_contains?: string | null;
    /** data_starts_with */
    data_starts_with?: string | null;
    /** data_not_starts_with */
    data_not_starts_with?: string | null;
    /** data_ends_with */
    data_ends_with?: string | null;
    /** data_not_ends_with */
    data_not_ends_with?: string | null;
    /** commits */
    commits?: _CommitFilter | null;
    /** commits_not */
    commits_not?: _CommitFilter | null;
    /** commits_in */
    commits_in?: _CommitFilter | null;
    /** commits_not_in */
    commits_not_in?: _CommitFilter | null;
    /** commits_some */
    commits_some?: _CommitFilter | null;
    /** commits_none */
    commits_none?: _CommitFilter | null;
    /** commits_single */
    commits_single?: _CommitFilter | null;
    /** commits_every */
    commits_every?: _CommitFilter | null;
    /** commit */
    commit?: _CommitFilter | null;
    /** commit_not */
    commit_not?: _CommitFilter | null;
    /** commit_in */
    commit_in?: _CommitFilter | null;
    /** commit_not_in */
    commit_not_in?: _CommitFilter | null;
}
/** Filter Input Type for Branch */
export interface _BranchFilter {
    /** AND */
    AND?: _BranchFilter[] | null;
    /** OR */
    OR?: _BranchFilter[] | null;
    /** atmTeamId */
    atmTeamId?: string | null;
    /** atmTeamId_not */
    atmTeamId_not?: string | null;
    /** atmTeamId_in */
    atmTeamId_in?: string[] | null;
    /** atmTeamId_not_in */
    atmTeamId_not_in?: string[] | null;
    /** atmTeamId_lt */
    atmTeamId_lt?: string | null;
    /** atmTeamId_lte */
    atmTeamId_lte?: string | null;
    /** atmTeamId_gt */
    atmTeamId_gt?: string | null;
    /** atmTeamId_gte */
    atmTeamId_gte?: string | null;
    /** atmTeamId_contains */
    atmTeamId_contains?: string | null;
    /** atmTeamId_not_contains */
    atmTeamId_not_contains?: string | null;
    /** atmTeamId_starts_with */
    atmTeamId_starts_with?: string | null;
    /** atmTeamId_not_starts_with */
    atmTeamId_not_starts_with?: string | null;
    /** atmTeamId_ends_with */
    atmTeamId_ends_with?: string | null;
    /** atmTeamId_not_ends_with */
    atmTeamId_not_ends_with?: string | null;
    /** id */
    id?: string | null;
    /** id_not */
    id_not?: string | null;
    /** id_in */
    id_in?: string[] | null;
    /** id_not_in */
    id_not_in?: string[] | null;
    /** id_lt */
    id_lt?: string | null;
    /** id_lte */
    id_lte?: string | null;
    /** id_gt */
    id_gt?: string | null;
    /** id_gte */
    id_gte?: string | null;
    /** id_contains */
    id_contains?: string | null;
    /** id_not_contains */
    id_not_contains?: string | null;
    /** id_starts_with */
    id_starts_with?: string | null;
    /** id_not_starts_with */
    id_not_starts_with?: string | null;
    /** id_ends_with */
    id_ends_with?: string | null;
    /** id_not_ends_with */
    id_not_ends_with?: string | null;
    /** name */
    name?: string | null;
    /** name_not */
    name_not?: string | null;
    /** name_in */
    name_in?: string[] | null;
    /** name_not_in */
    name_not_in?: string[] | null;
    /** name_lt */
    name_lt?: string | null;
    /** name_lte */
    name_lte?: string | null;
    /** name_gt */
    name_gt?: string | null;
    /** name_gte */
    name_gte?: string | null;
    /** name_contains */
    name_contains?: string | null;
    /** name_not_contains */
    name_not_contains?: string | null;
    /** name_starts_with */
    name_starts_with?: string | null;
    /** name_not_starts_with */
    name_not_starts_with?: string | null;
    /** name_ends_with */
    name_ends_with?: string | null;
    /** name_not_ends_with */
    name_not_ends_with?: string | null;
    /** timestamp */
    timestamp?: string | null;
    /** timestamp_not */
    timestamp_not?: string | null;
    /** timestamp_in */
    timestamp_in?: string[] | null;
    /** timestamp_not_in */
    timestamp_not_in?: string[] | null;
    /** timestamp_lt */
    timestamp_lt?: string | null;
    /** timestamp_lte */
    timestamp_lte?: string | null;
    /** timestamp_gt */
    timestamp_gt?: string | null;
    /** timestamp_gte */
    timestamp_gte?: string | null;
    /** timestamp_contains */
    timestamp_contains?: string | null;
    /** timestamp_not_contains */
    timestamp_not_contains?: string | null;
    /** timestamp_starts_with */
    timestamp_starts_with?: string | null;
    /** timestamp_not_starts_with */
    timestamp_not_starts_with?: string | null;
    /** timestamp_ends_with */
    timestamp_ends_with?: string | null;
    /** timestamp_not_ends_with */
    timestamp_not_ends_with?: string | null;
    /** isRemote */
    isRemote?: boolean | null;
    /** isRemote_not */
    isRemote_not?: boolean | null;
    /** remoteRepoHtmlUrl */
    remoteRepoHtmlUrl?: string | null;
    /** remoteRepoHtmlUrl_not */
    remoteRepoHtmlUrl_not?: string | null;
    /** remoteRepoHtmlUrl_in */
    remoteRepoHtmlUrl_in?: string[] | null;
    /** remoteRepoHtmlUrl_not_in */
    remoteRepoHtmlUrl_not_in?: string[] | null;
    /** remoteRepoHtmlUrl_lt */
    remoteRepoHtmlUrl_lt?: string | null;
    /** remoteRepoHtmlUrl_lte */
    remoteRepoHtmlUrl_lte?: string | null;
    /** remoteRepoHtmlUrl_gt */
    remoteRepoHtmlUrl_gt?: string | null;
    /** remoteRepoHtmlUrl_gte */
    remoteRepoHtmlUrl_gte?: string | null;
    /** remoteRepoHtmlUrl_contains */
    remoteRepoHtmlUrl_contains?: string | null;
    /** remoteRepoHtmlUrl_not_contains */
    remoteRepoHtmlUrl_not_contains?: string | null;
    /** remoteRepoHtmlUrl_starts_with */
    remoteRepoHtmlUrl_starts_with?: string | null;
    /** remoteRepoHtmlUrl_not_starts_with */
    remoteRepoHtmlUrl_not_starts_with?: string | null;
    /** remoteRepoHtmlUrl_ends_with */
    remoteRepoHtmlUrl_ends_with?: string | null;
    /** remoteRepoHtmlUrl_not_ends_with */
    remoteRepoHtmlUrl_not_ends_with?: string | null;
    /** repo */
    repo?: _RepoFilter | null;
    /** repo_not */
    repo_not?: _RepoFilter | null;
    /** repo_in */
    repo_in?: _RepoFilter | null;
    /** repo_not_in */
    repo_not_in?: _RepoFilter | null;
    /** commit */
    commit?: _CommitFilter | null;
    /** commit_not */
    commit_not?: _CommitFilter | null;
    /** commit_in */
    commit_in?: _CommitFilter | null;
    /** commit_not_in */
    commit_not_in?: _CommitFilter | null;
    /** pullRequests */
    pullRequests?: _PullRequestFilter | null;
    /** pullRequests_not */
    pullRequests_not?: _PullRequestFilter | null;
    /** pullRequests_in */
    pullRequests_in?: _PullRequestFilter | null;
    /** pullRequests_not_in */
    pullRequests_not_in?: _PullRequestFilter | null;
    /** pullRequests_some */
    pullRequests_some?: _PullRequestFilter | null;
    /** pullRequests_none */
    pullRequests_none?: _PullRequestFilter | null;
    /** pullRequests_single */
    pullRequests_single?: _PullRequestFilter | null;
    /** pullRequests_every */
    pullRequests_every?: _PullRequestFilter | null;
}
/** Filter Input Type for Review */
export interface _ReviewFilter {
    /** AND */
    AND?: _ReviewFilter[] | null;
    /** OR */
    OR?: _ReviewFilter[] | null;
    /** atmTeamId */
    atmTeamId?: string | null;
    /** atmTeamId_not */
    atmTeamId_not?: string | null;
    /** atmTeamId_in */
    atmTeamId_in?: string[] | null;
    /** atmTeamId_not_in */
    atmTeamId_not_in?: string[] | null;
    /** atmTeamId_lt */
    atmTeamId_lt?: string | null;
    /** atmTeamId_lte */
    atmTeamId_lte?: string | null;
    /** atmTeamId_gt */
    atmTeamId_gt?: string | null;
    /** atmTeamId_gte */
    atmTeamId_gte?: string | null;
    /** atmTeamId_contains */
    atmTeamId_contains?: string | null;
    /** atmTeamId_not_contains */
    atmTeamId_not_contains?: string | null;
    /** atmTeamId_starts_with */
    atmTeamId_starts_with?: string | null;
    /** atmTeamId_not_starts_with */
    atmTeamId_not_starts_with?: string | null;
    /** atmTeamId_ends_with */
    atmTeamId_ends_with?: string | null;
    /** atmTeamId_not_ends_with */
    atmTeamId_not_ends_with?: string | null;
    /** id */
    id?: string | null;
    /** id_not */
    id_not?: string | null;
    /** id_in */
    id_in?: string[] | null;
    /** id_not_in */
    id_not_in?: string[] | null;
    /** id_lt */
    id_lt?: string | null;
    /** id_lte */
    id_lte?: string | null;
    /** id_gt */
    id_gt?: string | null;
    /** id_gte */
    id_gte?: string | null;
    /** id_contains */
    id_contains?: string | null;
    /** id_not_contains */
    id_not_contains?: string | null;
    /** id_starts_with */
    id_starts_with?: string | null;
    /** id_not_starts_with */
    id_not_starts_with?: string | null;
    /** id_ends_with */
    id_ends_with?: string | null;
    /** id_not_ends_with */
    id_not_ends_with?: string | null;
    /** gitHubId */
    gitHubId?: string | null;
    /** gitHubId_not */
    gitHubId_not?: string | null;
    /** gitHubId_in */
    gitHubId_in?: string[] | null;
    /** gitHubId_not_in */
    gitHubId_not_in?: string[] | null;
    /** gitHubId_lt */
    gitHubId_lt?: string | null;
    /** gitHubId_lte */
    gitHubId_lte?: string | null;
    /** gitHubId_gt */
    gitHubId_gt?: string | null;
    /** gitHubId_gte */
    gitHubId_gte?: string | null;
    /** gitHubId_contains */
    gitHubId_contains?: string | null;
    /** gitHubId_not_contains */
    gitHubId_not_contains?: string | null;
    /** gitHubId_starts_with */
    gitHubId_starts_with?: string | null;
    /** gitHubId_not_starts_with */
    gitHubId_not_starts_with?: string | null;
    /** gitHubId_ends_with */
    gitHubId_ends_with?: string | null;
    /** gitHubId_not_ends_with */
    gitHubId_not_ends_with?: string | null;
    /** reviewId */
    reviewId?: string | null;
    /** reviewId_not */
    reviewId_not?: string | null;
    /** reviewId_in */
    reviewId_in?: string[] | null;
    /** reviewId_not_in */
    reviewId_not_in?: string[] | null;
    /** reviewId_lt */
    reviewId_lt?: string | null;
    /** reviewId_lte */
    reviewId_lte?: string | null;
    /** reviewId_gt */
    reviewId_gt?: string | null;
    /** reviewId_gte */
    reviewId_gte?: string | null;
    /** reviewId_contains */
    reviewId_contains?: string | null;
    /** reviewId_not_contains */
    reviewId_not_contains?: string | null;
    /** reviewId_starts_with */
    reviewId_starts_with?: string | null;
    /** reviewId_not_starts_with */
    reviewId_not_starts_with?: string | null;
    /** reviewId_ends_with */
    reviewId_ends_with?: string | null;
    /** reviewId_not_ends_with */
    reviewId_not_ends_with?: string | null;
    /** body */
    body?: string | null;
    /** body_not */
    body_not?: string | null;
    /** body_in */
    body_in?: string[] | null;
    /** body_not_in */
    body_not_in?: string[] | null;
    /** body_lt */
    body_lt?: string | null;
    /** body_lte */
    body_lte?: string | null;
    /** body_gt */
    body_gt?: string | null;
    /** body_gte */
    body_gte?: string | null;
    /** body_contains */
    body_contains?: string | null;
    /** body_not_contains */
    body_not_contains?: string | null;
    /** body_starts_with */
    body_starts_with?: string | null;
    /** body_not_starts_with */
    body_not_starts_with?: string | null;
    /** body_ends_with */
    body_ends_with?: string | null;
    /** body_not_ends_with */
    body_not_ends_with?: string | null;
    /** state */
    state?: ReviewState | null;
    /** state_not */
    state_not?: ReviewState | null;
    /** state_in */
    state_in?: ReviewState[] | null;
    /** state_not_in */
    state_not_in?: ReviewState[] | null;
    /** submittedAt */
    submittedAt?: string | null;
    /** submittedAt_not */
    submittedAt_not?: string | null;
    /** submittedAt_in */
    submittedAt_in?: string[] | null;
    /** submittedAt_not_in */
    submittedAt_not_in?: string[] | null;
    /** submittedAt_lt */
    submittedAt_lt?: string | null;
    /** submittedAt_lte */
    submittedAt_lte?: string | null;
    /** submittedAt_gt */
    submittedAt_gt?: string | null;
    /** submittedAt_gte */
    submittedAt_gte?: string | null;
    /** submittedAt_contains */
    submittedAt_contains?: string | null;
    /** submittedAt_not_contains */
    submittedAt_not_contains?: string | null;
    /** submittedAt_starts_with */
    submittedAt_starts_with?: string | null;
    /** submittedAt_not_starts_with */
    submittedAt_not_starts_with?: string | null;
    /** submittedAt_ends_with */
    submittedAt_ends_with?: string | null;
    /** submittedAt_not_ends_with */
    submittedAt_not_ends_with?: string | null;
    /** htmlUrl */
    htmlUrl?: string | null;
    /** htmlUrl_not */
    htmlUrl_not?: string | null;
    /** htmlUrl_in */
    htmlUrl_in?: string[] | null;
    /** htmlUrl_not_in */
    htmlUrl_not_in?: string[] | null;
    /** htmlUrl_lt */
    htmlUrl_lt?: string | null;
    /** htmlUrl_lte */
    htmlUrl_lte?: string | null;
    /** htmlUrl_gt */
    htmlUrl_gt?: string | null;
    /** htmlUrl_gte */
    htmlUrl_gte?: string | null;
    /** htmlUrl_contains */
    htmlUrl_contains?: string | null;
    /** htmlUrl_not_contains */
    htmlUrl_not_contains?: string | null;
    /** htmlUrl_starts_with */
    htmlUrl_starts_with?: string | null;
    /** htmlUrl_not_starts_with */
    htmlUrl_not_starts_with?: string | null;
    /** htmlUrl_ends_with */
    htmlUrl_ends_with?: string | null;
    /** htmlUrl_not_ends_with */
    htmlUrl_not_ends_with?: string | null;
    /** by */
    by?: _ScmIdFilter | null;
    /** by_not */
    by_not?: _ScmIdFilter | null;
    /** by_in */
    by_in?: _ScmIdFilter | null;
    /** by_not_in */
    by_not_in?: _ScmIdFilter | null;
    /** by_some */
    by_some?: _ScmIdFilter | null;
    /** by_none */
    by_none?: _ScmIdFilter | null;
    /** by_single */
    by_single?: _ScmIdFilter | null;
    /** by_every */
    by_every?: _ScmIdFilter | null;
    /** commit */
    commit?: _CommitFilter | null;
    /** commit_not */
    commit_not?: _CommitFilter | null;
    /** commit_in */
    commit_in?: _CommitFilter | null;
    /** commit_not_in */
    commit_not_in?: _CommitFilter | null;
    /** comments */
    comments?: _CommentFilter | null;
    /** comments_not */
    comments_not?: _CommentFilter | null;
    /** comments_in */
    comments_in?: _CommentFilter | null;
    /** comments_not_in */
    comments_not_in?: _CommentFilter | null;
    /** comments_some */
    comments_some?: _CommentFilter | null;
    /** comments_none */
    comments_none?: _CommentFilter | null;
    /** comments_single */
    comments_single?: _CommentFilter | null;
    /** comments_every */
    comments_every?: _CommentFilter | null;
    /** pullRequest */
    pullRequest?: _PullRequestFilter | null;
    /** pullRequest_not */
    pullRequest_not?: _PullRequestFilter | null;
    /** pullRequest_in */
    pullRequest_in?: _PullRequestFilter | null;
    /** pullRequest_not_in */
    pullRequest_not_in?: _PullRequestFilter | null;
}
/** Filter Input Type for Comment */
export interface _CommentFilter {
    /** AND */
    AND?: _CommentFilter[] | null;
    /** OR */
    OR?: _CommentFilter[] | null;
    /** atmTeamId */
    atmTeamId?: string | null;
    /** atmTeamId_not */
    atmTeamId_not?: string | null;
    /** atmTeamId_in */
    atmTeamId_in?: string[] | null;
    /** atmTeamId_not_in */
    atmTeamId_not_in?: string[] | null;
    /** atmTeamId_lt */
    atmTeamId_lt?: string | null;
    /** atmTeamId_lte */
    atmTeamId_lte?: string | null;
    /** atmTeamId_gt */
    atmTeamId_gt?: string | null;
    /** atmTeamId_gte */
    atmTeamId_gte?: string | null;
    /** atmTeamId_contains */
    atmTeamId_contains?: string | null;
    /** atmTeamId_not_contains */
    atmTeamId_not_contains?: string | null;
    /** atmTeamId_starts_with */
    atmTeamId_starts_with?: string | null;
    /** atmTeamId_not_starts_with */
    atmTeamId_not_starts_with?: string | null;
    /** atmTeamId_ends_with */
    atmTeamId_ends_with?: string | null;
    /** atmTeamId_not_ends_with */
    atmTeamId_not_ends_with?: string | null;
    /** id */
    id?: string | null;
    /** id_not */
    id_not?: string | null;
    /** id_in */
    id_in?: string[] | null;
    /** id_not_in */
    id_not_in?: string[] | null;
    /** id_lt */
    id_lt?: string | null;
    /** id_lte */
    id_lte?: string | null;
    /** id_gt */
    id_gt?: string | null;
    /** id_gte */
    id_gte?: string | null;
    /** id_contains */
    id_contains?: string | null;
    /** id_not_contains */
    id_not_contains?: string | null;
    /** id_starts_with */
    id_starts_with?: string | null;
    /** id_not_starts_with */
    id_not_starts_with?: string | null;
    /** id_ends_with */
    id_ends_with?: string | null;
    /** id_not_ends_with */
    id_not_ends_with?: string | null;
    /** body */
    body?: string | null;
    /** body_not */
    body_not?: string | null;
    /** body_in */
    body_in?: string[] | null;
    /** body_not_in */
    body_not_in?: string[] | null;
    /** body_lt */
    body_lt?: string | null;
    /** body_lte */
    body_lte?: string | null;
    /** body_gt */
    body_gt?: string | null;
    /** body_gte */
    body_gte?: string | null;
    /** body_contains */
    body_contains?: string | null;
    /** body_not_contains */
    body_not_contains?: string | null;
    /** body_starts_with */
    body_starts_with?: string | null;
    /** body_not_starts_with */
    body_not_starts_with?: string | null;
    /** body_ends_with */
    body_ends_with?: string | null;
    /** body_not_ends_with */
    body_not_ends_with?: string | null;
    /** timestamp */
    timestamp?: string | null;
    /** timestamp_not */
    timestamp_not?: string | null;
    /** timestamp_in */
    timestamp_in?: string[] | null;
    /** timestamp_not_in */
    timestamp_not_in?: string[] | null;
    /** timestamp_lt */
    timestamp_lt?: string | null;
    /** timestamp_lte */
    timestamp_lte?: string | null;
    /** timestamp_gt */
    timestamp_gt?: string | null;
    /** timestamp_gte */
    timestamp_gte?: string | null;
    /** timestamp_contains */
    timestamp_contains?: string | null;
    /** timestamp_not_contains */
    timestamp_not_contains?: string | null;
    /** timestamp_starts_with */
    timestamp_starts_with?: string | null;
    /** timestamp_not_starts_with */
    timestamp_not_starts_with?: string | null;
    /** timestamp_ends_with */
    timestamp_ends_with?: string | null;
    /** timestamp_not_ends_with */
    timestamp_not_ends_with?: string | null;
    /** createdAt */
    createdAt?: string | null;
    /** createdAt_not */
    createdAt_not?: string | null;
    /** createdAt_in */
    createdAt_in?: string[] | null;
    /** createdAt_not_in */
    createdAt_not_in?: string[] | null;
    /** createdAt_lt */
    createdAt_lt?: string | null;
    /** createdAt_lte */
    createdAt_lte?: string | null;
    /** createdAt_gt */
    createdAt_gt?: string | null;
    /** createdAt_gte */
    createdAt_gte?: string | null;
    /** createdAt_contains */
    createdAt_contains?: string | null;
    /** createdAt_not_contains */
    createdAt_not_contains?: string | null;
    /** createdAt_starts_with */
    createdAt_starts_with?: string | null;
    /** createdAt_not_starts_with */
    createdAt_not_starts_with?: string | null;
    /** createdAt_ends_with */
    createdAt_ends_with?: string | null;
    /** createdAt_not_ends_with */
    createdAt_not_ends_with?: string | null;
    /** updatedAt */
    updatedAt?: string | null;
    /** updatedAt_not */
    updatedAt_not?: string | null;
    /** updatedAt_in */
    updatedAt_in?: string[] | null;
    /** updatedAt_not_in */
    updatedAt_not_in?: string[] | null;
    /** updatedAt_lt */
    updatedAt_lt?: string | null;
    /** updatedAt_lte */
    updatedAt_lte?: string | null;
    /** updatedAt_gt */
    updatedAt_gt?: string | null;
    /** updatedAt_gte */
    updatedAt_gte?: string | null;
    /** updatedAt_contains */
    updatedAt_contains?: string | null;
    /** updatedAt_not_contains */
    updatedAt_not_contains?: string | null;
    /** updatedAt_starts_with */
    updatedAt_starts_with?: string | null;
    /** updatedAt_not_starts_with */
    updatedAt_not_starts_with?: string | null;
    /** updatedAt_ends_with */
    updatedAt_ends_with?: string | null;
    /** updatedAt_not_ends_with */
    updatedAt_not_ends_with?: string | null;
    /** commentId */
    commentId?: string | null;
    /** commentId_not */
    commentId_not?: string | null;
    /** commentId_in */
    commentId_in?: string[] | null;
    /** commentId_not_in */
    commentId_not_in?: string[] | null;
    /** commentId_lt */
    commentId_lt?: string | null;
    /** commentId_lte */
    commentId_lte?: string | null;
    /** commentId_gt */
    commentId_gt?: string | null;
    /** commentId_gte */
    commentId_gte?: string | null;
    /** commentId_contains */
    commentId_contains?: string | null;
    /** commentId_not_contains */
    commentId_not_contains?: string | null;
    /** commentId_starts_with */
    commentId_starts_with?: string | null;
    /** commentId_not_starts_with */
    commentId_not_starts_with?: string | null;
    /** commentId_ends_with */
    commentId_ends_with?: string | null;
    /** commentId_not_ends_with */
    commentId_not_ends_with?: string | null;
    /** gitHubId */
    gitHubId?: string | null;
    /** gitHubId_not */
    gitHubId_not?: string | null;
    /** gitHubId_in */
    gitHubId_in?: string[] | null;
    /** gitHubId_not_in */
    gitHubId_not_in?: string[] | null;
    /** gitHubId_lt */
    gitHubId_lt?: string | null;
    /** gitHubId_lte */
    gitHubId_lte?: string | null;
    /** gitHubId_gt */
    gitHubId_gt?: string | null;
    /** gitHubId_gte */
    gitHubId_gte?: string | null;
    /** gitHubId_contains */
    gitHubId_contains?: string | null;
    /** gitHubId_not_contains */
    gitHubId_not_contains?: string | null;
    /** gitHubId_starts_with */
    gitHubId_starts_with?: string | null;
    /** gitHubId_not_starts_with */
    gitHubId_not_starts_with?: string | null;
    /** gitHubId_ends_with */
    gitHubId_ends_with?: string | null;
    /** gitHubId_not_ends_with */
    gitHubId_not_ends_with?: string | null;
    /** path */
    path?: string | null;
    /** path_not */
    path_not?: string | null;
    /** path_in */
    path_in?: string[] | null;
    /** path_not_in */
    path_not_in?: string[] | null;
    /** path_lt */
    path_lt?: string | null;
    /** path_lte */
    path_lte?: string | null;
    /** path_gt */
    path_gt?: string | null;
    /** path_gte */
    path_gte?: string | null;
    /** path_contains */
    path_contains?: string | null;
    /** path_not_contains */
    path_not_contains?: string | null;
    /** path_starts_with */
    path_starts_with?: string | null;
    /** path_not_starts_with */
    path_not_starts_with?: string | null;
    /** path_ends_with */
    path_ends_with?: string | null;
    /** path_not_ends_with */
    path_not_ends_with?: string | null;
    /** position */
    position?: string | null;
    /** position_not */
    position_not?: string | null;
    /** position_in */
    position_in?: string[] | null;
    /** position_not_in */
    position_not_in?: string[] | null;
    /** position_lt */
    position_lt?: string | null;
    /** position_lte */
    position_lte?: string | null;
    /** position_gt */
    position_gt?: string | null;
    /** position_gte */
    position_gte?: string | null;
    /** position_contains */
    position_contains?: string | null;
    /** position_not_contains */
    position_not_contains?: string | null;
    /** position_starts_with */
    position_starts_with?: string | null;
    /** position_not_starts_with */
    position_not_starts_with?: string | null;
    /** position_ends_with */
    position_ends_with?: string | null;
    /** position_not_ends_with */
    position_not_ends_with?: string | null;
    /** htmlUrl */
    htmlUrl?: string | null;
    /** htmlUrl_not */
    htmlUrl_not?: string | null;
    /** htmlUrl_in */
    htmlUrl_in?: string[] | null;
    /** htmlUrl_not_in */
    htmlUrl_not_in?: string[] | null;
    /** htmlUrl_lt */
    htmlUrl_lt?: string | null;
    /** htmlUrl_lte */
    htmlUrl_lte?: string | null;
    /** htmlUrl_gt */
    htmlUrl_gt?: string | null;
    /** htmlUrl_gte */
    htmlUrl_gte?: string | null;
    /** htmlUrl_contains */
    htmlUrl_contains?: string | null;
    /** htmlUrl_not_contains */
    htmlUrl_not_contains?: string | null;
    /** htmlUrl_starts_with */
    htmlUrl_starts_with?: string | null;
    /** htmlUrl_not_starts_with */
    htmlUrl_not_starts_with?: string | null;
    /** htmlUrl_ends_with */
    htmlUrl_ends_with?: string | null;
    /** htmlUrl_not_ends_with */
    htmlUrl_not_ends_with?: string | null;
    /** commentType */
    commentType?: CommentCommentType | null;
    /** commentType_not */
    commentType_not?: CommentCommentType | null;
    /** commentType_in */
    commentType_in?: CommentCommentType[] | null;
    /** commentType_not_in */
    commentType_not_in?: CommentCommentType[] | null;
    /** issue */
    issue?: _IssueFilter | null;
    /** issue_not */
    issue_not?: _IssueFilter | null;
    /** issue_in */
    issue_in?: _IssueFilter | null;
    /** issue_not_in */
    issue_not_in?: _IssueFilter | null;
    /** review */
    review?: _ReviewFilter | null;
    /** review_not */
    review_not?: _ReviewFilter | null;
    /** review_in */
    review_in?: _ReviewFilter | null;
    /** review_not_in */
    review_not_in?: _ReviewFilter | null;
    /** pullRequest */
    pullRequest?: _PullRequestFilter | null;
    /** pullRequest_not */
    pullRequest_not?: _PullRequestFilter | null;
    /** pullRequest_in */
    pullRequest_in?: _PullRequestFilter | null;
    /** pullRequest_not_in */
    pullRequest_not_in?: _PullRequestFilter | null;
    /** by */
    by?: _ScmIdFilter | null;
    /** by_not */
    by_not?: _ScmIdFilter | null;
    /** by_in */
    by_in?: _ScmIdFilter | null;
    /** by_not_in */
    by_not_in?: _ScmIdFilter | null;
}
/** Filter Input Type for DeletedBranch */
export interface _DeletedBranchFilter {
    /** AND */
    AND?: _DeletedBranchFilter[] | null;
    /** OR */
    OR?: _DeletedBranchFilter[] | null;
    /** atmTeamId */
    atmTeamId?: string | null;
    /** atmTeamId_not */
    atmTeamId_not?: string | null;
    /** atmTeamId_in */
    atmTeamId_in?: string[] | null;
    /** atmTeamId_not_in */
    atmTeamId_not_in?: string[] | null;
    /** atmTeamId_lt */
    atmTeamId_lt?: string | null;
    /** atmTeamId_lte */
    atmTeamId_lte?: string | null;
    /** atmTeamId_gt */
    atmTeamId_gt?: string | null;
    /** atmTeamId_gte */
    atmTeamId_gte?: string | null;
    /** atmTeamId_contains */
    atmTeamId_contains?: string | null;
    /** atmTeamId_not_contains */
    atmTeamId_not_contains?: string | null;
    /** atmTeamId_starts_with */
    atmTeamId_starts_with?: string | null;
    /** atmTeamId_not_starts_with */
    atmTeamId_not_starts_with?: string | null;
    /** atmTeamId_ends_with */
    atmTeamId_ends_with?: string | null;
    /** atmTeamId_not_ends_with */
    atmTeamId_not_ends_with?: string | null;
    /** id */
    id?: string | null;
    /** id_not */
    id_not?: string | null;
    /** id_in */
    id_in?: string[] | null;
    /** id_not_in */
    id_not_in?: string[] | null;
    /** id_lt */
    id_lt?: string | null;
    /** id_lte */
    id_lte?: string | null;
    /** id_gt */
    id_gt?: string | null;
    /** id_gte */
    id_gte?: string | null;
    /** id_contains */
    id_contains?: string | null;
    /** id_not_contains */
    id_not_contains?: string | null;
    /** id_starts_with */
    id_starts_with?: string | null;
    /** id_not_starts_with */
    id_not_starts_with?: string | null;
    /** id_ends_with */
    id_ends_with?: string | null;
    /** id_not_ends_with */
    id_not_ends_with?: string | null;
    /** name */
    name?: string | null;
    /** name_not */
    name_not?: string | null;
    /** name_in */
    name_in?: string[] | null;
    /** name_not_in */
    name_not_in?: string[] | null;
    /** name_lt */
    name_lt?: string | null;
    /** name_lte */
    name_lte?: string | null;
    /** name_gt */
    name_gt?: string | null;
    /** name_gte */
    name_gte?: string | null;
    /** name_contains */
    name_contains?: string | null;
    /** name_not_contains */
    name_not_contains?: string | null;
    /** name_starts_with */
    name_starts_with?: string | null;
    /** name_not_starts_with */
    name_not_starts_with?: string | null;
    /** name_ends_with */
    name_ends_with?: string | null;
    /** name_not_ends_with */
    name_not_ends_with?: string | null;
    /** timestamp */
    timestamp?: string | null;
    /** timestamp_not */
    timestamp_not?: string | null;
    /** timestamp_in */
    timestamp_in?: string[] | null;
    /** timestamp_not_in */
    timestamp_not_in?: string[] | null;
    /** timestamp_lt */
    timestamp_lt?: string | null;
    /** timestamp_lte */
    timestamp_lte?: string | null;
    /** timestamp_gt */
    timestamp_gt?: string | null;
    /** timestamp_gte */
    timestamp_gte?: string | null;
    /** timestamp_contains */
    timestamp_contains?: string | null;
    /** timestamp_not_contains */
    timestamp_not_contains?: string | null;
    /** timestamp_starts_with */
    timestamp_starts_with?: string | null;
    /** timestamp_not_starts_with */
    timestamp_not_starts_with?: string | null;
    /** timestamp_ends_with */
    timestamp_ends_with?: string | null;
    /** timestamp_not_ends_with */
    timestamp_not_ends_with?: string | null;
    /** repo */
    repo?: _RepoFilter | null;
    /** repo_not */
    repo_not?: _RepoFilter | null;
    /** repo_in */
    repo_in?: _RepoFilter | null;
    /** repo_not_in */
    repo_not_in?: _RepoFilter | null;
    /** commit */
    commit?: _CommitFilter | null;
    /** commit_not */
    commit_not?: _CommitFilter | null;
    /** commit_in */
    commit_in?: _CommitFilter | null;
    /** commit_not_in */
    commit_not_in?: _CommitFilter | null;
    /** pullRequests */
    pullRequests?: _PullRequestFilter | null;
    /** pullRequests_not */
    pullRequests_not?: _PullRequestFilter | null;
    /** pullRequests_in */
    pullRequests_in?: _PullRequestFilter | null;
    /** pullRequests_not_in */
    pullRequests_not_in?: _PullRequestFilter | null;
    /** pullRequests_some */
    pullRequests_some?: _PullRequestFilter | null;
    /** pullRequests_none */
    pullRequests_none?: _PullRequestFilter | null;
    /** pullRequests_single */
    pullRequests_single?: _PullRequestFilter | null;
    /** pullRequests_every */
    pullRequests_every?: _PullRequestFilter | null;
}
/** Filter Input Type for ImageLinked */
export interface _ImageLinkedFilter {
    /** AND */
    AND?: _ImageLinkedFilter[] | null;
    /** OR */
    OR?: _ImageLinkedFilter[] | null;
    /** atmTeamId */
    atmTeamId?: string | null;
    /** atmTeamId_not */
    atmTeamId_not?: string | null;
    /** atmTeamId_in */
    atmTeamId_in?: string[] | null;
    /** atmTeamId_not_in */
    atmTeamId_not_in?: string[] | null;
    /** atmTeamId_lt */
    atmTeamId_lt?: string | null;
    /** atmTeamId_lte */
    atmTeamId_lte?: string | null;
    /** atmTeamId_gt */
    atmTeamId_gt?: string | null;
    /** atmTeamId_gte */
    atmTeamId_gte?: string | null;
    /** atmTeamId_contains */
    atmTeamId_contains?: string | null;
    /** atmTeamId_not_contains */
    atmTeamId_not_contains?: string | null;
    /** atmTeamId_starts_with */
    atmTeamId_starts_with?: string | null;
    /** atmTeamId_not_starts_with */
    atmTeamId_not_starts_with?: string | null;
    /** atmTeamId_ends_with */
    atmTeamId_ends_with?: string | null;
    /** atmTeamId_not_ends_with */
    atmTeamId_not_ends_with?: string | null;
    /** timestamp */
    timestamp?: string | null;
    /** timestamp_not */
    timestamp_not?: string | null;
    /** timestamp_in */
    timestamp_in?: string[] | null;
    /** timestamp_not_in */
    timestamp_not_in?: string[] | null;
    /** timestamp_lt */
    timestamp_lt?: string | null;
    /** timestamp_lte */
    timestamp_lte?: string | null;
    /** timestamp_gt */
    timestamp_gt?: string | null;
    /** timestamp_gte */
    timestamp_gte?: string | null;
    /** timestamp_contains */
    timestamp_contains?: string | null;
    /** timestamp_not_contains */
    timestamp_not_contains?: string | null;
    /** timestamp_starts_with */
    timestamp_starts_with?: string | null;
    /** timestamp_not_starts_with */
    timestamp_not_starts_with?: string | null;
    /** timestamp_ends_with */
    timestamp_ends_with?: string | null;
    /** timestamp_not_ends_with */
    timestamp_not_ends_with?: string | null;
    /** image */
    image?: _DockerImageFilter | null;
    /** image_not */
    image_not?: _DockerImageFilter | null;
    /** image_in */
    image_in?: _DockerImageFilter | null;
    /** image_not_in */
    image_not_in?: _DockerImageFilter | null;
    /** commit */
    commit?: _CommitFilter | null;
    /** commit_not */
    commit_not?: _CommitFilter | null;
    /** commit_in */
    commit_in?: _CommitFilter | null;
    /** commit_not_in */
    commit_not_in?: _CommitFilter | null;
}
/** Filter Input Type for PushImpact */
export interface _PushImpactFilter {
    /** AND */
    AND?: _PushImpactFilter[] | null;
    /** OR */
    OR?: _PushImpactFilter[] | null;
    /** atmTeamId */
    atmTeamId?: string | null;
    /** atmTeamId_not */
    atmTeamId_not?: string | null;
    /** atmTeamId_in */
    atmTeamId_in?: string[] | null;
    /** atmTeamId_not_in */
    atmTeamId_not_in?: string[] | null;
    /** atmTeamId_lt */
    atmTeamId_lt?: string | null;
    /** atmTeamId_lte */
    atmTeamId_lte?: string | null;
    /** atmTeamId_gt */
    atmTeamId_gt?: string | null;
    /** atmTeamId_gte */
    atmTeamId_gte?: string | null;
    /** atmTeamId_contains */
    atmTeamId_contains?: string | null;
    /** atmTeamId_not_contains */
    atmTeamId_not_contains?: string | null;
    /** atmTeamId_starts_with */
    atmTeamId_starts_with?: string | null;
    /** atmTeamId_not_starts_with */
    atmTeamId_not_starts_with?: string | null;
    /** atmTeamId_ends_with */
    atmTeamId_ends_with?: string | null;
    /** atmTeamId_not_ends_with */
    atmTeamId_not_ends_with?: string | null;
    /** id */
    id?: string | null;
    /** id_not */
    id_not?: string | null;
    /** id_in */
    id_in?: string[] | null;
    /** id_not_in */
    id_not_in?: string[] | null;
    /** id_lt */
    id_lt?: string | null;
    /** id_lte */
    id_lte?: string | null;
    /** id_gt */
    id_gt?: string | null;
    /** id_gte */
    id_gte?: string | null;
    /** id_contains */
    id_contains?: string | null;
    /** id_not_contains */
    id_not_contains?: string | null;
    /** id_starts_with */
    id_starts_with?: string | null;
    /** id_not_starts_with */
    id_not_starts_with?: string | null;
    /** id_ends_with */
    id_ends_with?: string | null;
    /** id_not_ends_with */
    id_not_ends_with?: string | null;
    /** url */
    url?: string | null;
    /** url_not */
    url_not?: string | null;
    /** url_in */
    url_in?: string[] | null;
    /** url_not_in */
    url_not_in?: string[] | null;
    /** url_lt */
    url_lt?: string | null;
    /** url_lte */
    url_lte?: string | null;
    /** url_gt */
    url_gt?: string | null;
    /** url_gte */
    url_gte?: string | null;
    /** url_contains */
    url_contains?: string | null;
    /** url_not_contains */
    url_not_contains?: string | null;
    /** url_starts_with */
    url_starts_with?: string | null;
    /** url_not_starts_with */
    url_not_starts_with?: string | null;
    /** url_ends_with */
    url_ends_with?: string | null;
    /** url_not_ends_with */
    url_not_ends_with?: string | null;
    /** data */
    data?: string | null;
    /** data_not */
    data_not?: string | null;
    /** data_in */
    data_in?: string[] | null;
    /** data_not_in */
    data_not_in?: string[] | null;
    /** data_lt */
    data_lt?: string | null;
    /** data_lte */
    data_lte?: string | null;
    /** data_gt */
    data_gt?: string | null;
    /** data_gte */
    data_gte?: string | null;
    /** data_contains */
    data_contains?: string | null;
    /** data_not_contains */
    data_not_contains?: string | null;
    /** data_starts_with */
    data_starts_with?: string | null;
    /** data_not_starts_with */
    data_not_starts_with?: string | null;
    /** data_ends_with */
    data_ends_with?: string | null;
    /** data_not_ends_with */
    data_not_ends_with?: string | null;
    /** push */
    push?: _PushFilter | null;
    /** push_not */
    push_not?: _PushFilter | null;
    /** push_in */
    push_in?: _PushFilter | null;
    /** push_not_in */
    push_not_in?: _PushFilter | null;
}
/** Filter Input Type for PullRequestImpact */
export interface _PullRequestImpactFilter {
    /** AND */
    AND?: _PullRequestImpactFilter[] | null;
    /** OR */
    OR?: _PullRequestImpactFilter[] | null;
    /** atmTeamId */
    atmTeamId?: string | null;
    /** atmTeamId_not */
    atmTeamId_not?: string | null;
    /** atmTeamId_in */
    atmTeamId_in?: string[] | null;
    /** atmTeamId_not_in */
    atmTeamId_not_in?: string[] | null;
    /** atmTeamId_lt */
    atmTeamId_lt?: string | null;
    /** atmTeamId_lte */
    atmTeamId_lte?: string | null;
    /** atmTeamId_gt */
    atmTeamId_gt?: string | null;
    /** atmTeamId_gte */
    atmTeamId_gte?: string | null;
    /** atmTeamId_contains */
    atmTeamId_contains?: string | null;
    /** atmTeamId_not_contains */
    atmTeamId_not_contains?: string | null;
    /** atmTeamId_starts_with */
    atmTeamId_starts_with?: string | null;
    /** atmTeamId_not_starts_with */
    atmTeamId_not_starts_with?: string | null;
    /** atmTeamId_ends_with */
    atmTeamId_ends_with?: string | null;
    /** atmTeamId_not_ends_with */
    atmTeamId_not_ends_with?: string | null;
    /** id */
    id?: string | null;
    /** id_not */
    id_not?: string | null;
    /** id_in */
    id_in?: string[] | null;
    /** id_not_in */
    id_not_in?: string[] | null;
    /** id_lt */
    id_lt?: string | null;
    /** id_lte */
    id_lte?: string | null;
    /** id_gt */
    id_gt?: string | null;
    /** id_gte */
    id_gte?: string | null;
    /** id_contains */
    id_contains?: string | null;
    /** id_not_contains */
    id_not_contains?: string | null;
    /** id_starts_with */
    id_starts_with?: string | null;
    /** id_not_starts_with */
    id_not_starts_with?: string | null;
    /** id_ends_with */
    id_ends_with?: string | null;
    /** id_not_ends_with */
    id_not_ends_with?: string | null;
    /** url */
    url?: string | null;
    /** url_not */
    url_not?: string | null;
    /** url_in */
    url_in?: string[] | null;
    /** url_not_in */
    url_not_in?: string[] | null;
    /** url_lt */
    url_lt?: string | null;
    /** url_lte */
    url_lte?: string | null;
    /** url_gt */
    url_gt?: string | null;
    /** url_gte */
    url_gte?: string | null;
    /** url_contains */
    url_contains?: string | null;
    /** url_not_contains */
    url_not_contains?: string | null;
    /** url_starts_with */
    url_starts_with?: string | null;
    /** url_not_starts_with */
    url_not_starts_with?: string | null;
    /** url_ends_with */
    url_ends_with?: string | null;
    /** url_not_ends_with */
    url_not_ends_with?: string | null;
    /** data */
    data?: string | null;
    /** data_not */
    data_not?: string | null;
    /** data_in */
    data_in?: string[] | null;
    /** data_not_in */
    data_not_in?: string[] | null;
    /** data_lt */
    data_lt?: string | null;
    /** data_lte */
    data_lte?: string | null;
    /** data_gt */
    data_gt?: string | null;
    /** data_gte */
    data_gte?: string | null;
    /** data_contains */
    data_contains?: string | null;
    /** data_not_contains */
    data_not_contains?: string | null;
    /** data_starts_with */
    data_starts_with?: string | null;
    /** data_not_starts_with */
    data_not_starts_with?: string | null;
    /** data_ends_with */
    data_ends_with?: string | null;
    /** data_not_ends_with */
    data_not_ends_with?: string | null;
    /** pullRequest */
    pullRequest?: _PullRequestFilter | null;
    /** pullRequest_not */
    pullRequest_not?: _PullRequestFilter | null;
    /** pullRequest_in */
    pullRequest_in?: _PullRequestFilter | null;
    /** pullRequest_not_in */
    pullRequest_not_in?: _PullRequestFilter | null;
}
/** Filter Input Type for UserJoinedChannel */
export interface _UserJoinedChannelFilter {
    /** AND */
    AND?: _UserJoinedChannelFilter[] | null;
    /** OR */
    OR?: _UserJoinedChannelFilter[] | null;
    /** atmTeamId */
    atmTeamId?: string | null;
    /** atmTeamId_not */
    atmTeamId_not?: string | null;
    /** atmTeamId_in */
    atmTeamId_in?: string[] | null;
    /** atmTeamId_not_in */
    atmTeamId_not_in?: string[] | null;
    /** atmTeamId_lt */
    atmTeamId_lt?: string | null;
    /** atmTeamId_lte */
    atmTeamId_lte?: string | null;
    /** atmTeamId_gt */
    atmTeamId_gt?: string | null;
    /** atmTeamId_gte */
    atmTeamId_gte?: string | null;
    /** atmTeamId_contains */
    atmTeamId_contains?: string | null;
    /** atmTeamId_not_contains */
    atmTeamId_not_contains?: string | null;
    /** atmTeamId_starts_with */
    atmTeamId_starts_with?: string | null;
    /** atmTeamId_not_starts_with */
    atmTeamId_not_starts_with?: string | null;
    /** atmTeamId_ends_with */
    atmTeamId_ends_with?: string | null;
    /** atmTeamId_not_ends_with */
    atmTeamId_not_ends_with?: string | null;
    /** id */
    id?: string | null;
    /** id_not */
    id_not?: string | null;
    /** id_in */
    id_in?: string[] | null;
    /** id_not_in */
    id_not_in?: string[] | null;
    /** id_lt */
    id_lt?: string | null;
    /** id_lte */
    id_lte?: string | null;
    /** id_gt */
    id_gt?: string | null;
    /** id_gte */
    id_gte?: string | null;
    /** id_contains */
    id_contains?: string | null;
    /** id_not_contains */
    id_not_contains?: string | null;
    /** id_starts_with */
    id_starts_with?: string | null;
    /** id_not_starts_with */
    id_not_starts_with?: string | null;
    /** id_ends_with */
    id_ends_with?: string | null;
    /** id_not_ends_with */
    id_not_ends_with?: string | null;
    /** user */
    user?: _ChatIdFilter | null;
    /** user_not */
    user_not?: _ChatIdFilter | null;
    /** user_in */
    user_in?: _ChatIdFilter | null;
    /** user_not_in */
    user_not_in?: _ChatIdFilter | null;
    /** channel */
    channel?: _ChatChannelFilter | null;
    /** channel_not */
    channel_not?: _ChatChannelFilter | null;
    /** channel_in */
    channel_in?: _ChatChannelFilter | null;
    /** channel_not_in */
    channel_not_in?: _ChatChannelFilter | null;
}
/** Enum for IssueState */
export declare enum IssueState {
    open = "open",
    closed = "closed"
}
/** Ordering Enum for Issue */
export declare enum _IssueOrdering {
    atmTeamId_asc = "atmTeamId_asc",
    atmTeamId_desc = "atmTeamId_desc",
    id_asc = "id_asc",
    id_desc = "id_desc",
    number_asc = "number_asc",
    number_desc = "number_desc",
    name_asc = "name_asc",
    name_desc = "name_desc",
    title_asc = "title_asc",
    title_desc = "title_desc",
    body_asc = "body_asc",
    body_desc = "body_desc",
    state_asc = "state_asc",
    state_desc = "state_desc",
    timestamp_asc = "timestamp_asc",
    timestamp_desc = "timestamp_desc",
    action_asc = "action_asc",
    action_desc = "action_desc",
    createdAt_asc = "createdAt_asc",
    createdAt_desc = "createdAt_desc",
    updatedAt_asc = "updatedAt_asc",
    updatedAt_desc = "updatedAt_desc",
    closedAt_asc = "closedAt_asc",
    closedAt_desc = "closedAt_desc"
}
/** Enum for ProviderType */
export declare enum ProviderType {
    bitbucket_cloud = "bitbucket_cloud",
    github_com = "github_com",
    ghe = "ghe",
    bitbucket = "bitbucket",
    gitlab = "gitlab"
}
/** Enum for OwnerType */
export declare enum OwnerType {
    user = "user",
    organization = "organization"
}
/** Enum for WebhookType */
export declare enum WebhookType {
    organization = "organization",
    repository = "repository"
}
/** Enum for PullRequestAction */
export declare enum PullRequestAction {
    assigned = "assigned",
    created = "created",
    unassigned = "unassigned",
    review_requested = "review_requested",
    review_request_removed = "review_request_removed",
    labeled = "labeled",
    unlabeled = "unlabeled",
    opened = "opened",
    edited = "edited",
    closed = "closed",
    reopened = "reopened",
    synchronize = "synchronize",
    submitted = "submitted"
}
/** Enum for MergeStatus */
export declare enum MergeStatus {
    can_be_merged = "can_be_merged",
    unchecked = "unchecked",
    cannot_be_merged = "cannot_be_merged"
}
/** Enum for BuildStatus */
export declare enum BuildStatus {
    pending = "pending",
    passed = "passed",
    broken = "broken",
    failed = "failed",
    started = "started",
    canceled = "canceled"
}
/** Enum for BuildTrigger */
export declare enum BuildTrigger {
    pull_request = "pull_request",
    push = "push",
    tag = "tag",
    cron = "cron"
}
/** Enum for PipelineStatus */
export declare enum PipelineStatus {
    running = "running",
    pending = "pending",
    success = "success",
    failed = "failed",
    canceled = "canceled",
    skipped = "skipped",
    manual = "manual"
}
/** Enum for PipelineProvider */
export declare enum PipelineProvider {
    gitlab_ci = "gitlab_ci"
}
/** Enum for JobStatus */
export declare enum JobStatus {
    created = "created",
    pending = "pending",
    running = "running",
    failed = "failed",
    success = "success",
    canceled = "canceled",
    skipped = "skipped",
    manual = "manual"
}
/** Enum for StatusState */
export declare enum StatusState {
    pending = "pending",
    success = "success",
    error = "error",
    failure = "failure"
}
/** Enum for ReviewState */
export declare enum ReviewState {
    requested = "requested",
    pending = "pending",
    approved = "approved",
    commented = "commented",
    unapproved = "unapproved",
    changes_requested = "changes_requested"
}
/** Enum for CommentCommentType */
export declare enum CommentCommentType {
    review = "review",
    pullRequest = "pullRequest",
    issue = "issue"
}
/** Ordering Enum for Repo */
export declare enum _RepoOrdering {
    atmTeamId_asc = "atmTeamId_asc",
    atmTeamId_desc = "atmTeamId_desc",
    id_asc = "id_asc",
    id_desc = "id_desc",
    owner_asc = "owner_asc",
    owner_desc = "owner_desc",
    name_asc = "name_asc",
    name_desc = "name_desc",
    allowRebaseMerge_asc = "allowRebaseMerge_asc",
    allowRebaseMerge_desc = "allowRebaseMerge_desc",
    allowSquashMerge_asc = "allowSquashMerge_asc",
    allowSquashMerge_desc = "allowSquashMerge_desc",
    allowMergeCommit_asc = "allowMergeCommit_asc",
    allowMergeCommit_desc = "allowMergeCommit_desc",
    repoId_asc = "repoId_asc",
    repoId_desc = "repoId_desc",
    gitHubId_asc = "gitHubId_asc",
    gitHubId_desc = "gitHubId_desc",
    defaultBranch_asc = "defaultBranch_asc",
    defaultBranch_desc = "defaultBranch_desc"
}
/** Ordering Enum for Label */
export declare enum _LabelOrdering {
    atmTeamId_asc = "atmTeamId_asc",
    atmTeamId_desc = "atmTeamId_desc",
    id_asc = "id_asc",
    id_desc = "id_desc",
    name_asc = "name_asc",
    name_desc = "name_desc",
    default_asc = "default_asc",
    default_desc = "default_desc",
    color_asc = "color_asc",
    color_desc = "color_desc"
}
/** Ordering Enum for ChatChannel */
export declare enum _ChatChannelOrdering {
    atmTeamId_asc = "atmTeamId_asc",
    atmTeamId_desc = "atmTeamId_desc",
    id_asc = "id_asc",
    id_desc = "id_desc",
    name_asc = "name_asc",
    name_desc = "name_desc",
    provider_asc = "provider_asc",
    provider_desc = "provider_desc",
    normalizedName_asc = "normalizedName_asc",
    normalizedName_desc = "normalizedName_desc",
    channelId_asc = "channelId_asc",
    channelId_desc = "channelId_desc",
    isDefault_asc = "isDefault_asc",
    isDefault_desc = "isDefault_desc",
    botInvitedSelf_asc = "botInvitedSelf_asc",
    botInvitedSelf_desc = "botInvitedSelf_desc",
    archived_asc = "archived_asc",
    archived_desc = "archived_desc"
}
/** Ordering Enum for ChatId */
export declare enum _ChatIdOrdering {
    atmTeamId_asc = "atmTeamId_asc",
    atmTeamId_desc = "atmTeamId_desc",
    id_asc = "id_asc",
    id_desc = "id_desc",
    screenName_asc = "screenName_asc",
    screenName_desc = "screenName_desc",
    userId_asc = "userId_asc",
    userId_desc = "userId_desc",
    provider_asc = "provider_asc",
    provider_desc = "provider_desc",
    isAtomistBot_asc = "isAtomistBot_asc",
    isAtomistBot_desc = "isAtomistBot_desc",
    isOwner_asc = "isOwner_asc",
    isOwner_desc = "isOwner_desc",
    isPrimaryOwner_asc = "isPrimaryOwner_asc",
    isPrimaryOwner_desc = "isPrimaryOwner_desc",
    isAdmin_asc = "isAdmin_asc",
    isAdmin_desc = "isAdmin_desc",
    isBot_asc = "isBot_asc",
    isBot_desc = "isBot_desc",
    timezoneLabel_asc = "timezoneLabel_asc",
    timezoneLabel_desc = "timezoneLabel_desc"
}
/** Ordering Enum for Email */
export declare enum _EmailOrdering {
    atmTeamId_asc = "atmTeamId_asc",
    atmTeamId_desc = "atmTeamId_desc",
    address_asc = "address_asc",
    address_desc = "address_desc"
}
/** Ordering Enum for SCMId */
export declare enum _ScmIdOrdering {
    atmTeamId_asc = "atmTeamId_asc",
    atmTeamId_desc = "atmTeamId_desc",
    login_asc = "login_asc",
    login_desc = "login_desc",
    name_asc = "name_asc",
    name_desc = "name_desc",
    avatar_asc = "avatar_asc",
    avatar_desc = "avatar_desc"
}
/** Ordering Enum for GitHubProvider */
export declare enum _GitHubProviderOrdering {
    atmTeamId_asc = "atmTeamId_asc",
    atmTeamId_desc = "atmTeamId_desc",
    id_asc = "id_asc",
    id_desc = "id_desc",
    url_asc = "url_asc",
    url_desc = "url_desc",
    providerId_asc = "providerId_asc",
    providerId_desc = "providerId_desc",
    apiUrl_asc = "apiUrl_asc",
    apiUrl_desc = "apiUrl_desc",
    gitUrl_asc = "gitUrl_asc",
    gitUrl_desc = "gitUrl_desc",
    providerType_asc = "providerType_asc",
    providerType_desc = "providerType_desc",
    private_asc = "private_asc",
    private_desc = "private_desc"
}
/** Ordering Enum for Team */
export declare enum _TeamOrdering {
    atmTeamId_asc = "atmTeamId_asc",
    atmTeamId_desc = "atmTeamId_desc",
    id_asc = "id_asc",
    id_desc = "id_desc",
    name_asc = "name_asc",
    name_desc = "name_desc",
    description_asc = "description_asc",
    description_desc = "description_desc",
    iconUrl_asc = "iconUrl_asc",
    iconUrl_desc = "iconUrl_desc",
    createdAt_asc = "createdAt_asc",
    createdAt_desc = "createdAt_desc"
}
/** Ordering Enum for Person */
export declare enum _PersonOrdering {
    atmTeamId_asc = "atmTeamId_asc",
    atmTeamId_desc = "atmTeamId_desc",
    id_asc = "id_asc",
    id_desc = "id_desc",
    forename_asc = "forename_asc",
    forename_desc = "forename_desc",
    surname_asc = "surname_asc",
    surname_desc = "surname_desc",
    name_asc = "name_asc",
    name_desc = "name_desc"
}
/** Ordering Enum for GitHubId */
export declare enum _GitHubIdOrdering {
    atmTeamId_asc = "atmTeamId_asc",
    atmTeamId_desc = "atmTeamId_desc",
    login_asc = "login_asc",
    login_desc = "login_desc",
    name_asc = "name_asc",
    name_desc = "name_desc"
}
/** Ordering Enum for SCMProvider */
export declare enum _ScmProviderOrdering {
    atmTeamId_asc = "atmTeamId_asc",
    atmTeamId_desc = "atmTeamId_desc",
    id_asc = "id_asc",
    id_desc = "id_desc",
    url_asc = "url_asc",
    url_desc = "url_desc",
    providerId_asc = "providerId_asc",
    providerId_desc = "providerId_desc",
    apiUrl_asc = "apiUrl_asc",
    apiUrl_desc = "apiUrl_desc",
    gitUrl_asc = "gitUrl_asc",
    gitUrl_desc = "gitUrl_desc",
    providerType_asc = "providerType_asc",
    providerType_desc = "providerType_desc",
    private_asc = "private_asc",
    private_desc = "private_desc"
}
/** Ordering Enum for Org */
export declare enum _OrgOrdering {
    atmTeamId_asc = "atmTeamId_asc",
    atmTeamId_desc = "atmTeamId_desc",
    id_asc = "id_asc",
    id_desc = "id_desc",
    owner_asc = "owner_asc",
    owner_desc = "owner_desc",
    ownerType_asc = "ownerType_asc",
    ownerType_desc = "ownerType_desc"
}
/** Ordering Enum for GitHubOrgWebhook */
export declare enum _GitHubOrgWebhookOrdering {
    atmTeamId_asc = "atmTeamId_asc",
    atmTeamId_desc = "atmTeamId_desc",
    id_asc = "id_asc",
    id_desc = "id_desc",
    url_asc = "url_asc",
    url_desc = "url_desc",
    webhookType_asc = "webhookType_asc",
    webhookType_desc = "webhookType_desc"
}
/** Ordering Enum for Webhook */
export declare enum _WebhookOrdering {
    atmTeamId_asc = "atmTeamId_asc",
    atmTeamId_desc = "atmTeamId_desc",
    id_asc = "id_asc",
    id_desc = "id_desc",
    url_asc = "url_asc",
    url_desc = "url_desc",
    webhookType_asc = "webhookType_asc",
    webhookType_desc = "webhookType_desc"
}
/** Ordering Enum for ChatTeam */
export declare enum _ChatTeamOrdering {
    atmTeamId_asc = "atmTeamId_asc",
    atmTeamId_desc = "atmTeamId_desc",
    id_asc = "id_asc",
    id_desc = "id_desc",
    name_asc = "name_asc",
    name_desc = "name_desc",
    provider_asc = "provider_asc",
    provider_desc = "provider_desc",
    domain_asc = "domain_asc",
    domain_desc = "domain_desc",
    messageCount_asc = "messageCount_asc",
    messageCount_desc = "messageCount_desc",
    emailDomain_asc = "emailDomain_asc",
    emailDomain_desc = "emailDomain_desc"
}
/** Ordering Enum for ChannelLink */
export declare enum _ChannelLinkOrdering {
    atmTeamId_asc = "atmTeamId_asc",
    atmTeamId_desc = "atmTeamId_desc",
    id_asc = "id_asc",
    id_desc = "id_desc"
}
/** Ordering Enum for PullRequest */
export declare enum _PullRequestOrdering {
    atmTeamId_asc = "atmTeamId_asc",
    atmTeamId_desc = "atmTeamId_desc",
    id_asc = "id_asc",
    id_desc = "id_desc",
    number_asc = "number_asc",
    number_desc = "number_desc",
    prId_asc = "prId_asc",
    prId_desc = "prId_desc",
    name_asc = "name_asc",
    name_desc = "name_desc",
    body_asc = "body_asc",
    body_desc = "body_desc",
    state_asc = "state_asc",
    state_desc = "state_desc",
    action_asc = "action_asc",
    action_desc = "action_desc",
    merged_asc = "merged_asc",
    merged_desc = "merged_desc",
    timestamp_asc = "timestamp_asc",
    timestamp_desc = "timestamp_desc",
    baseBranchName_asc = "baseBranchName_asc",
    baseBranchName_desc = "baseBranchName_desc",
    branchName_asc = "branchName_asc",
    branchName_desc = "branchName_desc",
    title_asc = "title_asc",
    title_desc = "title_desc",
    createdAt_asc = "createdAt_asc",
    createdAt_desc = "createdAt_desc",
    updatedAt_asc = "updatedAt_asc",
    updatedAt_desc = "updatedAt_desc",
    closedAt_asc = "closedAt_asc",
    closedAt_desc = "closedAt_desc",
    mergedAt_asc = "mergedAt_asc",
    mergedAt_desc = "mergedAt_desc",
    mergeStatus_asc = "mergeStatus_asc",
    mergeStatus_desc = "mergeStatus_desc"
}
/** Ordering Enum for Commit */
export declare enum _CommitOrdering {
    atmTeamId_asc = "atmTeamId_asc",
    atmTeamId_desc = "atmTeamId_desc",
    sha_asc = "sha_asc",
    sha_desc = "sha_desc",
    message_asc = "message_asc",
    message_desc = "message_desc",
    timestamp_asc = "timestamp_asc",
    timestamp_desc = "timestamp_desc"
}
/** Ordering Enum for Build */
export declare enum _BuildOrdering {
    atmTeamId_asc = "atmTeamId_asc",
    atmTeamId_desc = "atmTeamId_desc",
    id_asc = "id_asc",
    id_desc = "id_desc",
    buildId_asc = "buildId_asc",
    buildId_desc = "buildId_desc",
    number_asc = "number_asc",
    number_desc = "number_desc",
    name_asc = "name_asc",
    name_desc = "name_desc",
    status_asc = "status_asc",
    status_desc = "status_desc",
    buildUrl_asc = "buildUrl_asc",
    buildUrl_desc = "buildUrl_desc",
    compareUrl_asc = "compareUrl_asc",
    compareUrl_desc = "compareUrl_desc",
    trigger_asc = "trigger_asc",
    trigger_desc = "trigger_desc",
    provider_asc = "provider_asc",
    provider_desc = "provider_desc",
    pullRequestNumber_asc = "pullRequestNumber_asc",
    pullRequestNumber_desc = "pullRequestNumber_desc",
    startedAt_asc = "startedAt_asc",
    startedAt_desc = "startedAt_desc",
    finishedAt_asc = "finishedAt_asc",
    finishedAt_desc = "finishedAt_desc",
    timestamp_asc = "timestamp_asc",
    timestamp_desc = "timestamp_desc",
    workflowId_asc = "workflowId_asc",
    workflowId_desc = "workflowId_desc",
    jobName_asc = "jobName_asc",
    jobName_desc = "jobName_desc",
    jobId_asc = "jobId_asc",
    jobId_desc = "jobId_desc",
    data_asc = "data_asc",
    data_desc = "data_desc"
}
/** Ordering Enum for Push */
export declare enum _PushOrdering {
    atmTeamId_asc = "atmTeamId_asc",
    atmTeamId_desc = "atmTeamId_desc",
    id_asc = "id_asc",
    id_desc = "id_desc",
    timestamp_asc = "timestamp_asc",
    timestamp_desc = "timestamp_desc",
    branch_asc = "branch_asc",
    branch_desc = "branch_desc"
}
/** Ordering Enum for Pipeline */
export declare enum _PipelineOrdering {
    atmTeamId_asc = "atmTeamId_asc",
    atmTeamId_desc = "atmTeamId_desc",
    status_asc = "status_asc",
    status_desc = "status_desc",
    provider_asc = "provider_asc",
    provider_desc = "provider_desc",
    pipelineId_asc = "pipelineId_asc",
    pipelineId_desc = "pipelineId_desc",
    createdAt_asc = "createdAt_asc",
    createdAt_desc = "createdAt_desc",
    finishedAt_asc = "finishedAt_asc",
    finishedAt_desc = "finishedAt_desc"
}
/** Ordering Enum for Stage */
export declare enum _StageOrdering {
    atmTeamId_asc = "atmTeamId_asc",
    atmTeamId_desc = "atmTeamId_desc",
    name_asc = "name_asc",
    name_desc = "name_desc"
}
/** Ordering Enum for Job */
export declare enum _JobOrdering {
    atmTeamId_asc = "atmTeamId_asc",
    atmTeamId_desc = "atmTeamId_desc",
    when_asc = "when_asc",
    when_desc = "when_desc",
    manual_asc = "manual_asc",
    manual_desc = "manual_desc",
    name_asc = "name_asc",
    name_desc = "name_desc",
    jobId_asc = "jobId_asc",
    jobId_desc = "jobId_desc",
    startedAt_asc = "startedAt_asc",
    startedAt_desc = "startedAt_desc",
    finishedAt_asc = "finishedAt_asc",
    finishedAt_desc = "finishedAt_desc",
    status_asc = "status_asc",
    status_desc = "status_desc",
    runner_asc = "runner_asc",
    runner_desc = "runner_desc"
}
export declare enum SdmGoalState {
    success = "success",
    pre_approved = "pre_approved",
    requested = "requested",
    waiting_for_pre_approval = "waiting_for_pre_approval",
    approved = "approved",
    waiting_for_approval = "waiting_for_approval",
    failure = "failure",
    stopped = "stopped",
    planned = "planned",
    in_process = "in_process",
    skipped = "skipped",
    canceled = "canceled"
}
export declare enum SdmGoalDisplayState {
    show_current = "show_current",
    show_all = "show_all"
}
/** Ordering Enum for Tag */
export declare enum _TagOrdering {
    atmTeamId_asc = "atmTeamId_asc",
    atmTeamId_desc = "atmTeamId_desc",
    id_asc = "id_asc",
    id_desc = "id_desc",
    name_asc = "name_asc",
    name_desc = "name_desc",
    description_asc = "description_asc",
    description_desc = "description_desc",
    ref_asc = "ref_asc",
    ref_desc = "ref_desc",
    timestamp_asc = "timestamp_asc",
    timestamp_desc = "timestamp_desc"
}
/** Ordering Enum for Release */
export declare enum _ReleaseOrdering {
    atmTeamId_asc = "atmTeamId_asc",
    atmTeamId_desc = "atmTeamId_desc",
    id_asc = "id_asc",
    id_desc = "id_desc",
    name_asc = "name_asc",
    name_desc = "name_desc",
    timestamp_asc = "timestamp_asc",
    timestamp_desc = "timestamp_desc"
}
/** Ordering Enum for DockerImage */
export declare enum _DockerImageOrdering {
    atmTeamId_asc = "atmTeamId_asc",
    atmTeamId_desc = "atmTeamId_desc",
    image_asc = "image_asc",
    image_desc = "image_desc",
    imageName_asc = "imageName_asc",
    imageName_desc = "imageName_desc",
    timestamp_asc = "timestamp_asc",
    timestamp_desc = "timestamp_desc"
}
/** Ordering Enum for K8Pod */
export declare enum _K8PodOrdering {
    atmTeamId_asc = "atmTeamId_asc",
    atmTeamId_desc = "atmTeamId_desc",
    name_asc = "name_asc",
    name_desc = "name_desc",
    phase_asc = "phase_asc",
    phase_desc = "phase_desc",
    environment_asc = "environment_asc",
    environment_desc = "environment_desc",
    timestamp_asc = "timestamp_asc",
    timestamp_desc = "timestamp_desc",
    baseName_asc = "baseName_asc",
    baseName_desc = "baseName_desc",
    namespace_asc = "namespace_asc",
    namespace_desc = "namespace_desc",
    statusJSON_asc = "statusJSON_asc",
    statusJSON_desc = "statusJSON_desc",
    host_asc = "host_asc",
    host_desc = "host_desc",
    state_asc = "state_asc",
    state_desc = "state_desc",
    specsJSON_asc = "specsJSON_asc",
    specsJSON_desc = "specsJSON_desc",
    envJSON_asc = "envJSON_asc",
    envJSON_desc = "envJSON_desc",
    metadataJSON_asc = "metadataJSON_asc",
    metadataJSON_desc = "metadataJSON_desc",
    containersCrashLoopBackOff_asc = "containersCrashLoopBackOff_asc",
    containersCrashLoopBackOff_desc = "containersCrashLoopBackOff_desc",
    resourceVersion_asc = "resourceVersion_asc",
    resourceVersion_desc = "resourceVersion_desc"
}
/** Ordering Enum for K8Container */
export declare enum _K8ContainerOrdering {
    atmTeamId_asc = "atmTeamId_asc",
    atmTeamId_desc = "atmTeamId_desc",
    name_asc = "name_asc",
    name_desc = "name_desc",
    imageName_asc = "imageName_asc",
    imageName_desc = "imageName_desc",
    timestamp_asc = "timestamp_asc",
    timestamp_desc = "timestamp_desc",
    environment_asc = "environment_asc",
    environment_desc = "environment_desc",
    containerJSON_asc = "containerJSON_asc",
    containerJSON_desc = "containerJSON_desc",
    state_asc = "state_asc",
    state_desc = "state_desc",
    stateReason_asc = "stateReason_asc",
    stateReason_desc = "stateReason_desc",
    ready_asc = "ready_asc",
    ready_desc = "ready_desc",
    restartCount_asc = "restartCount_asc",
    restartCount_desc = "restartCount_desc",
    statusJSON_asc = "statusJSON_asc",
    statusJSON_desc = "statusJSON_desc",
    resourceVersion_asc = "resourceVersion_asc",
    resourceVersion_desc = "resourceVersion_desc",
    containerID_asc = "containerID_asc",
    containerID_desc = "containerID_desc"
}
/** Ordering Enum for Workflow */
export declare enum _WorkflowOrdering {
    atmTeamId_asc = "atmTeamId_asc",
    atmTeamId_desc = "atmTeamId_desc",
    id_asc = "id_asc",
    id_desc = "id_desc",
    name_asc = "name_asc",
    name_desc = "name_desc",
    workflowId_asc = "workflowId_asc",
    workflowId_desc = "workflowId_desc",
    provider_asc = "provider_asc",
    provider_desc = "provider_desc",
    config_asc = "config_asc",
    config_desc = "config_desc"
}
/** Ordering Enum for Status */
export declare enum _StatusOrdering {
    atmTeamId_asc = "atmTeamId_asc",
    atmTeamId_desc = "atmTeamId_desc",
    id_asc = "id_asc",
    id_desc = "id_desc",
    state_asc = "state_asc",
    state_desc = "state_desc",
    description_asc = "description_asc",
    description_desc = "description_desc",
    targetUrl_asc = "targetUrl_asc",
    targetUrl_desc = "targetUrl_desc",
    context_asc = "context_asc",
    context_desc = "context_desc",
    timestamp_asc = "timestamp_asc",
    timestamp_desc = "timestamp_desc"
}
/** Ordering Enum for HerokuApp */
export declare enum _HerokuAppOrdering {
    atmTeamId_asc = "atmTeamId_asc",
    atmTeamId_desc = "atmTeamId_desc",
    app_asc = "app_asc",
    app_desc = "app_desc",
    url_asc = "url_asc",
    url_desc = "url_desc",
    timestamp_asc = "timestamp_asc",
    timestamp_desc = "timestamp_desc",
    user_asc = "user_asc",
    user_desc = "user_desc",
    appId_asc = "appId_asc",
    appId_desc = "appId_desc",
    release_asc = "release_asc",
    release_desc = "release_desc"
}
/** Ordering Enum for Application */
export declare enum _ApplicationOrdering {
    atmTeamId_asc = "atmTeamId_asc",
    atmTeamId_desc = "atmTeamId_desc",
    id_asc = "id_asc",
    id_desc = "id_desc",
    state_asc = "state_asc",
    state_desc = "state_desc",
    host_asc = "host_asc",
    host_desc = "host_desc",
    timestamp_asc = "timestamp_asc",
    timestamp_desc = "timestamp_desc",
    domain_asc = "domain_asc",
    domain_desc = "domain_desc",
    data_asc = "data_asc",
    data_desc = "data_desc"
}
/** Ordering Enum for Fingerprint */
export declare enum _FingerprintOrdering {
    atmTeamId_asc = "atmTeamId_asc",
    atmTeamId_desc = "atmTeamId_desc",
    name_asc = "name_asc",
    name_desc = "name_desc",
    sha_asc = "sha_asc",
    sha_desc = "sha_desc",
    data_asc = "data_asc",
    data_desc = "data_desc"
}
/** Ordering Enum for ParentImpact */
export declare enum _ParentImpactOrdering {
    atmTeamId_asc = "atmTeamId_asc",
    atmTeamId_desc = "atmTeamId_desc",
    id_asc = "id_asc",
    id_desc = "id_desc",
    url_asc = "url_asc",
    url_desc = "url_desc",
    data_asc = "data_asc",
    data_desc = "data_desc"
}
/** Ordering Enum for Branch */
export declare enum _BranchOrdering {
    atmTeamId_asc = "atmTeamId_asc",
    atmTeamId_desc = "atmTeamId_desc",
    id_asc = "id_asc",
    id_desc = "id_desc",
    name_asc = "name_asc",
    name_desc = "name_desc",
    timestamp_asc = "timestamp_asc",
    timestamp_desc = "timestamp_desc",
    isRemote_asc = "isRemote_asc",
    isRemote_desc = "isRemote_desc",
    remoteRepoHtmlUrl_asc = "remoteRepoHtmlUrl_asc",
    remoteRepoHtmlUrl_desc = "remoteRepoHtmlUrl_desc"
}
/** Ordering Enum for Review */
export declare enum _ReviewOrdering {
    atmTeamId_asc = "atmTeamId_asc",
    atmTeamId_desc = "atmTeamId_desc",
    id_asc = "id_asc",
    id_desc = "id_desc",
    gitHubId_asc = "gitHubId_asc",
    gitHubId_desc = "gitHubId_desc",
    reviewId_asc = "reviewId_asc",
    reviewId_desc = "reviewId_desc",
    body_asc = "body_asc",
    body_desc = "body_desc",
    state_asc = "state_asc",
    state_desc = "state_desc",
    submittedAt_asc = "submittedAt_asc",
    submittedAt_desc = "submittedAt_desc",
    htmlUrl_asc = "htmlUrl_asc",
    htmlUrl_desc = "htmlUrl_desc"
}
/** Ordering Enum for Comment */
export declare enum _CommentOrdering {
    atmTeamId_asc = "atmTeamId_asc",
    atmTeamId_desc = "atmTeamId_desc",
    id_asc = "id_asc",
    id_desc = "id_desc",
    body_asc = "body_asc",
    body_desc = "body_desc",
    timestamp_asc = "timestamp_asc",
    timestamp_desc = "timestamp_desc",
    createdAt_asc = "createdAt_asc",
    createdAt_desc = "createdAt_desc",
    updatedAt_asc = "updatedAt_asc",
    updatedAt_desc = "updatedAt_desc",
    commentId_asc = "commentId_asc",
    commentId_desc = "commentId_desc",
    gitHubId_asc = "gitHubId_asc",
    gitHubId_desc = "gitHubId_desc",
    path_asc = "path_asc",
    path_desc = "path_desc",
    position_asc = "position_asc",
    position_desc = "position_desc",
    htmlUrl_asc = "htmlUrl_asc",
    htmlUrl_desc = "htmlUrl_desc",
    commentType_asc = "commentType_asc",
    commentType_desc = "commentType_desc"
}
/** Ordering Enum for DeletedBranch */
export declare enum _DeletedBranchOrdering {
    atmTeamId_asc = "atmTeamId_asc",
    atmTeamId_desc = "atmTeamId_desc",
    id_asc = "id_asc",
    id_desc = "id_desc",
    name_asc = "name_asc",
    name_desc = "name_desc",
    timestamp_asc = "timestamp_asc",
    timestamp_desc = "timestamp_desc"
}
/** Ordering Enum for ImageLinked */
export declare enum _ImageLinkedOrdering {
    atmTeamId_asc = "atmTeamId_asc",
    atmTeamId_desc = "atmTeamId_desc",
    timestamp_asc = "timestamp_asc",
    timestamp_desc = "timestamp_desc"
}
/** Ordering Enum for PushImpact */
export declare enum _PushImpactOrdering {
    atmTeamId_asc = "atmTeamId_asc",
    atmTeamId_desc = "atmTeamId_desc",
    id_asc = "id_asc",
    id_desc = "id_desc",
    url_asc = "url_asc",
    url_desc = "url_desc",
    data_asc = "data_asc",
    data_desc = "data_desc"
}
/** Ordering Enum for PullRequestImpact */
export declare enum _PullRequestImpactOrdering {
    atmTeamId_asc = "atmTeamId_asc",
    atmTeamId_desc = "atmTeamId_desc",
    id_asc = "id_asc",
    id_desc = "id_desc",
    url_asc = "url_asc",
    url_desc = "url_desc",
    data_asc = "data_asc",
    data_desc = "data_desc"
}
/** Ordering Enum for UserJoinedChannel */
export declare enum _UserJoinedChannelOrdering {
    atmTeamId_asc = "atmTeamId_asc",
    atmTeamId_desc = "atmTeamId_desc",
    id_asc = "id_asc",
    id_desc = "id_desc"
}
/** asc or desc ordering. Must be used with orderBy */
export declare enum _Ordering {
    desc = "desc",
    asc = "asc"
}
export declare enum SdmDeployState {
    requested = "requested",
    disabled = "disabled"
}
export declare enum CommitIssueRelationshipType {
    references = "references",
    fixes = "fixes"
}
