exports.level = {
	"goalTreeString": "{\"branches\":{\"master\":{\"target\":\"C9\",\"id\":\"master\",\"remoteTrackingBranchID\":null},\"develop\":{\"target\":\"C10\",\"id\":\"develop\",\"remoteTrackingBranchID\":null},\"feat1v2\":{\"target\":\"C2\",\"id\":\"feat1v2\",\"remoteTrackingBranchID\":null},\"feat2v2\":{\"target\":\"C3\",\"id\":\"feat2v2\",\"remoteTrackingBranchID\":null},\"releaseV2\":{\"target\":\"C8\",\"id\":\"releaseV2\",\"remoteTrackingBranchID\":null},\"feat1v3\":{\"target\":\"C7\",\"id\":\"feat1v3\",\"remoteTrackingBranchID\":null}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"},\"C2\":{\"parents\":[\"C1\"],\"id\":\"C2\"},\"C3\":{\"parents\":[\"C1\"],\"id\":\"C3\"},\"C4\":{\"parents\":[\"C2\",\"C3\"],\"id\":\"C4\"},\"C5\":{\"parents\":[\"C1\"],\"id\":\"C5\"},\"C6\":{\"parents\":[\"C4\"],\"id\":\"C6\"},\"C7\":{\"parents\":[\"C6\"],\"id\":\"C7\"},\"C8\":{\"parents\":[\"C4\"],\"id\":\"C8\"},\"C9\":{\"parents\":[\"C5\",\"C8\"],\"id\":\"C9\"},\"C10\":{\"parents\":[\"C7\",\"C8\"],\"id\":\"C10\"}},\"tags\":{\"v0\":{\"target\":\"C1\",\"id\":\"v0\"},\"v1\":{\"target\":\"C5\",\"id\":\"v1\"},\"v2\":{\"target\":\"C9\",\"id\":\"v2\"}},\"HEAD\":{\"target\":\"develop\",\"id\":\"HEAD\"}}",
	"solutionCommand": "git checkout -b releaseV2;git checkout -b feat1v3;git commit;git commit;git checkout releaseV2;git commit;git checkout master;git merge releaseV2;git tag v2;git checkout develop;git merge feat1v3;git merge releaseV2",
	"startTree": "{\"branches\":{\"master\":{\"target\":\"C5\",\"id\":\"master\",\"remoteTrackingBranchID\":null},\"develop\":{\"target\":\"C4\",\"id\":\"develop\",\"remoteTrackingBranchID\":null},\"feat1v2\":{\"target\":\"C2\",\"id\":\"feat1v2\",\"remoteTrackingBranchID\":null},\"feat2v2\":{\"target\":\"C3\",\"id\":\"feat2v2\",\"remoteTrackingBranchID\":null}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"},\"C2\":{\"parents\":[\"C1\"],\"id\":\"C2\"},\"C3\":{\"parents\":[\"C1\"],\"id\":\"C3\"},\"C4\":{\"parents\":[\"C2\",\"C3\"],\"id\":\"C4\"},\"C5\":{\"parents\":[\"C1\"],\"id\":\"C5\"}},\"tags\":{\"v0\":{\"target\":\"C1\",\"id\":\"v0\"},\"v1\":{\"target\":\"C5\",\"id\":\"v1\"}},\"HEAD\":{\"target\":\"develop\",\"id\":\"HEAD\"}}",
	"hint": {
		"en_US": "release2"
	},
	"name": {
		"en_US": "release2"
	},
	"startDialog": {
		"en_US": {
			"childViews": [
				{
					"type": "ModalAlert",
					"options": {
						"markdowns": [
							"## Release workflow 2",
							"",
							"This tutorial shows how the release workflow works with starting features for a new release parallel to prepare the current release."
						]
					}
				},
				{
					"type": "GitDemonstrationView",
					"options": {
						"beforeMarkdowns": [
							"## Release workflow 2 ",
							"",
							"We start a release with checking out a new release branch from the current develop branch state. From this time every new feature (branch) will be in a new release.",
							"",
							"Bugs should be fixed in the release branch. But do not implement features there!"
						],
						"afterMarkdowns": [
							".. now we have finished a new release and developed a new feature parallel.",
							"",
							"",
							""
						],
						"command": "git checkout -b releaseV2;\ngit checkout -b feat1v3;\ngit commit;\ngit checkout develop;\ngit merge feat1v3;\ngit checkout releaseV2;\ngit commit;\ngit checkout master;\ngit merge releaseV2;\ngit tag v2;\ngit checkout develop;\ngit merge releaseV2;",
						"beforeCommand": "git tag v0;\ngit checkout -b develop;\ngit commit;\ngit checkout master;\ngit commit;\ngit tag v1;\ngit checkout develop;\ngit merge feat1v2;\ngit merge feat2v2;"
					}
				}
			]
		}
	}
};