"use strict";
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
// ====================================================
// Enums
// ====================================================
/** Enum for IssueState */
var IssueState;
(function (IssueState) {
    IssueState["open"] = "open";
    IssueState["closed"] = "closed";
})(IssueState = exports.IssueState || (exports.IssueState = {}));
/** Ordering Enum for Issue */
var _IssueOrdering;
(function (_IssueOrdering) {
    _IssueOrdering["atmTeamId_asc"] = "atmTeamId_asc";
    _IssueOrdering["atmTeamId_desc"] = "atmTeamId_desc";
    _IssueOrdering["id_asc"] = "id_asc";
    _IssueOrdering["id_desc"] = "id_desc";
    _IssueOrdering["number_asc"] = "number_asc";
    _IssueOrdering["number_desc"] = "number_desc";
    _IssueOrdering["name_asc"] = "name_asc";
    _IssueOrdering["name_desc"] = "name_desc";
    _IssueOrdering["title_asc"] = "title_asc";
    _IssueOrdering["title_desc"] = "title_desc";
    _IssueOrdering["body_asc"] = "body_asc";
    _IssueOrdering["body_desc"] = "body_desc";
    _IssueOrdering["state_asc"] = "state_asc";
    _IssueOrdering["state_desc"] = "state_desc";
    _IssueOrdering["timestamp_asc"] = "timestamp_asc";
    _IssueOrdering["timestamp_desc"] = "timestamp_desc";
    _IssueOrdering["action_asc"] = "action_asc";
    _IssueOrdering["action_desc"] = "action_desc";
    _IssueOrdering["createdAt_asc"] = "createdAt_asc";
    _IssueOrdering["createdAt_desc"] = "createdAt_desc";
    _IssueOrdering["updatedAt_asc"] = "updatedAt_asc";
    _IssueOrdering["updatedAt_desc"] = "updatedAt_desc";
    _IssueOrdering["closedAt_asc"] = "closedAt_asc";
    _IssueOrdering["closedAt_desc"] = "closedAt_desc";
})(_IssueOrdering = exports._IssueOrdering || (exports._IssueOrdering = {}));
/** Enum for ProviderType */
var ProviderType;
(function (ProviderType) {
    ProviderType["bitbucket_cloud"] = "bitbucket_cloud";
    ProviderType["github_com"] = "github_com";
    ProviderType["ghe"] = "ghe";
    ProviderType["bitbucket"] = "bitbucket";
    ProviderType["gitlab"] = "gitlab";
})(ProviderType = exports.ProviderType || (exports.ProviderType = {}));
/** Enum for OwnerType */
var OwnerType;
(function (OwnerType) {
    OwnerType["user"] = "user";
    OwnerType["organization"] = "organization";
})(OwnerType = exports.OwnerType || (exports.OwnerType = {}));
/** Enum for WebhookType */
var WebhookType;
(function (WebhookType) {
    WebhookType["organization"] = "organization";
    WebhookType["repository"] = "repository";
})(WebhookType = exports.WebhookType || (exports.WebhookType = {}));
/** Enum for PullRequestAction */
var PullRequestAction;
(function (PullRequestAction) {
    PullRequestAction["assigned"] = "assigned";
    PullRequestAction["created"] = "created";
    PullRequestAction["unassigned"] = "unassigned";
    PullRequestAction["review_requested"] = "review_requested";
    PullRequestAction["review_request_removed"] = "review_request_removed";
    PullRequestAction["labeled"] = "labeled";
    PullRequestAction["unlabeled"] = "unlabeled";
    PullRequestAction["opened"] = "opened";
    PullRequestAction["edited"] = "edited";
    PullRequestAction["closed"] = "closed";
    PullRequestAction["reopened"] = "reopened";
    PullRequestAction["synchronize"] = "synchronize";
    PullRequestAction["submitted"] = "submitted";
})(PullRequestAction = exports.PullRequestAction || (exports.PullRequestAction = {}));
/** Enum for MergeStatus */
var MergeStatus;
(function (MergeStatus) {
    MergeStatus["can_be_merged"] = "can_be_merged";
    MergeStatus["unchecked"] = "unchecked";
    MergeStatus["cannot_be_merged"] = "cannot_be_merged";
})(MergeStatus = exports.MergeStatus || (exports.MergeStatus = {}));
/** Enum for BuildStatus */
var BuildStatus;
(function (BuildStatus) {
    BuildStatus["pending"] = "pending";
    BuildStatus["passed"] = "passed";
    BuildStatus["broken"] = "broken";
    BuildStatus["failed"] = "failed";
    BuildStatus["started"] = "started";
    BuildStatus["canceled"] = "canceled";
})(BuildStatus = exports.BuildStatus || (exports.BuildStatus = {}));
/** Enum for BuildTrigger */
var BuildTrigger;
(function (BuildTrigger) {
    BuildTrigger["pull_request"] = "pull_request";
    BuildTrigger["push"] = "push";
    BuildTrigger["tag"] = "tag";
    BuildTrigger["cron"] = "cron";
})(BuildTrigger = exports.BuildTrigger || (exports.BuildTrigger = {}));
/** Enum for PipelineStatus */
var PipelineStatus;
(function (PipelineStatus) {
    PipelineStatus["running"] = "running";
    PipelineStatus["pending"] = "pending";
    PipelineStatus["success"] = "success";
    PipelineStatus["failed"] = "failed";
    PipelineStatus["canceled"] = "canceled";
    PipelineStatus["skipped"] = "skipped";
    PipelineStatus["manual"] = "manual";
})(PipelineStatus = exports.PipelineStatus || (exports.PipelineStatus = {}));
/** Enum for PipelineProvider */
var PipelineProvider;
(function (PipelineProvider) {
    PipelineProvider["gitlab_ci"] = "gitlab_ci";
})(PipelineProvider = exports.PipelineProvider || (exports.PipelineProvider = {}));
/** Enum for JobStatus */
var JobStatus;
(function (JobStatus) {
    JobStatus["created"] = "created";
    JobStatus["pending"] = "pending";
    JobStatus["running"] = "running";
    JobStatus["failed"] = "failed";
    JobStatus["success"] = "success";
    JobStatus["canceled"] = "canceled";
    JobStatus["skipped"] = "skipped";
    JobStatus["manual"] = "manual";
})(JobStatus = exports.JobStatus || (exports.JobStatus = {}));
/** Enum for StatusState */
var StatusState;
(function (StatusState) {
    StatusState["pending"] = "pending";
    StatusState["success"] = "success";
    StatusState["error"] = "error";
    StatusState["failure"] = "failure";
})(StatusState = exports.StatusState || (exports.StatusState = {}));
/** Enum for ReviewState */
var ReviewState;
(function (ReviewState) {
    ReviewState["requested"] = "requested";
    ReviewState["pending"] = "pending";
    ReviewState["approved"] = "approved";
    ReviewState["commented"] = "commented";
    ReviewState["unapproved"] = "unapproved";
    ReviewState["changes_requested"] = "changes_requested";
})(ReviewState = exports.ReviewState || (exports.ReviewState = {}));
/** Enum for CommentCommentType */
var CommentCommentType;
(function (CommentCommentType) {
    CommentCommentType["review"] = "review";
    CommentCommentType["pullRequest"] = "pullRequest";
    CommentCommentType["issue"] = "issue";
})(CommentCommentType = exports.CommentCommentType || (exports.CommentCommentType = {}));
/** Ordering Enum for Repo */
var _RepoOrdering;
(function (_RepoOrdering) {
    _RepoOrdering["atmTeamId_asc"] = "atmTeamId_asc";
    _RepoOrdering["atmTeamId_desc"] = "atmTeamId_desc";
    _RepoOrdering["id_asc"] = "id_asc";
    _RepoOrdering["id_desc"] = "id_desc";
    _RepoOrdering["owner_asc"] = "owner_asc";
    _RepoOrdering["owner_desc"] = "owner_desc";
    _RepoOrdering["name_asc"] = "name_asc";
    _RepoOrdering["name_desc"] = "name_desc";
    _RepoOrdering["allowRebaseMerge_asc"] = "allowRebaseMerge_asc";
    _RepoOrdering["allowRebaseMerge_desc"] = "allowRebaseMerge_desc";
    _RepoOrdering["allowSquashMerge_asc"] = "allowSquashMerge_asc";
    _RepoOrdering["allowSquashMerge_desc"] = "allowSquashMerge_desc";
    _RepoOrdering["allowMergeCommit_asc"] = "allowMergeCommit_asc";
    _RepoOrdering["allowMergeCommit_desc"] = "allowMergeCommit_desc";
    _RepoOrdering["repoId_asc"] = "repoId_asc";
    _RepoOrdering["repoId_desc"] = "repoId_desc";
    _RepoOrdering["gitHubId_asc"] = "gitHubId_asc";
    _RepoOrdering["gitHubId_desc"] = "gitHubId_desc";
    _RepoOrdering["defaultBranch_asc"] = "defaultBranch_asc";
    _RepoOrdering["defaultBranch_desc"] = "defaultBranch_desc";
})(_RepoOrdering = exports._RepoOrdering || (exports._RepoOrdering = {}));
/** Ordering Enum for Label */
var _LabelOrdering;
(function (_LabelOrdering) {
    _LabelOrdering["atmTeamId_asc"] = "atmTeamId_asc";
    _LabelOrdering["atmTeamId_desc"] = "atmTeamId_desc";
    _LabelOrdering["id_asc"] = "id_asc";
    _LabelOrdering["id_desc"] = "id_desc";
    _LabelOrdering["name_asc"] = "name_asc";
    _LabelOrdering["name_desc"] = "name_desc";
    _LabelOrdering["default_asc"] = "default_asc";
    _LabelOrdering["default_desc"] = "default_desc";
    _LabelOrdering["color_asc"] = "color_asc";
    _LabelOrdering["color_desc"] = "color_desc";
})(_LabelOrdering = exports._LabelOrdering || (exports._LabelOrdering = {}));
/** Ordering Enum for ChatChannel */
var _ChatChannelOrdering;
(function (_ChatChannelOrdering) {
    _ChatChannelOrdering["atmTeamId_asc"] = "atmTeamId_asc";
    _ChatChannelOrdering["atmTeamId_desc"] = "atmTeamId_desc";
    _ChatChannelOrdering["id_asc"] = "id_asc";
    _ChatChannelOrdering["id_desc"] = "id_desc";
    _ChatChannelOrdering["name_asc"] = "name_asc";
    _ChatChannelOrdering["name_desc"] = "name_desc";
    _ChatChannelOrdering["provider_asc"] = "provider_asc";
    _ChatChannelOrdering["provider_desc"] = "provider_desc";
    _ChatChannelOrdering["normalizedName_asc"] = "normalizedName_asc";
    _ChatChannelOrdering["normalizedName_desc"] = "normalizedName_desc";
    _ChatChannelOrdering["channelId_asc"] = "channelId_asc";
    _ChatChannelOrdering["channelId_desc"] = "channelId_desc";
    _ChatChannelOrdering["isDefault_asc"] = "isDefault_asc";
    _ChatChannelOrdering["isDefault_desc"] = "isDefault_desc";
    _ChatChannelOrdering["botInvitedSelf_asc"] = "botInvitedSelf_asc";
    _ChatChannelOrdering["botInvitedSelf_desc"] = "botInvitedSelf_desc";
    _ChatChannelOrdering["archived_asc"] = "archived_asc";
    _ChatChannelOrdering["archived_desc"] = "archived_desc";
})(_ChatChannelOrdering = exports._ChatChannelOrdering || (exports._ChatChannelOrdering = {}));
/** Ordering Enum for ChatId */
var _ChatIdOrdering;
(function (_ChatIdOrdering) {
    _ChatIdOrdering["atmTeamId_asc"] = "atmTeamId_asc";
    _ChatIdOrdering["atmTeamId_desc"] = "atmTeamId_desc";
    _ChatIdOrdering["id_asc"] = "id_asc";
    _ChatIdOrdering["id_desc"] = "id_desc";
    _ChatIdOrdering["screenName_asc"] = "screenName_asc";
    _ChatIdOrdering["screenName_desc"] = "screenName_desc";
    _ChatIdOrdering["userId_asc"] = "userId_asc";
    _ChatIdOrdering["userId_desc"] = "userId_desc";
    _ChatIdOrdering["provider_asc"] = "provider_asc";
    _ChatIdOrdering["provider_desc"] = "provider_desc";
    _ChatIdOrdering["isAtomistBot_asc"] = "isAtomistBot_asc";
    _ChatIdOrdering["isAtomistBot_desc"] = "isAtomistBot_desc";
    _ChatIdOrdering["isOwner_asc"] = "isOwner_asc";
    _ChatIdOrdering["isOwner_desc"] = "isOwner_desc";
    _ChatIdOrdering["isPrimaryOwner_asc"] = "isPrimaryOwner_asc";
    _ChatIdOrdering["isPrimaryOwner_desc"] = "isPrimaryOwner_desc";
    _ChatIdOrdering["isAdmin_asc"] = "isAdmin_asc";
    _ChatIdOrdering["isAdmin_desc"] = "isAdmin_desc";
    _ChatIdOrdering["isBot_asc"] = "isBot_asc";
    _ChatIdOrdering["isBot_desc"] = "isBot_desc";
    _ChatIdOrdering["timezoneLabel_asc"] = "timezoneLabel_asc";
    _ChatIdOrdering["timezoneLabel_desc"] = "timezoneLabel_desc";
})(_ChatIdOrdering = exports._ChatIdOrdering || (exports._ChatIdOrdering = {}));
/** Ordering Enum for Email */
var _EmailOrdering;
(function (_EmailOrdering) {
    _EmailOrdering["atmTeamId_asc"] = "atmTeamId_asc";
    _EmailOrdering["atmTeamId_desc"] = "atmTeamId_desc";
    _EmailOrdering["address_asc"] = "address_asc";
    _EmailOrdering["address_desc"] = "address_desc";
})(_EmailOrdering = exports._EmailOrdering || (exports._EmailOrdering = {}));
/** Ordering Enum for SCMId */
var _ScmIdOrdering;
(function (_ScmIdOrdering) {
    _ScmIdOrdering["atmTeamId_asc"] = "atmTeamId_asc";
    _ScmIdOrdering["atmTeamId_desc"] = "atmTeamId_desc";
    _ScmIdOrdering["login_asc"] = "login_asc";
    _ScmIdOrdering["login_desc"] = "login_desc";
    _ScmIdOrdering["name_asc"] = "name_asc";
    _ScmIdOrdering["name_desc"] = "name_desc";
    _ScmIdOrdering["avatar_asc"] = "avatar_asc";
    _ScmIdOrdering["avatar_desc"] = "avatar_desc";
})(_ScmIdOrdering = exports._ScmIdOrdering || (exports._ScmIdOrdering = {}));
/** Ordering Enum for GitHubProvider */
var _GitHubProviderOrdering;
(function (_GitHubProviderOrdering) {
    _GitHubProviderOrdering["atmTeamId_asc"] = "atmTeamId_asc";
    _GitHubProviderOrdering["atmTeamId_desc"] = "atmTeamId_desc";
    _GitHubProviderOrdering["id_asc"] = "id_asc";
    _GitHubProviderOrdering["id_desc"] = "id_desc";
    _GitHubProviderOrdering["url_asc"] = "url_asc";
    _GitHubProviderOrdering["url_desc"] = "url_desc";
    _GitHubProviderOrdering["providerId_asc"] = "providerId_asc";
    _GitHubProviderOrdering["providerId_desc"] = "providerId_desc";
    _GitHubProviderOrdering["apiUrl_asc"] = "apiUrl_asc";
    _GitHubProviderOrdering["apiUrl_desc"] = "apiUrl_desc";
    _GitHubProviderOrdering["gitUrl_asc"] = "gitUrl_asc";
    _GitHubProviderOrdering["gitUrl_desc"] = "gitUrl_desc";
    _GitHubProviderOrdering["providerType_asc"] = "providerType_asc";
    _GitHubProviderOrdering["providerType_desc"] = "providerType_desc";
    _GitHubProviderOrdering["private_asc"] = "private_asc";
    _GitHubProviderOrdering["private_desc"] = "private_desc";
})(_GitHubProviderOrdering = exports._GitHubProviderOrdering || (exports._GitHubProviderOrdering = {}));
/** Ordering Enum for Team */
var _TeamOrdering;
(function (_TeamOrdering) {
    _TeamOrdering["atmTeamId_asc"] = "atmTeamId_asc";
    _TeamOrdering["atmTeamId_desc"] = "atmTeamId_desc";
    _TeamOrdering["id_asc"] = "id_asc";
    _TeamOrdering["id_desc"] = "id_desc";
    _TeamOrdering["name_asc"] = "name_asc";
    _TeamOrdering["name_desc"] = "name_desc";
    _TeamOrdering["description_asc"] = "description_asc";
    _TeamOrdering["description_desc"] = "description_desc";
    _TeamOrdering["iconUrl_asc"] = "iconUrl_asc";
    _TeamOrdering["iconUrl_desc"] = "iconUrl_desc";
    _TeamOrdering["createdAt_asc"] = "createdAt_asc";
    _TeamOrdering["createdAt_desc"] = "createdAt_desc";
})(_TeamOrdering = exports._TeamOrdering || (exports._TeamOrdering = {}));
/** Ordering Enum for Person */
var _PersonOrdering;
(function (_PersonOrdering) {
    _PersonOrdering["atmTeamId_asc"] = "atmTeamId_asc";
    _PersonOrdering["atmTeamId_desc"] = "atmTeamId_desc";
    _PersonOrdering["id_asc"] = "id_asc";
    _PersonOrdering["id_desc"] = "id_desc";
    _PersonOrdering["forename_asc"] = "forename_asc";
    _PersonOrdering["forename_desc"] = "forename_desc";
    _PersonOrdering["surname_asc"] = "surname_asc";
    _PersonOrdering["surname_desc"] = "surname_desc";
    _PersonOrdering["name_asc"] = "name_asc";
    _PersonOrdering["name_desc"] = "name_desc";
})(_PersonOrdering = exports._PersonOrdering || (exports._PersonOrdering = {}));
/** Ordering Enum for GitHubId */
var _GitHubIdOrdering;
(function (_GitHubIdOrdering) {
    _GitHubIdOrdering["atmTeamId_asc"] = "atmTeamId_asc";
    _GitHubIdOrdering["atmTeamId_desc"] = "atmTeamId_desc";
    _GitHubIdOrdering["login_asc"] = "login_asc";
    _GitHubIdOrdering["login_desc"] = "login_desc";
    _GitHubIdOrdering["name_asc"] = "name_asc";
    _GitHubIdOrdering["name_desc"] = "name_desc";
})(_GitHubIdOrdering = exports._GitHubIdOrdering || (exports._GitHubIdOrdering = {}));
/** Ordering Enum for SCMProvider */
var _ScmProviderOrdering;
(function (_ScmProviderOrdering) {
    _ScmProviderOrdering["atmTeamId_asc"] = "atmTeamId_asc";
    _ScmProviderOrdering["atmTeamId_desc"] = "atmTeamId_desc";
    _ScmProviderOrdering["id_asc"] = "id_asc";
    _ScmProviderOrdering["id_desc"] = "id_desc";
    _ScmProviderOrdering["url_asc"] = "url_asc";
    _ScmProviderOrdering["url_desc"] = "url_desc";
    _ScmProviderOrdering["providerId_asc"] = "providerId_asc";
    _ScmProviderOrdering["providerId_desc"] = "providerId_desc";
    _ScmProviderOrdering["apiUrl_asc"] = "apiUrl_asc";
    _ScmProviderOrdering["apiUrl_desc"] = "apiUrl_desc";
    _ScmProviderOrdering["gitUrl_asc"] = "gitUrl_asc";
    _ScmProviderOrdering["gitUrl_desc"] = "gitUrl_desc";
    _ScmProviderOrdering["providerType_asc"] = "providerType_asc";
    _ScmProviderOrdering["providerType_desc"] = "providerType_desc";
    _ScmProviderOrdering["private_asc"] = "private_asc";
    _ScmProviderOrdering["private_desc"] = "private_desc";
})(_ScmProviderOrdering = exports._ScmProviderOrdering || (exports._ScmProviderOrdering = {}));
/** Ordering Enum for Org */
var _OrgOrdering;
(function (_OrgOrdering) {
    _OrgOrdering["atmTeamId_asc"] = "atmTeamId_asc";
    _OrgOrdering["atmTeamId_desc"] = "atmTeamId_desc";
    _OrgOrdering["id_asc"] = "id_asc";
    _OrgOrdering["id_desc"] = "id_desc";
    _OrgOrdering["owner_asc"] = "owner_asc";
    _OrgOrdering["owner_desc"] = "owner_desc";
    _OrgOrdering["ownerType_asc"] = "ownerType_asc";
    _OrgOrdering["ownerType_desc"] = "ownerType_desc";
})(_OrgOrdering = exports._OrgOrdering || (exports._OrgOrdering = {}));
/** Ordering Enum for GitHubOrgWebhook */
var _GitHubOrgWebhookOrdering;
(function (_GitHubOrgWebhookOrdering) {
    _GitHubOrgWebhookOrdering["atmTeamId_asc"] = "atmTeamId_asc";
    _GitHubOrgWebhookOrdering["atmTeamId_desc"] = "atmTeamId_desc";
    _GitHubOrgWebhookOrdering["id_asc"] = "id_asc";
    _GitHubOrgWebhookOrdering["id_desc"] = "id_desc";
    _GitHubOrgWebhookOrdering["url_asc"] = "url_asc";
    _GitHubOrgWebhookOrdering["url_desc"] = "url_desc";
    _GitHubOrgWebhookOrdering["webhookType_asc"] = "webhookType_asc";
    _GitHubOrgWebhookOrdering["webhookType_desc"] = "webhookType_desc";
})(_GitHubOrgWebhookOrdering = exports._GitHubOrgWebhookOrdering || (exports._GitHubOrgWebhookOrdering = {}));
/** Ordering Enum for Webhook */
var _WebhookOrdering;
(function (_WebhookOrdering) {
    _WebhookOrdering["atmTeamId_asc"] = "atmTeamId_asc";
    _WebhookOrdering["atmTeamId_desc"] = "atmTeamId_desc";
    _WebhookOrdering["id_asc"] = "id_asc";
    _WebhookOrdering["id_desc"] = "id_desc";
    _WebhookOrdering["url_asc"] = "url_asc";
    _WebhookOrdering["url_desc"] = "url_desc";
    _WebhookOrdering["webhookType_asc"] = "webhookType_asc";
    _WebhookOrdering["webhookType_desc"] = "webhookType_desc";
})(_WebhookOrdering = exports._WebhookOrdering || (exports._WebhookOrdering = {}));
/** Ordering Enum for ChatTeam */
var _ChatTeamOrdering;
(function (_ChatTeamOrdering) {
    _ChatTeamOrdering["atmTeamId_asc"] = "atmTeamId_asc";
    _ChatTeamOrdering["atmTeamId_desc"] = "atmTeamId_desc";
    _ChatTeamOrdering["id_asc"] = "id_asc";
    _ChatTeamOrdering["id_desc"] = "id_desc";
    _ChatTeamOrdering["name_asc"] = "name_asc";
    _ChatTeamOrdering["name_desc"] = "name_desc";
    _ChatTeamOrdering["provider_asc"] = "provider_asc";
    _ChatTeamOrdering["provider_desc"] = "provider_desc";
    _ChatTeamOrdering["domain_asc"] = "domain_asc";
    _ChatTeamOrdering["domain_desc"] = "domain_desc";
    _ChatTeamOrdering["messageCount_asc"] = "messageCount_asc";
    _ChatTeamOrdering["messageCount_desc"] = "messageCount_desc";
    _ChatTeamOrdering["emailDomain_asc"] = "emailDomain_asc";
    _ChatTeamOrdering["emailDomain_desc"] = "emailDomain_desc";
})(_ChatTeamOrdering = exports._ChatTeamOrdering || (exports._ChatTeamOrdering = {}));
/** Ordering Enum for ChannelLink */
var _ChannelLinkOrdering;
(function (_ChannelLinkOrdering) {
    _ChannelLinkOrdering["atmTeamId_asc"] = "atmTeamId_asc";
    _ChannelLinkOrdering["atmTeamId_desc"] = "atmTeamId_desc";
    _ChannelLinkOrdering["id_asc"] = "id_asc";
    _ChannelLinkOrdering["id_desc"] = "id_desc";
})(_ChannelLinkOrdering = exports._ChannelLinkOrdering || (exports._ChannelLinkOrdering = {}));
/** Ordering Enum for PullRequest */
var _PullRequestOrdering;
(function (_PullRequestOrdering) {
    _PullRequestOrdering["atmTeamId_asc"] = "atmTeamId_asc";
    _PullRequestOrdering["atmTeamId_desc"] = "atmTeamId_desc";
    _PullRequestOrdering["id_asc"] = "id_asc";
    _PullRequestOrdering["id_desc"] = "id_desc";
    _PullRequestOrdering["number_asc"] = "number_asc";
    _PullRequestOrdering["number_desc"] = "number_desc";
    _PullRequestOrdering["prId_asc"] = "prId_asc";
    _PullRequestOrdering["prId_desc"] = "prId_desc";
    _PullRequestOrdering["name_asc"] = "name_asc";
    _PullRequestOrdering["name_desc"] = "name_desc";
    _PullRequestOrdering["body_asc"] = "body_asc";
    _PullRequestOrdering["body_desc"] = "body_desc";
    _PullRequestOrdering["state_asc"] = "state_asc";
    _PullRequestOrdering["state_desc"] = "state_desc";
    _PullRequestOrdering["action_asc"] = "action_asc";
    _PullRequestOrdering["action_desc"] = "action_desc";
    _PullRequestOrdering["merged_asc"] = "merged_asc";
    _PullRequestOrdering["merged_desc"] = "merged_desc";
    _PullRequestOrdering["timestamp_asc"] = "timestamp_asc";
    _PullRequestOrdering["timestamp_desc"] = "timestamp_desc";
    _PullRequestOrdering["baseBranchName_asc"] = "baseBranchName_asc";
    _PullRequestOrdering["baseBranchName_desc"] = "baseBranchName_desc";
    _PullRequestOrdering["branchName_asc"] = "branchName_asc";
    _PullRequestOrdering["branchName_desc"] = "branchName_desc";
    _PullRequestOrdering["title_asc"] = "title_asc";
    _PullRequestOrdering["title_desc"] = "title_desc";
    _PullRequestOrdering["createdAt_asc"] = "createdAt_asc";
    _PullRequestOrdering["createdAt_desc"] = "createdAt_desc";
    _PullRequestOrdering["updatedAt_asc"] = "updatedAt_asc";
    _PullRequestOrdering["updatedAt_desc"] = "updatedAt_desc";
    _PullRequestOrdering["closedAt_asc"] = "closedAt_asc";
    _PullRequestOrdering["closedAt_desc"] = "closedAt_desc";
    _PullRequestOrdering["mergedAt_asc"] = "mergedAt_asc";
    _PullRequestOrdering["mergedAt_desc"] = "mergedAt_desc";
    _PullRequestOrdering["mergeStatus_asc"] = "mergeStatus_asc";
    _PullRequestOrdering["mergeStatus_desc"] = "mergeStatus_desc";
})(_PullRequestOrdering = exports._PullRequestOrdering || (exports._PullRequestOrdering = {}));
/** Ordering Enum for Commit */
var _CommitOrdering;
(function (_CommitOrdering) {
    _CommitOrdering["atmTeamId_asc"] = "atmTeamId_asc";
    _CommitOrdering["atmTeamId_desc"] = "atmTeamId_desc";
    _CommitOrdering["sha_asc"] = "sha_asc";
    _CommitOrdering["sha_desc"] = "sha_desc";
    _CommitOrdering["message_asc"] = "message_asc";
    _CommitOrdering["message_desc"] = "message_desc";
    _CommitOrdering["timestamp_asc"] = "timestamp_asc";
    _CommitOrdering["timestamp_desc"] = "timestamp_desc";
})(_CommitOrdering = exports._CommitOrdering || (exports._CommitOrdering = {}));
/** Ordering Enum for Build */
var _BuildOrdering;
(function (_BuildOrdering) {
    _BuildOrdering["atmTeamId_asc"] = "atmTeamId_asc";
    _BuildOrdering["atmTeamId_desc"] = "atmTeamId_desc";
    _BuildOrdering["id_asc"] = "id_asc";
    _BuildOrdering["id_desc"] = "id_desc";
    _BuildOrdering["buildId_asc"] = "buildId_asc";
    _BuildOrdering["buildId_desc"] = "buildId_desc";
    _BuildOrdering["number_asc"] = "number_asc";
    _BuildOrdering["number_desc"] = "number_desc";
    _BuildOrdering["name_asc"] = "name_asc";
    _BuildOrdering["name_desc"] = "name_desc";
    _BuildOrdering["status_asc"] = "status_asc";
    _BuildOrdering["status_desc"] = "status_desc";
    _BuildOrdering["buildUrl_asc"] = "buildUrl_asc";
    _BuildOrdering["buildUrl_desc"] = "buildUrl_desc";
    _BuildOrdering["compareUrl_asc"] = "compareUrl_asc";
    _BuildOrdering["compareUrl_desc"] = "compareUrl_desc";
    _BuildOrdering["trigger_asc"] = "trigger_asc";
    _BuildOrdering["trigger_desc"] = "trigger_desc";
    _BuildOrdering["provider_asc"] = "provider_asc";
    _BuildOrdering["provider_desc"] = "provider_desc";
    _BuildOrdering["pullRequestNumber_asc"] = "pullRequestNumber_asc";
    _BuildOrdering["pullRequestNumber_desc"] = "pullRequestNumber_desc";
    _BuildOrdering["startedAt_asc"] = "startedAt_asc";
    _BuildOrdering["startedAt_desc"] = "startedAt_desc";
    _BuildOrdering["finishedAt_asc"] = "finishedAt_asc";
    _BuildOrdering["finishedAt_desc"] = "finishedAt_desc";
    _BuildOrdering["timestamp_asc"] = "timestamp_asc";
    _BuildOrdering["timestamp_desc"] = "timestamp_desc";
    _BuildOrdering["workflowId_asc"] = "workflowId_asc";
    _BuildOrdering["workflowId_desc"] = "workflowId_desc";
    _BuildOrdering["jobName_asc"] = "jobName_asc";
    _BuildOrdering["jobName_desc"] = "jobName_desc";
    _BuildOrdering["jobId_asc"] = "jobId_asc";
    _BuildOrdering["jobId_desc"] = "jobId_desc";
    _BuildOrdering["data_asc"] = "data_asc";
    _BuildOrdering["data_desc"] = "data_desc";
})(_BuildOrdering = exports._BuildOrdering || (exports._BuildOrdering = {}));
/** Ordering Enum for Push */
var _PushOrdering;
(function (_PushOrdering) {
    _PushOrdering["atmTeamId_asc"] = "atmTeamId_asc";
    _PushOrdering["atmTeamId_desc"] = "atmTeamId_desc";
    _PushOrdering["id_asc"] = "id_asc";
    _PushOrdering["id_desc"] = "id_desc";
    _PushOrdering["timestamp_asc"] = "timestamp_asc";
    _PushOrdering["timestamp_desc"] = "timestamp_desc";
    _PushOrdering["branch_asc"] = "branch_asc";
    _PushOrdering["branch_desc"] = "branch_desc";
})(_PushOrdering = exports._PushOrdering || (exports._PushOrdering = {}));
/** Ordering Enum for Pipeline */
var _PipelineOrdering;
(function (_PipelineOrdering) {
    _PipelineOrdering["atmTeamId_asc"] = "atmTeamId_asc";
    _PipelineOrdering["atmTeamId_desc"] = "atmTeamId_desc";
    _PipelineOrdering["status_asc"] = "status_asc";
    _PipelineOrdering["status_desc"] = "status_desc";
    _PipelineOrdering["provider_asc"] = "provider_asc";
    _PipelineOrdering["provider_desc"] = "provider_desc";
    _PipelineOrdering["pipelineId_asc"] = "pipelineId_asc";
    _PipelineOrdering["pipelineId_desc"] = "pipelineId_desc";
    _PipelineOrdering["createdAt_asc"] = "createdAt_asc";
    _PipelineOrdering["createdAt_desc"] = "createdAt_desc";
    _PipelineOrdering["finishedAt_asc"] = "finishedAt_asc";
    _PipelineOrdering["finishedAt_desc"] = "finishedAt_desc";
})(_PipelineOrdering = exports._PipelineOrdering || (exports._PipelineOrdering = {}));
/** Ordering Enum for Stage */
var _StageOrdering;
(function (_StageOrdering) {
    _StageOrdering["atmTeamId_asc"] = "atmTeamId_asc";
    _StageOrdering["atmTeamId_desc"] = "atmTeamId_desc";
    _StageOrdering["name_asc"] = "name_asc";
    _StageOrdering["name_desc"] = "name_desc";
})(_StageOrdering = exports._StageOrdering || (exports._StageOrdering = {}));
/** Ordering Enum for Job */
var _JobOrdering;
(function (_JobOrdering) {
    _JobOrdering["atmTeamId_asc"] = "atmTeamId_asc";
    _JobOrdering["atmTeamId_desc"] = "atmTeamId_desc";
    _JobOrdering["when_asc"] = "when_asc";
    _JobOrdering["when_desc"] = "when_desc";
    _JobOrdering["manual_asc"] = "manual_asc";
    _JobOrdering["manual_desc"] = "manual_desc";
    _JobOrdering["name_asc"] = "name_asc";
    _JobOrdering["name_desc"] = "name_desc";
    _JobOrdering["jobId_asc"] = "jobId_asc";
    _JobOrdering["jobId_desc"] = "jobId_desc";
    _JobOrdering["startedAt_asc"] = "startedAt_asc";
    _JobOrdering["startedAt_desc"] = "startedAt_desc";
    _JobOrdering["finishedAt_asc"] = "finishedAt_asc";
    _JobOrdering["finishedAt_desc"] = "finishedAt_desc";
    _JobOrdering["status_asc"] = "status_asc";
    _JobOrdering["status_desc"] = "status_desc";
    _JobOrdering["runner_asc"] = "runner_asc";
    _JobOrdering["runner_desc"] = "runner_desc";
})(_JobOrdering = exports._JobOrdering || (exports._JobOrdering = {}));
var SdmGoalState;
(function (SdmGoalState) {
    SdmGoalState["success"] = "success";
    SdmGoalState["pre_approved"] = "pre_approved";
    SdmGoalState["requested"] = "requested";
    SdmGoalState["waiting_for_pre_approval"] = "waiting_for_pre_approval";
    SdmGoalState["approved"] = "approved";
    SdmGoalState["waiting_for_approval"] = "waiting_for_approval";
    SdmGoalState["failure"] = "failure";
    SdmGoalState["stopped"] = "stopped";
    SdmGoalState["planned"] = "planned";
    SdmGoalState["in_process"] = "in_process";
    SdmGoalState["skipped"] = "skipped";
    SdmGoalState["canceled"] = "canceled";
})(SdmGoalState = exports.SdmGoalState || (exports.SdmGoalState = {}));
var SdmGoalDisplayState;
(function (SdmGoalDisplayState) {
    SdmGoalDisplayState["show_current"] = "show_current";
    SdmGoalDisplayState["show_all"] = "show_all";
})(SdmGoalDisplayState = exports.SdmGoalDisplayState || (exports.SdmGoalDisplayState = {}));
/** Ordering Enum for Tag */
var _TagOrdering;
(function (_TagOrdering) {
    _TagOrdering["atmTeamId_asc"] = "atmTeamId_asc";
    _TagOrdering["atmTeamId_desc"] = "atmTeamId_desc";
    _TagOrdering["id_asc"] = "id_asc";
    _TagOrdering["id_desc"] = "id_desc";
    _TagOrdering["name_asc"] = "name_asc";
    _TagOrdering["name_desc"] = "name_desc";
    _TagOrdering["description_asc"] = "description_asc";
    _TagOrdering["description_desc"] = "description_desc";
    _TagOrdering["ref_asc"] = "ref_asc";
    _TagOrdering["ref_desc"] = "ref_desc";
    _TagOrdering["timestamp_asc"] = "timestamp_asc";
    _TagOrdering["timestamp_desc"] = "timestamp_desc";
})(_TagOrdering = exports._TagOrdering || (exports._TagOrdering = {}));
/** Ordering Enum for Release */
var _ReleaseOrdering;
(function (_ReleaseOrdering) {
    _ReleaseOrdering["atmTeamId_asc"] = "atmTeamId_asc";
    _ReleaseOrdering["atmTeamId_desc"] = "atmTeamId_desc";
    _ReleaseOrdering["id_asc"] = "id_asc";
    _ReleaseOrdering["id_desc"] = "id_desc";
    _ReleaseOrdering["name_asc"] = "name_asc";
    _ReleaseOrdering["name_desc"] = "name_desc";
    _ReleaseOrdering["timestamp_asc"] = "timestamp_asc";
    _ReleaseOrdering["timestamp_desc"] = "timestamp_desc";
})(_ReleaseOrdering = exports._ReleaseOrdering || (exports._ReleaseOrdering = {}));
/** Ordering Enum for DockerImage */
var _DockerImageOrdering;
(function (_DockerImageOrdering) {
    _DockerImageOrdering["atmTeamId_asc"] = "atmTeamId_asc";
    _DockerImageOrdering["atmTeamId_desc"] = "atmTeamId_desc";
    _DockerImageOrdering["image_asc"] = "image_asc";
    _DockerImageOrdering["image_desc"] = "image_desc";
    _DockerImageOrdering["imageName_asc"] = "imageName_asc";
    _DockerImageOrdering["imageName_desc"] = "imageName_desc";
    _DockerImageOrdering["timestamp_asc"] = "timestamp_asc";
    _DockerImageOrdering["timestamp_desc"] = "timestamp_desc";
})(_DockerImageOrdering = exports._DockerImageOrdering || (exports._DockerImageOrdering = {}));
/** Ordering Enum for K8Pod */
var _K8PodOrdering;
(function (_K8PodOrdering) {
    _K8PodOrdering["atmTeamId_asc"] = "atmTeamId_asc";
    _K8PodOrdering["atmTeamId_desc"] = "atmTeamId_desc";
    _K8PodOrdering["name_asc"] = "name_asc";
    _K8PodOrdering["name_desc"] = "name_desc";
    _K8PodOrdering["phase_asc"] = "phase_asc";
    _K8PodOrdering["phase_desc"] = "phase_desc";
    _K8PodOrdering["environment_asc"] = "environment_asc";
    _K8PodOrdering["environment_desc"] = "environment_desc";
    _K8PodOrdering["timestamp_asc"] = "timestamp_asc";
    _K8PodOrdering["timestamp_desc"] = "timestamp_desc";
    _K8PodOrdering["baseName_asc"] = "baseName_asc";
    _K8PodOrdering["baseName_desc"] = "baseName_desc";
    _K8PodOrdering["namespace_asc"] = "namespace_asc";
    _K8PodOrdering["namespace_desc"] = "namespace_desc";
    _K8PodOrdering["statusJSON_asc"] = "statusJSON_asc";
    _K8PodOrdering["statusJSON_desc"] = "statusJSON_desc";
    _K8PodOrdering["host_asc"] = "host_asc";
    _K8PodOrdering["host_desc"] = "host_desc";
    _K8PodOrdering["state_asc"] = "state_asc";
    _K8PodOrdering["state_desc"] = "state_desc";
    _K8PodOrdering["specsJSON_asc"] = "specsJSON_asc";
    _K8PodOrdering["specsJSON_desc"] = "specsJSON_desc";
    _K8PodOrdering["envJSON_asc"] = "envJSON_asc";
    _K8PodOrdering["envJSON_desc"] = "envJSON_desc";
    _K8PodOrdering["metadataJSON_asc"] = "metadataJSON_asc";
    _K8PodOrdering["metadataJSON_desc"] = "metadataJSON_desc";
    _K8PodOrdering["containersCrashLoopBackOff_asc"] = "containersCrashLoopBackOff_asc";
    _K8PodOrdering["containersCrashLoopBackOff_desc"] = "containersCrashLoopBackOff_desc";
    _K8PodOrdering["resourceVersion_asc"] = "resourceVersion_asc";
    _K8PodOrdering["resourceVersion_desc"] = "resourceVersion_desc";
})(_K8PodOrdering = exports._K8PodOrdering || (exports._K8PodOrdering = {}));
/** Ordering Enum for K8Container */
var _K8ContainerOrdering;
(function (_K8ContainerOrdering) {
    _K8ContainerOrdering["atmTeamId_asc"] = "atmTeamId_asc";
    _K8ContainerOrdering["atmTeamId_desc"] = "atmTeamId_desc";
    _K8ContainerOrdering["name_asc"] = "name_asc";
    _K8ContainerOrdering["name_desc"] = "name_desc";
    _K8ContainerOrdering["imageName_asc"] = "imageName_asc";
    _K8ContainerOrdering["imageName_desc"] = "imageName_desc";
    _K8ContainerOrdering["timestamp_asc"] = "timestamp_asc";
    _K8ContainerOrdering["timestamp_desc"] = "timestamp_desc";
    _K8ContainerOrdering["environment_asc"] = "environment_asc";
    _K8ContainerOrdering["environment_desc"] = "environment_desc";
    _K8ContainerOrdering["containerJSON_asc"] = "containerJSON_asc";
    _K8ContainerOrdering["containerJSON_desc"] = "containerJSON_desc";
    _K8ContainerOrdering["state_asc"] = "state_asc";
    _K8ContainerOrdering["state_desc"] = "state_desc";
    _K8ContainerOrdering["stateReason_asc"] = "stateReason_asc";
    _K8ContainerOrdering["stateReason_desc"] = "stateReason_desc";
    _K8ContainerOrdering["ready_asc"] = "ready_asc";
    _K8ContainerOrdering["ready_desc"] = "ready_desc";
    _K8ContainerOrdering["restartCount_asc"] = "restartCount_asc";
    _K8ContainerOrdering["restartCount_desc"] = "restartCount_desc";
    _K8ContainerOrdering["statusJSON_asc"] = "statusJSON_asc";
    _K8ContainerOrdering["statusJSON_desc"] = "statusJSON_desc";
    _K8ContainerOrdering["resourceVersion_asc"] = "resourceVersion_asc";
    _K8ContainerOrdering["resourceVersion_desc"] = "resourceVersion_desc";
    _K8ContainerOrdering["containerID_asc"] = "containerID_asc";
    _K8ContainerOrdering["containerID_desc"] = "containerID_desc";
})(_K8ContainerOrdering = exports._K8ContainerOrdering || (exports._K8ContainerOrdering = {}));
/** Ordering Enum for Workflow */
var _WorkflowOrdering;
(function (_WorkflowOrdering) {
    _WorkflowOrdering["atmTeamId_asc"] = "atmTeamId_asc";
    _WorkflowOrdering["atmTeamId_desc"] = "atmTeamId_desc";
    _WorkflowOrdering["id_asc"] = "id_asc";
    _WorkflowOrdering["id_desc"] = "id_desc";
    _WorkflowOrdering["name_asc"] = "name_asc";
    _WorkflowOrdering["name_desc"] = "name_desc";
    _WorkflowOrdering["workflowId_asc"] = "workflowId_asc";
    _WorkflowOrdering["workflowId_desc"] = "workflowId_desc";
    _WorkflowOrdering["provider_asc"] = "provider_asc";
    _WorkflowOrdering["provider_desc"] = "provider_desc";
    _WorkflowOrdering["config_asc"] = "config_asc";
    _WorkflowOrdering["config_desc"] = "config_desc";
})(_WorkflowOrdering = exports._WorkflowOrdering || (exports._WorkflowOrdering = {}));
/** Ordering Enum for Status */
var _StatusOrdering;
(function (_StatusOrdering) {
    _StatusOrdering["atmTeamId_asc"] = "atmTeamId_asc";
    _StatusOrdering["atmTeamId_desc"] = "atmTeamId_desc";
    _StatusOrdering["id_asc"] = "id_asc";
    _StatusOrdering["id_desc"] = "id_desc";
    _StatusOrdering["state_asc"] = "state_asc";
    _StatusOrdering["state_desc"] = "state_desc";
    _StatusOrdering["description_asc"] = "description_asc";
    _StatusOrdering["description_desc"] = "description_desc";
    _StatusOrdering["targetUrl_asc"] = "targetUrl_asc";
    _StatusOrdering["targetUrl_desc"] = "targetUrl_desc";
    _StatusOrdering["context_asc"] = "context_asc";
    _StatusOrdering["context_desc"] = "context_desc";
    _StatusOrdering["timestamp_asc"] = "timestamp_asc";
    _StatusOrdering["timestamp_desc"] = "timestamp_desc";
})(_StatusOrdering = exports._StatusOrdering || (exports._StatusOrdering = {}));
/** Ordering Enum for HerokuApp */
var _HerokuAppOrdering;
(function (_HerokuAppOrdering) {
    _HerokuAppOrdering["atmTeamId_asc"] = "atmTeamId_asc";
    _HerokuAppOrdering["atmTeamId_desc"] = "atmTeamId_desc";
    _HerokuAppOrdering["app_asc"] = "app_asc";
    _HerokuAppOrdering["app_desc"] = "app_desc";
    _HerokuAppOrdering["url_asc"] = "url_asc";
    _HerokuAppOrdering["url_desc"] = "url_desc";
    _HerokuAppOrdering["timestamp_asc"] = "timestamp_asc";
    _HerokuAppOrdering["timestamp_desc"] = "timestamp_desc";
    _HerokuAppOrdering["user_asc"] = "user_asc";
    _HerokuAppOrdering["user_desc"] = "user_desc";
    _HerokuAppOrdering["appId_asc"] = "appId_asc";
    _HerokuAppOrdering["appId_desc"] = "appId_desc";
    _HerokuAppOrdering["release_asc"] = "release_asc";
    _HerokuAppOrdering["release_desc"] = "release_desc";
})(_HerokuAppOrdering = exports._HerokuAppOrdering || (exports._HerokuAppOrdering = {}));
/** Ordering Enum for Application */
var _ApplicationOrdering;
(function (_ApplicationOrdering) {
    _ApplicationOrdering["atmTeamId_asc"] = "atmTeamId_asc";
    _ApplicationOrdering["atmTeamId_desc"] = "atmTeamId_desc";
    _ApplicationOrdering["id_asc"] = "id_asc";
    _ApplicationOrdering["id_desc"] = "id_desc";
    _ApplicationOrdering["state_asc"] = "state_asc";
    _ApplicationOrdering["state_desc"] = "state_desc";
    _ApplicationOrdering["host_asc"] = "host_asc";
    _ApplicationOrdering["host_desc"] = "host_desc";
    _ApplicationOrdering["timestamp_asc"] = "timestamp_asc";
    _ApplicationOrdering["timestamp_desc"] = "timestamp_desc";
    _ApplicationOrdering["domain_asc"] = "domain_asc";
    _ApplicationOrdering["domain_desc"] = "domain_desc";
    _ApplicationOrdering["data_asc"] = "data_asc";
    _ApplicationOrdering["data_desc"] = "data_desc";
})(_ApplicationOrdering = exports._ApplicationOrdering || (exports._ApplicationOrdering = {}));
/** Ordering Enum for Fingerprint */
var _FingerprintOrdering;
(function (_FingerprintOrdering) {
    _FingerprintOrdering["atmTeamId_asc"] = "atmTeamId_asc";
    _FingerprintOrdering["atmTeamId_desc"] = "atmTeamId_desc";
    _FingerprintOrdering["name_asc"] = "name_asc";
    _FingerprintOrdering["name_desc"] = "name_desc";
    _FingerprintOrdering["sha_asc"] = "sha_asc";
    _FingerprintOrdering["sha_desc"] = "sha_desc";
    _FingerprintOrdering["data_asc"] = "data_asc";
    _FingerprintOrdering["data_desc"] = "data_desc";
})(_FingerprintOrdering = exports._FingerprintOrdering || (exports._FingerprintOrdering = {}));
/** Ordering Enum for ParentImpact */
var _ParentImpactOrdering;
(function (_ParentImpactOrdering) {
    _ParentImpactOrdering["atmTeamId_asc"] = "atmTeamId_asc";
    _ParentImpactOrdering["atmTeamId_desc"] = "atmTeamId_desc";
    _ParentImpactOrdering["id_asc"] = "id_asc";
    _ParentImpactOrdering["id_desc"] = "id_desc";
    _ParentImpactOrdering["url_asc"] = "url_asc";
    _ParentImpactOrdering["url_desc"] = "url_desc";
    _ParentImpactOrdering["data_asc"] = "data_asc";
    _ParentImpactOrdering["data_desc"] = "data_desc";
})(_ParentImpactOrdering = exports._ParentImpactOrdering || (exports._ParentImpactOrdering = {}));
/** Ordering Enum for Branch */
var _BranchOrdering;
(function (_BranchOrdering) {
    _BranchOrdering["atmTeamId_asc"] = "atmTeamId_asc";
    _BranchOrdering["atmTeamId_desc"] = "atmTeamId_desc";
    _BranchOrdering["id_asc"] = "id_asc";
    _BranchOrdering["id_desc"] = "id_desc";
    _BranchOrdering["name_asc"] = "name_asc";
    _BranchOrdering["name_desc"] = "name_desc";
    _BranchOrdering["timestamp_asc"] = "timestamp_asc";
    _BranchOrdering["timestamp_desc"] = "timestamp_desc";
    _BranchOrdering["isRemote_asc"] = "isRemote_asc";
    _BranchOrdering["isRemote_desc"] = "isRemote_desc";
    _BranchOrdering["remoteRepoHtmlUrl_asc"] = "remoteRepoHtmlUrl_asc";
    _BranchOrdering["remoteRepoHtmlUrl_desc"] = "remoteRepoHtmlUrl_desc";
})(_BranchOrdering = exports._BranchOrdering || (exports._BranchOrdering = {}));
/** Ordering Enum for Review */
var _ReviewOrdering;
(function (_ReviewOrdering) {
    _ReviewOrdering["atmTeamId_asc"] = "atmTeamId_asc";
    _ReviewOrdering["atmTeamId_desc"] = "atmTeamId_desc";
    _ReviewOrdering["id_asc"] = "id_asc";
    _ReviewOrdering["id_desc"] = "id_desc";
    _ReviewOrdering["gitHubId_asc"] = "gitHubId_asc";
    _ReviewOrdering["gitHubId_desc"] = "gitHubId_desc";
    _ReviewOrdering["reviewId_asc"] = "reviewId_asc";
    _ReviewOrdering["reviewId_desc"] = "reviewId_desc";
    _ReviewOrdering["body_asc"] = "body_asc";
    _ReviewOrdering["body_desc"] = "body_desc";
    _ReviewOrdering["state_asc"] = "state_asc";
    _ReviewOrdering["state_desc"] = "state_desc";
    _ReviewOrdering["submittedAt_asc"] = "submittedAt_asc";
    _ReviewOrdering["submittedAt_desc"] = "submittedAt_desc";
    _ReviewOrdering["htmlUrl_asc"] = "htmlUrl_asc";
    _ReviewOrdering["htmlUrl_desc"] = "htmlUrl_desc";
})(_ReviewOrdering = exports._ReviewOrdering || (exports._ReviewOrdering = {}));
/** Ordering Enum for Comment */
var _CommentOrdering;
(function (_CommentOrdering) {
    _CommentOrdering["atmTeamId_asc"] = "atmTeamId_asc";
    _CommentOrdering["atmTeamId_desc"] = "atmTeamId_desc";
    _CommentOrdering["id_asc"] = "id_asc";
    _CommentOrdering["id_desc"] = "id_desc";
    _CommentOrdering["body_asc"] = "body_asc";
    _CommentOrdering["body_desc"] = "body_desc";
    _CommentOrdering["timestamp_asc"] = "timestamp_asc";
    _CommentOrdering["timestamp_desc"] = "timestamp_desc";
    _CommentOrdering["createdAt_asc"] = "createdAt_asc";
    _CommentOrdering["createdAt_desc"] = "createdAt_desc";
    _CommentOrdering["updatedAt_asc"] = "updatedAt_asc";
    _CommentOrdering["updatedAt_desc"] = "updatedAt_desc";
    _CommentOrdering["commentId_asc"] = "commentId_asc";
    _CommentOrdering["commentId_desc"] = "commentId_desc";
    _CommentOrdering["gitHubId_asc"] = "gitHubId_asc";
    _CommentOrdering["gitHubId_desc"] = "gitHubId_desc";
    _CommentOrdering["path_asc"] = "path_asc";
    _CommentOrdering["path_desc"] = "path_desc";
    _CommentOrdering["position_asc"] = "position_asc";
    _CommentOrdering["position_desc"] = "position_desc";
    _CommentOrdering["htmlUrl_asc"] = "htmlUrl_asc";
    _CommentOrdering["htmlUrl_desc"] = "htmlUrl_desc";
    _CommentOrdering["commentType_asc"] = "commentType_asc";
    _CommentOrdering["commentType_desc"] = "commentType_desc";
})(_CommentOrdering = exports._CommentOrdering || (exports._CommentOrdering = {}));
/** Ordering Enum for DeletedBranch */
var _DeletedBranchOrdering;
(function (_DeletedBranchOrdering) {
    _DeletedBranchOrdering["atmTeamId_asc"] = "atmTeamId_asc";
    _DeletedBranchOrdering["atmTeamId_desc"] = "atmTeamId_desc";
    _DeletedBranchOrdering["id_asc"] = "id_asc";
    _DeletedBranchOrdering["id_desc"] = "id_desc";
    _DeletedBranchOrdering["name_asc"] = "name_asc";
    _DeletedBranchOrdering["name_desc"] = "name_desc";
    _DeletedBranchOrdering["timestamp_asc"] = "timestamp_asc";
    _DeletedBranchOrdering["timestamp_desc"] = "timestamp_desc";
})(_DeletedBranchOrdering = exports._DeletedBranchOrdering || (exports._DeletedBranchOrdering = {}));
/** Ordering Enum for ImageLinked */
var _ImageLinkedOrdering;
(function (_ImageLinkedOrdering) {
    _ImageLinkedOrdering["atmTeamId_asc"] = "atmTeamId_asc";
    _ImageLinkedOrdering["atmTeamId_desc"] = "atmTeamId_desc";
    _ImageLinkedOrdering["timestamp_asc"] = "timestamp_asc";
    _ImageLinkedOrdering["timestamp_desc"] = "timestamp_desc";
})(_ImageLinkedOrdering = exports._ImageLinkedOrdering || (exports._ImageLinkedOrdering = {}));
/** Ordering Enum for PushImpact */
var _PushImpactOrdering;
(function (_PushImpactOrdering) {
    _PushImpactOrdering["atmTeamId_asc"] = "atmTeamId_asc";
    _PushImpactOrdering["atmTeamId_desc"] = "atmTeamId_desc";
    _PushImpactOrdering["id_asc"] = "id_asc";
    _PushImpactOrdering["id_desc"] = "id_desc";
    _PushImpactOrdering["url_asc"] = "url_asc";
    _PushImpactOrdering["url_desc"] = "url_desc";
    _PushImpactOrdering["data_asc"] = "data_asc";
    _PushImpactOrdering["data_desc"] = "data_desc";
})(_PushImpactOrdering = exports._PushImpactOrdering || (exports._PushImpactOrdering = {}));
/** Ordering Enum for PullRequestImpact */
var _PullRequestImpactOrdering;
(function (_PullRequestImpactOrdering) {
    _PullRequestImpactOrdering["atmTeamId_asc"] = "atmTeamId_asc";
    _PullRequestImpactOrdering["atmTeamId_desc"] = "atmTeamId_desc";
    _PullRequestImpactOrdering["id_asc"] = "id_asc";
    _PullRequestImpactOrdering["id_desc"] = "id_desc";
    _PullRequestImpactOrdering["url_asc"] = "url_asc";
    _PullRequestImpactOrdering["url_desc"] = "url_desc";
    _PullRequestImpactOrdering["data_asc"] = "data_asc";
    _PullRequestImpactOrdering["data_desc"] = "data_desc";
})(_PullRequestImpactOrdering = exports._PullRequestImpactOrdering || (exports._PullRequestImpactOrdering = {}));
/** Ordering Enum for UserJoinedChannel */
var _UserJoinedChannelOrdering;
(function (_UserJoinedChannelOrdering) {
    _UserJoinedChannelOrdering["atmTeamId_asc"] = "atmTeamId_asc";
    _UserJoinedChannelOrdering["atmTeamId_desc"] = "atmTeamId_desc";
    _UserJoinedChannelOrdering["id_asc"] = "id_asc";
    _UserJoinedChannelOrdering["id_desc"] = "id_desc";
})(_UserJoinedChannelOrdering = exports._UserJoinedChannelOrdering || (exports._UserJoinedChannelOrdering = {}));
/** asc or desc ordering. Must be used with orderBy */
var _Ordering;
(function (_Ordering) {
    _Ordering["desc"] = "desc";
    _Ordering["asc"] = "asc";
})(_Ordering = exports._Ordering || (exports._Ordering = {}));
var SdmDeployState;
(function (SdmDeployState) {
    SdmDeployState["requested"] = "requested";
    SdmDeployState["disabled"] = "disabled";
})(SdmDeployState = exports.SdmDeployState || (exports.SdmDeployState = {}));
var CommitIssueRelationshipType;
(function (CommitIssueRelationshipType) {
    CommitIssueRelationshipType["references"] = "references";
    CommitIssueRelationshipType["fixes"] = "fixes";
})(CommitIssueRelationshipType = exports.CommitIssueRelationshipType || (exports.CommitIssueRelationshipType = {}));
// ====================================================
// END: Typescript template
// ====================================================
//# sourceMappingURL=types.js.map