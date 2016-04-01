exports.level = {
	"goalTreeString": "{\"branches\":{\"master\":{\"target\":\"C5\",\"id\":\"master\",\"remoteTrackingBranchID\":null},\"develop\":{\"target\":\"C4\",\"id\":\"develop\",\"remoteTrackingBranchID\":null},\"releaseV2\":{\"target\":\"C4\",\"id\":\"releaseV2\",\"remoteTrackingBranchID\":null}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"},\"C2\":{\"parents\":[\"C1\"],\"id\":\"C2\"},\"C3\":{\"parents\":[\"C1\"],\"id\":\"C3\"},\"C4\":{\"parents\":[\"C2\"],\"id\":\"C4\"},\"C5\":{\"parents\":[\"C3\",\"C4\"],\"id\":\"C5\"}},\"tags\":{\"v0\":{\"target\":\"C1\",\"id\":\"v0\"},\"v1\":{\"target\":\"C3\",\"id\":\"v1\"},\"v2\":{\"target\":\"C5\",\"id\":\"v2\"}},\"HEAD\":{\"target\":\"develop\",\"id\":\"HEAD\"}}",
	"solutionCommand": "git checkout -b releaseV2;git commit;git checkout master;git merge releaseV2;git tag v2;git checkout develop;git merge releaseV2",
	"startTree": "{\"branches\":{\"master\":{\"target\":\"C3\",\"id\":\"master\",\"remoteTrackingBranchID\":null},\"develop\":{\"target\":\"C2\",\"id\":\"develop\",\"remoteTrackingBranchID\":null}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"},\"C2\":{\"parents\":[\"C1\"],\"id\":\"C2\"},\"C3\":{\"parents\":[\"C1\"],\"id\":\"C3\"}},\"tags\":{\"v0\":{\"target\":\"C1\",\"id\":\"v0\"},\"v1\":{\"target\":\"C3\",\"id\":\"v1\"}},\"HEAD\":{\"target\":\"develop\",\"id\":\"HEAD\"}}",
	"hint": {
		"en_US": "hint release1"
	},
	"name": {
		"en_US": "release1"
	},
	"startDialog": {
		"en_US": {
			"childViews": [
				{
					"type": "ModalAlert",
					"options": {
						"markdowns": [
							"## Release Workflow 1",
							"",
							"This tutorial shows how to start and finish a release.",
							"",
							""
						]
					}
				},
				{
					"type": "GitDemonstrationView",
					"options": {
						"beforeMarkdowns": [
							"## Release Workflow 1",
							"",
							"A new release is represented by a release branch. This branch can be used to let test the customer. If there are bugs, fix them on this release branch.",
							"",
							"Do not add a feature to a release branch but do only big fixes!"
						],
						"afterMarkdowns": [
							"... now we started a release, did some bug fix and finished the release by merging into master and develop.",
							"",
							"It is important to tag the master merge commit with the new version!"
						],
						"command": "git checkout -b releaseV2;\ngit commit;\ngit checkout master;\ngit merge releaseV2;\ngit tag v2;\ngit checkout develop;\ngit merge releaseV2;",
						"beforeCommand": "git checkout -b develop;\ngit commit;\ngit checkout master;\ngit tag v0;\ngit commit;\ngit tag v1;\ngit checkout develop;"
					}
				},
				{
					"type": "ModalAlert",
					"options": {
						"markdowns": [
							"## Your task",
							"",
							"Start and finish a new release from the current develop branch state. ",
							"",
							"Also do one bug fix on the new release.",
							"",
							""
						]
					}
				}
			]
		}
	}
};